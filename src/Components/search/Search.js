import "./Search.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchLatLon } from "../../apiCalls";
import { MuiButton } from "../muiButton/MuiButton";
import { Box, TextField, Stack, Input, InputLabel, OutlinedInput, FormControl } from "@mui/material";
// import { LocationSearchingIcon } from '@mui/icons-material'

const Search = ({ setLatLonState }) => {
  const [street, setStreet] = useState("");
  const [town, setTown] = useState("");
  const [state, setState] = useState("");

  const navigate = useNavigate();
  const key = process.env.REACT_APP_GOOGLE;

  const fetchLatLonSearch = (e, street, town, state, key) => {
    e.preventDefault();
    fetchLatLon(street, town, state, key).then((data) => {
      if (data.status) {
        sessionStorage.clear();
        sessionStorage.setItem(
          "lat",
          JSON.stringify(data.results[0].geometry.location.lat)
        );
        sessionStorage.setItem(
          "lon",
          JSON.stringify(data.results[0].geometry.location.lng)
        );
      } else {
        navigate("*", {replace: true });
      }
      setLatLonState();
    });
  };

  return (
    <FormControl varient='filled' onSubmit={(e) => fetchLatLonSearch(e, street, town, state, key)}>
        <Stack direction="row">
        <TextField
          className="Search_input"
          id="Input_street"
          type="text"
          placeholder="Street address"
          name="Input_street"
          value={street}
          required
          onChange={(e) => setStreet(e.target.value)}
        /> 
        <label for="Input_street" className="hidden">Street address:</label>
        <TextField
          className="Search_input"
          id="Input_town"
          type="text"
          placeholder="Town"
          name="Input_town"
          value={town}
          required
          onChange={(e) => setTown(e.target.value)}
        />  
        <label for="Input_town" className="hidden">Town:</label>
        <TextField
          className="Search_input"
          id="Input_state"
          type="text"
          placeholder="State"
          name="Input_state"
          value={state}
          required
          onChange={(e) => setState(e.target.value)}
        />
        <label for="Input_state" class="hidden">State:</label>
        <MuiButton
          name="searchbutton"
        >
        </MuiButton>
      </Stack>
    </FormControl>
  );
};

export default Search;

