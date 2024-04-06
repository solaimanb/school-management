import React from "react";
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
} from "lucide-react";

const AsideBar = () => {
  const items = [
    { name: "Dashboard", icon: <Home size={16} /> },
    { name: "General Settings", icon: <Settings size={16} /> },
    { name: "Classes", icon: <Users size={16} /> },
    { name: "Subjects", icon: <Book size={16} /> },
    { name: "Students", icon: <User size={16} /> },
    { name: "Teachers", icon: <User size={16} /> },
    { name: "Attendance", icon: <Clipboard size={16} /> },
    { name: "Exams", icon: <FileText size={16} /> },
    { name: "Assignments", icon: <FileText size={16} /> },
    { name: "Accounting", icon: <DollarSign size={16} /> },
    { name: "Payroll", icon: <Briefcase size={16} /> },
    { name: "Messages", icon: <Mail size={16} /> },
    { name: "Reports", icon: <BarChart2 size={16} /> },
    { name: "Certifications", icon: <Award size={16} /> },
  ];

  return (
    <aside className="min-w-[12%] p-2 h-full overflow-auto bg-slate-800 flex flex-col justify-between">
      <>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="py-1">
              <button className="font-semibold py-1 px-4 rounded w-full text-start flex items-center gap-2 hover:bg-slate-700">
                {item.icon} {item.name}
              </button>
            </li>
          ))}
        </ul>
      </>

      <div className="flex justify-center items-center mt-4">
        <button className="font-semibold  py-1 px-4 rounded w-full text-start flex items-center gap-2">
          <LogOut size={16} /> Logout
        </button>
      </div>
    </aside>
  );
};

export default AsideBar;
