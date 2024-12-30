---
title: 'Shampoo Sales Analysis'
description: 'A Machine Learning Time Series Problem'
pubDate: 'November 2024'
heroImage: /shampoo.webp
projectType : ML
---

## Background & Objective

The objective of this project is to forecast shampoo sales using various time series models and machine learning. Accurately predicting future sales can help optimize production, inventory management and marketing strategies.

## Data Used

The data used comes from monthly shampoo sales history. The data was explored to understand trends and seasonality

## Methodology

### 1. Data preparation

Logarithmic transformation to stabilize variance.
Checked for stationarity and differentiated if necessary

### 2. Modeling

Implementation of several models to capture trends and seasonal effects: SARIMA, Prophet, Linear regression and LSTM (Deep Learning Long Short-Term Memory)
```python
from statsmodels.tsa.statespace.sarimax import SARIMAX
model = SARIMAX(train, order=(0,1,1), seasonal_order=(0,1,0,12))    
model_fit = model.fit(disp=False)
```

### 2. Validation

- Division of data into training and test sets.
- Evaluation of model performance with metrics such as RMSE, MAE and R².
- Comparison of models to select the one with the best performance.

## Preliminary results

### SARIMA :

- RMSE: 172.37 - Indicates a large mean prediction error.
- R² : -1.36 - Suggests that the model does not explain the data variance well.
- MAE : 140.16 - Shows significant prediction errors.

### Prophet :

- RMSE : 161.26 - Shows slight improvement over SARIMA.
- R² : -1.06 - Also indicates that the model does not explain data variance well.
- MAE : 131.30 - Indicates still significant prediction errors.
- MSE : 26004.22 - Confirms that prediction errors are significant

<div class="grid grid-cols-2 gap-1">
    <img src="/proj12.webp"/>
    <img src="/proj13.webp" />
</div>                  


[Github](https://github.com/peterciya/Ciya-Analytics/tree/main/Shampoo)
