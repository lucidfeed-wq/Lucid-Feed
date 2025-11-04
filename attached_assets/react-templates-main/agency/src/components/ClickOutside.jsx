import { useEffect, useRef } from "react";

const ClickOutside = ({ onClick, children }) => {
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClick(); // Close menu if click is outside
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClick]);

  return <div ref={ref}>{children}</div>;
};

export default ClickOutside;
