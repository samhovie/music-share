import json
from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Comment
from app.forms import CommentForm
from datetime import date
from app.models import db
import os
from flask import redirect, request

comment_routes = Blueprint('comments', __name__, url_prefix="")

@comment_routes.route('/api/songs/<int:id>/comments')
def get_song_comments(id):
    print('REQUEST', request)
    comments = Comment.query.filter_by(song_id = id).all()
    return json.dumps(comments, default=lambda c : c.to_dict())

@comment_routes.route('/api/comments/<int:id>', methods=['DELETE'])
def delete_comment(id):
    comment = Comment.query.get(id)
    print(comment)
    if comment.user_id != current_user.id:
        return {"errors": 'nacho comment'}
    else:
        db.session.delete(comment)
        db.session.commit()
        return {'success': 'good job'}
