---
layout: post
title: KNN in High Dimensional Data
date: 2021-10-31 23:54:25 +07:00
description: KNN is a simple and lazy algorithm but it has a significnt drawback, that is a high dimensionality. We'll find out why such high dimensionality can affect our KNN model. # Add post description (optional)
img: k-baloons.jpg # Add image post (optional)
fig-caption: The more air inside the baloon, the more it'll expands. The same goes to high dimensional space. # Add figcaption (optional)
tags: [Machine Learning, Mathematics]
---
K-nearest Neighbors or known as KNN is a non parametric algorithm in supervised learning. It's said so because the model doesn't have assumption about how the data is distributed. KNN only pays attention about the presence of the neighbors in each of the data point. The predictions is declared by finding the most common and nearest class in the surrounding of data point. It has a parameter **k** to decide on how many neighbors to be consider with. If it **k=1**, we'll only find one nearest neighbors. Else if **k=3**, we'll find three nearest neighbors, and then decided which class of the neighbors that is the majority among the total of **k**. Suppose we have 3 nearest neighbors from a data point **x**, 2 of them are from class A and the rest is from class B. Then, the data point **x** is classified as class A.

<br/>

# Into the Curse of Dimensionality 
The higher the dimensionality of data, the higher the space will. What we always see about KNN is when we try to classify some data points in low dimensional space. We could clearly see the process in 2-D space, where we only have two variables intact. We can also tell by eyes which data point is classified as. Unfortunately, as the dimension goes larger, that is when we use KNN with more variables, our KNN is not effective as before. The problem is caused by the curse of dimensionality, more dimensions more problems, I'll explain why.

<br/>

# Distance Metric in High Dimension
Let me tell you first about how we can tell that the neighbors is the nearest. The way it calculated commonly is by using euclidean distance.

<center>$$ d(p,q) = \sqrt{(p_{1} - q_{1})^{2} + (p_{2} - q_{2})^{2}} $$</center>
<center><i>Euclidean distance in two dimension</i></center>

What the formula said is, the distance from one data point to another is the length of the line segment between them. There is no much problem when calculating this distance in lower dimensional space, we are good to go. The space takes a form as line in 1-D, plane in 2-D and cube in 3-D. In high dimension, the form is kinda different. It forms as some sort of **hypercube** or **hypersphere**, but now I'll use **hypershpere** as the space representation in high dimension.

Remember that as the dimensionality goes higher, the space will increase exponentialy. The data points within this space is appear to be sparse and become dissimilar in many ways. Thus, calculating the euclidean distance seems to be not a good idea. The property of sparsity makes our data scatter more distant than usual. Eventually, there is almost no neighbors in such a high dimension. This is a violation of the assumption of KNN which says that **similar things exist in close proximity**. 

Additionaly, when we try to classify a new data point, the distance to the other data points will become more similar, and this'll make an uncertainty about the model. How can that happens? it happens because in a **hypersphere**, multiple data point will lying and disperse around a circle and the new data point would likely to be placed on the center, thus it makes the distance become similar. It differs when we saw multiple data points in 2-D plane, the groups are likely to be closer with another, and we can still manage to classify new data point as a part of the group or class.

<br/>

# Could we use KNN in High Dimension?
Okay this'll be short. The amount of sample that we need in high dimensional space is proportionally exponential with the number of **D** or dimension. Take a look at the plot.

I can clearly see that the amount of samples I need to safely go through the high dimension is become unmanageable. I didn't say that this is impossible, but it's not worth it. Why would I bother to commit something that would bring me a frustation? I'd rather do something about the high dimension and how to overcome it. Once again the answer is no.

<br/>

# Conclusion
Dealing with high dimensional is a hard problem to tackle, especially for a simple model like KNN. The number of samples goes up exponentially and we can't manage to get such number of samples. More volume on space, more samples we need. Like I say before "I'd rather do something about the high dimension", therefore I need to reduce it. Dimensionality reduction is used in Unsupervised Learning, where we only give input data to the machine, then this machine need to find the relationship between this input data. One of the method is Dimensionality Reduction. What'll we do is to decompose our matrix representation of data and then fetch N-vector with high importance. That topic is will be discussed on another post though, you can also try to find what are the drawbacks when we have too many variable. Well, see you in the next post.