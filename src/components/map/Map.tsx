import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import Map from "react-map-gl";
import moment from "moment";
import WeatherCard from "./WeatherCard";
import { RotatingSquare } from "react-loader-spinner";

const WEATHER_KEY = "bb8923d7f7a30863af45a523873ad2ae";
// const WEATHER_KEY = "6dc9c2a99870e8a1a5ff5c72ecc15d4e"; //their key
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
      // Refetch the data every second
      refetchOnWindowFocus: false,
      refetchInterval: 60000,
    }
  );

  useEffect(() => {
    if (!isLocationSet) {
      navigator.geolocation.getCurrentPosition(
        (coordinates) => {
          console.log("location", coordinates);
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

  return (
    <>
      {!data && (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
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
        </div>
      )}
      {location !== undefined && !isIdle && (
        <>
          {data && <WeatherCard {...data} />}
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
              setLocation(e.lngLat as any);
            }}
            style={{ height: "calc(100vh - 3rem)" }}
            {...mapState}
          />
        </>
      )}
    </>
  );
};

export default WeatherMap;
