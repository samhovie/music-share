from flask_sqlalchemy import SQLAlchemy

from .db import db

class Song(db.Model):
    __tablename__ = "songs"
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(255), nullable = False)
    # artist_name = db.Column(db.String(255), nullable = False)
    artist_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)
    # album_id = db.Column(db.Integer, nullable = False)
    # album_name = db.Column(db.String(100), nullable = False)
    mp3_file = db.Column(db.String(255), nullable = False)
    genre = db.Column(db.String(255), nullable = False)
    # song_position = db.Column(db.String(100), nullable = False)
    created_at =db.Column(db.DateTime, nullable = False)
    updated_at = db.Column(db.DateTime, nullable = False)

    # user = db.relationship('Users', back_populates = 'songs', cascade='all, delete-orphan')
    user = db.relationship('User', back_populates = 'songs')
    comments = db.relationship('Comment', back_populates = 'song')
