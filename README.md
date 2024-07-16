# Game Listing App

This app display a list of games, allows users to favourite games, and shows game details.

## Table of Contents

- [Designer Insurance BuyFlow](#designer-insurance-buyflow)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Development](#development)
  - [Project Structure](#project-structure)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Contributing](#contributing)
  - [License](#license)

## Features

1. Implement a bottom tab navigation with two screens: "Games" and "Favourites".
2. Games Screen:.
  a. Fetch games from
  `https://mock-game-api-9a408f047f23.herokuapp.com/api/games` and store them in your chosen state management solution.
  b. Display games in a FlatList (or FlashList if you prefer).
  c. Each game card should show:
    i. Game title
    ii. Game icon
    iii. Rating of the game out of 5
    iv. A "Favourite" button
    v. A call to action button that navigates user to the Game Details screen
  d. Implement the ability to add/remove games from favourites.
4. Game Details:
  a. When a game card or `Details` button is pressed, navigate to a separate game details screen.
  b. Fetch detailed game info from
  `https://mock-game-api-9a408f047f23.herokuapp.com/api/games/${gameID}`.
  c. Display the returned data in an organised layout:
    i. Game title
    ii. Game banner
    iii. Game icon
    iv. Description
    v. Rating of the game out of 5
    vi. A "Favourite" button
5. Add To Favourites
  a. Add favourite games to the store
6. Favourites Screen
  a. List all favourite games.

## Development

### Atomic Design

The project follows the atomic design methodology. Components are categorized into:

- **Atoms:** Basic building blocks like buttons, inputs, etc.
- **Molecules:** Combinations of atoms like forms, input groups, etc.
- **Organisms:** Groups of molecules forming distinct sections of the application.
- **Pages:** High-level components representing different pages/screens.

## Project Structure

```
.
├── src/
│   ├── components/
│   │   ├── atoms/
│   │   │   └── FavouriteIcon/
│   │   │       └── index.tsx
│   │   ├── molecules/
│   │   │   └── GamesCard/
│   │   │       └── index.tsx
│   │   │  
│   │   └── molecules/
│   │   │   └── GamesCard/
│   │   │       └── index.tsx 
│   │── navigation/
│   │   │   ├── AppNavigator.tsx
│   │   │   └── index.tsx
│   │── screens/
│   │   │   ├── FavouritesScreen.tsx
│   │   │   ├── GameDetailsScreen.tsx
│   │   │   └── GamesScreen.tsx
│   │── store/
│   │   │   ├── gamesSlice.ts
│   │   │   └── index.ts
│   │── App.tsx
└── configuration files
```

## Installation

1. **Install dependencies:**
   ```sh
   yarn install
   ```

## Running the Application

To run the application:

```sh
expo start
```


## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes with clear and descriptive commit messages.
4. Push your changes to your fork.
5. Create a pull request to the main repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

