import React from "react";
import "./home.css";
import product9 from "../../assets/products/images.png";
import product5 from "../../assets/products/5.webp";
import product6 from "../../assets/products/6.png";
import product8 from "../../assets/products/9.png";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
  <div>
    <div className="main-body">
      <div className="main-text">
        <p className="title">CHROCHETSIDE</p>
        <p className="desc">Crafted with Passion, Worn with Style  Explore the Artistry of Crochet Fashion!</p>
        <Link to="/">
        <button className="Bttn">EXPLORE NOW</button>
        </Link>
      </div>
      

      <div className="main-photos">
        <img className="main-image" src={product9} />
      </div>
    </div>
    <div className="about-us">
      <header class="header">
        <p className="subt1">BEST SELLING</p>
        <p className="subt2"> Elevate Your Crochet Game with Our Best-Selling Creations  Crafted to Inspire, Designed to Delight!</p>
        </header>
      <section class="content">
        <div className="c1">
          <img className="sub-image" src={product5} />
          <p className="sub-title">Whimsical Weave Elegance</p>
        </div>
        <div className="c2">
          <img className="sub-image" src={product6} />
          <p className="sub-title">Enchanted Garden Gown</p>
        </div>
        <div className="c3">
          <img className="sub-image" src={product8} />
          <p className="sub-title">Sunset Serenade Dress</p>
        </div>
      </section>
      <footer class="foot1">
      <Link to="/">
        <button className="see-more-button">SEE MORE &rarr; </button>
      </Link>
      </footer>
    </div>
    <div className="feedback">
      <header class="header">
          <p className="subt1">FEEDBACK CORNER</p>
          <p className="subt2"> Your Thoughts, Our Inspiration Welcome to the Feedback Corner, Where Your Voice Shapes Our Crochet Creations</p>
      </header>
      <section class="content">
        <div className="r1">
            <p className="cust">" Sarah D</p>
            <p className="feed">"The crochet tops are not only stylish but incredibly comfortable. I've recommended this website to all my friends!"</p>
        </div>
        <div className="r2">
        <p className="cust">" Emily R</p>
          <p className="feed">"The crochet dresses I purchased exceeded my expectations. I've received so many compliments, and I can't wait to shop here again."</p>
        </div>
        <div className="r3">
          <p className="cust">" Sophia G</p>
          <p className="feed">"We absolutely love your crochet clothing collection! The craftsmanship is impeccable, and the designs are so unique. The attention to detail is evident in every stitch. Keep up the fantastic work!"</p>
        </div>
      </section>
<footer class="footer-distributed">

			<div className="f footer-left" >


				<p class="footer-links">
					<a href="#" class="link-1">Home</a>
					
					<a href="#">Blog</a>
				
					<a href="#">Pricing</a>
				
					<a href="#">About</a>
					
					<a href="#">Faq</a>
					
					<a href="#">Contact</a>
				</p>

				<p class="footer-company-name">Chrochet Side © 2015</p>
			</div>

			<div class="footer-center">

				<div className="f">
					<i class="fa fa-map-marker"></i>
					<p><span>4 Cedros Ave</span> Sector 51, Delhi</p>
				</div>

				<div className="f">
					<i class="fa fa-phone"></i>
					<p>+91 1122334455667</p>
				</div>

				<div className="f">
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@chrochetside.com</a></p>
				</div>

			</div>

			<div class="f footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					Empowering Women, Inspiring Fashion.
          Quality Yarn, Endless Style.
          Elevate Your Wardrobe with Us.
				</p>

				<div class="f footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div>

			</div>

		</footer>
      
    </div>
  
  </div>
  
  );
};
