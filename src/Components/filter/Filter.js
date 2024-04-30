
import "./Filter.css";
import { useState } from "react";

const Filter = ({ updateLocs, updateFilters, locs }) => {
  // const [activeFilters, setActiveFilters] = useState({
  //   accessible: false,
  //   unisex: false,
  //   all: true,
  // });

  let url = new URL('https://localhost:3000/?')
  let params = new URLSearchParams(url.search)

  const handleForm = (e) => {
    // setActiveFilters({ ...activeFilters, [e.target.name]: e.target.checked });
    // updateFilters(activeFilters)
    console.log(e.target.checked)
    // console.log(activeFilters)

    checkParams(e)
    // if(params.has('b', value) ){

    //   if(params.has('b', value) ){
    //      params.delete('b', value)
    //   } 
    //   else if(params.has('b', 'accessible') && value === 'all'){
    //     params.set('b', 'all')
    //     } 
    //     else if(params.has('b', 'unisex') && value === 'all') {
    //       params.set('b', 'all')
    //   } 
    //   else if(params.has('b', 'all') && value === 'accessible') {
    //     params.delete('b', 'all')
    //   } 
    //   else if(params.has('b', 'all') && value === 'unisex') {
    //     params.delete('b', 'all')
    // } 
    // else {
    //     params.append('b', value)
    // }

      //  formatSearchParams(window.location.href)
    
    //    console.log('windowLoc', window.location.href)
  };

  // const handleSubmit = (e, activeFilters) => {
  //   e.preventDefault();
  //   updateFilters(activeFilters);
  // };


// function checkParams(e) {
//   // console.log(activeFilters)
//   const value = e.target.id
//  if(e.target.checked && !params.has('b', value)) {
//       params.set('b', value)
//     } else if(!e.target.checked){
//       params.delete('b', value)
//     }
//     window.history.replaceState(value, "", params)
//     updateLocs(locs)
// }


  function checkParams(e) {
    // console.log(value)
    const value = e.target.id

  if(params.has('b', value) && !e.target.checked){
     params.delete('b', value)
  } 
  else if(params.has('b', 'accessible') && value === 'all'){
    params.set('b', 'all')
    } 
    else if(params.has('b', 'unisex') && value === 'all') {
      params.set('b', 'all')
  } 
  else if(params.has('b', 'all') && value === 'accessible') {
    params.delete('b', 'all')
  } 
  else if(params.has('b', 'all') && value === 'unisex') {
    params.delete('b', 'all')
} 
else {
    params.append('b', value)
}
   window.history.replaceState(value, "", params)
  //  formatSearchParams(window.location.href)

//    console.log('windowLoc', window.location.href)

 }

// console.log(activeFilters)

  return (
    <form className="Filter_div_wrapper">
      <input
        type="checkbox"
        className="Filter_input"
        id="accessible"
        name="accessible"
        value='accessible'
        onChange={handleForm}
      />
      <label className='Filter_label' for="accessible">Accessible</label>
      <input
        type="checkbox"
        className="Filter_input"
        id="unisex"
        name="filter"
        value='unisex'
        onChange={handleForm}
      />
      <label className='Filter_label' for="unisex">Unisex</label>
      <input
        type="checkbox"
        className="Filter_input"
        id="all"
        name="filter"
        value='all'
        onChange={handleForm}
      />
      <label className='Filter_label' for="all">All</label>
      {/* <button className='Filter_button' type='submit' >Filter</button> */}
    </form>
  );
};

export default Filter;
