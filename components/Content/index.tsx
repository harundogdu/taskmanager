import React from "react";
import ContentFooter from "./ContentFooter";
import ContentHeader from "./ContentHeader";

const Content = () => {
  return (
    <main id="main" className="flex-1 flex flex-col">
      <ContentHeader />
      <ContentFooter />
    </main>
  );
};

export default Content;
