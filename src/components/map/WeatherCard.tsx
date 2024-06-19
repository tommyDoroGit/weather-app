import moment from "moment";
import { FC } from "react";
import { CurrentWeather } from "./Map";
import {
  ImageContainer,
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
import {RotatingSquare} from "react-loader-spinner";
import {AxiosResponse} from "axios";

interface WeatherCardProps {
  data: CurrentWeather | undefined;
}

const WeatherCard: FC<WeatherCardProps> = ({ data }) => {

  return (
        <StyledCard>
          {data ? (
          <>
          <StyledH1>{data.name}</StyledH1>
          {data.weather.map((item) => (
            <StyledWrapper>
              <StyledColumn>
                <StyledDate>{moment.unix(data?.dt).calendar()}</StyledDate>
                <ImageContainer>
                <StyledWeatherImage
                  alt={item.description}
                  src={`http://openweathermap.org/img/wn/${item.icon}@4x.png`}
                />
                </ImageContainer>
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
          </>
      ): <RotatingSquare
        height="100"
        width="100"
        color="#de856f"
        ariaLabel="rotating-square-loading"
        strokeWidth="4"
        wrapperStyle={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}
        wrapperClass=""
        visible={true}
        />
      }
        </StyledCard>
  );
};

export default WeatherCard;
