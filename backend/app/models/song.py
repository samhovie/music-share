from flask_sqlalchemy import SQLAlchemy


from .db import db, environment, SCHEMA, add_prefix_for_prod

class Song(db.Model):
    __tablename__ = "songs"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(255), nullable = False)
    # artist_name = db.Column(db.String(255), nullable = False)
    artist_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable = False)
    # album_id = db.Column(db.Integer, nullable = False)
    # album_name = db.Column(db.String(100), nullable = False)
    mp3_file = db.Column(db.String(255), nullable = False)
    genre = db.Column(db.String(255), nullable = False)
    # song_position = db.Column(db.String(100), nullable = False)
    # created_at =db.Column(db.DateTime, nullable = False)
    # updated_at = db.Column(db.DateTime, nullable = False)

    user = db.relationship('User', back_populates = 'songs', cascade='all')
    comments = db.relationship('Comment', back_populates = 'song')

    # if environment == "production":
    #     __table_args__ = {'schema': SCHEMA}
        # add_prefix_for_prod(artist_id)
