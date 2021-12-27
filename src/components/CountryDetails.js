import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'


function CountryDetails() {

    const location = useLocation()
    const {selectedCountry, allCountries} = location.state

    const {
        flag,
        name,
        nativeName,
        population,
        region,
        subregion,
        capital,
        topLevelDomain
    } = selectedCountry

    useEffect(() => {
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const borders = selectedCountry.borders ? (
        selectedCountry.borders.map(border => {
            let countryName = allCountries.find(country => {
                return country.alpha3Code === border
            }).name
            return (
                <Link
                    to={`/${countryName}`}
                        state={{
                            allCountries: allCountries
                        }}>
                    {countryName}
                </Link>
            )
        })
    ) : (
        <p>No Borders</p>
    )

    console.log(borders)

    const currencies = selectedCountry.currencies ? (
        selectedCountry.currencies.map(curr => {
            return curr.name
        })
    ) : (
        "No Currencies"
    )

    const languages = selectedCountry.languages ? (
        selectedCountry.languages.map(lang => {
            return lang.name
        }).join(', ')
    ) : (
        "No Languages"
    )

    return (
        <div className="container">
            <div className="row">
                <button className="btn">
                    <Link
                        to={`/`}>
                        Go Back
                    </Link>
                </button>
            </div>
            <div className="row">
                <div className="col-5">
                    <img src={flag} className='img-fluid' alt="" />
                </div>
                <div className="col-5">
                    <h3>{name}</h3>
                    <div className="country-details">
                        <p>Native Name: {nativeName}</p>
                        <p>Population: {population}</p>
                        <p>Region: {region}</p>
                        <p>Sub Region: {subregion}</p>
                        <p>Capital: {capital}</p>
                        <p>Top-level Domain: {topLevelDomain}</p>
                        <p>Currencies: {currencies}</p>
                        <p>Languages: {languages}</p>
                    </div>
                    <p>Border Countries: 
                        {
                            borders
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CountryDetails
