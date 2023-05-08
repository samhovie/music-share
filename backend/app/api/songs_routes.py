from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Song
from app.forms import SongForm
from datetime import date
from app.models import db
from flask import redirect, request
songs_routes = Blueprint('songs', __name__, url_prefix="/api/songs")

# querying for all songs in the database


@songs_routes.route('/')
def get_all_songs():
    songs = Song.query.all()
    return {"songs": [song.to_dict() for song in songs]}


# @songs_routes.route('/new')
# def get_song_form():
#     form = SongForm()
#     return form


@songs_routes.route('/new', methods=['POST'])
def post_songs():
    form = SongForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    # if request.method == "GET":
    #     return form
    if form.validate_on_submit():
        # print(form.data['songs'])
        new_song = Song(
            name=form.data['name'],
            artist_name=form.data['artist_name'],
            mp3_file=form.data['mp3_file'],
            genre=form.data['genre'],
            artist_id=form.data['user_id'],
            created_at=date.today(),
            updated_at=date.today()
        )
        print(new_song)
        db.session.add(new_song)
        db.session.commit()
        return new_song.to_dict()
    return {"errors": form.errors}
