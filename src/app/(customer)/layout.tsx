"use client";
import React, { useState } from "react";
import CustomerSidebar from "@/components/common/CustomerSidebar";
import CustomerTopbar from "@/components/common/CustomerTopbar";

export default function CustomerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <CustomerSidebar
        sidebarOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <CustomerTopbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 overflow-y-auto px-4 md:px-6 py-7 md:py-10 pb-10 md:pb-12">
          {children}
        </main>
      </div>
    </div>
  );
}
