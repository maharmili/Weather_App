
import PropTypes from 'prop-types';
import { useRef } from 'react';

const Search = (props) => {
 
  const searchInput=useRef()
 
  return <div className="flex shadow-xl">
    <input type="search"  value={props.searchData} 
      onChange={()=>props.eventHandler(searchInput.current.value)} ref={searchInput} 
      className="border border-black w-full p-3 text-2xl"   />
    <button  onClick={props.searchWeather}  className="p-3 bg-slate-600 text-white">Search</button>
  </div>;
};

Search.propTypes = {
  searchData: PropTypes.string.isRequired,
};
Search.propTypes={
  eventHandler:PropTypes.string.isRequired
};

Search.propTypes={
searchWeather:PropTypes.string.isRequired
}

export default Search;
