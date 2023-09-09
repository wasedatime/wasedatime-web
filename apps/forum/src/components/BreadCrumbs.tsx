import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="w-full text-left pl-2 lg:pl-10">
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <span key={to}>{value}</span>
        ) : (
          <React.Fragment key={to}>
            <Link to={to}>{value}</Link>
            <span> / </span> {/* Separator */}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
