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
      <form className="Search_form">
        <label for="street" class="visuallyhidden"></label>
        <input
          className="Search_input"
          id="Input_one"
          type="text"
          placeholder="Street address"
          name="street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        ></input>
        <label for="town" class="visuallyhidden"></label>
        <input
          className="Search_input"
          id="Input_two"
          type="text"
          placeholder="Town"
          name="town"
          value={town}
          onChange={(e) => setTown(e.target.value)}
        ></input>
        <label for="state" class="visuallyhidden"></label>
        <input
          className="Search_input"
          id="Input_three"
          type="text"
          placeholder="State"
          name="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
        ></input>
        <button
          className="Search_button"
          type="submit"
          aria-labelledby="searchbutton"
          onClick={(e) => fetchLatLonSearch(e, street, town, state, key)}
        >
          <img className="Search_icon" src={searchsvg} alt=""></img>
        </button>
      </form>
    </div>
  );
};

export default Search;
