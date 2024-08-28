
# Pokémon Battle App

This repository contains both the frontend and backend for the Pokémon Battle App.

## Project Structure

- **/pokemon-app**: React application built with Vite and Material UI.
- **/pokemon-back**: NestJS application using TypeORM and SQLite.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/pokemon-battle-app.git
cd pokemon-battle-app
```

### 2. Install Dependencies and Start the Applications

#### Frontend

Navigate to the frontend directory, install the dependencies, and start the application:
```bash
cd pokemon-app
npm install
npm run dev
```

#### Backend

Navigate to the backend directory, install the dependencies, run the migrations, and start the backend server:
```bash
cd pokemon-back
npm install
npm run migrations:run
npm run start:dev
```

## Features

- **Frontend**: Select your Pokémon, view stats, and battle against a randomly selected opponent.
- **Backend**: Manage Pokémon data, battle logic, and store battle results in the database.

## License

This project is open-source and available under the [MIT License](LICENSE).
