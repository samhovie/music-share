from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Playlist
from app.forms import PlaylistForm
from datetime import date
from app.models import db
import os
from flask import redirect, request
# added in thunk branch
from sqlalchemy import insert
from app.models import Song, playlist_songs
# end

playlist_routes = Blueprint('playlists', __name__, url_prefix="/api/playlists")


@playlist_routes.route('/')
def get_all_playlists():
    print('YOOO', request)
    playlists = Playlist.query.all()
    return {"playlists": [playlist.to_dict() for playlist in playlists]}


@playlist_routes.route('/new', methods=['POST'])
def create_playlist():
    # print('HELLLLOOOO')
    form = PlaylistForm()
    # print(request.cookies['csrf_token'])
    # print('YOOO', request)

    form['csrf_token'].data = request.cookies['csrf_token']
    print(form.data)
    if form.validate_on_submit():
        new_playlist = Playlist(
            name=form.data['name'],
            public=form.data['is_public'],
            description=form.data['description'],
            user_id=current_user.id,
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

        playlist.name = form.data['name']
        playlist.is_public = form.data['is_public']
        playlist.description = form.data['description']
        playlist.user_id = current_user.id
        playlist.created_at = date.today()
        playlist.updated_at = date.today()

        db.session.commit()

        return playlist.to_dict()

    return {"errors": form.errors}


@playlist_routes.route('/<int:id>', methods=['DELETE'])
def delete_playlist(id):
    # print('HELLLLLOOOOOO')
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
        playlist_dict = playlist.to_dict()
        playlist_dict['songs'] = [song.to_dict() for song in playlist.song]
        return playlist.to_dict()
    else:
        return {"errors": "playlist not found"}


@playlist_routes.route('/<int:playlist_id>/songs/<int:song_id>', methods=['POST'])
def add_song_to_playlist(playlist_id, song_id):
    # Ensure the playlist and song exists
    playlist = Playlist.query.get(playlist_id)
    song = Song.query.get(song_id)

    if not playlist or not song:
        return {"error": "Playlist or Song not found"}, 404

    # Add the song to the playlist
    ins = playlist_songs.insert().values(
        playlist_id=playlist_id, song_id=song_id)
    # ins = insert(playlist_songs).values(
    #     playlist_id=playlist_id, song_id=song_id)
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
