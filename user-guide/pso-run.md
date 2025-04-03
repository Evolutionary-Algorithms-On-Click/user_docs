---
title: Running Particle Swarm Optimization (PSO)
description: Learn how to configure, execute, and visualize Particle Swarm Optimization (PSO) algorithms using EvOC's interface.
---

# Running Particle Swarm Optimization (PSO)

This guide covers how to set up, run, and analyze results for Particle Swarm Optimization (PSO) experiments in EvOC.

## What is Particle Swarm Optimization (PSO)?

Particle Swarm Optimization (PSO) is a population-based optimization technique inspired by the social behavior of bird flocking or fish schooling. Instead of using genetic operators like crossover and mutation, PSO particles "fly" through the search space, adjusting their trajectories based on their own best-known position and the swarm's overall best-known position. EvOC provides a graphical interface to configure and visualize this process.

## Configuring and Running PSO

Follow these steps to set up and execute your PSO algorithm:

1.  **Select Algorithm Type:**

    - From the main EvOC Dashboard, click on the **`Particle Swarm Optimization (PSO)`** option.

    ![Selecting the Particle Swarm Optimization (PSO) option from the dashboard](https://i.imgur.com/gZMdZ19.png)

2.  **Configure PSO Parameters:**

    - PSO involves setting parameters related to the particles and their movement. Use the EvOC interface to configure:
        - **Algorithm Strategy** (A standard PSO implementation is provided).
        - **Optimization Objective** (Maximize/Minimize Weights).
        - **Number of Dimensions** for the problem space.
        - **Particle Constraints:** Minimum/Maximum position and speed values.
        - **Inertia Weights / Coefficients:** Parameters controlling the influence of particle history and swarm knowledge (e.g., cognitive `phi1`, social `phi2`).
        - **Evaluation Function:** The function defining the "landscape" the particles are exploring.
        - **Population (Swarm) Size** and **Number of Generations (Iterations)**.

    ![Configuring PSO parameters like dimensions, position/speed range, and coefficients](https://i.imgur.com/kxga1ik.png)

    ::: tip Parameter Guidance
    Use the tooltips within the EvOC interface for detailed explanations of each PSO parameter. The specific values depend on the nature of the evaluation function being optimized.
    :::

3.  **Execute the Algorithm:**
    - After setting all parameters, click the **`Execute Algorithm`** button to start the optimization process.

## Understanding and Using Your PSO Results

When the PSO run completes, the results interface will provide insights:

### Best Position & Fitness

- Review the **Best Individual Fitness** section to find the best fitness value achieved by any particle during the run.
- EvOC will also typically show the coordinates (**Best Individual Position**) corresponding to that best fitness value.

### PSO Visualization (Animation)

- A key feature for PSO is an **animation or plot** showing the particle swarm's movement over generations/iterations. Observe how the particles converge towards promising areas of the search space. The red dot indicates the current global best position found by the swarm.

    ![Animation showing particle swarm movement and convergence over generations](https://i.imgur.com/ExJpNS9.png)

### Sharing Your Run

- Use the **`Share Run`** button to share this specific PSO experiment with colleagues or collaborators who also use EvOC.
- Enter their registered email addresses (comma-separated) in the pop-up.

    ![Sharing the run results via email addresses](https://i.imgur.com/US3uH0p.png)

### Viewing and Downloading Logs

- Click **`Show Logs`** to see generation-by-generation details, such as the global best fitness found at each step.
- Use the **`Download Logs`** button within this view to save the data (`.txt`) for further analysis.

    ![Viewing generation-wise logs for the PSO run and the download button](https://i.imgur.com/kPgeLVP.png)

### Viewing the Generated Code

- Click **`Show Code`** to inspect the underlying Python code (using libraries like DEAP) for the configured PSO run.
- Leverage the **`Ask EvOC AI to Explain`** feature for code clarifications.

    ![Viewing the Python code generated for the PSO configuration](https://i.imgur.com/zHbQdxs.png)

### Accessing Run History

- Your complete history of runs, including PSO experiments, can be accessed via the **`View Previous Runs`** or **`View All Runs`** section on the EvOC platform.

---

**Next Steps:**

- Learn about **[Running a Traditional EA](./ea-run.md)**
- Explore configuring **[Genetic Programming (GP)](./gp-run.md)**
- See how to use **[EA for ML Tuning](./ml-run.md)**
