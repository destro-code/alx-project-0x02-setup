import React from "react";
import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";

const home = () => {
  return (
    <div>
      <Card title="hello" content="bodyContent" />
      <Card title="title 2" content="bodyContent 2" />
      <Header />
    </div>
  );
};

export default home;
