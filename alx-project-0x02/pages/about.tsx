import React from "react";
import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const AboutPage: React.FC = () => {
  return (
    <div className="p-6">
      <Header />
      <h1 className="text-2xl font-bold mb-4">About Page</h1>

      <div className="space-x-10">
        {/* Small Rounded-sm Button */}
        <Button size="small" shape="rounded-sm">
          Small Rounded Button
        </Button>

        {/* Medium Rounded-md Button */}
        <Button size="medium" shape="rounded-md">
          Medium Rounded Button
        </Button>

        {/* Large Rounded-full Button */}
        <Button size="large" shape="rounded-full">
          Large Rounded Button
        </Button>
      </div>
    </div>
  );
};

export default AboutPage;
