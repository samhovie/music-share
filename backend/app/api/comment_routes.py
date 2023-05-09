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

