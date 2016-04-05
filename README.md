# Slyder [![Build Status](https://travis-ci.org/crewstyle/yohoho.slyder.svg)](https://travis-ci.org/crewstyle/yohoho.slyder)

_a responsive slider navigation faq jQuery plugin_  
[![npm version](https://badge.fury.io/js/yohoho.slyder.svg)](https://badge.fury.io/js/yohoho.slyder)
[![GitHub version](https://badge.fury.io/gh/crewstyle%2Fyohoho.slyder.svg)](https://badge.fury.io/gh/crewstyle%2Fyohoho.slyder)  


## [Demo page](https://cdn.rawgit.com/crewstyle/slyder/f72b904969e18a2ea0454330578d0012239b581d/demo/index.html)


## Package manager

````javascript
//bower
bower install --save yohoho.slyder
````

````javascript
//npm
npm install yohoho.slyder
````


## Install

````html
<!-- In your <body> HTML tag -->

<!-- slyder faq -->
<ul class="slyder-nav">
    <!-- 1 -->
    <li class="s-item">
        <h3>
            <a href="#" class="s-link">Question 1 &rsaquo;</a>
        </h3>

        <ul class="s-hidden">
            <li class="s-back">
                <a href="#" class="s-link">&lsaquo; Question 1</a>
            </li>

            <!-- 1.1 -->
            <li class="s-item">
                <h3>
                    <a href="#" class="s-link">Question 1.1 &rsaquo;</a>
                </h3>

                <div class="s-hidden">
                    <p class="s-back">
                        <a href="#" class="s-link">&lsaquo; Question 1.1</a>
                    </p>

                    <div class="s-content">
                        <p>Vivamus id nulla orci. Integer scelerisque ut lacus a ultrices.
                        Praesent sit amet aliquet purus, varius tempus augue.
                        Aliquam nec diam lacinia, porta enim eget, venenatis purus.
                        Praesent mollis nisi a diam volutpat suscipit.
                        Nam pretium elit mauris, eget laoreet massa scelerisque in.</p>
                    </div>
                </div>
            </li>

            <!-- 1.2 -->
            <li class="s-item">
                <h3>
                    <a href="#" class="s-link">Question 1.2 &rsaquo;</a>
                </h3>

                <div class="s-hidden">
                    <p class="s-back">
                        <a href="#" class="s-link">&lsaquo; Question 1.2</a>
                    </p>

                    <div class="s-content">
                        <p>Vivamus id nulla orci. Integer scelerisque ut lacus a ultrices.
                        Praesent sit amet aliquet purus, varius tempus augue.
                        Aliquam nec diam lacinia, porta enim eget, venenatis purus.
                        Praesent mollis nisi a diam volutpat suscipit.
                        Nam pretium elit mauris, eget laoreet massa scelerisque in.</p>
                    </div>
                </div>
            </li>
        </ul>
    </li>

    <!-- 2 -->
    <li class="s-item">
        <h3>
            <a href="#" class="s-link">Question 2 &rsaquo;</a>
        </h3>

        <div class="s-hidden">
            <p class="s-back">
                <a href="#" class="s-link">&lsaquo; Question 2</a>
            </p>

            <div class="s-content">
                <p>Vivamus id nulla orci. Integer scelerisque ut lacus a ultrices.
                Praesent sit amet aliquet purus, varius tempus augue.
                Aliquam nec diam lacinia, porta enim eget, venenatis purus.
                Praesent mollis nisi a diam volutpat suscipit.
                Nam pretium elit mauris, eget laoreet massa scelerisque in.</p>
            </div>
        </div>
    </li>

    <!-- 3 -->
    <li class="s-item">
        <h3>
            <a href="#" class="s-link">Question 3 &rsaquo;</a>
        </h3>

        <ul class="s-hidden">
            <li class="s-back">
                <a href="#" class="s-link">&lsaquo; Question 3</a>
            </li>

            <!-- 3.1 -->
            <li class="s-item">
                <h3>
                    <a href="#" class="s-link">Question 3.1 &rsaquo;</a>
                </h3>

                <ul class="s-hidden">
                    <li class="s-back">
                        <a href="#" class="s-link">&lsaquo; Question 3.1</a>
                    </li>

                    <!-- 3.1.1 -->
                    <li class="s-item">
                        <h3>
                            <a href="#" class="s-link">Question 3.1.1 &rsaquo;</a>
                        </h3>

                        <div class="s-hidden">
                            <p class="s-back">
                                <a href="#" class="s-link">&lsaquo; Question 3.1.1</a>
                            </p>

                            <div class="s-content">
                                <p>Vivamus id nulla orci. Integer scelerisque ut lacus a ultrices.
                                Praesent sit amet aliquet purus, varius tempus augue.
                                Aliquam nec diam lacinia, porta enim eget, venenatis purus.
                                Praesent mollis nisi a diam volutpat suscipit.
                                Nam pretium elit mauris, eget laoreet massa scelerisque in.</p>
                            </div>
                        </div>
                    </li>

                    <!-- 3.1.2 -->
                    <li class="s-item">
                        <h3>
                            <a href="#" class="s-link">Question 3.1.2 &rsaquo;</a>
                        </h3>

                        <div class="s-hidden">
                            <p class="s-back">
                                <a href="#" class="s-link">&lsaquo; Question 3.1.2</a>
                            </p>

                            <div class="s-content">
                                <p>Vivamus id nulla orci. Integer scelerisque ut lacus a ultrices.
                                Praesent sit amet aliquet purus, varius tempus augue.
                                Aliquam nec diam lacinia, porta enim eget, venenatis purus.
                                Praesent mollis nisi a diam volutpat suscipit.
                                Nam pretium elit mauris, eget laoreet massa scelerisque in.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>

            <!-- 3.2 -->
            <li class="s-item">
                <h3>
                    <a href="#" class="s-link">Question 3.2 &rsaquo;</a>
                </h3>

                <div class="s-hidden">
                    <p class="s-back">
                        <a href="#" class="s-link">&lsaquo; Question 3.2</a>
                    </p>

                    <div class="s-content">
                        <p>Vivamus id nulla orci. Integer scelerisque ut lacus a ultrices.
                        Praesent sit amet aliquet purus, varius tempus augue.
                        Aliquam nec diam lacinia, porta enim eget, venenatis purus.
                        Praesent mollis nisi a diam volutpat suscipit.
                        Nam pretium elit mauris, eget laoreet massa scelerisque in.</p>
                    </div>
                </div>
            </li>
        </ul>
    </li>
</ul>
````

````javascript
//in your main JS file
$('.slyder-nav').slyder({
    back: '.s-back .s-link',
    current: 's-current',
    hidden: 's-hidden',
    item: '.s-item',
    link: 'h3 .s-link',
    wrapper: 'slyder-wrapper'
});
````


## Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
back | string | '.s-back .s-link' | CSS selector to find back link navigation
current | string | 's-current' | CSS class applied to current item
hidden | string | 's-hidden' | CSS selector to find hidden item to display
item | string | '.s-item' | CSS selector to find sub items
link | string | 'h3 .s-link' | CSS selector to find link navigation
wrapper | string | 'slyder-wrapper' | CSS class applied to wrapper

## Dependencies

jQuery **latest version**


## Authors and Copyright

Made with ♥ by **[Achraf Chouk](http://github.com/crewstyle "Achraf Chouk")**

+ http://fr.linkedin.com/in/achrafchouk/
+ http://twitter.com/crewstyle
+ http://github.com/crewstyle

Please, read [LICENSE](https://github.com/crewstyle/yohoho.slyder/blob/master/LICENSE "LICENSE") for more details.
