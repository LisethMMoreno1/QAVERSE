import React from "react";

interface LanguageSwitcherProps {
  activeLanguage: "javascript" | "typescript";
  onLanguageChange: (language: "javascript" | "typescript") => void;
}

export function LanguageSwitcher({
  activeLanguage,
  onLanguageChange,
}: LanguageSwitcherProps) {
  return (
    <div className="flex items-center space-x-4 mb-4">
      {/* Botón para JavaScript */}
      <button
        type="button"
        onClick={() => onLanguageChange("javascript")}
        className={`flex items-center p-2 rounded transition-colors ${
          activeLanguage === "javascript" ? "bg-gray-200" : "bg-transparent"
        }`}
      >
        <span className="mr-2 text-yellow-500">
          {/* Icono para JavaScript */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067z" />
          </svg>
        </span>
        <span className="text-sm font-medium">JS</span>
      </button>

      {/* Botón para TypeScript */}
      <button
        type="button"
        onClick={() => onLanguageChange("typescript")}
        className={`flex items-center p-2 rounded transition-colors ${
          activeLanguage === "typescript" ? "bg-gray-200" : "bg-transparent"
        }`}
      >
        <span className="mr-2 text-blue-500">
          {/* Icono para TypeScript */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M3,3H21V21H3V3M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86M13,11.25H8V12.75H9.5V20H11.25V12.75H13V11.25Z" />
          </svg>
        </span>
        <span className="text-sm font-medium">TS</span>
      </button>
    </div>
  );
}
