---
title: Optimizing ML Models with EA
description: Use Evolutionary Algorithms in EvOC to perform feature selection for Machine Learning models, improving performance and potentially reducing complexity.
---

# Optimizing ML Models with EA

EvOC allows you to leverage the power of Evolutionary Algorithms (EAs) to optimize aspects of your Machine Learning (ML) workflow. A common application, demonstrated here, is **feature selection**, where the EA helps identify the most relevant subset of input features for your model, aiming to improve accuracy or other performance metrics.

## Configuring the ML Optimization Task

Follow these steps to set up an EA for ML model optimization (specifically feature selection in this example):

1.  **Select ML Tuning Mode:**

    - From the main EvOC Dashboard, click on the **`EA for ML Model Tuning`** option.

    ![Selecting the EA for ML Model Tuning option from the dashboard](https://i.imgur.com/YKRgaOh.png)

2.  **Provide Dataset Information:**

    - **Dataset URL:** Enter the URL pointing to your dataset file (CSV format).

    ::: tip Google Drive URL Recommended
    Using a shareable Google Drive link for your CSV dataset is the preferred method, ensuring easy access for the EvOC backend. Make sure the link permissions allow viewing.
    :::

    - **Target Column Name:** Enter the exact name of the column in your dataset that contains the target variable your ML model aims to predict.
    - **Delimiter:** Specify the character used to separate values in your CSV file (usually a comma `,`).

3.  **Define ML Model and Evaluation:**

    - **ML Import Code:** This section allows you to specify the ML model and any necessary libraries (e.g., from `sklearn`). The default includes a basic model like Logistic Regression and standard metrics. You can customize this to import different models or metrics.
    - **ML Evaluation Function Code:** This core piece defines how the EA evaluates each potential solution (i.e., each subset of features). The default function typically:
        - Takes an `individual` (representing a feature subset, a binary list where `1` means select and `0` means discard) and the dataset (`X`, `y`).
        - Selects the columns from `X` corresponding to `1`s in the `individual`.
        - Trains the specified ML model (`LogisticRegression` by default) on the selected features.
        - Evaluates the model's performance (e.g., `accuracy_score`) on a test split.
        - Returns the performance metric as the fitness value for the EA to optimize.
    - You can modify this Python code to use different models, evaluation metrics (like F1-score, AUC), or implement more complex cross-validation strategies.

    ![Configuration fields for dataset URL, target column, delimiter, ML import code, and ML evaluation function code](https://i.imgur.com/zvjyqKU.png)

    ::: info Important Configuration Notes

    - Ensure the **Target Column Name** matches your dataset _exactly_.
    - If you modify the **ML Import Code** to use different models/metrics, ensure they are correctly imported and used within the **ML Evaluation Function Code**.
    - The default **Evaluation Function** performs basic feature selection based on the model's accuracy. Customize it carefully if you have different optimization goals.
      :::

4.  **Configure EA Parameters:**

    - Set the standard EA parameters similar to a traditional EA run:
        - Algorithm Strategy (e.g., `eaSimple`)
        - Weights (usually maximizing the ML metric, e.g., weight `+1.0` for accuracy)
        - Mating/Crossover Function
        - Mutation Function
        - Selection Function
        - Population Size, Generations, Crossover/Mutation Probabilities.

5.  **Execute the Algorithm:**
    - Click the **`Execute Algorithm`** button to start the feature selection process.

## Understanding and Using Your ML Optimization Results

After the run completes, analyze the results:

### Fitness Plot & Best Feature Set

- The **Fitness Plot** shows how the best ML model performance (e.g., accuracy) found in the population evolved over generations.
- The **Best Individual Fitness** indicates the highest performance metric achieved.
- The **Best Individual** section is crucial: it typically shows the binary vector representing the **optimal subset of features** selected by the EA. A `1` at a position indicates that the corresponding feature from your original dataset should be included for the best performance found.

    ![Results page showing the fitness plot and best individual details (selected features)](https://i.imgur.com/p8zyS2k.png)

### Sharing Your Run

- Click **`Share Run`** to share this specific ML optimization setup and outcome with other EvOC users via email.

    ![Sharing the run results via email addresses](https://i.imgur.com/US3uH0p.png)

### Viewing and Downloading Logs

- Use **`Show Logs`** to view the generation-wise best fitness values achieved during the optimization.
- Click **`Download Logs`** to save this data (`.txt`) for offline analysis.

    ![Viewing generation-wise logs for the ML optimization run and the download button](https://i.imgur.com/Z24bLCQ.png)

### Viewing the Generated Code

- Inspect the underlying EA code (using DEAP) and the integrated ML evaluation logic by clicking **`Show Code`**.
- Use **`Ask EvOC AI to Explain`** for help understanding the code.

    ![Viewing the Python code generated for the EA-based ML feature selection](https://i.imgur.com/RQBZmiE.png)

### Accessing Run History

- Find all your past experiments, including ML tuning runs, in the **`View Previous Runs`** or **`View All Runs`** section.

---

**Next Steps:**

- Learn about **[Running a Traditional EA](./ea-run.md)** _(<- Adjust Link)_.
- Explore configuring **[Genetic Programming (GP)](./gp-run.md)** _(<- Adjust Link)_.
- Learn about **[Particle Swarm Optimization (PSO)](./pso-run.md)** _(<- Adjust Link)_.
