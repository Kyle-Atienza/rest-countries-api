import React, { useState } from 'react'

function useFilterByRegions() {

    const [region, setRegion] = useState("")

    const changeRegionValue = (e) => {
        setRegion(e.target.value)
    }

    return {
        region,
        renderFilterByRegions: (    
            <div className="col-3">
                <select className='w-100' name="region-filter" id="region-filter" onChange={changeRegionValue}>
                    <option value="" defaultChecked hidden>Filter By Region</option>
                    <option value="All">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        )
        
    }
}

export default useFilterByRegions
