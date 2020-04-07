import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const ProfileSettings = ({ toggleProfile, inProp = false }) => {
  const wrapper = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      toggleProfile();
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [wrapper, toggleProfile]);

  return (
    <div ref={wrapper}>
      <CSSTransition
        in={inProp}
        timeout={100}
        classNames={{
          enter: "transition ease-out duration-100",
          enterActive: "transform opacity-0 scale-95",
          enterDone: "transform opacity-100 scale-100",
          exit: "transition ease-in duration-75",
          exitActive: "transform opacity-100 scale-100",
          exitDone: "transform opacity-0 scale-95",
        }}
      >
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
          <div className="py-1 rounded-md bg-white shadow-xs">
            <Link
              to="/profile"
              className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 transition duration-150 ease-in-out"
            >
              My profile
            </Link>
            <Link
              to="/settings"
              className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 transition duration-150 ease-in-out"
            >
              Settings
            </Link>
            <Link
              to="/logout"
              className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 transition duration-150 ease-in-out"
            >
              Sign out
            </Link>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default ProfileSettings;
