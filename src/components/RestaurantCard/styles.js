import styled from 'styled-components';

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-top: 5px;
  padding: 12px;
  background-color: #ffffff;
  border-left: 3px solid transparent;
  transition: 1s;
  :hover {
    background-color: ${(props) => props.theme.colors.background};
    border-left-color: ${(props) => props.theme.colors.primary};
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin-bottom: 10px;
`;

export const Address = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const RestaurantImg = styled.img`
  display: ${(props) => (props.imageLoaded ? 'block' : 'none')};
  width: 100px;
  height: 100px;
  border-radius: 6px;
  object-fit: cover;
`;
