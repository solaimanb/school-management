"use client";
import React, { useContext } from "react";
import { ThemeContext } from "@/providers/theme/CustomTheme";

interface HeroProps {
  title: string;
  description: string;
  buttonText: string;
}

const Hero: React.FC<HeroProps> = ({ title, description, buttonText }) => {
  const theme = useContext(ThemeContext);

  return (
    <div className="p-20 flex flex-col items-center justify-center space-y-5">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-lg">{description}</p>
      <button
        className={`
        px-5 py-1 rounded-full flex gap-2 font-semibold mt-4`}
        style={{ backgroundColor: theme.colors.primary }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Hero;
