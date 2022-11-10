import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__component">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
        <div className="home__row">
          <Product
            id="24"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses "
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            title="AARF Salvo Polyurethane Football and 1 Pump for All Ages Groups (Multicolour, Ball Size: 5)"
            price={5}
            image="https://m.media-amazon.com/images/I/41depeBDp9L.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="Marshall Major IV Wireless Bluetooth On Ear Headphone with Mic (Brown)"
            price={80}
            image="https://m.media-amazon.com/images/I/61x4yN6eUVL._SX450_.jpg"
            rating={4}
          />
          <Product
            id="78"
            title="Fitbit Versa 4 Fitness Watch (Waterfall Blue / Platinum Aluminium)"
            price={30}
            image="https://m.media-amazon.com/images/I/61ZYteSkDvL._SY450_.jpg"
            rating={4}
          />

          <Product
            title="Apple iPhone 14 128GB Starlight"
            price={800}
            image="https://m.media-amazon.com/images/I/618Bb+QzCmL._SX679_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV KD-55X74K (Black)"
            price={600}
            image="https://m.media-amazon.com/images/I/51prU5hcQbL._SY300_SX300_QL70_FMwebp_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
