import React from 'react'

import CountryList from '../components/CountryList'
import useFilterByRegions from '../components/FilterByRegions'
import useSearchCountry from '../components/SearchCountry'

function Home() {

    const {renderFilterByRegions, region} = useFilterByRegions()
    const {renderSearchCountry, searchKey} = useSearchCountry()

    return (
        <div>
            <div className=" my-5 container">
                <div className="row px-md-0 px-4 justify-content-between flex-wrap">
                    {renderSearchCountry}
                    {renderFilterByRegions}
                </div>
            </div>
            <div className="countries">
                <div className="container">
                    <CountryList {...{region, searchKey}}/>
                </div>
            </div>
        </div>
    )
}

export default Home
