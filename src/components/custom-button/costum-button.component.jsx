import React from "react";

import "./costum-button.styles.scss";

const CustomButton = ({children, ...otherProps}) => {
  return (
      <button className="custom-button" {...otherProps} type="submit">
        {children}
      </button>
  );
}
export default CustomButton;