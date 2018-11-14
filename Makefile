# Command lines.

run:
	# Run python server.
	sh ./scripts/run.sh

start:
	# Start react app.
	sh ./scripts/start.sh

build:
	# Build react app.
	sh ./scripts/build.sh

test-client:
	# Test react app.
	sh ./scripts/tests-client.sh

test-backend:
	# Test backend service.
	sh ./scripts/tests-backend.sh

cov:
	# Run tests and converage of the backend servive.
	sh ./scripts/cov-users.sh

flake:
	# Run flake test.
	sh ./scripts/flake.sh

initdb:
	# Initialize DB.
	sh ./scripts/db-start.sh

migrate:
	# Migrate DB.
	sh ./scripts/migrate.sh

deploy:
	# Deploy staging app to docker
	sh ./scripts/deploy.sh

setup:
	# Setup heroku. (One time only)
	sh ./scripts/heroku-setup.sh

heroku:
	# Deploy the containerized app to heroku.
	sh ./scripts/heroku.sh