---
title: 'Demographic Data Analyzer'
description: 'An Exploratory Data Analysis Project'
pubDate: 'November 2024'
heroImage: /proj21.webp
projectType : Machine Learning
---

The dataset is derived from the 1994 Census database, containing 32,561 rows and 15 columns. The aim of this project is to demonstrate how to use the powerful Pandas library to analyze data by answering business questions.
              
## Problem

A business question in data analysis is one that aims to solve a problem or provide valuable insights for strategic decision-making within a company or organization. Below are the questions that this project answers:  
1. How many people of each race are represented in this dataset? This should be a Pandas series with race names as the index labels. (race column)?  
2. What is the average age of men?  
3. What is the percentage of people who have a Bachelor's degree?  
4. What percentage of people with advanced education (Bachelors, Masters, or Doctorate) make more than 50K?  
5. What percentage of people without advanced education make more than 50K?   
6. What is the minimum number of hours a person works per week?  
7. What percentage of the people who work the minimum number of hours per week have a salary of more than 50K?  
8. What country has the highest percentage of people that earn >50K and what is that percentage?  
9. Identify the most popular occupation for those who earn >50K in India.

## My Solution
1. How many people of each race are represented in this dataset? This should be a Pandas series with race names as the index labels. (race column)?  
```python
df['race'].value_counts()
```
**66.92%**

2. What is the average age of men?
```python
df[df['sex'] =='Male'].value_counts().sum() * 100 / df.value_counts().sum()
```
**39.43%**

3. What is the percentage of people who have a Bachelor's degree?
```python
round(df[df['education'] == 'Bachelors'].value_counts().sum() * 100 / df.value_counts().sum(), 1)
```
**16.44%**

4. What percentage of people with advanced education (Bachelors, Masters, or Doctorate) make more than 50K? 
```python
round(df.loc[(df['education'].isin(['Bachelors', 'Masters', 'Doctorate'])) &(df['salary'] == '>50K')].value_counts().count() * 100 / (df['salary'] == '>50K').value_counts().sum(), 1)
```
**12.29%**

5. What percentage of people without advanced education make more than 50K?  
```python
df.loc[~(df['education'].isin(['Bachelors', 'Masters', 'Doctorate'])) &(df['salary'] == '>50K')].value_counts().count() * 100 /  df['education'].value_counts().sum()
```
**13.36%**

6. What is the minimum number of hours a person works per week? 
```python
df['hours-per-week'].min()
``` 
**1**

7. What percentage of the people who work the minimum number of hours per week have a salary of more than 50K? 
```python
df.loc[(df['hours-per-week'].min()) & (df['salary'] == '>50K')].value_counts().sum()/df.value_counts().sum()
```
**24.08%**

8. What country has the highest percentage of people that earn >50K and what is that percentage?
```python
df[df['salary'] == '>50K'].groupby('native-country').size().idxmax()
import math
round((df[df['salary'] == '>50K'].groupby('native-country').size() / df.groupby('native-country').size()).loc[lambda x: x.idxmax()] * 100, 1)
```  
**United States: 41.9%**

9. Identify the most popular occupation for those who earn >50K in India.
```python
df[(df['native-country'] == 'India') & (df['salary'] == '>50K')].groupby(df['occupation']).size().sort_values(ascending=False).reset_index(name='Most popular occupation of those who earn more than 50K')
```  
**1.  Prof-specialty	 25**  
**2.	Exec-managerial	 8**  
**3.	Other-service	 2**  
**4.	Tech-support	 2**  
**5.	Adm-clerical	 1**  
**6.	Sales	         1**  
**7.	Transport-moving 1**

<div class="grid grid-cols-2 gap-1">
    <img src="/proj2.webp"/>        
    <img src="/proj22.webp" />
</div>   



[Github](https://github.com/peterciya/Ciya-Analytics/tree/main/Demographic%20Data%20Analyzer)
