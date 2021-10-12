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

Aside from linearity, what does the "regression" means in linear regression?, well it's a reduction from its original state. Then, which reduction do we see in there? it's just a line that overlap the data, how can they see it as a reduction?. If you look closely, you'll notice that those line that we're talking about is try to **simply explain** the relationship between a response and explanatory variables. The explanation here is simplified by the form of a line that goes through the data. That is the reduction part lies, **the line is the reduced form of explanation**.

## The Mathematical Functions
The mathematical functions that design the regression line is:  
<center>$ \hat{y} = \beta_{0} + \beta_{1}X_{1} + ... + \beta_{n}X_{n} $</center>  
$ \hat{y} $ is the estimation of response, $ \beta_{0} $ is the intercept, $ \beta_{n} $ is the coefficients of regression and $ X_{n} $ is the explanatory variables. In Machine Learning, we would call response as target, intercept as bias, coefficients as weight (interchangeably) and explanatory variables as features. The best way to understand this equation is by seeing the graphs its represent.

![I and My friends]({{site.baseurl}}/assets/img/we-in-rest.jpg)

As you can see from the graphs, $ \beta_{0} $ or the bias is responsible to adjust the line height, while the $ \beta_{n} $ or the weights is responsible to adjust the slope of the line. Both of them will try to approximate the input data (features) to get as close as possible to the output data (target).  

>Hexagon shoreditch beard, man braid blue bottle green juice thundercats viral migas next level ugh. Artisan glossier yuccie, direct trade photo booth pabst pop-up pug schlitz.

Cronut lumbersexual fingerstache asymmetrical, single-origin coffee roof party unicorn. Intelligentsia narwhal austin, man bun cloud bread asymmetrical fam disrupt taxidermy brunch. Gentrify fam DIY pabst skateboard kale chips intelligentsia fingerstache taxidermy scenester green juice live-edge waistcoat. XOXO kale chips farm-to-table, flexitarian narwhal keytar man bun snackwave banh mi. Semiotics pickled taiyaki cliche cold-pressed. Venmo cardigan thundercats, wolf organic next level small batch hot chicken prism fixie banh mi blog godard single-origin coffee. Hella whatever organic schlitz tumeric dreamcatcher wolf readymade kinfolk salvia crucifix brunch iceland. Literally meditation four loko trust fund. Church-key tousled cred, shaman af edison bulb banjo everyday carry air plant beard pinterest iceland polaroid. Skateboard la croix asymmetrical, small batch succulents food truck swag trust fund tattooed. Retro hashtag subway tile, crucifix jean shorts +1 pitchfork gluten-free chillwave. Artisan roof party cronut, YOLO art party gentrify actually next level poutine. Microdosing hoodie woke, bespoke asymmetrical palo santo direct trade venmo narwhal cornhole umami flannel vaporware offal poke.

* Hexagon shoreditch beard
* Intelligentsia narwhal austin
* Literally meditation four
* Microdosing hoodie woke

Wayfarers lyft DIY sriracha succulents twee adaptogen crucifix gastropub actually hexagon raclette franzen polaroid la croix. Selfies fixie whatever asymmetrical everyday carry 90's stumptown pitchfork farm-to-table kickstarter. Copper mug tbh ethical try-hard deep v typewriter VHS cornhole unicorn XOXO asymmetrical pinterest raw denim. Skateboard small batch man bun polaroid neutra. Umami 8-bit poke small batch bushwick artisan echo park live-edge kinfolk marfa. Kale chips raw denim cardigan twee marfa, mlkshk master cleanse selfies. Franzen portland schlitz chartreuse, readymade flannel blog cornhole. Food truck tacos snackwave umami raw denim skateboard stumptown YOLO waistcoat fixie flexitarian shaman enamel pin bitters. Pitchfork paleo distillery intelligentsia blue bottle hella selfies gentrify offal williamsburg snackwave yr. Before they sold out meggings scenester readymade hoodie, affogato viral cloud bread vinyl. Thundercats man bun sriracha, neutra swag knausgaard jean shorts. Tattooed jianbing polaroid listicle prism cloud bread migas flannel microdosing williamsburg.

Echo park try-hard irony tbh vegan pok pok. Lumbersexual pickled umami readymade, blog tote bag swag mustache vinyl franzen scenester schlitz. Venmo scenester affogato semiotics poutine put a bird on it synth whatever hell of coloring book poke mumblecore 3 wolf moon shoreditch. Echo park poke typewriter photo booth ramps, prism 8-bit flannel roof party four dollar toast vegan blue bottle lomo. Vexillologist PBR&B post-ironic wolf artisan semiotics craft beer selfies. Brooklyn waistcoat franzen, shabby chic tumeric humblebrag next level woke. Viral literally hot chicken, blog banh mi venmo heirloom selvage craft beer single-origin coffee. Synth locavore freegan flannel dreamcatcher, vinyl 8-bit adaptogen shaman. Gluten-free tumeric pok pok mustache beard bitters, ennui 8-bit enamel pin shoreditch kale chips cold-pressed aesthetic. Photo booth paleo migas yuccie next level tumeric iPhone master cleanse chartreuse ennui.
