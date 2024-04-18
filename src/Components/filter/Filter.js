import "./Filter.css";
import { useState } from "react";

const Filter = ({ updateFilters }) => {
  const [activeFilters, setActiveFilters] = useState({
    accessible: false,
    unisex: false,
    all: false,
  });

  const handleForm = (e) => {
    setActiveFilters({ ...activeFilters, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e, activeFilters) => {
    e.preventDefault();
    updateFilters(activeFilters);
  };

  return (
    <form className="Filter_div_wrapper">
      {/* <div> */}
      <input
        type="checkbox"
        className="Filter_input"
        id="accessible"
        name="accessible"
        value={activeFilters.accessible}
        onChange={handleForm}
      />
      <label for="accessible">Accessible</label>
      {/* </div>
            <div> */}
      <input
        type="checkbox"
        className="Filter_input"
        id="unisex"
        name="unisex"
        value={activeFilters.unisex}
        onChange={handleForm}
      />
      <label for="unisex">Unisex</label>
      {/* </div>
            <div> */}
      <input
        type="checkbox"
        className="Filter_input"
        id="all"
        name="all"
        value={activeFilters.all}
        onChange={handleForm}
      />
      <label for="all">All</label>
      {/* </div>        */}
      <button onClick={(e) => handleSubmit(e, activeFilters)}></button>
    </form>
  );
  //Accessability note/ maybe hot fix? -> buttons should be wrapped in form -> buttonType = checkbox
};

export default Filter;
