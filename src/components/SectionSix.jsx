// import React from 'react';
import '../App.css';

function SectionSix() {
  return (
    <section className="sectionSix">
    <div className="banner">
        <div className="bannerText">
            <h2> Hungry for more? </h2>
            <p>
                Sign up to our newsletter for exciting updates and weekly recipe inspiration, delivered straight to your inbox.
            </p>

            <div className="subscribe-container">
                <p>Email address</p>
                <input type="email"/>
                <button type="button">Subscribe</button>
            </div>
        </div>

        <div className="bannerPar">
            <p>
                We are a weekly meal subscription service based in Dubai, delivering pre-portioned ingredients and easy-to-follow recipe cards across the UAE. Our healthy meal delivery service means you can say goodbye to stressful meal planning and instead, spend time enjoying delicious food with loved ones. Our pre-measured, ready-to-cook boxes make it easier than ever for you to discover new flavours every week.
            </p> 
        </div>

    </div>
</section>
  );}

export default SectionSix;