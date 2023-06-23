from flask_wtf import FlaskForm
from wtforms import StringField, FileField
from wtforms.validators import DataRequired, Length

class UserDetailsForm(FlaskForm):
    display_name = StringField('Display Name', validators=[DataRequired()])
    first_name = StringField('First Name', validators=[DataRequired()])
    last_name = StringField('Last Name', validators=[DataRequired()])
    profile_pic = FileField('Profile Picture')
    # city = StringField('City', validators=[DataRequired()])
    # country = StringField('Country', validators=[DataRequired()])
    # bio = StringField('bio', validators=[DataRequired()])
