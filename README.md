# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
ruby-2.6.1


* System dependencies
Verify Ruby installed
Verify Node installed

* Setup Directions
run git clone
cd into directory
migrate tables with: rails db:migrate
start rails server with: rails server

You can create a new user account by going to:
http://localhost:3000/users/sign_in

* Creating new FAQ is intuitive
- When the user is logged in:
-- they will see the full set of FAQ and they can create new, edit/update and delete existing.
-- they will also be able to create a new account for someone else and update their user account or log out.
- When a user is not logged in:
-- they will only see a 1 page app that shows the FAQ.
