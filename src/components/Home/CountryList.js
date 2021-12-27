import React, {useEffect, useRef, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
            <div className="card col-4" key={countries.indexOf(country)}>
                <Link
                    to={`/${country.name}`}
                    state={{
                        selectedCountry: country,
                        allCountries: countries
                    }}
                    >
                    <img src={country.flag} className="img-fluid" alt="" />
                    <div className="card-body">
                        <h3>{country.name}</h3>
                        <p>Population: {country.population}</p>
                        <p>Region: {country.region}</p>
                        <p>Capital: {country.capital}</p>
                    </div>
                </Link> 
            </div>
        )
    })

    const isResultLoading = isLoading ? (
        <p>Loading...</p>
    ) : (
        null
    )

    return (
        <div className="row">
            {isResultLoading}
            {countryResult}
        </div>
    )
}

export default CountryList
