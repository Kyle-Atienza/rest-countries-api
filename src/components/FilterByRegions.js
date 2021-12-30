/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'

function useFilterByRegions() {

    const [region, setRegion] = useState("Filter By Region")

    const changeRegionValue = (e) => {
        setRegion(e.target.text)
    }

    return {
        region,
        renderFilterByRegions: (    
            <div className="region-filter dropdown col-md-3 col-7 mt-md-0 mt-4 shadow-sm">
                <button class="btn dropdown-toggle w-100 text-start d-flex align-items-center justify-content-between" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    {region}
                    <ion-icon name="caret-down-outline"></ion-icon>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" onClick={changeRegionValue}>
                    <li><a class="dropdown-item" href="#">All</a></li>
                    <li><a class="dropdown-item" href="#">Africa</a></li>
                    <li><a class="dropdown-item" href="#">Americas</a></li>
                    <li><a class="dropdown-item" href="#">Asia</a></li>
                    <li><a class="dropdown-item" href="#">Europe</a></li>
                    <li><a class="dropdown-item" href="#">Oceania</a></li>
                </ul>
            </div>
        )
        
    }
}

export default useFilterByRegions
