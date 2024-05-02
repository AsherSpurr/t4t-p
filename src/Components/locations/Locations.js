import "./Locations.css";
import Card from "../card/Card";
import Filter from "../filter/Filter";
import LoadingContext from "../../LoadingContext";
import { useEffect, useState } from "react";
import { ToggleButton, Stack } from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import MapIcon from "@mui/icons-material/Map";
import GoogleMap from "../map/Map";

const Locations = ({
  filteredLocs,
  position,
  allLocsCoordinates,
  handleFormChange,
  activeFilters,
  setActiveFilters
}) => {
  const [isLoading, setIsLoading] = useState("loading");
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    filteredLocs.length ? setIsLoading("") : setIsLoading("loading");
  }, [filteredLocs]);

  const cards = filteredLocs.map((loc) => {
    return (
      <Card
        name={loc.name}
        uni={loc.unisex}
        access={loc.accessible}
        dist={loc.distance}
        street={loc.street}
        city={loc.city}
        state={loc.state}
        upvote={loc.upvote}
        downvote={loc.downvote}
        directions={loc.directions}
        comment={loc.comment}
        updatedAt={loc.updated_at}
        key={loc.id}
      />
    );
  });

  return (
    <>
      {filteredLocs.length > 0 && <Filter handleFormChange={handleFormChange} activeFilters={activeFilters} setActiveFilters={setActiveFilters}/>}
      <LoadingContext.Provider value={isLoading}>
        <Stack>
        <ToggleButton
         sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' } }}
          className="Toggle_button"
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}>
          {selected ? <FormatListBulletedIcon /> : <MapIcon />}
        </ToggleButton>
        <div className={!selected ? `Locations_div_wrapper ${isLoading}`: "Locations_div_wrapper none"}>
          {cards}
        </div>
        <div className={!selected ? "Locations_map_wrapper none" : "Locations_map_wrapper"}>
          <GoogleMap
            className="Toggle_map_view"
            position={position}
            allLocsCoordinates={allLocsCoordinates}
          />
        </div>
        </Stack>
      </LoadingContext.Provider>
    </>
  );
};

export default Locations;
