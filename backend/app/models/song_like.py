from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func

from .db import db, environment, SCHEMA, add_prefix_for_prod

class Song_Like(db.Model):
    __tablename__ ='song_likes'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable = False)
    song_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('songs.id')), nullable = False)
    # created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    # updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())
    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "song_id": self.song_id,
        }

    user = db.relationship('User', back_populates = 'song_likes')
    song = db.relationship('Song', back_populates = 'song_likes')


song_like = db.Table(
    'song_likes',
    # Base.metadata,
    db.Column("user_id", db.ForeignKey("users.id"), primary_key=True),
    db.Column("song_id", db.ForeignKey("songs.id"), primary_key=True),
)
