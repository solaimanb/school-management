import { Header } from "@/components/shared/header/Header";
import AsideBar from "@/components/shared/others/AsideBar";
import React, { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

const Dashboard: React.FC<PageProps> = ({ children }) => {
  return (
    <div>
      <body className={`flex flex-col h-screen`}>
        <Header />
        <div className="flex flex-row h-full">
          <AsideBar />
          <main className="overflow-auto">{children}</main>
        </div>
      </body>
    </div>
  );
};

export default Dashboard;
