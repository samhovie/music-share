from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func

class Comment(db.Model):
    __tablename__ ='comments'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable = False)
    song_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('songs.id')), nullable = False)
    text = db.Column(db.String(255))
    # created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    # updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())
    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "song_id": self.song_id,
            "text": self.text,
        }

    user = db.relationship('User', back_populates = 'comments')
    song = db.relationship('Song', back_populates = 'comments')
