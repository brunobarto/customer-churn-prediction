# customer-churn-prediction
project 3 of portfolio for ML 

Overview
This project focuses on developing a machine learning model to predict customer churn. The goal is to identify customers who are likely to stop using a service, enabling proactive retention efforts. The entire workflow, from data exploration to model evaluation, is implemented in a Jupyter Notebook using Python and popular data science libraries.

Motivation
Retaining existing customers is often more cost-effective than acquiring new ones. By building an accurate churn prediction model, businesses can:

-Identify at-risk customers.
-Implement targeted retention strategies.
-Reduce customer attrition.
-Improve overall business profitability.

Jupyter Notebook (customer_churn_prediction.ipynb)
The core of this project is the Jupyter Notebook, which encompasses the following key stages:

Data Loading and Exploration: Loading the dataset (assumed to be in your_dataset.csv) and performing initial exploratory data analysis to understand its structure, features, and target variable ('Churn'). This includes visualizing data distributions and identifying potential issues like missing values.
Data Preprocessing: Cleaning and preparing the data for machine learning models. This involves:
Handling missing values (e.g., imputation).
Encoding categorical features (using Label Encoding and One-Hot Encoding).
Scaling numerical features (using StandardScaler).
Feature Engineering (Optional): Creating new features from existing ones to potentially improve model performance. An example implemented is grouping customer tenure.
Model Selection and Training: Training and comparing the performance of several classification models:
Logistic Regression
Random Forest Classifier
Gradient Boosting Classifier
Model Evaluation: Assessing the performance of the trained models on a held-out test set using various metrics:
Accuracy
Classification Report (Precision, Recall, F1-Score)
Confusion Matrix (visualized as a heatmap)
Feature Importance (for tree-based models, visualized as bar plots)
Visualization of Results: Utilizing libraries like Matplotlib and Seaborn to create informative visualizations, including:
Distribution of the target variable.
Confusion matrices for each model.
Feature importance plots.
Correlation heatmap of features.
Interpretation and Conclusion: Summarizing the findings, comparing model performances, and discussing the potential implications of the results.
Key Findings (Example - Replace with your actual findings)
The Gradient Boosting Classifier demonstrated the highest accuracy on the test set (e.g., 80%).
Key features influencing churn, as identified by tree-based models, include contract type, tenure, and monthly charges.
The confusion matrices highlight the types of errors each model makes, providing insights into their strengths and weaknesses.
