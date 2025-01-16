---
title: 'Sales and Profit Analysis'
description: 'A Data visualization and Business Intelligence Project with Power BI'
pubDate: 'August 2024'
heroImage: /proj3.webp
projectType : Business Intelligence
---


## Context
In a competitive business environment, companies must constantly analyze and optimize their performance to remain profitable. This analysis often relies on historical data on sales, expenses, products, and customers. The goal is to transform this data into actionable insights to make strategic decisions.

## Objectives
1. Identify the products that generate the most profits.

2. Calculate the total amount of profits and expenses.

3. Analyze profits by product category and by period (monthly).

4. Determine the best-selling products and the most profitable customers.

5. Visualize the data to facilitate understanding and decision-making.

## Business Questions
1. Which products have generated the most profits?

2. What is the total amount of profits realized?

3. What is the total amount of expenses incurred?

4. What are the profits by product category?

5. What are the monthly profits and budgets?

6. What are the best-selling products?

7. Who are the customers that have generated the most profits?

## My Solution
I use Power BI to connect to data sources, model the data in a star schema, and perform advanced calculations using DAX. Visualize the results through interactive charts to answer the Business questions.

#### Connecting to the Data Source 
In this case, an excel file.

#### Modeling Tables in a Star Schema
This Excel file contains data subdivised into 5 columns: Customer, Product, Territories, Sales and Budget. 
As a result these columns are considered as tables in our modeling, among which are fact and dimension tables.
1. Fact Tables: Budget and Sales.
2. Dimension Tables: Customer, Product and Territories.
3. To facilitate the propagation of temporal filters we have created, thanks to DAX, the time table, which is also a dimension table.
```DAX
Calendar = ADDCOLUMNS(
    CALENDARAUTO(),
    "Year", FORMAT([Date], "YYYY"),
    "MonthNumber", FORMAT([Date], "mm"),
    "Month", FORMAT([Date], "Mmmm")
)
```
Finally, we have linked all these tables together to enable us to move on to the next phase:
![Project 3](/proj32.webp) 

## Some DAX Calculations

The following formula is the answer to the question "What is the total amount of expenses incurred?"
```DAX
Sales = SUM(Sales[SalesAmount])
```
This one is the answer to: "What is the total amount of profits realized?"
```DAX
Variance = Sales[Sales] - Budget[Budget]
```
And thi is the same as the previous one, but in percentage terms.
```DAX
Variance% = DIVIDE([Variance], Budget[Budget])
```
And for th other answers to the businees questions, explore the report interactvely in the Power BI Service.

## Conclusion
This analysis can allow the company to better understand its performance, identify opportunities for improvement, and make informed decisions to maximize profits and minimize costs.

<div class="grid grid-cols-2 gap-1">
    <img src="/proj2.webp"/>        
    <img src="/art1.webp" />
</div> 

[PowerBI](https://app.powerbi.com/links/nOYf1O3v3n?ctid=84c31ca0-ac3b-4eae-ad11-519d80233e6f&pbi_source=linkShare)
