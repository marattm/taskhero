# services/users/project/api/models.py

from datetime import datetime

from project import db


class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(128), nullable=False)
    email = db.Column(db.String(128), nullable=False)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    bio = db.Column(db.String(160), nullable=False)
    created = db.Column(db.DateTime, nullable=False,
                        default=datetime.utcnow)
    email_confirmed = db.Column(db.Boolean(), nullable=True, default=False)
    change_configuration = db.Column(db.String(128), nullable=True, default=False)
    profile_image = db.Column(db.String(128), nullable=True, default=None)
    gender = db.Column(db.String(128), nullable=False)
    active = db.Column(db.Boolean(), default=True, nullable=False)

    def __init__(self, username, email, first_name, last_name, bio, gender):
        self.username = username
        self.email = email
        self.first_name = first_name
        self.last_name = last_name
        self.bio = bio
        self.gender = gender

    def to_json(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'bio': self.bio,
            'created': self.created,
            'email_confirmed': self.email_confirmed,
            'change_configuration': self.change_configuration,
            'profile_image': self.profile_image,
            'gender': self.gender,
            'active': self.active
        }
