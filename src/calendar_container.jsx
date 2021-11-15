import PropTypes from "prop-types";
import React from "react";

export default function CalendarContainer({
  className,
  children,
  showPopperArrow,
  arrowProps = {},
}) {
  return (
    <div className={`${className} react-datepicker__container`}>
      <div div className="react-datepicker__triangle--container">
        {showPopperArrow && (
          <div className="react-datepicker__triangle" {...arrowProps} />
        )}
      </div>
      <div className="children__container">{children}</div>
    </div>
  );
}

CalendarContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  arrowProps: PropTypes.object, // react-popper arrow props
  showPopperArrow: PropTypes.bool,
};
