# services/users/project/api/models.py


from project import db


class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(128), nullable=False)
    email = db.Column(db.String(128), nullable=False)
    photo = db.Column(db.String(128), nullable=False)
    active = db.Column(db.Boolean(), default=True, nullable=False)

    def __init__(self, username, email, photo):
        self.username = username
        self.email = email
        self.photo = photo

    def to_json(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'photo': self.photo,
            'active': self.active
        }
