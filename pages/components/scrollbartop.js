import React, { useState,useEffect } from 'react';

export default function ScrollBartop() {

    const [isVisible, setIsVisible] = useState(false)
   
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
     }, []);

     const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };    

  return (
    <>
       <button onClick={goTop} className="btn-scrollTop" style={{display: isVisible ? 'block':'none'}}>
           Scroll top
        </button>
    </>
  )
}
