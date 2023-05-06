from flask_sqlalchemy import SQLAlchemy

from .db import db, environment, SCHEMA

class Comment(db.Model):
    __tablename__ ='comments'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)
    song_id = db.Column(db.Integer, db.ForeignKey('songs.id'), nullable = False)
    text = db.Column(db.String(255))
    created_at =db.Column(db.DateTime, nullable = False)
    updated_at = db.Column(db.DateTime, nullable = False)

    user = db.relationship('User', back_populates = 'comments')
    song = db.relationship('Song', back_populates = 'comments')
