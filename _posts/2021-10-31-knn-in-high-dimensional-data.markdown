---
layout: post
title: KNN in High Dimensional Data
date: 2021-10-11 23:54:25 +07:00
description: KNN is a simple and lazy algorithm but it has a significnt drawback, that is a high dimensionality. We'll find out why such high dimensionality can affect our KNN model. # Add post description (optional)
img: k-baloons.jpg # Add image post (optional)
fig-caption: The more air inside the baloon, the more it'll expands. The same goes to high dimensional space. # Add figcaption (optional)
tags: [Machine Learning, Mathematics]
---
K-nearest Neighbors or known as KNN is a non parametric algorithm in supervised learning. It's said so because the model doesn't have assumption about how the data is distributed. KNN only pays attention about the presence of the neighbors in each of the data point. The predictions is declared by finding the most common and nearest class in the surrounding of data point. It has a parameter `k` to decide on how many neighbors to be consider with. If it `k=1`, we'll only find one nearest neighbors. Else if `k=3`, we'll find three nearest neighbors, and then decided which class of the neighbors that is the majority among the total of `k`. Suppose we have 3 nearest neighbors from a data point `x`, 2 of them are from class A and the rest is from class B. Then, the data point `x` is classified as class A.

# Regarding the Cursed of Dimensionality

