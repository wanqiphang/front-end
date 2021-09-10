<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>Yummy's Bakery</title>
        <link rel="stylesheet" href="header&footer.css">
        <link rel="stylesheet" href="main.css">
        <script src="header.js"></script>
    </head>
    <body>
        <header>
            <div id="navbar">
                <nav>
                    <ul>
                        <li class="title"><h2>Yummy's Bakery</h2></li>
                        <li class="main"><a href="main.html">MAIN</a></li>
                        <li><a href="aboutus.html">ABOUT US</a></li>
                        <li><a href="shop.html">SHOP</a></li>
                        <li><a href="contactus.html">CONTACT US</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        <br><br><br><br>
        <div id="slide">
            <div class="mySlide">
                <img class="slide1" src="chocolate cakes.png">
            </div>
            <div class="mySlide">
                <img class="slide2" src="cheese cakes.png">
            </div>
            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>   
        <br>
        <div>
            <span class="dot" id="dot1" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
        </div>
        <br>
        <script>
            var slideIndex = 0;
            showSlides();

            function showSlides() {
            var i;
            var slides = document.getElementsByClassName("mySlide");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}
            slides[slideIndex-1].style.display = "block";
            setTimeout(showSlides, 2000); // Change image every 2 seconds
            }

            function currentSlide(no) {
                var i;
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                slideIndex = no;
                slides[no - 1].style.display = "block";
            }

            function plusSlides(n) {
                var newslideIndex = slideIndex + n;
                if (newslideIndex < 4 && newslideIndex > 0) {
                    currentSlide(newslideIndex);
                }
            }
        </script>
        <div id="products">
            <h1>Our Products</h1>
            <br><br>
            <div id="prod">
                    <img class="cake" src="cake.png">
                    <img class="cupcake" src="cupcake.png">
                    <img class="swissroll" src="swiss roll.png">
            </div>
            <br><br>
            <div>
                <a href="shop.html"><input id="shop" type="submit" value="Shop Now"></a>
            </div>
        </div>
        <br><br><br>
        <footer>
            <div id="container">
                <div class="col1">
                    <div class="location">
                        <h3>Location</h3>
                        Kampus Utama, Jalan Genting Kelang, 53300 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur
                        <div>&#9743; 0387654321</div>
                        <div>&#9993; yummybakery@gmail.com</div>
                    </div>
                    <div class="copyright">
                        &copy; Yummy's Bakery 2020. All Rights Reserved
                    </div>
                </div>
                <div class="col2">
                    <h3>Explore</h3>
                    <ul>
                        <li><a href="main.html">MAIN</a></li>
                        <li><a href="aboutus.html">ABOUT US</a></li>
                        <li><a href="contactus.html">CONTACT US</a></li>
                    </ul>
                </div>
                <div class="col3">
                    <h3>Follow</h3>
                    <a href="#"><img src="facebook.png"></a>
                    <a href="#"><img src="instagram.png"></a>
                    <a href="#"><img src="twitter.png"></a>
                    <br><br><br>
                </div>
            </div>
        </footer>
    </body>
</html>
