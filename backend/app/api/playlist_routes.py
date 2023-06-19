from flask_wtf.csrf import generate_csrf
from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Playlist
from app.forms import PlaylistForm
from datetime import date
from app.models import db
import os
from flask import redirect, request
from sqlalchemy import insert
from app.models import Song, playlist_songs
from app.aws import (
    upload_file_to_s3, get_unique_filename
)

playlist_routes = Blueprint('playlists', __name__, url_prefix="/api/playlists")


@playlist_routes.route('/')
def get_all_playlists():
    print('YOOOOOOOOOOOOO', request)
    playlists = Playlist.query.all()
    return {"playlists": [playlist.to_dict() for playlist in playlists]}


@playlist_routes.route('/new', methods=['POST'])
def create_playlist():
    form = PlaylistForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    print(form.data)
    if form.validate_on_submit():
        preview_img_file = request.files["preview_img"]
        preview_img_file.filename = get_unique_filename(
            preview_img_file.filename)
        preview_img_upload = upload_file_to_s3(preview_img_file)

        if "url" not in preview_img_upload:
            return preview_img_upload, 400

        preview_img_url = preview_img_upload["url"]
        new_playlist = Playlist(
            name=form.data['name'],
            public=form.data['is_public'],
            description=form.data['description'],
            user_id=current_user.id,
            preview_img=preview_img_url,
            created_at=date.today(),
            updated_at=date.today()
        )
        db.session.add(new_playlist)
        db.session.commit()
        return new_playlist.to_dict()
    return {"errors": form.errors}


@playlist_routes.route('/<int:id>', methods=["PUT"])
def update_playlist(id):
    form = PlaylistForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        playlist = Playlist.query.get(id)

        if not playlist:
            return {"errors": "playlist doesn't exist"}

        elif playlist.user_id != current_user.id:
            return {"errors": "nacho playlist"}


        print('FOOOORRMM', form.data)
        print('pllaaaaylist', playlist.to_dict())
        # print('REQUEST', request.files.keys)
        # preview_img_file = request.files["preview_img"]
        # preview_img_file.filename = get_unique_filename(
        #     preview_img_file.filename)
        # preview_img_upload = upload_file_to_s3(preview_img_file)

        # if "url" not in preview_img_upload:
        #     return preview_img_upload, 400

        # preview_img_url = preview_img_upload["url"]

        playlist.name = form.data['name']
        playlist.is_public = form.data['is_public']
        playlist.description = form.data['description']
        playlist.user_id = current_user.id
        # playlist.preview_img = form.data['preview_img']
        # if 'preview_img' in form.data:
        #     playlist.preview_img = form.data['preview_img']
        # else:
        #     playlist.preview_img = None
        # playlist.preview_img = form.data['preview_img']
        playlist.updated_at = date.today()

        db.session.add(playlist)
        db.session.commit()

        print('PLAAAYLIST AFTER COMMIT', playlist.to_dict())
        return playlist.to_dict()

    return {"errors": form.errors}


@playlist_routes.route('/<int:id>', methods=['DELETE'])
def delete_playlist(id):
    playlist = Playlist.query.get(id)
    print(playlist)
    if playlist.user_id != current_user.id:
        return {"errors": 'nacho playlist'}
    else:
        db.session.delete(playlist)
        db.session.commit()
        return {'success': 'good job'}


# @playlist_routes.route('/<int:id>')
# def get_playlist(id):
#     playlist = Playlist.query.get(id)
#     if not playlist:
#         return {"errors": "not found"}
#     return playlist.to_dict()
# added in thunk branch:

@playlist_routes.route('/<int:id>', methods=['GET'])
def get_playlist(id):
    playlist = Playlist.query.get(id)
    if playlist:
        return playlist.to_dict()
    else:
        return {"errors": "playlist not found"}


@playlist_routes.route('/<int:playlist_id>/songs/<int:song_id>', methods=['POST'])
def add_song_to_playlist(playlist_id, song_id):
    playlist = Playlist.query.get(playlist_id)
    song = Song.query.get(song_id)

    if not playlist or not song:
        return {"error": "Playlist or Song not found"}, 404

    # Add the song to the playlist
    ins = playlist_songs.insert().values(
        playlist_id=playlist_id, song_id=song_id)
    # ins = insert(playlist_songs).values(
    #     playlist_id=playlist_id, song_id=song_id)
    # playlist.append(song)
    db.session.execute(ins)
    db.session.commit()

    return {"success": "Song added to the playlist"}

# added for current user playlists


@playlist_routes.route('/current')
@login_required
def get_current_user_playlists():
    playlists = Playlist.query.filter_by(user_id=current_user.id).all()
    print('user', playlists)
    return {"playlists": [playlist.to_dict() for playlist in playlists]}
