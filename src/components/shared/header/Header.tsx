import { Bell, Landmark, MessageSquareText, Plus } from "lucide-react";
import React, { memo } from "react";
import NotificationDropdown from "./NotificationDropdown NotificationDropdown";

export const Header = memo(() => {
  const user = false;

  return (
    <nav className="bg-blue-500 text-white p-4">
      <div
        className={`${
          user ? "" : "container "
        } mx-auto flex items-center justify-between`}
      >
        <h1 className="text-2xl font-bold">TYPCM</h1>

        <div className="flex flex-row gap-5 items-center">
          {user ? (
            <>
              <NotificationDropdown />
              <MessageSquareText />
            </>
          ) : (
            <>
              <button className="px-2 py-1 rounded-full flex gap-2 font-semibold">
                Sign Up
              </button>
              <button className="px-2 py-1 rounded-full flex gap-2 font-semibold">
                Sign In
              </button>
            </>
          )}

          {user ? (
            <button className="border px-2 py-1 rounded-full flex gap-2 font-semibold">
              <Landmark />
              Institute
            </button>
          ) : null}
        </div>
      </div>
    </nav>
  );
});

Header.displayName = "Header";
