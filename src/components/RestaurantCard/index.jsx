import React from 'react'
import { Restaurant, RestaurantInfo, Title, Address, RestaurantImg } from './styles'
import ReactStars from 'react-rating-stars-component'
import restaurante from '../../assets/restaurante-fake.png'


const RestaurantCard = ({restaurant}) => (
    <Restaurant>
        <RestaurantInfo>
            <Title>{restaurant.name}</Title>
            <ReactStars count={5} edit={false} value={restaurant.rating} isHalf activeColor="#e7711c" />
            <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
        </RestaurantInfo>
        <RestaurantImg src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} alt="Foto do restaurante" />
    </Restaurant>
)

export default RestaurantCard;