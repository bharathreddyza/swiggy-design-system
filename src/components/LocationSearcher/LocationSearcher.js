import React from 'react'

export  function LocationSearcher({label}) {
 
    return(
        <div className="main flex border border-gray-400 h-16 	flex">

        <div className="inputfield ">
            <input 
            className="border-0 p-2 flex text-black text-lg font-semibold  pl-4 w-full outline-none	"
            placeholder="Enter  your delivery location"/>

        </div>  

        <div className="my-2 locatesvg flex items-center p-2  text-gray-500 hover:bg-gray-200	">
        <svg className="w-4 py-1" id="regular" enable-background="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="512"
         xmlns="http://www.w3.org/2000/svg">
             <path d="m12 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm0-18.5c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5z"/><path
              d="m12 5c-.414 0-.75-.336-.75-.75v-3.5c0-.414.336-.75.75-.75s.75.336.75.75v3.5c0 .414-.336.75-.75.75z"/>
              <path d="m23.25 12.75h-3.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.5c.414 0 .75.336.75.75s-.336.75-.75.75z"/>
              <path d="m12 24c-.414 0-.75-.336-.75-.75v-3.5c0-.414.336-.75.75-.75s.75.336.75.75v3.5c0 .414-.336.75-.75.75z"/>
              <path d="m4.25 12.75h-3.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.5c.414 0 .75.336.75.75s-.336.75-.75.75z"/>
              <path d="m12 15c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"/></svg>
              <h1 className="text-sm ">Locate Me</h1>

        </div>  
    
    </div>
    )
}