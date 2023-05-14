from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Song, User
from app.forms import SongForm
from datetime import date
from app.models import db
from flask import redirect, request
from .likes_routes import get_all_specific_song_likes, get_all_song_likes
# from .user_routes import user
from app.aws import (
    upload_file_to_s3, get_unique_filename, remove_file_from_s3
    )

songs_routes = Blueprint('songs', __name__, url_prefix="/api/songs")

@songs_routes.route('/')
def get_all_songs():
    songs = Song.query.all()
    print('SOOONGSPYTHON')
    res = []
    for song in songs:
        song = song.to_dict()
        song['likes'] = get_all_specific_song_likes(song['id'])['likes']
        song['user_id'] = get_all_specific_song_likes(song['id'])['user_id']
        print('SSOOOONG', song)
        res.append(song)

    return {"songs": [song for song in res]}


@songs_routes.route('/new', methods=['POST'])
def post_songs():
    print("TEST 3333333333333")
    form = SongForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    # if request.method == "GET":
    #     return form
    # print(form.data)
    # print('request', request.files)
    if form.validate_on_submit():
        # print("TEST 1", form.data['songs'])
        if "mp3_file" not in request.files:
            return {"errors": "song file required"}, 400
        image = request.files["mp3_file"]
        # print("TEST 2", image)
        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)
        # upload = ''

        # with open(image) as file:
        #     upload = upload_file_to_s3(file)

        print("REQUEST.FILES", request.files)
        # print(request.files['name'])
        if "url" not in upload:
            print("UPLOAD[ERRORS]", upload['errors'])
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
            # return render_template("post_form.html", form=form, errors=[upload])
            return upload, 400
        url = upload["url"]



        new_song = Song(
            name=form.data['name'],
            artist_name=form.data['artist_name'],
            mp3_file=url,
            genre=form.data['genre'],
            artist_id=current_user.id,
            created_at=date.today(),
            updated_at=date.today()
        )

        db.session.add(new_song)
        db.session.commit()
        return new_song.to_dict()

    return {"errors": form.errors}

#old PUT route
# @songs_routes.route('/<int:id>', methods=["PUT"])
# def update_song(id):
#     form = SongForm()
#     form['csrf_token'].data = request.cookies['csrf_token']

#     if form.validate_on_submit():
#         song = Song.query.get(id)

#         if not song:
#             return {"errors": "song doesn't exist"}

#         elif song.artist_id != current_user.id:
#             return {"errors": "nacho song"}

#         song.name = form.data['name']
#         song.artist_name = form.data['artist_name']
#         song.mp3_file = form.data['mp3_file']
#         song.genre = form.data['genre']
#         song.artist_id = current_user.id
#         song.updated_at = date.today()

#         db.session.commit()

#         return song.to_dict()

#     return {"errors": form.errors}

@songs_routes.route('/<int:id>', methods=["PUT"])
def update_song(id):
    form = SongForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        if "mp3_file" not in request.files:
            return {"errors": "song file required"}, 400
        image = request.files["mp3_file"]
        print(image)
        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)
        # print(request.files['name'])
        if "url" not in upload:
            print(upload['errors'])
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
            # return render_template("post_form.html", form=form, errors=[upload])
            return upload, 400
        url = upload["url"]

        song = Song.query.get(id)

        if not song:
            return {"errors": "song doesn't exist"}

        elif song.artist_id != current_user.id:
            return {"errors": "nacho song"}

        if song.mp3_file:
            remove_file_from_s3(song.mp3_file)

        song.name = form.data['name']
        song.artist_name = form.data['artist_name']
        song.mp3_file = url
        song.genre = form.data['genre']
        song.artist_id = current_user.id
        song.updated_at = date.today()

        db.session.commit()

        return song.to_dict()

    return {"errors": form.errors}


@songs_routes.route('/<int:id>', methods=['DELETE'])
def delete_song(id):
    song = Song.query.get(id)
    print(song)
    if song.artist_id != current_user.id:
        return {"errors": 'nacho song'}

    if song.mp3_file:
        remove_file_from_s3(song.mp3_file)

    db.session.delete(song)
    db.session.commit()
    return {'success': 'good job'}


@songs_routes.route('/<int:id>')
def get_song(id):
    song = Song.query.get(id)
    artist = User.query.get(song.artist_id)
    song = song.to_dict()
    artist = artist.to_dict()
    song['artist'] = artist
    # print('song in songs routes', song)

    return song
