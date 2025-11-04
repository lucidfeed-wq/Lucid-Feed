import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const ClickOutside = ({ children, exceptionRef, onClick, className }) => {
  const wrapperRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickListener);

    return () => {
      document.removeEventListener("mousedown", handleClickListener);
    };
  });

  const handleClickListener = (event) => {
    let clickedInside;
    if (exceptionRef) {
      clickedInside =
        (wrapperRef && wrapperRef.current.contains(event.target)) ||
        exceptionRef.current === event.target ||
        exceptionRef.current.contains(event.target);
    } else {
      clickedInside = wrapperRef && wrapperRef.current.contains(event.target);
    }

    if (clickedInside) return;
    else onClick();
  };

  return (
    <div ref={wrapperRef} className={`${className || ""}`}>
      {children}
    </div>
  );
};

ClickOutside.propTypes = {
  children: PropTypes.node.isRequired,
  exceptionRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default ClickOutside;
