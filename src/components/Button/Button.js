import React from 'react';
import {PropTypes} from 'prop-types';
// import './button.css';
// import "tailwindcss/tailwind.css"

/**
 * Primary UI component for user interaction
 */
export const Button = ({ type, backgroundColor,border, size, label1,label2, ...props }) => {
  // var mode =  type == 'primary'  ? `bg-yellow-swiggy text-white border-md shadow font-bold  ` : type == 'white' ? "bg-white text-black border-md font-bold hover:text-yellow-swiggy" : "bg-black text-white border-md shadow font-bold";
  var mode;  
  switch(type){
     case "primary":
       mode = "bg-yellow-swiggy text-white border-md shadow font-bold";
       break;
      case "primary-l":
        mode = "bg-white border text-yellow-swiggy border-md border-yellow-swiggy shadow-md font-bold";
        break;
      case 'white':
      mode = 'bg-white text-black border-md font-bold hover:text-yellow-swiggy';
        break;
      case 'black':
        mode = 'bg-black text-white border-md shadow font-bold';
        break;
      case 'green':
        mode = 'bg-green-swiggy text-white border-md shadow font-bold';
        break;
      case "green-l":
        mode = 'bg-white border  text-green-swiggy border-md border-green-swiggy shadow font-bold';
        break;

  }
  const padding = size ==='text-lg' ? 'py-3 px-20':size == "text-base" ? "py-4 px-6":  "py-2 px-6 "
  return (
    <button
      type="button"
      className={[mode,padding].join(' ')}
      // className={[mode]}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      <h1 className="block text-sm font-normal">{label2}</h1>
      <h1 className="block font-bold ">{label1}</h1>


       
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  type: PropTypes.oneOf(['primary','primary-l','white','black','green','green-l']),
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['text-sm', 'text-base', 'text-lg']),
  /**
   * Button contents
   */
  label1: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  // primary: false,
  size: 'text-base',
  onClick: undefined,
};
