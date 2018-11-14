FROM python:3.6.4-slim


## make a local directory
RUN mkdir -p /usr/src/app
# set "app" as the working directory from which CMD, RUN, ADD references
WORKDIR /usr/src/app

# now copy all the files in this directory to /code
ADD . /usr/src/app

# Upgrade pip
RUN pip install --upgrade pip
# RUN pip install --upgrade setuptools
# pip install the local requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
# RUN pip install -r requirements.txt


# # DEV env
# RUN export FLASK_APP='app.py'
# # RUN export FLASK_DEBUG=1
# ENV FLASK_APP='app.py'
# # ENV FLASK_DEBUG=1

# # DEV run server 
# CMD ["./entrypoint.sh"]

# PROD run server
CMD gunicorn manage:app --bind 0.0.0.0:$PORT

