import moment from "moment";
import { FC } from "react";
import { CurrentWeather } from "./Map";
import {
  StyledCard,
  StyledColumn,
  StyledDate,
  StyledDescription,
  StyledDivider,
  StyledFeatureText,
  StyledH1,
  StyledWeatherImage,
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
          <StyledH1>{data.name}</StyledH1>
          {data.weather.map((item) => (
            <StyledWrapper>
              <StyledColumn>
                <StyledDate>{moment.unix(data?.dt).calendar()}</StyledDate>
                <StyledWeatherImage
                  alt={item.description}
                  src={`http://openweathermap.org/img/wn/${item.icon}@4x.png`}
                />
                <StyledDescription>{item.description}</StyledDescription>
              </StyledColumn>
              <StyledDivider />
              <StyledColumn style={{ flexGrow: 1 }}>
                <StyledFeatureText>
                  {Math.round(data?.main.temp * 10) / 10} &deg;
                </StyledFeatureText>
              </StyledColumn>
            </StyledWrapper>
          ))}
        </StyledCard>
      )}
    </>
  );
};

export default WeatherCard;
