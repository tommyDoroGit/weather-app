import styled from "styled-components";

export const StyledCard = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 1;
  background-color: rgb(251, 213, 204);
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  min-width: 25rem;
  
  @media (max-width: 768px) {
    min-width: 10rem;
  }
`;

export const StyledH1 = styled.h1`
  font-size: 3rem;
  color: rgb(235, 99, 61);
  padding: 0;
  margin: 0;
  
  @media (max-width: 768px) {
    text-align: center;
    font-size: 2rem;
  }
`;

export const StyledFeatureText = styled.h3`
  font-size: 3.5rem;
  color: #48484a;
  padding: 0;
  margin: 0;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const StyledDate = styled.h4`
  margin: 0.5rem 0;
  color: #48484a;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const StyledDivider = styled.div`
  background-color: #de856f;
  width: 1px;
  height: 6rem;

  @media (max-width: 768px) {
    width: 100%;
    height: 0px;
    margin: 5px;
  }
`;

export const StyledColumn = styled.div`
  min-width: 200px;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  
    @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledDescription = styled.p`
  font-size: 1.5rem;
  text-transform: capitalize;
  font-weight: 600;
  color: #3e3e40;
  margin: 0.5rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ImageContainer = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const StyledWeatherImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: fill;
  margin: 0 auto;
`;
