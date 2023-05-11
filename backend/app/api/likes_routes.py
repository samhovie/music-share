from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import song_like
# from app.forms import SongForm
# from datetime import date
from app.models import db, User, Song
from flask import redirect, request
import os


likes_routes = Blueprint('likes', __name__, url_prefix="/api/likes")

# get all likes for a specific song
@likes_routes.route('/<int:songId>')
def get_all_song_likes(songId):
    attempt = db.session.query(song_like).filter(song_like.c.song_id == songId).all()
    userIds = [a[0] for a in attempt]
    num_of_song_likes = len(userIds)
    return {'likes': num_of_song_likes}

# get all of a user's liked songs
# def get_all_user_liked_songs():

# add a like to a song
@likes_routes.route('/<int:songId>', methods = ['POST'])
def add_like_to_song(songId):
    print("CURRENT USER", current_user.id)
    # # currentUser's id -> user instance
    current_user_id = current_user.id
    user = User.query.get(current_user_id)
    # songId -> song instance
    song = Song.query.get(current_user_id)
    # userinstance.append(songinstance)
    print("userrrrrrrrrr", user)
    print("songggggggggg", song)
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
