import moment from "moment";
import { FC } from "react";
import { CurrentWeather } from "./Map";
import {
  StyledCard,
  StyledDivider,
  StyledFeatureText,
  StyledWrapper,
} from "./weatherCardStyles";

interface WeatherCardProps {
  data: CurrentWeather;
}

const WeatherCard: FC<WeatherCardProps> = ({ data }) => {
  return (
    <>
      {data && (
        <StyledCard>
          {data.weather.map((item) => (
            <StyledWrapper>
              <div>
                <h1>{data.name}</h1>
                <p>{item.description}</p>
                <StyledFeatureText>
                  {Math.round(data?.main.temp * 10) / 10} &deg;
                </StyledFeatureText>
                <p>{moment.unix(data?.dt).calendar()}</p>
              </div>
              <StyledDivider />
              <div>
                <img
                  alt={item.description}
                  src={`http://openweathermap.org/img/wn/${item.icon}@4x.png`}
                />
              </div>
            </StyledWrapper>
          ))}
        </StyledCard>
      )}
    </>
  );
};

export default WeatherCard;
