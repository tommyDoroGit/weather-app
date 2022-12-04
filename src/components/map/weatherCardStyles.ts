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

export const StyledFeatureText = styled.h3`
  font-size: 3rem;
  color: rgb(235, 99, 61);
  padding: 0;
  margin: 0;
`;

export const StyledDivider = styled.div`
  background-color: #fff;
  width: 10px;
  height: 100%;
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
