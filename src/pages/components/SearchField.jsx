import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function SearchField() {
  return (
    <div className='searchContainer'>
      <input type="text" className='inputBox' placeholder='Search Products' autoComplete='off' maxLength={40}/>
      <button className='searchButton'> <SearchIcon style={{cursor: "pointer", color: "white"}}/> </button> 
    </div>
  );
}

export default SearchField;
