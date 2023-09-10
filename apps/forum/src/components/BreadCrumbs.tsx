import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = ({ onTriggerFetch }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const goToForum = () => {};

  return (
    <div className="w-full text-left pl-2 lg:pl-10">
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <span key={to}>{value}</span>
        ) : (
          <React.Fragment key={to}>
            <button onClick={() => onTriggerFetch(to)} to={to}>
              {value}
            </button>
            <span> / </span>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
