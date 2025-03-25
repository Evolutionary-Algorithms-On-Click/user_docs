### Clone and Configure Frontend (Evolve Frontend Repo)

1. Clone the **frontend repository**:
   ```sh
   git clone https://github.com/Evolutionary-Algorithms-On-Click/evolve_frontend/
   ```

2. Navigate into the project folder and install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file and paste the following configuration:

      ![env-creation]( https://i.imgur.com/DMIESQy.png )

   ```
   NEXT_PUBLIC_BACKEND_BASE_URL=http://localhost:5002
   NEXT_PUBLIC_AUTH_BASE_URL=http://localhost:5000
   NEXT_PUBLIC_MINIO_BASE_URL=http://localhost:9000
   ```
   
      ![env-content]( https://i.imgur.com/v4RN8cv.png )
      


4. Start the development server:
   ```sh
   npm run dev
   ```

   ![terminal-snapshot]( https://i.imgur.com/QFd764E.png )

5. Open **http://localhost:3000** in Google Chrome.
   
   ![Frontend Running]( https://i.imgur.com/y5U7us8.png )

6. To stop the frontend server, press `Ctrl+C` in the terminal.