import React from 'react'
import Swiggylogo from '../../assets/swiggyLogo'
export  function TopBar({children}) {
    return (
        <div>
            <div className="w-full bg-white  flex md:px-12 md:py-2  justify-between">
                <div className="svg">
                <Swiggylogo/>
                </div>
                <div className="text-black font-extrabold flex justify-between w-1/2">
                    {children}
                </div>
        </div>
        </div>
    )
}
