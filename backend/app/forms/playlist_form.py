from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User

class PlaylistForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    is_public = BooleanField('public', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
