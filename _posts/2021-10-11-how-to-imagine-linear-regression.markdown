---
layout: post
title: How to Imagine Linear Regression
date: 2021-10-11 21:08:25 +07:00
description: You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. # Add post description (optional)
img: i-linreg.jpg # Add image post (optional)
fig-caption: A Comet passing through the stars represents a linear regression # Add figcaption (optional)
tags: [Machine Learning]
---
You should've already know that linear regression is a linear model that is used to predicts scalar target/response based on its relationship with explanatory variable using the linear function. We can see it as a line that goes through the
small or big amount of data. The line is designed by the matematical equation which we called a function, a linear one. If you don't have a grasp about what linearity is, it's just a thing that have a constant change over time, like our age, we sure will get 1 year older for every year we passed.

Aside from linearity, what does the "regression" means in linear regression?, well it's a reduction from the original state of something. Then, which reduction do we see in there? it's just a line that overlap the data, how can they see it as a reduction?. If you look closely, you'll notice that those line that we're talking about is try to simply explain the relationship between a response and explanatory variables. The explanation here is simplified by the form of a line that goes through the data. That is the reduction part lies, **the line is the reduced form of explanation**.

## The Mathematical Functions
The mathematical functions that design the regression line is:  
<center>$$ \hat{y} = \beta_{0} + x_{1}\beta_{1} + ... + x_{n}\beta_{n} $$</center>  
$$ \hat{y} $$ is the estimation of response, $$ \beta_{0} $$ is the intercept, $$ \beta_{n} $$ is the coefficients of regression and $$ x_{n} $$ is the explanatory variables. In Machine Learning, we would call response as target, intercept as bias, coefficients as weight (interchangeably) and explanatory variables as features. The best way to understand this equation is by seeing the graphs its represent.

![I and My friends]({{site.baseurl}}/assets/img/we-in-rest.jpg)

As you can see from the graphs, $$ \beta_{0} $$ or the bias is responsible to adjust the height of the line, while the $$ \beta_{n} $$ or the weights is responsible to adjust the slope of the line. Both of them will be set to approximate the input data (features) to get as close as possible to the output data (target). In order to do so, they need to minimize the Residual Sum Square of Error (RSS). This RSS is just a square difference between the estimated target and the true target. It measures the performance of regression model (not the overall performance though).

## Matrix Form Calculation

After knowing the mathematical functions, are you curious about how to find this specific bias and weights?. They can be find using matrix form multiplication:   
<center>$$ \hat{y} = X\hat{\beta} = \hat{\beta} = X(X^{T}X)^{-1}X^{T}y $$</center>  

Here we can see the multiplications factor $$ H = X(X^{T}X)^{-1}X^{T} $$ is called the "hat" matrix, I remembered what Prof. Gilbert Strang said in the MIT 18.065 videos, he said something like this **"The matrix multiplication of $$ AB $$ can be represent as transforming the $$ B $$ matrix into the column space of $$ A $$"**.
We can say that this column space of $$ A $$ is just a dimensional space that has been spaned by the vectors of $$ A $$. We can also do the same with $$ y $$ here, it's also transformed into the column space of $$ X $$. That is what happened when we use linear regression, we just projecting $$ y $$ into the subspace of $ X $$. If you want to know about linear transformation, checkout 13lue Brown series about linear algebra to understand the meaning behind matrix multiplication [here][13BlueBrown].

Then, $$ X $$ is a matrix which the column vectors are consist of $$ x_{0}, x_{1}, ..., x_{p} $$, with $$ x_{0} \in 1 $$. $$ x_{0} $$ is just a constant variable 1 that will determine the value of bias or $$ \beta_{0} $$ and the rest will determine the value of weights. Now, I want you to try implement the formula by yourself to get a good grasp about the calculation. Use whether R, Python or anything else. It is a good practice to try implement the calculation, you can also try implement the matrix multiplication here, create a 2D matrix and multiply it with vector then plot the result. See the difference between the regular vector and the transformed vector.

# Conclusion
I know that I have thrown you some math equation, but trust me that the mathematics representation gives the explanations accurately. Then, the visualization will make you understand about what is going on inside the linear regression. It is just a projection of $$ y $$ into the subspace of $$ X \in \mathbb{R}^{n} $$, you can read $$ \mathbb{R}^{n} $$ as the real coordinate space of n-dimension. You can also imagine it as finding the combination of bias and weights that will fit the data well and minimize the error. If you have a different ways to imagine linear regression, use your method then. I wouldn't restrict anyone to use theirs learning method. 

Finally, set aside the formula and projection, imagine that linear regression can take a form as a comet that passing through so many stars. Let the comet trail be the regression line and the stars be the units of data.

![Comet as Linear Regression]({{site.baseurl}}/assets/img/i-linreg-comet.jpg)

[13BlueBrown]: https://www.youtube.com/playlist?list=PL0-GT3co4r2y2YErbmuJw2L5tW4Ew2O5B