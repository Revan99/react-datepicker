import PropTypes from "prop-types";
import React from "react";

export default function CalendarContainer({
  className,
  children,
  showPopperArrow,
  arrowProps = {},
  HoursComponent,
}) {
  return (
    <div className={`${className} react-datepicker__container `}>
      <div className="react-datepicker__children--container">
        {showPopperArrow && (
          <div className="react-datepicker__triangle" {...arrowProps} />
        )}
        <div className="children--container">{children}</div>
      </div>
      {HoursComponent && <HoursComponent />}
    </div>
  );
}

CalendarContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  arrowProps: PropTypes.object, // react-popper arrow props
  showPopperArrow: PropTypes.bool,
};
