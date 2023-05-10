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

@comment_routes.route('/api/songs/<int:id>/comments', methods=['POST'])
def post_comment(id):
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_comment = Comment(
            user_id=current_user.id,
            song_id=id,
            text=form.data['text']
        )
        print(new_comment)
        db.session.add(new_comment)
        db.session.commit()
        return new_comment.to_dict()
    return {"errors": form.errors}
