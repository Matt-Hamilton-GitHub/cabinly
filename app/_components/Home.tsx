'use client'

import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components'
import HomepPageImage from '../_assets/cabin-about-page-1.png'

const Home = () => {
  return (
    <Wrapper>
      <header className="hero-section">
        <div className="hero-content">
          <h1>Discover Your Perfect Cabin</h1>
          <p className="sub-heading">
            Escape to luxury in nature. Book your perfect cabin getaway now.
          </p>
          <Link href="/cabins" passHref>
            <button className="cta-btn">Explore Cabins</button>
          </Link>
        </div>
      </header>

      <section className="features-section">
        <h2>Why Choose Cabinly?</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Exclusive Locations</h3>
            <p>Experience the most serene and luxurious cabins in nature's embrace.</p>
          </div>
          <div className="feature-item">
            <h3>Premium Comfort</h3>
            <p>Designed for relaxation, each cabin offers world-class amenities.</p>
          </div>
          <div className="feature-item">
            <h3>Seamless Booking</h3>
            <p>Easy-to-use platform for effortless cabin booking and planning.</p>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <h2>What Our Guests Say</h2>
        <div className="testimonial-carousel">
          <div className="testimonial-item">
            <p>"The most beautiful getaway experience we've ever had. Perfect balance of luxury and nature!"</p>
            <h4>- Emily & John, Guests</h4>
          </div>
          <div className="testimonial-item">
            <p>"Highly recommend. The cabin was amazing, with stunning views and total privacy."</p>
            <h4>- Sarah, Guest</h4>
          </div>
        </div>
      </section>
    </Wrapper>

  );
};

const Wrapper = styled.div`
        
        font-family: 'Arial', sans-serif;

        .hero-section {
          position: relative;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          z-index: 2;
          text-align: center;
          background: linear-gradient(to bottom, rgb(0,0,0), rgba(0, 0, 0, 0.7)),
                      url('../_assets/cabin-about-page-1.png') no-repeat center center/cover;
        }
        .hero-content h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        .sub-heading {
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }
        .cta-btn {
          padding: 0.8rem 2rem;
          font-size: 1.1rem;
          background-color: #5c3d28;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .cta-btn:hover {
          background-color: #402820;
        }
        .features-section {
          text-align: center;
          padding: 3rem 1.5rem;
          background-color: #f8f8f8;
        }
        .features-section h2 {
          font-size: 2rem;
          margin-bottom: 2rem;
        }
        .feature-list {
          display: flex;
          justify-content: space-around;
          gap: 2rem;
        }
        .feature-item h3 {
          font-size: 1.5rem;
        }
        .testimonial-section {
          padding: 3rem 1.5rem;
          background-color: #fff;
          text-align: center;
        }
        .testimonial-carousel {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-direction: column;
          align-items: center;
        }
        .testimonial-item {
          max-width: 600px;
          font-style: italic;
        }
        .testimonial-item h4 {
          margin-top: 1rem;
          font-weight: bold;
        }
      `
export default Home;
