import React from "react";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

const CustomerLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default CustomerLayout;
