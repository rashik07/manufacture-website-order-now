import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { Avatar, Card, Col,Carousel , Rate, Skeleton } from "antd";
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
const Review = () => {
  const { isLoading, error, data } = useQuery(["reviews"], () =>
    fetch("https://guarded-spire-98931.herokuapp.com/reviews").then((res) =>
      res.json()
    )
  );
  const contentStyle = {
    height: 'auto',
    minHeight:'200px',
    color: '#fff',
    lineHeight: '30px',
    textAlign: 'center',
    background: '#364d79',
  };


  if (isLoading) {
    return <Skeleton />;
  }
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };
  return (
    <div>
      <br />
      <h1>Reviews</h1>
      <Carousel afterChange={onChange}>
        {data.map((reviews) =>(
            console.log(reviews),
      
           
            <div>
             
          
              <div style={contentStyle}> <h3 style={{color: "white", paddingTop:"20px"}}><span style={{color:"yellow"}}>Title:</span> {reviews.title}</h3>  <Avatar src="https://joeschmoe.io/api/v1/random" /><span style={{color:"yellow"}}>Email:</span> {reviews.email} <br />
               <Rate disabled  defaultValue={reviews.rate} character={({ index }) => customIcons[index + 1]} /> <br /><p><span style={{color:"yellow"}}>Discription:</span>  { reviews.short_discription}</p></div>
              {/* <h5 style={contentStyle}>{reviews.title}<Avatar src="https://joeschmoe.io/api/v1/random" />{reviews.email}</h5> */}

            </div>
           
         
            
            
            ) )}
      </Carousel>
            
    </div>
  );
};

export default Review;
