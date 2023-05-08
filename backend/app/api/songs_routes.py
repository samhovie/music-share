from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Song
from app.forms import SongForm
from datetime import date
from app.models import db
from flask import redirect
songs_routes = Blueprint('songs', __name__, url_prefix="/api/songs")

#querying for all songs in the database
@songs_routes.route('/')
def get_all_songs():
    songs = Song.query.all()
    return {"songs": [ song.to_dict() for song in songs]}

@songs_routes.route('/new')
def get_song_form():
    form = SongForm()

@songs_routes.route('/new', methods =['GET', 'POST'])
def post_songs():
    form = SongForm()
    if form.validate_on_submit():
        print(form.data['songs'])
        new_song = Song(
            name = form.data['name'],
            artist_name = form.data['artist_name'],
            mp3_file = form.data['mp3_file'],
            genre = form.data['genre'],
            created_at = date.today(),
            updated_at = date.today()
        )
        print(new_song)
        db.session.add(new_song)
        db.session.commit()
        return redirect('/')
