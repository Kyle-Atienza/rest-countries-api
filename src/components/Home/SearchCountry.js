import React, { useState } from 'react'

function useSearchCountry() {
    const [searchKey, setSearchKey] = useState("")

    const changeSearchKeyValue = (e) => {
        setSearchKey(e.target.value)
    }

    return {
        searchKey,
        renderSearchCountry: (
            <div className='col-4'>
                <input type="text" placeholder='Search for a Country' onInput={changeSearchKeyValue}/>
            </div>
        )
    }
}

export default useSearchCountry
