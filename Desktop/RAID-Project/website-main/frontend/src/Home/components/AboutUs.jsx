import React, { useEffect, useRef } from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add('visible');
        } else {
          sectionRef.current.classList.remove('visible');
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="about-us" ref={sectionRef}>
      <h2 className="section-title">About Us</h2>
      <hr className="section-underline" />
      <div className="content">
        <div className="vision">
          <h3>Our Vision</h3>
          <p className="lorem-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. 
            Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, 
            dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper 
            congue, euismod non, mi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
