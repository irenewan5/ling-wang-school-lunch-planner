# Project Title

School Lunch Planner

## Overview

School lunch planner is a web application designed to help families prepare nutritious and delicous school lunches for their children. The app will provide recipes based on the ingredients they have at home, making meal planning and grocery shopping easier and more efficient.

### Problem

Preparing school lunches can be a challenging task for many families. It requires time, planning, and a good understanding of nutrition to ensure that the meals are both healthy and appealing to children. Moreover, families often have to work with the ingredients they have at home, which can limit their options and make meal planning even more difficult.

### User Profile

Parents or guardians who prepare school lunches for their children.

### Features

- As a user, I want to be able to choose the ingredients I have at home and get recipe suggestions.
- As a user, I want to be able to filter recipes based on dietary restrictions or preferences (e.g., vegetarian, gluten-free, nut-free).(under investigating)
- As a user, I want to be able to create a shopping list based on the recipes I plan to make.

## Implementation

### Tech Stack

- JavaScript
- MySQL
- Express
- Client libraries:
  - react
  - react-router
  - axios
- Server libraries:
  - knex
  - express
  - jsonwebtoken
- APIs
  - Edamam API for recipe search and details

### APIs

- Recipe Search
- Specific Recipe Info

### Sitemap

- User login
- Chilren info
- Week plan (Homepage if logged in)
- Recipe details

### Mockups

attachments

### Data

- users
  id
  name
  username
  password

- children
  id
  name
  user_id
  age

- plans
  id
  date
  user_id
  child_id
  recipe_id
  recipe_name
  recipe_image

### Endpoints

#### Recipes

- List Plans

  GET /plans

- Add a Plan

  POST /plans

- Update a Plan

  PUT /plans/:id

- Delete a Plan

  DELETE /plans/:id

#### Auth

- User Login

  POST /token

#### User

- User Register

  POST /users

- Update User

  PUT /user

#### Recipe

- Serach Recipes

  GET /recipes

- Receipe Details

  GET /recipes/:id

#### Children

- List Children

  GET /children

- Add a Child

  POST /children

- Update a Child

  PUT /children/:id

- Delete a Child

  DELETE /children/:id

#### Shopping List

- Shopping List

  GET /shopping

### Auth

JWT

## Roadmap

- Sprint 1:
  Web pages + styling

- Sprint 2:
  DB structure + Sample Data + Endpoints

- Sprint 3:
  Link frontend and backend

## Nice-to-haves

- recipes bookmark
