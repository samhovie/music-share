from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db
from app.models import User
from app.forms import UserDetailsForm
from app.aws import (
    upload_file_to_s3, get_unique_filename
)

user_routes = Blueprint('users', __name__, url_prefix='/api/users')


@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    return user.to_dict()

# updateUser


@user_routes.route('/<int:userId>', methods=['PUT'])
def update_user(userId):
    # print("REQUEST.GETDATA", request.get_data)
    form = UserDetailsForm()
    # print("REQUESTTT", request.headers)
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        user = User.query.get(userId)
        profile_file = request.files["profile_pic"]
        profile_file.filename = get_unique_filename(
            profile_file.filename
        )
        profile_img_upload = upload_file_to_s3(profile_file)

        if "url" not in profile_img_upload:
            return profile_img_upload, 400

        if not user:
            return {"errors": "user doesn't exist"}

        elif user.id != current_user.id:
            return {"errors": "not your account"}

        profile_img_url = profile_img_upload["url"]
        user.display_name = form.data['display_name']
        user.first_name = form.data['first_name']
        user.last_name = form.data['last_name']
        user.profile_pic = profile_img_url
        user.city = 'AwesomeCity'
        user.country = 'AwesomeCountry'
        user.bio = 'AwesomeBio'

        db.session.commit()

        return user.to_dict()

    return {"errors": form.errors}



@user_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_user(id):
    """
    Delete a user by id and returns a success message
    """
    user = User.query.get(id)

    if not user:
        return {"errors": "user doesn't exist"}

    elif user.id != current_user.id:
        return {"errors": "not your account"}

    db.session.delete(user)
    db.session.commit()

    return {"message": "User deleted"}
