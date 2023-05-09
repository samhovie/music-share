from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User

class PlaylistForm(FlaskForm):
    name = StringField('Title', validators=[DataRequired()])
    public = BooleanField('Artist', validators=[DataRequired()])
    description = StringField('File', validators=[DataRequired()])
