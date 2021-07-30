import theme from "../../theme"
import React from "react"
import styled from 'styled-components'


const Card = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    width: 90px;
    height: 90px;
    border-radius: 6px;
    background-image: url(${props => props.photo});
    background-size: cover;
`
const Title = styled.p`
    font-family: ${theme.fonts.regular};
    color: #ffffff;
    font-size: 16px;
`

const ImageCard = ({ photo, title }) => {
    return (
        <Card photo={photo}>
            <Title>{title}</Title>
        </Card>
    )
}

export default ImageCard