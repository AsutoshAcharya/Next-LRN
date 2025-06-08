import Link from "next/link";
import React from "react";

const ArchievedNotifications = () => {
  return (
    <div>
      <div>Archieved Notifications</div>
      <Link className="text-blue-700" href="/dashboard">
        Default
      </Link>
    </div>
  );
};

export default ArchievedNotifications;
