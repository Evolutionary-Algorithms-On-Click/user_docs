---
title: Running Genetic Programming (GP)
description: Learn how to configure, execute, and interpret results for Genetic Programming (GP) experiments within EvOC.
---

# Running Genetic Programming (GP)

This guide explains how to use EvOC to set up and run Genetic Programming (GP) experiments.

## What is Genetic Programming (GP)?

Genetic Programming (GP) is a specialized type of evolutionary algorithm where the individuals in the population are computer programs (represented as trees) rather than fixed-length strings or lists. EvOC allows you to evolve these programs automatically to solve problems like symbolic regression, based on the configurations you provide through the GUI.

## Configuring and Running GP

Follow these steps to build and execute your GP algorithm:

1.  **Select Algorithm Type:**

    - From the main EvOC Dashboard, click on the **`Genetic Programming (GP)`** option.

    ![Selecting the Genetic Programming (GP) option from the dashboard](/images/ea-select.png)

2.  **Configure GP Parameters:**

    - GP configuration involves defining the building blocks (functions and terminals) and constraints for the program trees. Work through the UI options, paying attention to GP-specific settings like:
        - **Algorithm Strategy** (e.g., `eaSimple` applied to trees)
        - **Primitive Set:** Defining the functions (e.g., `add`, `sub`, `mul`, `sin`) and terminals (e.g., input variables, ephemeral constants) the evolved programs can use.
        - **Tree Generation:** Methods like `genFull`, `genGrow`, or `genHalfAndHalf`.
        - **Tree Constraints:** Setting minimum and maximum tree height/depth.
        - **Evaluation Function:** Defining how the fitness of an evolved program is measured (e.g., error on a symbolic regression task).
        - Standard EA parameters like Population Size, Generations, Crossover, Mutation (specific tree-based operators), and Selection.

    ::: info Configuration Details
    Refer to the tooltips within the EvOC interface for explanations of each specific GP parameter and operator. A detailed walkthrough video or screenshots may be added here in the future.
    :::

    <video controls style="width: 100%; max-width: 700px; margin-top: 1em; margin-bottom: 1em;">
      <source src="/videos/gp-run-config.mov" type="video/mp4">
      Your browser does not support the video tag. This video shows the process of configuring EA parameters in the EvOC interface.
    </video>

3.  **Execute the Algorithm:**
    - Once your GP configuration is complete, click the **`Execute Algorithm`** button at the bottom of the configuration screen.

## Understanding and Using Your GP Results

After the execution finishes, the results interface will display information specific to your GP run:

### Best Individual Program & Fitness

- EvOC will show the **Best Individual Fitness** achieved.
- Crucially for GP, it will display a visualization of the **Best Individual Program** found, typically as a tree structure representing the evolved program or function. Analyze this tree to understand the solution EvOC discovered.

    ![Best Individual Program tree visualization](/images/gp-plot.png)

### Sharing Your Run

- Click **`Share Run`** to share this GP experiment (configuration and results) with other registered EvOC users.
- Enter their email addresses (comma-separated for multiple users) in the pop-up window.

    ![Sharing the run results via email addresses](./assets/showrun.jpeg)

### Viewing and Downloading Logs

- Click **`Show Logs`** to view detailed generation-wise statistics (fitness values, tree sizes, etc.).
- Click the **`Download Logs`** button within this view to save the log data (`.txt`) for detailed analysis.

    ![Viewing generation-wise logs and the download button](/images/gp-log.png)

### Viewing the Generated Code

- Click **`Show Code`** to see the underlying DEAP Python code corresponding to your GP configuration.
- Use the **`Ask EvOC AI to Explain`** feature if you need help understanding parts of the code or GP concepts.

    ![Viewing the DEAP-based Python code generated from the GP configuration](/images/gp-code.png)

### Accessing Run History

- Find your complete history of experiments, including this GP run, via the **`View Previous Runs`** or **`View All Runs`** button/link, usually accessible from the dashboard or algorithm selection areas.

---

**Next Steps:**

- Learn about **[Running a Traditional EA](./ea-run.md)**.
- Explore configuring **[Particle Swarm Optimization (PSO)](./pso-run.md)**.
- See how to use **[EA for ML Tuning](./ml-run.md)**.
