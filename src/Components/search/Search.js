import "./Search.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchLatLon } from "../../apiCalls";
import searchsvg from "../images/search-dark-purple.svg";
// import searchsvg from '../images/search-light-purple (1).svg'

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
        navigate("*", { state: { status: "4xx", statusText: "Not Found" } });
      }
      setLatLonState();
    });
  };

  return (
    <div className="Search_div_container">
      <form className="Search_form"  onSubmit={(e) => fetchLatLonSearch(e, street, town, state, key)}>
        <input
          className="Search_input"
          id="Input_street"
          type="text"
          placeholder="Street address"
          name="Input_street"
          value={street}
          required
          onChange={(e) => setStreet(e.target.value)}
        ></input> 
        <label for="Input_street" class="hidden">Street address:</label>
        <input
          className="Search_input"
          id="Input_town"
          type="text"
          placeholder="Town"
          name="Input_town"
          value={town}
          required
          onChange={(e) => setTown(e.target.value)}
        ></input>  
        <label for="Input_town" class="hidden">Town:</label>
        <input
          className="Search_input"
          id="Input_state"
          type="text"
          placeholder="State"
          name="Input_state"
          value={state}
          required
          onChange={(e) => setState(e.target.value)}
        ></input>
        <label for="Input_state" class="hidden">State:</label>
        <button
          className="Search_button"
          type="submit"
          name="searchbutton"
        >
          <img className="Search_icon" src={searchsvg} alt="search button"></img>
        </button>
      </form>
    </div>
  );
};

export default Search;
