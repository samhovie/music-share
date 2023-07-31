import json
from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Comment, User
from app.forms import CommentForm
from datetime import date
from app.models import db
import os
from flask import redirect, request

comment_routes = Blueprint('comments', __name__, url_prefix="/api/comments")


@comment_routes.route('/<int:songId>')
def get_song_comments(songId):
    comments = Comment.query.filter_by(song_id = songId).all()
    res = []
    for comment in comments:
        commenter = User.query.get(comment.user_id)
        comment = comment.to_dict()
        commenter = commenter.to_dict()
        comment['user_profile_pic'] = commenter['profile_pic']
        comment['username'] = commenter['username']
        res.append(comment)
    # comments = json.dumps(comments)
    # comments = json.dumps(comments, default=lambda c : c.to_dict())


    return json.dumps(res, default=lambda c : c.to_dict())



@comment_routes.route('/<int:commentId>', methods=['DELETE'])
def delete_comment(commentId):
    print(f"Deleting comment with ID: {commentId}")
    comment = Comment.query.get(commentId)
    if comment.user_id != current_user.id:
        return {"errors": 'nacho comment'}
    else:
        db.session.delete(comment)
        db.session.commit()
        return {'success': 'good job'}



@comment_routes.route('/<int:songId>', methods=['POST'])
def post_comment(songId):
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_comment = Comment(
            user_id=current_user.id,
            song_id=songId,
            text=form.data['text']
        )
        db.session.add(new_comment)
        db.session.commit()
        return new_comment.to_dict()
    return {"errors": form.errors}
