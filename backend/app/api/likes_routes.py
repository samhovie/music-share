from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import song_like
# from app.forms import SongForm
# from datetime import date
from app.models import db, User, Song
from flask import redirect, request
from sqlalchemy.orm import sessionmaker
import os

Session = sessionmaker()
session = Session()

likes_routes = Blueprint('likes', __name__, url_prefix="/api/likes")

# get all likes for a specific song
@likes_routes.route('/<int:songId>')
def get_all_song_likes(songId):
    # num_of_song_likes = song_like.query.get('song_id' == songId).all()
    attempt = session.query(song_like).filter(song_like.c.song_id == songId).all()
    dic = [a.to_dict() for a in attempt]
    print("ATTEMPTTTTTTTTTTTT", dic)

    return attempt

# get all of a user's liked songs
# def get_all_user_liked_songs():

# add a like to a song
@likes_routes.route('/<int:songId>', methods = ['POST'])
def add_like_to_song():
    # currentUser's id -> user instance
    current_user_id = current_user.id
    user = User.query.get(id)
    # songId -> song instance
    song = Song.query.get(id)
    # userinstance.append(songinstance)
    user.user_like.append(song)
    db.session.commit()
    return 'liked'

# delete a like to a song
@likes_routes.route('/<int:songId>', methods = ['DELETE'])
def remove_like_from_song():
    current_user_id = current_user.id
    user = User.query.get(id)
    # songId -> song instance
    song = Song.query.get(id)
    # userinstance.append(songinstance)
    print(user.user_like)
    user.user_like.remove(song)

    return
