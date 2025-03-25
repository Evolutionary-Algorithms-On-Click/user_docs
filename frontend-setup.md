# Deploying EvOC Frontend Locally

The frontend is a Next.js application that communicates with the backend services. It is responsible for rendering the user interface and handling user interactions.

## Clone Frontend Repository

Clone the **frontend repository** from GitHub using the following command:

```sh
git clone https://github.com/Evolutionary-Algorithms-On-Click/evolve_frontend/
```

## Install Dependencies

Navigate into the project folder and install dependencies:

```sh
npm install
```

## Create a `.env` File

Create a `.env` file and paste the following configuration:

![env-creation](https://i.imgur.com/DMIESQy.png)

```env
NEXT_PUBLIC_BACKEND_BASE_URL=http://localhost:5002
NEXT_PUBLIC_AUTH_BASE_URL=http://localhost:5000
NEXT_PUBLIC_MINIO_BASE_URL=http://localhost:9000
```

![env-content](https://i.imgur.com/v4RN8cv.png)

## Build and Run the Frontend

Build the frontend and start the server:

```sh
npm run build
```

```sh
npm run start
```

<!-- ![terminal-snapshot](https://i.imgur.com/QFd764E.png) -->

## Access the Frontend

Open **http://localhost:3000** in Google Chrome.

![Frontend Running](https://i.imgur.com/y5U7us8.png)

## Stop the Frontend Server

To stop the frontend server, press `Ctrl+C` in the terminal.
