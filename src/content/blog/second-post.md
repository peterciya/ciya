---
title: '8 Python libraries every data analyst should know about'
description: '7 min read'
pubDate: 'Nov, 11 2024'
heroImage: '/art2.webp'
---

Whether you’re a data analyst, data scientist, beginner, expert or simply an aspiring data scientist, you should know that one day you’ll probably be working with the powerful Python programming language. Python not only allows you to manipulate and visualize data, but also to perform machine learning tasks. Thanks to its numerous libraries, Python enables you to perform tasks efficiently and intuitively. In this article, we’ll explore eight Python libraries essential for any data analyst: Pandas, NumPy, Seaborn, Matplotlib, SciPy, PyODBC, Statsmodels and Scikit-learn. Each of these libraries plays a crucial role in data analysis, and will help you extract meaningful insights from your datasets.

**1. Pandas:** This is one of the most widely used libraries in the field of data science or big data, as it is specifically designed to manipulate and analyze data efficiently. It offers flexible structures for working with tabular data such as spreadsheets (in csv, xls, xlsx, tsv… formats) or databases, and this is where it proves to be a very powerful tool as it can manipulate, load, clean, transform, merge and reshape data thanks to its multiple functions and methods. Pandas can also be integrated with other libraries; in fact, it can be used as an input for data visualization in MatplotLib or Seaborn, for statistical analysis in SciPy, for Machine Learning algorithms in Sckit-learn, etc.
```python
import pandas as pd

# Load a CSV file
df = pd.read_csv('data.csv')

# Display the first lines of the DataFrame
print(df.head())

# Calculate descriptive statistics
print(df.describe())
```

**2. NumPy:** short for Numerical Python, it provides an efficient multi-dimensional array object called ndarray (N-dimensional array) for fast array-oriented arithmetic calculations. These arrays are faster, more compact and more convenient than traditional Python lists for mathematical operations. Numpy offers functions for performing basic operations in linear algebra and statistics, as well as complex operations such as Fourier transforms. This means you can perform comparisons, select elements, replace values, etc. without the need for explicit loops. In conclusion, Numpy is an indispensable tool for anyone involved in data-intensive calculations, and is used in data science, machine learning and engineering, as it is often the basis of libraries such as Pandas, MatplotLib and Scikit-learn.
```python
import numpy as np

# Create a NumPy array
array = np.array([1, 2, 3, 4, 5])

# Calculate the average
mean = np.mean(array)

# Perform a mathematical operation
squared = np.square(array)
```

