"use client";

import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-css";
import "prismjs/components/prism-json";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-yaml";

interface CodeBlockProps {
  code: string;
  language: string;
  fileName?: string | null;
  additionalTabs?: { label: string; active?: boolean }[];
}

export function CodeBlock({
  code,
  language,
  fileName = null,
  additionalTabs = [],
}: CodeBlockProps) {
  const [copied, setCopied] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>(fileName || "code");

  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeLines: string[] = code.split("\n");
  const lineNumbers: number[] = codeLines.map((_, i) => i + 1);

  const languageMap: Record<string, string> = {
    js: "JavaScript",
    jsx: "React JSX",
    ts: "TypeScript",
    tsx: "React TSX",
    css: "CSS",
    html: "HTML",
    json: "JSON",
    bash: "Terminal",
    yaml: "YAML",
    javascript: "JavaScript",
  };

  const displayLanguage: string = languageMap[language] || language;

  const tabs = [
    { label: fileName || displayLanguage, id: "code", active: true },
    ...additionalTabs.map((tab) => ({
      ...tab,
      id: tab.label.toLowerCase().replace(/\s+/g, "-"),
    })),
  ];

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-gray-700 shadow-lg bg-gray-800">
      <div className="flex items-center border-b border-gray-700 bg-gray-900">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "text-white border-b-2 border-blue-500"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="ml-auto pr-2">
          <button
            onClick={copyToClipboard}
            className="text-gray-400 hover:text-white transition-colors p-2"
            title="Copiar código"
          >
            {copied ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {activeTab === "code" && (
        <div className="flex bg-gray-800 text-white">
          <div className="hidden sm:block py-4 pl-3 pr-4 text-right bg-gray-900 text-gray-500 select-none">
            {lineNumbers.map((num: number) => (
              <div key={num} className="leading-relaxed text-xs">
                {num}
              </div>
            ))}
          </div>

          <pre className="p-4 overflow-x-auto text-sm w-full">
            <code className={`language-${language}`}>{code}</code>
          </pre>
        </div>
      )}

      {activeTab !== "code" && (
        <div className="p-4 text-gray-300">
          Contenido de la pestaña {activeTab}
        </div>
      )}
    </div>
  );
}
