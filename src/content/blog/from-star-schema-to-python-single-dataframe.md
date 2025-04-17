---
title: 'From star schema to Python’s single Dataframe'
description: '6 min read'
pubDate: 'NOv, 22 2024'
heroImage: '/art3.webp'
---

In the world of data analysis, the choice between a star model and a simple DataFrame in Python can be crucial. Typically used with relational databases, data warehouses, data marts, OLAP tools and business intelligence tools such as Microsoft Power BI or Tableau, the star schema is a widely adopted modeling approach. However, a DataFrame in Python offers a modern, flexible alternative, simplifying data manipulation and speeding up analysis. Moving from a star model to a single DataFrame addresses specific needs such as rapid analysis, integration of diverse data sources and training of machine learning models, offering significant advantages in terms of performance, flexibility and collaboration.

##### What is a star schema model?

The star model is a database structure commonly used in data warehouses, characterized by a central fact table surrounded by several dimension tables. Each dimension offers a different angle from which to analyze the data in the fact table.
![Article](/art31.webp)

It allows data to be structured in a way that facilitates its use in the Big Data world, by separating entity information, which are dimension tables, from measures, which are fact tables, for better analysis and visualization. This article explores the advantages and disadvantages of each approach, to help you determine which is best suited to your needs.

##### What is a dimension table and what is a fact table?

A dimension table is a database table containing data that complements that contained in a fact table. It is associated with a fact table via a column called a foreign key, and contains other columns describing business entities such as products and customers, for example, in a sales model.
A fact table, on the other hand, is a table containing observable data, or facts, available on a subject, which we wish to analyze according to different axes. Facts are numerical, i.e. they can be an amount of money, a quantity of product sold… The table itself generally contains a column called the primary key, which is referenced in one or more dimension tables, and value columns that determine its granularity.

##### What are the advantages of the star schema?

**Simplicity and clarity**: its intuitive design, based on a table of facts surrounded by tables of dimensions, remains simple and clear, as it enables a rapid understanding of the relationships between data, making it easier for users to navigate and use.  
**Performance**: the star schema optimizes query performance by reducing the number of joins required, thanks to denormalized dimension tables. As a result, response times are improved, and table indexing becomes more efficient, which is crucial for analyzing large datasets quickly and efficiently.  
**Flexibility**: With this structure, adding new dimensions and attributes to the data model is very easy, and even better, it’s done without disrupting existing relationships. This means you can quickly adapt the model to changing analysis needs.  
**Ease of maintenance**: With the star schema, operations such as maintenance and data updates are so simple that changes can be made to dimension tables without significant impact on the fact table, making the whole model more robust and easier to manage.  
**Support for Multidimensional Analysis**: Thanks to its design, the star schema is ideally suited to OLAP (Online Analytical Processing) analysis and the creation of multidimensional data tables.

That said, this famous star schema favors denormalization to optimize the performance and usability of data models; a practice that is not advantageous for programming languages such as Python and R, which are widely used in data science for analysis and prediction purposes.

##### Why move from multiple tables or star files to a single Dataframe?

It’s undeniable that the star model is very popular in Big Data, and we’ve pointed this out too; yet for data analysis with a programming language like Python, it’s very advantageous to merge all these tables (files) into a single two-dimensional data structure called a Dataframe. Here are a few contexts in which it can be advantageous to switch from a star model to a single DataFrame in Python:

**Rapid exploratory analysis** : When you need to manipulate and explore data quickly and iteratively, a single DataFrame facilitates experimentation without the constraints of complex SQL queries. For example, when analyzing market trends in real time.  
**Machine learning** : To train predictive models, machine learning algorithms generally require data to be centralized. The use of a single DataFrame in Python enables seamless integration with libraries such as Scikit-Learn and TensorFlow.  
**Integration of various data sources** : When you need to merge data from multiple sources, such as APIs, CSV files and relational databases, a DataFrame lets you combine this information into a single, coherent structure for easy analysis.  
**Advanced visualization** : Projects requiring complex data visualization benefit from the use of DataFrames with Python libraries such as Matplotlib, Seaborn and Plotly, which facilitate the creation of dynamic graphs.  
**Automating data pipelines** : to automate analytical workflows, a DataFrame simplifies the ETL process (extract, transform and load) of data, enabling fast, error-free execution of repetitive tasks.    
**Collaboration and sharing** : In collaborative work environments, sharing Python scripts and notebooks containing DataFrames enables greater reproducibility and effective collaboration between team members.

##### What exactly is a Dataframe?

A dataframe is made up of rows and columns like a spreadsheet, it is mutable and is often used to read and manipulate tabular data from CSV files, databases and so on.
![Article](/art32.webp)

Here are just a few of the advantages :  
**Simplicity and efficiency** : a Python dataframe, such as that provided by Pandas, centralizes all data, simplifying its handling, cleansing and transformation.  
Improved performance : in-memory operations enable very rapid data manipulation, without the need for cumbersome SQL queries.  
**Flexibility** : The ecosystem of Python libraries (NumPy, SciPy, Scikit-Learn) offers incredible flexibility for statistical analysis and machine learning.  
**Maintenance and updating** : Python scripts are easy to maintain and update, and version control with Git facilitates collaboration.

##### So how do you go from standard star schema files to a unique data framework in Python?

The snippet below show you how It’s done
```python
import pandas as pd

# 1. Import Pandas
import pandas as pd

# 2. Load your first file (fact) into a DataFrame
fact_df = pd.read_csv('fact_sales.csv')

# 3. Load its second and third files (dimensions) respectively into two other DataFrames
dim_products_df = pd.read_csv('dim_products.csv')
dim_customers_df = pd.read_csv('dim_customers.csv')

# 4. Perform data cleansing on each file to ensure clean, ready-to-use data.
fact_df.dropna(inplace=True)  # Delete rows with missing values
fact_df.drop_duplicates(inplace=True)  # Delete duplicates

dim_products_df.dropna(inplace=True)
dim_products_df.drop_duplicates(inplace=True)

dim_customers_df.dropna(inplace=True)
dim_customers_df.drop_duplicates(inplace=True)

# 5. Identify the keys (primary for the fact table and foreign for the dimension tables)
fact_key = 'fact_id'
product_key = 'product_id'
customer_key = 'customer_id'

# 6. Merge DataFrames into one
merged_df = fact_df.merge(dim_products_df, on='product_id')\
                   .merge(dim_customers_df, on='customer_id')

# Show merged DataFrame
print(merged_df.head())
In conclusion, moving from a star model to a single DataFrame in Python can offer many advantages for modern, fast and flexible data analysis. By following the steps above, you can effectively transform your data and take advantage of Python’s powerful analytical capabilities.
```

#datascience #powerbi #analysis #python #BI #businessintelligence #sql #modelling #datamodelling #machinelearning #artificialintelligence
