from flask_wtf import Form
from wtforms import validators, StringField, PasswordField
from wtforms.widgets import TextArea
from wtforms.fields.html5 import EmailField
from wtforms.validators import ValidationError
from flask_wtf.file import FileField, FileAllowed
import re

from user.models import User


class BaseUserForm(Form):
    first_name = StringField('First Name', [validators.DataRequired()])
    last_name = StringField('Last Name', [validators.DataRequired()])
    email = EmailField('Email address', [
                       validators.DataRequired(), validators.Email()])
    username = StringField('Username', [
        validators.DataRequired(),
        validators.Length(min=4, max=25)
    ])
    bio = StringField('Bio',
                      widget=TextArea(),
                      validators=[validators.Length(max=160)]
                      )

# multiple class inheritance
# we need to convert this RegisterForm to be the password base form


class PasswordBaseForm(Form):
    password = PasswordField('New Password', [
        validators.DataRequired(),
        validators.EqualTo('confirm', message='Passwords must match'),
        validators.Length(min=4, max=80)
    ])
    confirm = PasswordField('Repeat Password')

# very few lamguage have this multiple inheritance, so this form merge those two forms inherited


class RegisterForm(BaseUserForm, PasswordBaseForm):
    def validate_username(form, field):
        if User.objects.filter(username=field.data).first():
            raise ValidationError('Username already exists')
        if not re.match("^[a-zA-Z0-9_-]{4,25}$", field.data):
            raise ValidationError('Invalid username')

    def validate_email(form, field):
        if User.objects.filter(email=field.data).first():
            raise ValidationError('Email is already in use')


class LoginForm(Form):
    username = StringField('Username', [
        validators.DataRequired(),
        validators.Length(min=4, max=25)
    ])
    password = PasswordField('Password', [
        validators.DataRequired(),
        validators.Length(min=4, max=80)
    ])


class EditForm(BaseUserForm):
    image = FileField('Profile image', validators=[FileAllowed(
        ['jpg', 'jpeg', 'png', 'gif'], 'Only JPEG, PNG and GIFs allowed')])


class ForgotForm(Form):
    email = EmailField('Email address',
                       [validators.DataRequired(), validators.Email()]
                       )


class PasswordResetForm(PasswordBaseForm):
    current_password = PasswordField('Current Password',
                                     [validators.DataRequired(),
                                      validators.Length(min=4, max=80)]
                                     )
