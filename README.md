# Community Quotes API

The primary purpose of this project is to explore Vercel's functionality when it comes to serving an API with Express. I decided to choose a quote API from one of my favorite NBC comedies - Community.

## Endpoints

- `/api/` - Gets all quotes
- `/api/random` - Gets a random quote

## Running Locally

Required Tools

- VS Code
- NodeJS
- npm

In GitBash:

1. Verify NodeJS and npm are installed on your machine by running `node -v` and `npm -v`. If a version number is returned for each command, these have been successfully installed.
2. `cd` into your `projects` directory and run `git clone https://github.com/dan-collins-dev/community-quotes-api.git`
3. `cd` into the cloned repo and run `npm install` to install the required packages.
4.  Open the project with `code .`
5.  Run the server with `npm run dev`


## Todos

#### Not Started

- [ ] Revise quotes to identify short, stand-alone quotes (except for Winger Speeches)

#### In Progress

- [ ] Collect quotes from all episodes
- [ ] Dig deeper into how Vercel handles API's served with Express

#### Completed

- [X] Get a basic server running.