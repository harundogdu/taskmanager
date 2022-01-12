import CardContainer from "components/shared/CardContainer";
import React from "react";

const ContentFooter = () => {
  return (
    <footer className="flex-1 px-6 py-4 bg-gray-100 flex gap-x-8">
      <CardContainer title="Yapılacaklar" />
      <CardContainer title="Yapılanlar" />
    </footer>
  );
};

export default ContentFooter;
