from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


class SongForm(FlaskForm):
    name = StringField('Title', validators=[DataRequired()])
    artist_name = StringField('Artist', validators=[DataRequired()])
    mp3_file = StringField('File', validators=[DataRequired()])
    genre = StringField('Genre', validators=[DataRequired()])
