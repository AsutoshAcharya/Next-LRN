import React, { ReactNode } from "react";

const DashboardLayout = ({
  children,
  user,
  revenue,
  notifications,
}: {
  children: ReactNode;
  user: ReactNode;
  revenue: ReactNode;
  notifications: ReactNode;
}) => {
  return (
    <div>
      <div>{children}</div>
      <div className="flex flex-col mt-3">
        <div> {user}</div>
        <div> {revenue}</div>
        <div> {notifications}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
