import Header from "../../src/components/header";
import React from "react";
import Introduction from "../../src/components/introduction"

const HomePage = () => {
  return (
    <div className="overflow-hidden bg-customblack">
      <Header />
      <Introduction />
    </div>
  );
};

export default HomePage;
