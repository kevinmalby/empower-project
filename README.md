# empower-project
Kevin Malby interview project for Empower

# Prerequisites

- You must have MySQL installed locally on your machine
- You must have nodejs installed

# Setup

### Server Project
1. Perform all the following steps in the `server` directory
2. Add a file named `.env`
3. In this file, add two variables: PORT and DATABASE_URL 
   1. PORT needs to be set to 3000, for example `PORT=3000`
   2. DATABASE_URL should be be set to any valid MySQL connection string and schema name you wish to use. For example,
    something like the following  
    `DATABASE_URL="mysql://username:password@localhost:3306/empower-project"`
4. Run the command `npm install`
5. Run the command `npx prisma migrate dev`

### Client Project
1. Perform all the following steps in the `client` directory
2. Run `npm install`

# Running the Projects

1. In the `server` directory, run the command `npm run dev` to start the server
2. In the `client` directory, run the command `npm run dev` to start the React web app
3. In the browser, navigate to `http://localhost:5173/notes` (unfortunately, the root route does not redirecting to this route)

# Implementation Notes

I kept track of how long I took on this assignment with a timer, all said and done it took me 4 hours and 13 minutes. I have a four month old daughter and needed to stop occasionally to assist with her. I know this is a little over time, hopefully that is okay. There are several things I wanted to accomplish that I did not manage to get to within the time period, most embarrassingly not having test coverage. I think getting a project up and running from scratch took more time than I anticipated, as well as learning to use some of the libraries.

### Libraries/Tools that I learned as part of this exercise
- ExpressJS
- Prisma
- Version 6 of react router

### Known Issues
- The root route does not load the notes child route by default
- The connection strings are hard-coded
- No test coverage
- No guard against losing unsaved changes on note form
- Some usage of the `any` type in places
- Not using a logger (relying on console.log)
- Improperly handling cors issue (could not get the express cors package working properly)
- Prisma has some known performance issues
- No placeholder content for list of notes

### Desired Improvements

I did not get a chance to implement many of the nice to have features mentioned in the prompt. Obviously, if given more time, I would want to implement all things listed there. Outside of those however, I would very much like to have gotten to the following:
- Addressing known issues listed above
- Unit tests
- JSDoc comments
- Separating out the route definitions from the main.tsx file
- Adding pipelines for automation (deployment, test, etc)
- Add a rich text editor for note input

# Thanks!

I appreciate you taking the time to go over this project and for your consideration.