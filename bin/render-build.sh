#!/usr/bin/env bash
# exit on error
set -o errexit

# Add build commands for front end
rm -rf public
npm install --prefix client && npm run build --prefix client
cp -a client/build/. public/

bundle install
bundle exec rake db:migrate
bundle exec rake db:seed # if you have seed data, run this command for the initial deploy only to avoid duplicate records
