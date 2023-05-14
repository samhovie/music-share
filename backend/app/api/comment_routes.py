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
    # print('REQUEST', request)
    comments = Comment.query.filter_by(song_id = songId).all()
    for comment in comments:
        commenter = User.query.get(comment.user_id)
        comment = comment.to_dict()
        commenter = commenter.to_dict()
        # print(commenter)
        comment['user_profile_pic'] = commenter['profile_pic']
        comment['username'] = commenter['username']
        # print("COMMMENT TOOO DICTT", comment)
    # print(type(comments))
    # comments = json.dumps(comments)
    # comments = json.dumps(comments, default=lambda c : c.to_dict())
    print("COMMMENT TOOO DICTT", comments)

    return json.dumps(comments, default=lambda c : c.to_dict())



@comment_routes.route('/<int:commentId>', methods=['DELETE'])
def delete_comment(commentId):
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
        print(new_comment)
        db.session.add(new_comment)
        db.session.commit()
        return new_comment.to_dict()
    return {"errors": form.errors}
