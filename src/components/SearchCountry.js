import React, { useState } from 'react'

function useSearchCountry() {
    const [searchKey, setSearchKey] = useState("")

    const changeSearchKeyValue = (e) => {
        setSearchKey(e.target.value)
    }

    return {
        searchKey,
        renderSearchCountry: (
            <div className='country-search col-lg-4 col-md-7 col-12 shadow-sm'>
                <div className="search-input form-control input px-4 d-flex align-items-center">    
                    <ion-icon name="search"></ion-icon>
                    <input className='flex-fill mr-2' type="text" placeholder='Search for a Country' onInput={changeSearchKeyValue}/>
                </div>
            </div>
        )
    }
}

export default useSearchCountry
