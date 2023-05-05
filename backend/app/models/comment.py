from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Comment(db.Model):
    __tablename__ ='comments'
    id = db.Column(db.Integer, primary_key = True)
    # user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)
    # song_id = db.Column(db.Integer, db.ForeignKey('songs.id'), nullable = False)
    text = db.Column(db.String(255))
    created_at =db.Column(db.DateTime, nullable = False)
    updated_at = db.Column(db.DateTime, nullable = False)

    # user = db.relationship('Users', back_populates = 'comments')
    # song = db.relationship('Songs', back_populates = 'comments')
