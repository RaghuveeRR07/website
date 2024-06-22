import React, { useState,useEffect } from 'react'
// import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import Typewriter from "typewriter-effect";
import '../Home/styles/Home.css'
import Statistics from './components/Statistics';
import Bottom from './components/Bottom';
import AboutUs from './components/AboutUs';
import PhotoGallery from './components/PhotoGallery';
import FoundersSlider from './components/FoundersSlider';




const typewriterTexts = '[ "Welcome to RAID\'s Website", "We Train", "We Predict", "We Deploy" ]';

export default function Home() {
  // For typewriter effect
  // START

  var textType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 200;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  textType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 100 - Math.random() * 50;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
  };
  window.onload = function() {
      var elements = document.getElementsByClassName('typewrite');
      for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-type');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new textType(elements[i], JSON.parse(toRotate), period);
          }
      }
      var css = document.createElement("style");
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      document.body.appendChild(css);
  };

  const introdata = {
    
    animated: {
        first: "We Train",
        second: "We Predict",
        third: "We Deploy",
    },
};

// typewriter
  // const [text] = useTypewriter({
  //   words: [
  //     " Realm of Artificial Intelligence and Data",
  //     " Realm of Artificial Intelligence and Data",
  //     " Realm of Artificial Intelligence and Data",
  //   ],
  //   loop: {},
  //   typeSpeed: 80,
  //   deleteSpeed: 120,
// });
  // END

  return (
      <>

          
                
                
                
                



      {/* <div className='typewriter-text'>
      <h1 style={{ margin: "50px" }}>
        <span style={{ align: "right", fontweight: "bold", color: "orange" }}>
          {text}
          <span style={{ color: "red" }}>
            <Cursor />
          </span>
        </span>
      </h1>
      </div> */}

        <div className='homepage-body'>
            <div className='intro-space'>
            <div className='typewriter'>
                  
               
</div>
                <div className="intro-text1">Hey there
                <span className="typewriter-text">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                  </span></div>
                <div href="" className="typewrite" data-period="2000" data-type={typewriterTexts}></div>
                <div className="intro-text2">
                We at RAID IITJ work on some Awesome projects and participate in interesting events
                </div>
                <div className="intro-buttons">
                <button href="#" class="intro-button">
                    Text1
                </button>
                <button href="#" class="intro-button">
                    Text2
                </button>
                <button href="#" class="intro-button">
                    Text3
                </button>
                </div>
            </div>
            <div className="logo">
                <img src="RAID_logo.jpeg" alt="" className="logo-img"/>
            </div>
        </div>
        
        <AboutUs></AboutUs>
        <PhotoGallery></PhotoGallery>
        <FoundersSlider></FoundersSlider>
       
        <Statistics/>
        <Bottom/>
      </>
    )
}