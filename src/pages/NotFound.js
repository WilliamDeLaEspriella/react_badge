import React from "react";
function NotFound() {
  return (
    <React.Fragment>
      <h1 className="notFoundTitle">Oops! That page can’t be found.</h1>
      <p className="notFoundDesc">
        It looks like nothing was found at this location. Maybe try one of the
        links in the menu or press back to go to the previous page.
      </p>
    </React.Fragment>
  );
}

export default NotFound;
