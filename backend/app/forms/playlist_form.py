from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, FileField
from wtforms.validators import DataRequired
from flask_wtf.file import FileField, FileAllowed, FileRequired
from app.models import User


class PlaylistForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    is_public = BooleanField('public')
    description = StringField('description', validators=[DataRequired()])
    preview_img = FileField("Image File")

    # FileAllowed(list(ALLOWED_EXTENSIONS))
