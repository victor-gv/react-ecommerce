import React, {useState} from 'react'
export const discountContext = React.createContext();

function DiscountContextProvider( { children } ) {

    const [discountActive, setDiscountActive] = useState(false);


  return (
    <discountContext.Provider value={{discountActive, setDiscountActive}}>
        {children}
    </discountContext.Provider>
  )
}

export default DiscountContextProvider