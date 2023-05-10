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

# added in thunk branch:


@playlist_routes.route('/<int:playlist_id>/songs/<int:song_id>', methods=['POST'])
def add_song_to_playlist(playlist_id, song_id):
    # Ensure the playlist and song exists
    playlist = Playlist.query.get(playlist_id)
    song = Song.query.get(song_id)

    if not playlist or not song:
        return {"error": "Playlist or Song not found"}, 404

    # Add the song to the playlist
    insert = insert(playlist_songs).values(
        playlist_id=playlist_id, song_id=song_id)
    db.session.execute(insert)
    db.session.commit()

    return {"success": "Song added to the playlist"}


@playlist_routes.route('/<int:id>', methods=['GET'])
def get_playlist(id):
    playlist = Playlist.query.get(id)
    if playlist:
        return playlist.to_dict()
    else:
        return {"errors": "playlist not found"}