**3. Matplotlib:** is a Python library for creating different types of statistical graphs to explore and present data in a clear and visually effective way. It can generate graphs such as bar charts or histograms, as well as more complex three-dimensional figures. Graphs are created using data in the form of key/value pairs for the X and Y axes, known as “plotting”. Matplotlib offers a multitude of functions for creating different plots, including bars, pie charts, scatter plots and much more. In short, Matplotlib is a data visualization tool in Python.
```python
import pandas as pd
import matplotlib.pyplot as plt

# Load a CSV file
df = pd.read_csv('data.csv')
# Create a new figure with a specific size (width of 12 inches and height of 5 inches)
plt.figure(figsize=(12, 5))

# Plot the data: 'date' on the x-axis and 'value' on the y-axis
# Use red color for the line and set the line width to 1
plt.plot(df['date'], df['value'], color='red', linewidth=1)

# Add a title to the plot
plt.title('Data visualization')

# Add a label to the x-axis
plt.xlabel('Date')

# Add a label to the y-axis
plt.ylabel('Views')

# Display the plot
plt.show()
```
![Article](/art21.webp)
**4. Seaborn:** like Matplotlib and based on Matplotlib, Seaborn is also a Python library for data visualization. Although based on Matplotlib, Seaborn offers a high-level interface for creating attractive and informative graphs, with color palettes, automatic axis adjustment functions and tools for visualizing more complex relationships between variables. In addition to all the extra features, Seaborn is easy to use, which is not the case with Matplotlib.
```python
import seaborn as sns
import matplotlib.pyplot as plt

# Load a CSV file
df = pd.read_csv('data.csv')

# Copy and modify data for the monthly bar chart
df['year'] = df['date'].dt.year
df['month'] = df['date'].dt.month
df_bar = df.groupby(['year', 'month'])['value'].mean().unstack()
    
# Create figure and axes
fig, ax = plt.subplots(figsize=(12, 6))
    
# Draw bar graph
df_bar.plot(kind='bar', ax=ax)
    
# Define title and labels
ax.set_title('Average Daily Page Views per Month')
ax.set_xlabel('Years')
ax.set_ylabel('Page Views')
    
# Define legend title
ax.legend(title='Months', labels=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])

# Display the plot
plt.show()
```
![Article](/art22.webp)
**5. Scipy:** this is also one of the Python libraries a data analyst should know about, as it complements Numpy’s functionality by providing tools (functions) that explore and solve complex mathematical problems. With Scipy, we can add regression models, generate random distributions, solve systems of linear equations, invert matrices and more. What’s more, we can even manipulate images.
```python
from scipy.integrate import quad

# Define a function to integrate
def integrand(x):
    return x**2

# Calculate the integral of the function from 0 to 1
result, error = quad(integrand, 0, 1)
print(f"Result: {result}, Error: {error}")
```
**6. Pyodbc:** this is a Python library used to interact with various databases such as SQL Server, MySQL, PostgreSQL, Oracle and so on. It is essential for extracting, transforming or simply loading data. Connection is via a connection string containing information such as server name, database name, username and password. With pyodbc, you need to pay attention to the DBMS dialect you’re interacting with when writing SQL queries.
```python
import pyodbc

# Establish a database connection via ODBC
conn = pyodbc.connect('DRIVER={SQL Server};SERVER=server_name;DATABASE=db_name;UID=user;PWD=password')

# Create a cursor to execute SQL commands
cursor = conn.cursor()

# Execute an SQL query to select all the rows in a table
cursor.execute('SELECT * FROM table_name')

# Browse and display query results
for row in cursor:
    print(row)
```
**7. Scikit-learn:** In addition to its machine learning capabilities, scikit-learn enables statistical analysis and visualization of data, providing methods for evaluating and interpreting model results. It offers a wide range of tools for data pre-processing, dimension reduction and feature extraction, making it easy to explore and prepare data for further analysis. The library also offers a wide range of algorithms for tasks such as classification, regression and clustering. Scikit-learn stands out for its ease of use and consistent interface, making it an ideal tool for developers and researchers wishing to rapidly implement and test predictive models.
```python
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
import pandas as pd

# Load a dataset from a CSV file
data = pd.read_csv('data.csv')

# Define independent (X) and dependent (y) variables
X = data[['feature1', 'feature2']]
y = data['target']

# Split data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train a linear regression model on training data
model = LinearRegression()
model.fit(X_train, y_train)

# Predict target values for test set
y_pred = model.predict(X_test)

# Calculate the mean square error between actual and predicted values
mse = mean_squared_error(y_test, y_pred)
```
**8. Statsmodels:** dedicated to statistical analysis, this library focuses on the estimation of statistical models, hypothesis testing and the production of descriptive statistics. Statsmodels is particularly useful for in-depth statistical analysis, offering tools for linear regression, logistic regression and ARIMA models for time series. It provides detailed summaries of model results, including statistical tests and confidence intervals, enabling in-depth interpretation of model coefficients and rigorous evaluation of statistical assumptions.
```python
import pandas as pd
import matplotlib.pyplot as plt
from statsmodels.tsa.arima.model import ARIMA
from statsmodels.tsa.seasonal import seasonal_decompose

# Read the Excel file, using the 'date' column as an index, and converting the dates into datetime objects.
df = pd.read_excel('data.xlsx', index_col='date', parse_dates=True)

# Seasonal decomposition to check components
decomposition = seasonal_decompose(df_cholera, model='additive', period=12)
decomposition.plot()
plt.show()

# Division of data into training and test sets
train = df.iloc[:-12]
test = df.iloc[-12:]

# ARIMA model training with parameters p=1, d=1, and q=1 
model = ARIMA(train, order=(1, 1, 1))
model_fit = model.fit()

# Make forecasts on the test set
predictions = model_fit.predict(start=test.index[0], end=test.index[-1], typ='levels'))

# Train the final model on the complete data set
final_model = ARIMA(df['value'], order=(1, 1, 1))
final_model_fit = final_model.fit()

# Visualize results
plt.figure(figsize=(10, 6))
plt.plot(train.index, train['value'], label='Train')
plt.plot(test.index, test['value'], label='Test')
plt.plot(test.index, predictions, label='Predictions', color='red')
plt.legend()
plt.title('ARIMA Model Predictions')
plt.xlabel('Date')
plt.ylabel('Value')

# Make forecasts for the next 12 months
future_forecast = final_model_fit.forecast(steps=12
```
Basically, these are the 8 libraries that, in my experience, a data analyst should know in order to accomplish his or her daily tasks. That said, this list may vary according to individual preferences or experience, but here are the most important or most frequently used.

#datascience #computerscience #dataanalysis #machinelearning #python #pythonlibrairies #algorithms #projects #analytics #analysts #bi #powerbi
