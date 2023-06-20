from flask import Blueprint, request, redirect, render_template
from app.models import db, Song
from datetime import date
from flask_login import current_user, login_required
from app.forms import ImageForm
from app.aws import (
    upload_file_to_s3, get_unique_filename
    )

image_routes = Blueprint("images", __name__, url_prefix='/api/images')

@image_routes.route("/", methods=["GET","POST"])
# @login_required
def upload_image():
    form = ImageForm()

    if form.validate_on_submit():
        if "image" not in request.files:
            return {"errors": "image required"}, 400
        image = request.files["image"]
        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)

        if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
            # return render_template("post_form.html", form=form, errors=[upload])
            return upload, 400

        # file_url = ''
        # with open(form.data['image']) as file:
        #     file_url = upload_file_to_s3(file)
        url = upload["url"]
        new_song = Song(
            name='LadyGaga',
            artist_name='Marshmallow',
            # mp3_file=form.data['image'],
            mp3_file=url,
            genre='Alternative',
            artist_id=2,
            created_at=date.today(),
            updated_at=date.today()
        )
        db.session.add(new_song)
        db.session.commit()
        return {"url": url}

    if form.errors:
        return {"errors": "too many errors"}

    return render_template("post_form.html", form=form, errors=None)
