import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ minHeight: 300, clear: "both", paddingTop: 120, paddingBottom:120, textAlign: "center", backgroundImage: "url(/assets/images/library.jpg)",
      backgroundSize: "cover"}}
      className="jumbotron"
    >

      {children}

    </div>
  );
}

export default Jumbotron;
