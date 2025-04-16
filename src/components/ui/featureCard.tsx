import type React from "react";

export function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-amber-50 rounded-lg p-5 border border-amber-100">
      <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center mb-4 text-amber-500 border border-amber-100">
        {icon}
      </div>
      <h3 className="font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
