import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { Restaurant, RestaurantInfo, Title, Address, RestaurantImg } from './styles';
import restaurante from '../../assets/restaurante-fake.png';
import Skeleton from '../Skeleton';

const RestaurantCard = ({ restaurant, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars count={5} edit={false} value={restaurant.rating} isHalf activeColor="#e7711c" />
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
      </RestaurantInfo>
      <RestaurantImg
        imageLoaded={imageLoaded}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
        onLoad={() => setImageLoaded(true)}
        alt="Foto do restaurante"
      />
      {!imageLoaded && <Skeleton width="100px" height="100px" />}
    </Restaurant>
  );
};

export default RestaurantCard;
