from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import song_like
# from app.forms import SongForm
# from datetime import date
from app.models import db, User, Song
from flask import redirect, request
# from .songs_routes import get_song
import json
import os


likes_routes = Blueprint('likes', __name__, url_prefix="/api/likes")

@likes_routes.route('/')
def get_all_song_likes():
    all_song_likes = db.session.query(song_like).all()
    print(all_song_likes)
    return all_song_likes



# get all likes for a specific song
@likes_routes.route('/<int:songId>')
def get_all_specific_song_likes(songId):
    all_song_likes = db.session.query(song_like).filter(song_like.c.song_id == songId).all()
    userIds = [a[0] for a in all_song_likes]
    num_of_song_likes = len(userIds)
    return {'likes': num_of_song_likes,
            'user_id': userIds
            }



# get all of a user's liked songs
@likes_routes.route('/user')
def get_all_user_liked_songs():
    current_user_id = current_user.id
    # songQuery = Song.query.get(id)
    # song = songQuery.to_dict()
    all_user_likes = db.session.query(song_like).filter(song_like.c.user_id == current_user_id).all()
    print("all_user_likessssssssssssssss", all_user_likes)
    songIds = [a[1] for a in all_user_likes]
    print("songIdssssssssssssssssssssss", songIds)
    # songs = [get_song(a) for a in songIds]
    songs = [Song.query.get(a).to_dict() for a in songIds]
    # print("songsssssssssssssssssssssssssss", songs)
    # return json.dumps(songs)
    return { 'userSongs': songs }

# add a like to a song
@likes_routes.route('/<int:songId>', methods = ['POST'])
def add_like_to_song(songId):
    print("CURRENT USER", current_user.id)
    # # currentUser's id -> user instance
    current_user_id = current_user.id
    user = User.query.get(current_user_id)
    # songId -> song instance
    song = Song.query.get(songId)
    # userinstance.append(songinstance)

    user.user_like.append(song)

    db.session.add(user)
    db.session.commit()
    return {'message': 'success!'}



# delete a like to a song
@likes_routes.route('/<int:songId>', methods = ['DELETE'])
def remove_like_from_song(songId):
    current_user_id = current_user.id

    user = User.query.get(current_user_id)
    song = Song.query.get(songId)

    song.liked_song.remove(user)

    db.session.commit()

    return {'message': 'deleted!'}
