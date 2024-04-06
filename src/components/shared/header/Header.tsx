import { Bell, Landmark, MessageSquareText, Plus } from "lucide-react";
import React, { memo } from "react";
import NotificationDropdown from "./NotificationDropdown NotificationDropdown";

export const Header = memo(() => {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-semibold">TYP</h1>

        <div className="flex flex-row gap-5 items-center">
          <NotificationDropdown />
          <MessageSquareText />

          <button className="border px-2 py-1 rounded-full flex gap-2 font-semibold">
            <Landmark />
            Institute
          </button>
        </div>
      </div>
    </nav>
  );
});

Header.displayName = "Header";
