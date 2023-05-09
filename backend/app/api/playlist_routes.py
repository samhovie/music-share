from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Playlist
from app.forms import PlaylistForm
from datetime import date
from app.models import db
from flask import redirect, request
playlist_routes = Blueprint('playlists', __name__, url_prefix="/api/playlists")


@playlist_routes.route('/')
def get_all_playlists():
    playlists = Playlist.query.all()
    return {"playlists": [playlist.to_dict() for playlist in playlists]}
