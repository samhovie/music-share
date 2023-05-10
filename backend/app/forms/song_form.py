from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from flask_wtf.file import FileField, FileAllowed, FileRequired
from app.aws import ALLOWED_EXTENSIONS
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


class SongForm(FlaskForm):
    name = StringField('Title', validators=[DataRequired()])
    artist_name = StringField('Artist', validators=[DataRequired()])
    # mp3_file = StringField('File', validators=[DataRequired()])
    mp3_file = FileField("Image File", validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))])
    genre = StringField('Genre', validators=[DataRequired()])
