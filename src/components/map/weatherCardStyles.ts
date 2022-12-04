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
`;

export const StyledH1 = styled.h1`
  font-size: 3rem;
  color: rgb(235, 99, 61);
  padding: 0;
  margin: 0;
`;

export const StyledFeatureText = styled.h3`
  font-size: 3.5rem;
  color: #48484a;
  padding: 0;
  margin: 0;
  text-align: center;
`;

export const StyledDate = styled.h4`
  margin: 0.5rem 0;
  color: #48484a;
`;

export const StyledDivider = styled.div`
  background-color: #de856f;
  width: 1px;
  height: 6rem;
`;

export const StyledColumn = styled.div`
  min-width: 200px;
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const StyledDescription = styled.p`
  font-size: 1.5rem;
  text-transform: capitalize;
  font-weight: 600;
  color: #3e3e40;
  margin: 0.5rem;
`;

export const StyledWeatherImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: fill;
  margin: 0 auto;
`;
