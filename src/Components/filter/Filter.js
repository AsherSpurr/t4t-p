import "./Filter.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Stack, Button, FormControl } from "@mui/material";

const Filter = ({ handleFormChange, activeFilters, setActiveFilters }) => {
  const handleFilterChange = (e) => {
    setActiveFilters({ ...activeFilters, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormChange();
  };

  return (
    <FormGroup className="Filter_div_wrapper">
      <FormControl component="form" onSubmit={(e) => handleSubmit(e)}>
        <Stack direction={"row"}>
          <FormControlLabel
            control={<Checkbox />}
            label="Accessible"
            className="Filter_input"
            id="accessible"
            name="accessible"
            value={activeFilters.accessible}
            onChange={handleFilterChange}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Unisex"
            className="Filter_input"
            id="unisex"
            name="unisex"
            value={activeFilters.unisex}
            onChange={handleFilterChange}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="All"
            className="Filter_input"
            id="all"
            name="all"
            value={activeFilters.all}
            onChange={handleFilterChange}
          />
          <Button
            className="Filter_button"
            type="submit"
            variant="outlined"
            size="small"
          >
            Apply
          </Button>
        </Stack>
      </FormControl>
    </FormGroup>
  );
};

export default Filter;
