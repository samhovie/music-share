from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Base(DeclarativeBase):
    pass

class PlaylistSong(db.Model):
    __tablename__ = 'playlist_songs'
    id = db.Column(db.Integer, primary_key = True)
    playlist_id = db.Column(db.Integer, db.ForeignKey('playlists.id'), nullable = False)
    song_id = db.Column(db.Integer, db.ForeignKey('songs.id'), nullable = False)

    # f = db.relationship('', secondary='', back_populates='')
playlist_song = db.Table(
    'playlist_songs',
    Base.metadata,
    db.Column("playlist_id", db.ForeignKey("playlists.id"), primary_key=True),
    db.Column("song_id", db.ForeignKey("songs.id"), primary_key=True),
)


class SongLike(db.Model):
    __tablename__ = 'song_likes'
    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)
    song_id = db.Column(db.Integer, db.ForeignKey('songs.id'), nullable = False)

song_like = db.Table(
    'song_likes',
    Base.metadata,
    db.Column("user_id", db.ForeignKey("users.id"), primary_key=True),
    db.Column("song_id", db.ForeignKey("songs.id"), primary_key=True),
)

# class CommentLike(db.Model):
#     __tablename__ = 'comment_likes'
#     id = db.Column(db.Integer, primary_key = True)
#     user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)
#     comment_id = db.Column(db.Integer, db.ForeignKey('comments.id'), nullable = False)

# playlist_song = db.Table(
#     'playlist_songs',
#     Base.metadata,
#     db.Column("playlist_id", db.ForeignKey("playlists.id"), primary_key=True),
#     db.Column("song_id", db.ForeignKey("songs.id"), primary_key=True),
# )
