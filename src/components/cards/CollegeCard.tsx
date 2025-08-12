import { ConferenceType } from "@/lib/types/college";
import { Check } from "lucide-react";
import { useCalculatorProvider } from "../providers/CalculatorProvider";
import { AtheleteType } from "@/lib/types";

interface Props {
  name: string,
  conference: ConferenceType,
  imgUrl: string
}

const CollegeCard = ({ name, conference, imgUrl }: Props) => {
  const {selectedColleges, handleCollegeSelect, athleteType} = useCalculatorProvider()

  return (
    <div 
      className={`bg-gray-900 rounded-lg p-4 cursor-pointer transition-all duration-200 border-2 ${
        selectedColleges.includes(name)
          ? 'border-purple-500 bg-purple-900/20' 
          : 'border-gray-700 hover:border-gray-600 hover:bg-gray-800'
      }`}
      onClick={() => handleCollegeSelect(name)}
    >
      <div className="aspect-square bg-gray-800 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
        <img 
          src={imgUrl} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-semibold text-sm text-center text-white mb-1">{name}</h3>
      <p className="text-xs text-gray-400 text-center">{conference}</p>
      {selectedColleges.includes(name) && (
        <div className="mt-2 flex justify-center">
          <Check className="w-4 h-4 text-purple-400" />
        </div>
      )}
    </div>
  );
};

export default CollegeCard