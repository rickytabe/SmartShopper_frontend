import React from 'react';
import Header from '../Components/Header';
import HeroSection from '../Components/HeroSection';
import FeaturedCategories from '../Components/FeaturedCategories';
import ProductShowcase from '../Components/ProductShowcase';
import Testimonials from '../Components/Testimonials';
import NewsletterSection from '../Components/NewsletterSection';
import Footer from '../Components/Footer';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturedCategories />
      <ProductShowcase />
      <Testimonials />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default HomePage;
