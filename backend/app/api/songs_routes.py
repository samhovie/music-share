from flask import Blueprint, jsonify
from flask_login import login_required, current_user
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

@songs_routes.route('/new', methods=['POST'])
def post_songs():
    form = SongForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    # if request.method == "GET":
    #     return form
    if form.validate_on_submit():
        # print(form.data['songs'])
        print(current_user.id)
        new_song = Song(
            name=form.data['name'],
            artist_name=form.data['artist_name'],
            mp3_file=form.data['mp3_file'],
            genre=form.data['genre'],
            artist_id=current_user.id,
            created_at=date.today(),
            updated_at=date.today()
        )
        print(new_song)
        db.session.add(new_song)
        db.session.commit()
        return new_song.to_dict()
    return {"errors": form.errors}



@songs_routes.route('/<int:id>', methods=['DELETE'])
def delete_song(id):
    # print('HELLLLLOOOOOO')
    song = Song.query.get(id)
    print (song)
    if song.artist_id != current_user.id:
        return {"errors": 'nacho song'}
    else:
        db.session.delete(song)
        db.session.commit()
        return {'success': 'good job'}


@songs_routes.route('/<int:id>')
def get_song(id):
    song = Song.query.get(id)
    return song.to_dict()
