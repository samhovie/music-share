from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from flask_wtf.file import FileField, FileAllowed, FileRequired
from app.aws import ALLOWED_EXTENSIONS
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


class SongForm(FlaskForm):
    name = StringField('Title')
    artist_name = StringField('Artist')
    # mp3_file = StringField('File', validators=[DataRequired()])
    mp3_file = FileField("Image File", validators=[
                         FileAllowed(list(ALLOWED_EXTENSIONS))])
    genre = StringField('Genre')
