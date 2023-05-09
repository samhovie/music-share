from sqlalchemy.sql import func
from .db import db, environment, SCHEMA, add_prefix_for_prod


class Song(db.Model):
    __tablename__ = "songs"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    artist_name = db.Column(db.String(255), nullable=False)
    artist_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('users.id')), nullable=False)
    mp3_file = db.Column(db.String(255), nullable=False)
    genre = db.Column(db.String(255), nullable=False)
    # song_position = db.Column(db.String(100), nullable = False)
    created_at = db.Column(db.Date, nullable=False)
    updated_at = db.Column(db.Date, nullable=False)

    user = db.relationship('User', back_populates='songs', cascade='all')
    comments = db.relationship('Comment', back_populates='song')

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "artist_name": self.artist_name,
            "artist_id": self.artist_id,
            "mp3_file": self.mp3_file,
            "genre": self.genre,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }
    # if environment == "production":
    #     __table_args__ = {'schema': SCHEMA}
        # add_prefix_for_prod(artist_id)
