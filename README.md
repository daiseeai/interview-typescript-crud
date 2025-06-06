# Node interview

## Overview

* A `hono` based challenge.
* Focussed around the age-old `Ecommerce` [CRUD](https://www.codecademy.com/article/what-is-crud) use-case.
* Your challenge is to investigate the current backend which uses SQLite to generate an example database and define some stub schemas and models for use with the FastAPI app.

## What do we already have?

* RESTful API for product management.
* * The skeleton code for this is already provided.
* SQLite database with sample data generation.
* * Using Faker to generate fake DB entries.
* JWT authentication.
* * For this case any random string will be a "valid token".
* Input validation using Zod.

## Setup

```sh
npm install
npm run dev
```

## Table

```
┌────┬──────┬───────────────────────────┬───────┬──────────┬───────┬─────────────────────┬───────────┐
│ id │ name │ description               │ price │ category │ stock │ createdAt           │ updatedAt │
├────┼──────┼───────────────────────────┼───────┼──────────┼───────┼─────────────────────┼───────────┤
│  0 │ Foo  │ This is an example.       │ 100   │ Example  │ 10    │ 2025-06-02 14:10:36 │ null      │
│  1 │ Bar  │ This is also an example.  │ 50    │ Example  │ 10    │ 2025-06-02 14:10:36 │ null      │
│  2 │ Baz  │ One more example is here. │ 150   │ Category │ 10    │ 2025-06-02 14:10:36 │ null      │
└────┴──────┴───────────────────────────┴───────┴──────────┴───────┴─────────────────────┴───────────┘
```