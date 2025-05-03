import Header from "@/components/common/Header";
import React from "react";

const CustomerLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default CustomerLayout;
