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
    print('HELLLLOOOO')
    form = PlaylistForm()
    # print(request.cookies['csrf_token'])
    print('YOOO', request)

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        print(current_user.id)
        new_playlist = Playlist(
            name=form.data['name'],
            public=form.data['public'],
            description=form.data['description']
        )
        db.session.add(new_playlist)
        db.session.commit()
        return new_playlist.to_dict()
    return {"errors": form.errors}
