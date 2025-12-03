import { Card } from "@heroui/card";
import type { IconType } from "react-icons";

interface TechCardProps {
  title: string;
  description?: string;
  icon?: IconType;
  className?: string;
}

export const TechCard = ({ title, description, icon: Icon, className = "" }: TechCardProps) => {
  return (
    <Card 
      className={`p-4 hover:bg-primary_custom-200 transition-all duration-300 cursor-pointer group h-full min-h-[100px] flex flex-col justify-center bg-gray-900/50 border border-gray-800 ${className}`}
    >
      <div className="flex items-center gap-4 h-full">
        {Icon && (
          <div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-primary_custom-400 transition-colors flex-shrink-0">
            <Icon className="w-6 h-6 text-white" />
          </div>
        )}
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-lg font-semibold text-white mb-1">
            {title}
          </h3>
          {description && (
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
              {description}
            </p>
          )}
        </div>
      </div>
    </Card>
  );
};
