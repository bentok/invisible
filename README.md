# Space Jammin'

This is a game jam submission for Weekly [Game Jam 147](https://itch.io/jam/weekly-game-jam-147)

Completed entry [here](https://bentok.github.io/invisible/)

## Setup the application

- Install yarn, typescript and webpack if not already installed globally

`npm install yarn typscript webpack -g`

- Install dependencies by running `yarn`

## Run the app

### Via webpack dev server

- `yarn run dev`
- Open browser and go to `https://localhost:8080`

## Project structure

### Lib

Since we're using TypeScript, the lib folder just contains TypeScript mappings of Phaser game objects so that:
* We can use regular import/export syntax
* We can use type hints that look like normal TypeScript

## Scenes

Each scene is a different phase of the game. Example: title screen => main game scene => game over screen. These sorts of transitions can be thought of as transitions between scenes.

### Create hook

Each scene has a create hook. This is where we set up game objects for a scene. Example: assign sprites to objects, set physics on said objects, etc.

### Update hook

Each scene has an update hook. We can put any thing that happens in the game loop within this hook. 
