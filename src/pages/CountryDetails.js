import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Loader from '../components/Loader'

function CountryDetails() {

    const navigate = useNavigate()

    const {countryPath} = useParams()
    const [country, setCountry] = useState()
    const [countries, setCountries] = useState()

    const fetchCountry = async () => {
        await axios.get(`https://restcountries.com/v2/alpha/${countryPath}`)
            .then(res => {
                setCountry(res.data)
            })
    }

    const fetchAllCountries = async () => {
        await axios.get("https://restcountries.com/v2/all")
            .then (res => {
                setCountries([...res.data])
            })
    }

    useEffect(() => {
        fetchCountry()
        fetchAllCountries()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (country && countryPath !== country.alpha3Code){
            window.location.href=`/${countryPath}`
        }
    }, [countryPath])

    const countryDetails = country && countries ? (
        <div className='container'>
            <div className="row my-5">
            <button 
                className="btn back-button d-flex align-items-center justify-content-evenly col-2 shadow-sm"
                onClick={() => navigate(-1)}>
                <ion-icon name="arrow-back"></ion-icon>
                Go Back
            </button>
            </div>
            <div className="row">
                <div className="col-md-5 col-12 flex-md-fill d-flex flex-column justify-content-center">
                    <img src={country.flag} className='img-fluid' alt="" />
                </div>
                <div className="col-md-5 col-12 flex-md-fill d-flex flex-column justify-content-evenly">
                    <h4>{country.name}</h4>
                    <div className="country-details">
                        <p><span className='data-header'>Native Name:</span> {country.nativeName}</p>
                        <p><span className='data-header'>Population:</span> {country.population}</p>
                        <p><span className='data-header'>Region:</span> {country.region}</p>
                        <p><span className='data-header'>Sub Region:</span> {country.subregion}</p>
                        <p><span className='data-header'>Capital:</span> {country.capital}</p>
                        <p><span className='data-header'>Top-level Domain:</span> {country.topLevelDomain}</p>
                        <p><span className='data-header'>Currencies:</span> {country.currencies[0].name}</p>
                        <p><span className='data-header'>Languages:</span> {
                            country.languages ? (
                                country.languages.map(lang => {
                                    return lang.name
                                }).join(', ')
                            ) : (
                                "No Languages"
                            )    
                        }</p>
                    </div>
                    <p className='d-flex flex-wrap gap-2'>
                        <span className='data-header my-auto'>Border Countries: </span>
                        {
                            country.borders ? (
                                country.borders.map(border => {
                                    let borderCountry = countries.find(country => {
                                        return country.alpha3Code === border
                                    })
                                    return (
                                        <Link
                                            className='btn border-link shadow-sm'
                                            key={borderCountry.alpha3Code}
                                            to={`/${borderCountry.alpha3Code}`}
                                            >
                                            {borderCountry.name}
                                        </Link>
                                    )
                                })
                            ) : (
                                "No Borders"
                            )
                        }
                    </p>
                </div>
            </div>
        </div>
    ) : (
        <Loader />
    )

    return (
        <div>   
            {countryDetails}
        </div>
    )
}

export default CountryDetails
