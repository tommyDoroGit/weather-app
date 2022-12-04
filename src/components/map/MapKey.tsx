import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import { StyledMapKey } from "./mapKeyStyles";

const MapKey = () => {
  return (
    <StyledMapKey>
      <div style={{ display: "flex", alignItems: "center" }}>
        <AiOutlineInfoCircle style={{ marginRight: "5px" }} />
        <p>Double click the map to update weather location</p>
      </div>
    </StyledMapKey>
  );
};

export default MapKey;
