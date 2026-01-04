---
title: Running Differential Evolution (DE)
description: Guide to configuring and running Differential Evolution (DE), a specific strategy within EvOC's traditional EA framework.
---

# Running Differential Evolution (DE)

This guide focuses on setting up and running Differential Evolution (DE) experiments using EvOC.

## What is Differential Evolution (DE)?

Differential Evolution (DE) is a powerful population-based optimization algorithm, particularly effective for continuous optimization problems. It creates new candidate solutions by combining existing ones in a unique way, involving vector differences. In EvOC, DE is treated as a specific **strategy** available within the general "Evolutionary Algorithms (EA)" configuration section.

## Configuring and Running DE

Follow these steps to set up and execute a DE algorithm:

1.  **Select Main Algorithm Type:**

    - From the main EvOC Dashboard, click on the **`Evolutionary Algorithms (EA)`** option. DE is configured within this general EA framework.

2.  **Choose the `de` Strategy:**
    - This is the crucial step for DE. Within the configuration screen, specifically select **`de`** from the available "Algorithm Strategy" options.

    ::: tip Key Step
    Selecting the **`de`** strategy is essential to activate the Differential Evolution specific logic and parameters.
    :::

3.  **Configure DE Parameters:**

    - Once `de` is selected, configure the relevant parameters. While some overlap with standard GAs (like Population Size, Generations, Evaluation Function), DE has specific parameters you'll need to set:
        - **CR (Crossover Rate):** Probability of incorporating parts of the mutant vector into the target vector.
        - **F (Differential Weight):** Scaling factor for the difference vectors, controlling amplification.
        - **Individual Representation:** Typically `floatingPoint` for DE.
        - **Population Size** and **Number of Generations**.
        - **Evaluation Function**.

    ::: info Parameter Details
    Consult the tooltips within the EvOC interface for specific guidance on recommended ranges or typical values for CR and F, as they can significantly impact performance.
    :::

4.  **Execute the Algorithm:**
    - After defining your DE parameters, click the **`Execute Algorithm`** button.

## Understanding and Using Your DE Results

The results interface for DE runs is similar to other traditional EAs:

### Fitness & Best Solution

- Analyze the **Fitness Plot** showing the progression of minimum, average, and maximum fitness over the generations.
- Identify the **Best Individual Fitness** and the corresponding **Best Individual** (vector of values) found by the algorithm.

### Sharing Your Run

- Use the **`Share Run`** button to share the DE configuration and results with other EvOC users via email (comma-separate multiple addresses).

### Viewing and Downloading Logs

- Click **`Show Logs`** to inspect generation-by-generation fitness statistics.
- Click **`Download Logs`** within the log view to save the data (`.txt`) for external analysis.

### Viewing the Generated Code

- Use **`Show Code`** to view the DEAP Python code implementing the DE logic based on your settings.
- Remember the **`Ask EvOC AI to Explain`** feature is available for code assistance.

### Accessing Run History

- Find all your past runs, including DE experiments, in the **`View Previous Runs`** or **`View All Runs`** section of EvOC.

---

**Next Steps:**

- Learn about **[Running Genetic Programming (GP)](./gp-run.md)**
- Explore configuring **[Particle Swarm Optimization (PSO)](./pso-run.md)**
- See how to use **[EA for ML Tuning](./ml-run.md)**
