from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func
from .db import db, environment, SCHEMA, add_prefix_for_prod
from .join_tables import playlist_songs


class Playlist(db.Model):

    __tablename__ = 'playlists'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    public = db.Column(db.Boolean, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('users.id')), nullable=False)
    # song_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('songs.id')), nullable = False)
    description = db.Column(db.String(255))
    created_at = db.Column(db.Date, nullable=False)
    updated_at = db.Column(db.Date, nullable=False)
    # created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    # updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())

    song = db.relationship(
        'Song', secondary=playlist_songs, back_populates='playlists')
    user = db.relationship('User', back_populates='playlists')
    # song = db.relationship('Song', back_populates='playlists')

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "public": self.public,
            "description": self.description,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "user": {
                "username": self.user.username,
                "id": self.user.id
            }
        }
