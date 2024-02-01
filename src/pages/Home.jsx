import React, { useState, useEffect } from 'react';
import background from '../components/Home_page_main_bg_img.png'


function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogoLoad = () => {
    setLogoLoaded(true);
  };

  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent:'center',
    color: '#ffffff',
    filter: `blur(${Math.min(scrollPosition / 10, 20)}px)`, // Adjust the blur effect based on scroll position
    transition: 'filter 0.3s ease-in-out', // Adjust the transition duration and easing function
  };

  const logoStyle = {
    opacity: logoLoaded ? 1 : 0,
    transition: 'opacity 2s ease-in-out', // Adjust the transition duration and easing function
  };

  return (
    <div>
      <div style={backgroundStyle} className=' text-black'>
        
      </div>
    </div>
  );
}

export default Home;
