from sqlalchemy.sql import func
from .join_tables import playlist_songs, song_like

from .db import db, environment, SCHEMA, add_prefix_for_prod


def default_image():
    return ''


class Song(db.Model):
    __tablename__ = "songs"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    artist_name = db.Column(db.String(255))
    artist_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('users.id')))
    mp3_file = db.Column(db.String(255))
    genre = db.Column(db.String(255))
    preview_img = db.Column(db.String(255), default='https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/12/Gradient_builder_2.jpg?auto=format&q=60&fit=max&w=930')
    # song_position = db.Column(db.String(100), nullable = False)
    created_at = db.Column(db.Date, nullable=False)
    updated_at = db.Column(db.Date, nullable=False)

    user = db.relationship('User', back_populates='songs')
    liked_song = db.relationship(
        'User', secondary=song_like, back_populates='user_like')
    comments = db.relationship(
        'Comment', back_populates='song')
    playlists = db.relationship(
        'Playlist', secondary=playlist_songs, back_populates='song')

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "artist_name": self.artist_name,
            "artist_id": self.artist_id,
            "mp3_file": self.mp3_file,
            "genre": self.genre,
            "preview_img": self.preview_img,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }
    # if environment == "production":
    #     __table_args__ = {'schema': SCHEMA}
        # add_prefix_for_prod(artist_id)
