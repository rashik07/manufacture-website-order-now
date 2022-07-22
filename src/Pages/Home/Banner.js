import React from 'react';
import { Carousel } from 'antd';

const Banner = () => {
    const contentStyle = {
        height: '500px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: "url(https://images.unsplash.com/photo-1571520723772-56464689b411?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
      };
      
    
        const onChange = (currentSlide) => {
          console.log(currentSlide);
        };
    return (
        <div>
            <div>
            <Carousel afterChange={onChange}>
                <div>
                    <h1 style={contentStyle}><span style={{padding:"10px", backgroundColor:"rgba(0, 0, 0, 0.7)"}}>Motor Parts Gellary</span></h1>
                </div>
             
            </Carousel>
        </div>
        </div>
    );
};

export default Banner;