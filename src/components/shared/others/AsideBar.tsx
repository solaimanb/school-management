import React from "react";

const AsideBar = () => {
  const items = [
    "Dashboard",
    "General Settings",
    "Classes",
    "Subjects",
    "Students",
    "Teachers",
    "Attendance",
    "Exams",
    "Assignments",
    "Accounting",
    "Payroll",
    "Messages",
    "Reports",
  ];

  return (
    <aside className="min-w-[15%] p-2 h-full overflow-auto bg-slate-700">
      <ul>
        {items.map((item, index) => (
          <li key={index} className="py-1">
            <button className="font-semibold py-1 px-4 rounded w-full text-start">
              {item}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default AsideBar;
