import { Bell, Landmark, MessageSquareText } from "lucide-react";
import React from "react";

export const Header = () => {
  return (
    <div>
      <nav className="bg-blue-500 text-white p-6">
        <div className="mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-semibold">TYP</h1>

          <div className="flex flex-row gap-5 items-center">
            <Bell />
            <MessageSquareText />

            <button className="border px-2 py-1 rounded-full flex gap-2 font-semibold">
              <Landmark />
              Institute Name
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
