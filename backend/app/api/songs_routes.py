from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Song

songs_routes = Blueprint('songs', __name__, url_prefix="/api/songs")

#querying for all songs in the database
@songs_routes.route('/')
def get_all_songs():
    songs = Song.query.all()
    return {"songs": [ song.to_dict() for song in songs]}
