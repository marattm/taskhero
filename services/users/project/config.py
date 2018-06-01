# services/users/project/config.py


import os


class BaseConfig:
    """Base configuration"""
    TESTING = False
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = 'password'
    DEBUG_TB_ENABLED = False
    DEBUG_TB_INTERCEPT_REDIRECTS = False
    STATIC_IMAGE_URL = 'images'
    UPLOAD_FOLDER = '/usr/src/app'
    AWS_BUCKET = 'nathanpatchwork'
    AWS_S3_CONTENT_URL = 'https://s3-us-west-2.amazonaws.com'
    AWS_ACCESS_KEY_ID = ''
    AWS_SECRET_ACCESS_KEY = ''



class DevelopmentConfig(BaseConfig):
    """Development configuration"""
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
    DEBUG_TB_ENABLED = True


class TestingConfig(BaseConfig):
    """Testing configuration"""
    TESTING = True
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_TEST_URL')


class ProductionConfig(BaseConfig):
    """Production configuration"""
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
