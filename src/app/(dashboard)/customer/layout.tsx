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
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <CustomerSidebar
        sidebarOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <CustomerTopbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 overflow-y-auto px-5 py-6 pb-8">
          {children}
        </main>
      </div>
    </div>
  );
}
