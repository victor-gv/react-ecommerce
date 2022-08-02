import React, {useState} from 'react'
export const searchContext = React.createContext();

function SearchContextProvider( { children } ) {

    const [searchCall, setSearchCall] = useState(false);

  return (
    <searchContext.Provider value={{searchCall, setSearchCall}}>
        {children}
    </searchContext.Provider>
  )
}

export default SearchContextProvider