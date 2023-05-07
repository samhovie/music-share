from flask_sqlalchemy import SQLAlchemy

from .db import db, environment, SCHEMA, add_prefix_for_prod


class Playlist(db.Model):

    __tablename__ = 'playlists'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(100), nullable = False)
    public = db.Column(db.Boolean, nullable = False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)
    description = db.Column(db.String(255))
    created_at =db.Column(db.DateTime, nullable = False)
    updated_at = db.Column(db.DateTime, nullable = False)

    user = db.relationship('User', back_populates = 'playlists')

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
        add_prefix_for_prod(user_id)
