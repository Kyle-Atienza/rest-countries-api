import React, {useEffect, useRef, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Loader from './Loader'

function CountryList({region, searchKey}) {
    const [countries, setCountries] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const firstUpdate = useRef(true)
    
    const fetchAllCountries = async (callback) => {
        await axios.get("https://restcountries.com/v2/all")
            .then (res => {
                callback([...res.data])
            })
    }

    useEffect(() => {
        fetchAllCountries(data => {
            setCountries(data)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        setIsLoading(true)
        if(region === "All"){
            fetchAllCountries(data => {
                setCountries(data)
                setIsLoading(false)
            })
        } else {
            fetchAllCountries(data => {
                setCountries(
                    data.filter(country => {
                        return country.region === region
                    })
                )
                setIsLoading(false)
            })
        }
    }, [region])

    //TODO: dont run on first update
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        setIsLoading(true)
        fetchAllCountries(data => {
            setCountries(
                data.filter(country => {
                    return (country.name.toLowerCase()).includes(searchKey)
                })
            )
            setIsLoading(false)
        })
    }, [searchKey])

    useEffect(() => {
        console.log(countries)
    }, [countries])

    const countryResult = countries.map(country => {
        return(
            <div className="country-card col-lg-3 col-md-4 col-sm-6 col-12 px-4">
                <div className="card shadow-sm p-0 h-100 flex-grow-1" key={countries.indexOf(country)}>
                    <Link
                        className='d-flex flex-column h-100'
                        to={`/${country.alpha3Code}`}>
                        <div className="card-image h-50">
                            <img src={country.flag} className="country-card-image img-fluid " alt="" />
                        </div>
                        <div className="card-body h-50">
                            <h3>{country.name}</h3>
                            <p><span className='data-header'>Population:</span> {country.population}</p>
                            <p><span className='data-header'>Region:</span> {country.region}</p>
                            <p><span className='data-header'>Capital:</span> {country.capital}</p>
                        </div>
                    </Link> 
                </div>
            </div>
        )
    })

    const isResultLoading = isLoading ? (
        <Loader />
    ) : (
        null
    )

    return (
        <div className="country-list g-sm-5 gy-5 row">
            {isResultLoading}
            {countryResult}
        </div>
    )
}

export default CountryList
