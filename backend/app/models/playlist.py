from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Playlist(db.Model):

    __tablename__ = 'playlists'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(100), nullable = False)
    public = db.Column(db.Boolean, nullable = False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)
    description = db.Column(db.String(255))
    created_at =db.Column(db.DateTime, nullable = False)
    updated_at = db.Column(db.DateTime, nullable = False)

    user = db.relationship('Users', back_populates = 'playlists')
