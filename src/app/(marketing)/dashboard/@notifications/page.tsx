import Link from "next/link";
import React from "react";

const Notifications = () => {
  return (
    <div>
      <div>Notifications</div>
      <Link className="text-blue-700" href="/dashboard/archieve">
        Archieve
      </Link>
    </div>
  );
};

export default Notifications;
