# services/users/project/utils.py

import boto3
from boto3.s3.transfer import S3Transfer
from project.config import BaseConfig

UPLOAD_FOLDER = BaseConfig.UPLOAD_FOLDER


def email(to_email, subject, body_html, body_text):
        # don't run this if we're running a test
    if current_app.config.get('TESTING'):
        return False

    client = boto3.client('ses')
    return client.send_email(
        # Source='marat.monnie@gmail.com',
        Source=to_email,
        Destination={'ToAddresses': [
            to_email,
        ]},
        Message={
            'Subject': {
                'Data': subject,
                'Charset': 'UTF-8'
            },
            'Body': {
                'Text': {
                    'Data': body_text,
                    'Charset': 'UTF-8'
                },
                'Html': {
                    'Data': body_html,
                    'Charset': 'UTF-8'
                },
            }
        })


def upload(file,  username):
    image_id = now()
    # original
    with Image(filename=file) as img:
        img.format = 'png'
        img.save(filename=os.path.join(
            UPLOAD_FOLDER,
             username, filename_template(image_id, 'raw')))
    # s3
    if AWS_BUCKET:
        # original
        s3 = boto3.client('s3')
        transfer = S3Transfer(s3)
        transfer.upload_file(
            os.path.join(UPLOAD_FOLDER,  username,
                         filename_template(image_id, 'raw')),
            AWS_BUCKET,
            os.path.join( username, filename_template(image_id, 'raw')),
            extra_args={'ACL': 'public-read', 'ContentType': 'image/png'}
        )
        os.remove(os.path.join(UPLOAD_FOLDER,
                                username, filename_template(image_id, "raw")))
    os.remove(file)
    return os.path.join( username, filename_template(image_id, 'raw'))


def filename_template(image_id, image_type):
    return "{}.{}.png".format(image_id, image_type)
