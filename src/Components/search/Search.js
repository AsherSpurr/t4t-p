import "./Search.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchLatLon } from "../../apiCalls";
import { MuiButton } from "../muiButton/MuiButton";
import {
  Box,
  Stack,
  InputLabel,
  OutlinedInput,
  FormControl,
} from "@mui/material";

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
        navigate("*", { replace: true });
      }
      setLatLonState();
    });
  };

  return (
    <Box
      className="Search_form_wrapper"
      component="form"
      onSubmit={(e) => fetchLatLonSearch(e, street, town, state, key)}
    >
      <Stack direction="row">
        <FormControl>
          <InputLabel htmlFor="Input_street">Street Address</InputLabel>
          <OutlinedInput
            id="Input_street"
            name="Input_street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </FormControl>
        <FormControl required>
          <InputLabel htmlFor="Input_town">Town</InputLabel>
          <OutlinedInput
            id="Input_town"
            name="Input_town"
            value={town}
            onChange={(e) => setTown(e.target.value)}
          />
        </FormControl>
        <FormControl required>
          <InputLabel htmlFor="Input_state">State</InputLabel>
          <OutlinedInput
            defaultValue="Composed TextField"
            id="Input_state"
            name="Input_state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </FormControl>
        <MuiButton name="searchbutton" />
      </Stack>
    </Box>
  );
};

export default Search;
