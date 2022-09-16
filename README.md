"Forked" from my prior project that used Heroku as a backend: https://github.com/mathiastj/recipes_frontend

# Recipes Frontend

My personal cooking recipes, not publicly available.

# Motivation

Keeping track of cooking recipes and easily searching for titles and ingredients instead of leafing through a book.

# Technical motivation
See how quick it was to spin up a new CRUD app.

## New setup:
- Needed a new backend now that Heroku is shutting down their free tier.
- Chose supabase, who have free Postgres and seems like a cool project.

The project is still using React Admin, but now with the supabase data provider and auth provider: https://github.com/marmelab/ra-supabase. Unfortunately it is very lacking, and not updated to the newest version of React Admin.

## Old setup:
- Wanted to try out Hasura and React Admin.

The project is using Hasura hosted on a free Heroku dyno.  
https://github.com/Steams/ra-data-hasura-graphql is used as a data provider to connect the Hasura backend to the [React Admin](https://marmelab.com/react-admin/) frontend.

