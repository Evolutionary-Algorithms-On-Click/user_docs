## Deploying EvOC locally

### Clone and Configure Backend (Operations Repo)

1. Clone the **operations repository**:
   ```sh
   git clone https://github.com/Evolutionary-Algorithms-On-Click/operations
   ```

2. Navigate into the project folder and create an **`.env` file**:
   ```sh
   touch .env
   ```
      
      ![env-creation]( https://i.imgur.com/pETnAVR.png )


3. Paste the following environment variables:

   ```env
   RABBITMQ_URL = amqp://user:password@host.docker.internal:5672/
   RABBITMQ_USER = user
   RABBITMQ_PASSWORD = password
   RABBITMQ_QUEUE_NAME = task_queue
   
   MINIO_ENDPOINT = host.docker.internal:9000
   MINIO_ACCESS_KEY = minioadmin
   MINIO_SECRET_KEY = minioadmin
   
   COCKROACHDB_URL = postgresql://root@host.docker.internal:26257/defaultdb?sslmode=disable
   MAILER_EMAIL = <Mailer_Email>
   MAILER_PASSWORD = <Mailer_pass>
   FRONTEND_URL = http://localhost:3000
   AUTH_HTTP_PORT = 5000
   AUTH_GRPC_PORT = 5001
   
   RUNNER_CONTROLLER_HTTP_PORT = 5002
   AUTH_GRPC_ADDRESS = host.docker.internal:5001
   ```

      ![env-content]( https://i.imgur.com/1uGj3rU.png ) 


4. Run all services using the Docker Compose `.yml` file using this command just inside operations:
   ```sh
   docker-compose up -d
   ```
                    (or)

   Just click on `Run All Services` button at the start of `.yml` file:

      ![extension-in-action]( https://i.imgur.com/uR0PH3J.png )

   Now the following services will start to install:

      ![docker-start]( https://i.imgur.com/4UsiBr7.png )
   
   If the following statements are displayed after installation, you have successfully setup the backend:

      ![docker-complete]( https://i.imgur.com/eQ3oz2Y.png )

5. To clean up containers and images after using the framework, execute this command in the operations vscode terminal:
   ```sh
   docker rm -vf $(docker ps -aq) && docker rmi -f $(docker images -aq)
   ```
   > This removes all stopped containers and images to free up space.