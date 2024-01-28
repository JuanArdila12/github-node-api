
# GitHub Connect API

## Description

GitHub Connect API is a NestJS-based project designed to connect with the GitHub API. This project allows users to interact with various GitHub functionalities through a RESTful API.

## Folder Structure

```
src
|--modules
|   |--api-module
|   |   |--services
|   |--github-connect-module
|       |--services
|       |--controllers
|       |--dto
```

## Prerequisites

Before you begin, ensure you have Node.js and npm installed on your system. Additionally, you'll need a GitHub account and a personal access token to interact with the GitHub API.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JuanArdila12/github-node-api
   cd github-connect-api
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root of the project and add the following variables:
   ```
   GITHUB_API=URL_API
   ```

## Running the Application

### Development Mode

To start the application in development mode:

```bash
npm run start:dev
```

### Watch Mode

To start the application in watch mode:

```bash
npm run start:watch
```

### Production Mode

To build and run the application in production mode:

```bash
npm run build
npm run start:prod
```

## Swagger

This project uses Swagger to document the API. Once the application is running, you can access the API documentation at `http://localhost:[PORT]/api`.
