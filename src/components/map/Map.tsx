import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Map from "react-map-gl";
import WeatherCard from "./WeatherCard";
import MapKey from "./MapKey";
import { RotatingSquare } from "react-loader-spinner";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justifyContent: center;
  alignItems: center;
`

const WEATHER_KEY = "bb8923d7f7a30863af45a523873ad2ae";
const MAPBOX_KEY =
  "pk.eyJ1IjoidG9tZG9yb3plbmtvIiwiYSI6ImNsYjY2bWltaTBjcnczbnBnZm53dXo5eWgifQ.ecVr9lXBbar_rgZyz8CBoQ";

type Location = {
  lat: number;
  lng: number;
};

export interface CurrentWeather {
  name: string;
  coord: Location;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  main: { temp: number };
  dt: number;
}

const WeatherMap = () => {
  const [location, setLocation] = useState<Location | undefined>();
  const [isLocationSet, setIsLocationSet] = useState<boolean>(false);
  const [mapState, setMapState] = useState({
    zoom: 10,
  });

  const getWeather = async (coordinates: Location) => {
    const res = await axios.get<CurrentWeather>(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lng}&appid=${WEATHER_KEY}&units=metric`
    );
    return res;
  };

  const { data, isIdle } = useQuery(
    ["getWeather", location],
    () => location && getWeather(location),
    {
      refetchOnWindowFocus: false,
      refetchInterval: 60000,
    }
  );

  useEffect(() => {
    if (!isLocationSet) {
      navigator.geolocation.getCurrentPosition(
        (coordinates) => {
          setLocation({
            lng: coordinates.coords.longitude,
            lat: coordinates.coords.latitude,
          });
          setIsLocationSet(true);
        },
        (error) => console.log("error", error),
        { maximumAge: Infinity }
      );
    }
  }, [isIdle, isLocationSet, data?.data.dt]);

  // @ts-ignore
  return (
    <>
      {!isLocationSet && (
        <Wrapper
        >
          <RotatingSquare
            height="100"
            width="100"
            color="#de856f"
            ariaLabel="rotating-square-loading"
            strokeWidth="4"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </Wrapper>
      )}
      {location !== undefined && !isIdle && (
        <>
          {/*@ts-ignore*/}
          <WeatherCard {...data} />
          <Map
            initialViewState={{
              longitude: location?.lng,
              latitude: location?.lat,
              zoom: 10,
            }}
            mapboxAccessToken={MAPBOX_KEY}
            mapStyle="mapbox://styles/mapbox/light-v11"
            onMove={(e) => {
              setMapState(e.viewState);
            }}
            onDblClick={(e) => {
              setLocation(e.lngLat);
            }}
            onTouchEnd={(e) => {
              setLocation(e.lngLat);
            }}
            style={{ height: "calc(100vh - 3rem)" }}
            {...mapState}
          />
          <MapKey />
        </>
      )}
    </>
  );
};

export default WeatherMap;
