import React from 'react'

import CountryList from './CountryList'
import useFilterByRegions from './FilterByRegions'
import useSearchCountry from './SearchCountry'

function Home() {

    const {renderFilterByRegions, region} = useFilterByRegions()
    const {renderSearchCountry, searchKey} = useSearchCountry()

    return (
        <div className="container">
            <div className="row">
                {renderSearchCountry}
                {renderFilterByRegions}
            </div>
            <CountryList {...{region, searchKey}}/>
        </div>
    )
}

export default Home
