.//SearchBar.jsx
import { useState, useEffect } from "react";
 function SearchBar({ hookValue, setMethod }) {     
    return (
        <div>
            <label>
                    SearchBar:
                    <input
                        type="text"
                        id="uname"
                        name="searchkeyword"
                        placeholder="search"
                        value={hookValue}
                        onChange={(e) => { 
                            setMethod(e.target.value);
                        }}                        
                    />
                </label>                       
        </div>
    );
 }
 export default SearchBar
