import { CollegeCardProps } from "@/lib/types";
import { Check } from "lucide-react";

const CollegeCard: React.FC<CollegeCardProps> = ({ name, conference, imgUrl, onSelect, isSelected }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>): void => {
    const target = e.target as HTMLImageElement;
    target.src = '/colleges/default.png';
  };

  return (
    <div 
      className={`bg-gray-900 rounded-lg p-4 cursor-pointer transition-all duration-200 border-2 ${
        isSelected 
          ? 'border-purple-500 bg-purple-900/20' 
          : 'border-gray-700 hover:border-gray-600 hover:bg-gray-800'
      }`}
      onClick={() => onSelect(name)}
    >
      <div className="aspect-square bg-gray-800 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
        <img 
          src={imgUrl} 
          alt={name}
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
      </div>
      <h3 className="font-semibold text-sm text-center text-white mb-1">{name}</h3>
      <p className="text-xs text-gray-400 text-center">{conference}</p>
      {isSelected && (
        <div className="mt-2 flex justify-center">
          <Check className="w-4 h-4 text-purple-400" />
        </div>
      )}
    </div>
  );
};