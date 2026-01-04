---
title: Backend Setup
description: Deploy the EvOC backend services locally using Docker Compose. This guide provides step-by-step instructions for setting up the backend environment.
---

# Deploying EvOC Locally

This guide will help you deploy the backend services of the Evolutionary Algorithms On Click (EvOC) project locally using Docker Compose.

## Clone DevOps Repo

Clone the Operations Repository

```sh
git clone https://github.com/Evolutionary-Algorithms-On-Click/operations
```

## Create a `.env` file

Navigate into the project folder and create an `.env` file:

```sh
touch .env
```

![env-creation](https://i.imgur.com/pETnAVR.png)

## Paste Environment Variables

The `MAILER_EMAIL` and `MAILER_PASSWORD` fields should be populated with the email address and app password of the email account you configured as described in [Get Started](/get-started#create-a-gmail-mailer-account).

Paste the following environment variables into the `.env` file:

```env
RABBITMQ_URL = amqp://user:password@host.docker.internal:5672/
RABBITMQ_USER = user
RABBITMQ_PASSWORD = password
RABBITMQ_QUEUE_NAME = task_queue

MINIO_ENDPOINT = host.docker.internal:9000
MINIO_ACCESS_KEY = minioadmin
MINIO_SECRET_KEY = minioadmin

COCKROACHDB_URL = postgresql://root@host.docker.internal:26257/defaultdb?sslmode=disable
MAILER_EMAIL = <mailer_email>
MAILER_PASSWORD = <mailer_pass>
FRONTEND_URL = http://localhost:3000
AUTH_HTTP_PORT = 5000
AUTH_GRPC_PORT = 5001
REDIS_URL= redis://host.docker.internal:6379/0
RUNNER_CONTROLLER_HTTP_PORT = 5002
AUTH_GRPC_ADDRESS = host.docker.internal:5001

NEXT_PUBLIC_BACKEND_BASE_URL=http://localhost:5002
NEXT_PUBLIC_AUTH_BASE_URL=http://localhost:5000
NEXT_PUBLIC_MINIO_BASE_URL=http://localhost:9000

# Set to true and add your API key to enable AI features.
NEXT_PUBLIC_AI=false
GOOGLE_GENERATIVE_AI_API_KEY=<YOUR_GEMINI_API_KEY>
```

![env-content](https://i.imgur.com/1uGj3rU.png)


## Obtain a Gemini API Key (Optional – Required for AI Features)

EvOC supports AI-powered features using Google’s **Gemini API**.  
To enable these features, you must obtain a Gemini API key and add it to your `.env` file.

### Steps to get a Gemini API key

1. Visit **Google AI Studio**:  
   https://aistudio.google.com/

2. Sign in with your Google account.

3. Click **Get API key** → **Create API key**.

4. Select an existing Google Cloud project or create a new one.

5. Copy the generated API key.

### Enable AI features

In your `.env` file:
```env
NEXT_PUBLIC_AI=true
GOOGLE_GENERATIVE_AI_API_KEY=<YOUR_GEMINI_API_KEY>
```


If you do not want AI features, keep:
```
NEXT_PUBLIC_AI=false
```

::: warning
Do not commit your API key to version control.
The .env file should remain private and untracked.
:::


## Run Services

Run all services using the Docker Compose `.yml` file. Execute this command inside the `operations` directory:

```sh
docker compose up -d
```

Alternatively, click the `Run All Services` button at the start of the `.yml` file (if your IDE supports it):

![extension-in-action](https://i.imgur.com/uR0PH3J.png)

The following services will start installing:

![docker-start](https://i.imgur.com/4UsiBr7.png)

If the following statements are displayed after installation, you have successfully set up the backend:

![docker-complete](https://i.imgur.com/eQ3oz2Y.png)

## Accessing EvOC

Once the services are up and running, you can access EvOC at [http://localhost:3000](http://localhost:3000).

## Clean Up

To clean up containers and images after using the framework, execute this command in the operations VS Code terminal:

```sh
docker rm -vf $(docker ps -aq) && docker rmi -f $(docker images -aq)
```

> [!CAUTION]
> This removes all stopped containers and images to free up space. You will lose all data related to EvOC.
