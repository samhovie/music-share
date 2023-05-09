from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Playlist
from app.forms import PlaylistForm
from datetime import date
from app.models import db
import os
from flask import redirect, request

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

# @songs_routes.route('/<int:id>', methods=['DELETE'])
# def delete_song(id):
#     # print('HELLLLLOOOOOO')
#     song = Song.query.get(id)
#     print(song)
#     if song.artist_id != current_user.id:
#         return {"errors": 'nacho song'}
#     else:
#         db.session.delete(song)
#         db.session.commit()
#         return {'success': 'good job'}


# @songs_routes.route('/<int:id>')
# def get_song(id):
#     song = Song.query.get(id)
#     return song.to_dict()
