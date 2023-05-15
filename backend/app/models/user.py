from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .join_tables import song_like

def default_image():
    return ''


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    display_name = db.Column(db.String(255), default='Please change')
    first_name = db.Column(db.String(255), default='Please change')
    last_name = db.Column(db.String(255), default='Please change')
    city = db.Column(db.String(255), default='Please change')
    country = db.Column(db.String(255), default='Please change')

    bio = db.Column(db.Text)
    profile_pic = db.Column(db.String(255), default='https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1429&q=80')
    banner_pic = db.Column(db.String(255), default='')

    songs = db.relationship('Song', back_populates = 'user', cascade='all, delete-orphan')
    user_like = db.relationship('Song', secondary=song_like, back_populates='liked_song')
    comments = db.relationship('Comment', back_populates = 'user', cascade='all, delete-orphan')
    # song_likes = db.relationship('Comment', back_populates = 'user', cascade='all, delete-orphan')
    playlists = db.relationship('Playlist', back_populates = 'user', cascade='all, delete-orphan')


    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'display_name': self.display_name,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'bio': self.bio,
            'city': self.city,
            'country': self.country,
            'profile_pic': self.profile_pic,
            'banner_pic': self.banner_pic
        }
