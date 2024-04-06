"use client";
import React, { memo, useCallback, useState } from "react";
import {
  Home,
  Settings,
  Users,
  MessageCircle,
  LogOut,
  Book,
  User,
  Mail,
  DollarSign,
  Clipboard,
  FileText,
  Briefcase,
  BarChart2,
  Award,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const items = [
  { name: "Dashboard", icon: <Home size={20} /> },
  { name: "General Settings", icon: <Settings size={20} /> },
  { name: "Classes", icon: <Users size={20} /> },
  { name: "Subjects", icon: <Book size={20} /> },
  { name: "Students", icon: <User size={20} /> },
  { name: "Teachers", icon: <User size={20} /> },
  { name: "Attendance", icon: <Clipboard size={20} /> },
  { name: "Exams", icon: <FileText size={20} /> },
  { name: "Assignments", icon: <FileText size={20} /> },
  { name: "Accounting", icon: <DollarSign size={20} /> },
  { name: "Payroll", icon: <Briefcase size={20} /> },
  { name: "Messages", icon: <Mail size={20} /> },
  { name: "Reports", icon: <BarChart2 size={20} /> },
  { name: "Certifications", icon: <Award size={20} /> },
];

const AsideBar = memo(() => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  return (
    <aside
      className={`${
        isExpanded ? "min-w-[12%] p-2" : "py-2"
      }  h-full overflow-auto bg-slate-800 flex flex-col justify-between`}
    >
      <div>
        {/* Aside Bar Toggler */}
        <div className="">
          <button
            className={`font-bold rounded w-full text-start flex items-center ${
              isExpanded ? "justify-end" : "justify-center"
            } gap-2`}
            onClick={toggleExpansion}
          >
            {isExpanded ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>

        <hr className="my-2" />

        <ul>
          {items.map((item) => (
            <li key={item.name} className="py-1">
              <button className="font-semibold py-1 px-4 rounded w-full text-start flex items-center gap-2 hover:bg-slate-700">
                {item.icon} {isExpanded && item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center items-center mt-4">
        <button className="font-semibold  py-1 px-4 rounded w-full text-start flex items-center gap-2">
          <LogOut size={20} /> {isExpanded && "Logout"}
        </button>
      </div>
    </aside>
  );
});
AsideBar.displayName = "AsideBar";

export default AsideBar;
