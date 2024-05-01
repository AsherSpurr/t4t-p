import "./Filter.css";
import { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box, Stack, Button, FormControl } from "@mui/material";
// import { CheckBox } from "@mui/icons-material";

const Filter = ({ updateFilters }) => {
  const [activeFilters, setActiveFilters] = useState({
    accessible: false,
    unisex: false,
    all: false,
  });

  const handleForm = (e) => {
    setActiveFilters({ ...activeFilters, [e.target.name]: e.target.checked });
    // updateFilters(activeFilters);
  };

  const handleSubmit = (e, activeFilters) => {
    e.preventDefault();
    updateFilters(activeFilters);
  };
  console.log(activeFilters);

  return (
    <FormGroup className="Filter_div_wrapper">
      <FormControl component="form" onSubmit={(e) => handleSubmit(e, activeFilters)}>
        <Stack direction={"row"}>
          <FormControlLabel
            control={<Checkbox />}
            label="Accessible"
            className="Filter_input"
            id="accessible"
            name="accessible"
            value={activeFilters.accessible}
            onChange={handleForm}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Unisex"
            className="Filter_input"
            id="unisex"
            name="unisex"
            value={activeFilters.unisex}
            onChange={handleForm}
          />
          {/* <label className='Filter_label' for="unisex">Unisex</label> */}
          <FormControlLabel
            control={<Checkbox />}
            label="All"
            className="Filter_input"
            id="all"
            name="all"
            value={activeFilters.all}
            onChange={handleForm}
          />
          {/* <label className='Filter_label' for="all">All</label> */}
          <Button className="Filter_button" type="submit" variant="outlined" size="small">
            Filter
          </Button>
        </Stack>
      </FormControl>
    </FormGroup>
  );
};

export default Filter;
