import { ConferenceType } from "@/lib/types/college";
import { Check } from "lucide-react";
import { useCalculatorProvider } from "../providers/CalculatorProvider";
import { getCollegeImg } from "@/lib/utils";

interface Props {
  name: string,
  conference: ConferenceType
}

const CollegeCard = ({ name, conference }: Props) => {
  const {selectedColleges, handleCollegeSelect} = useCalculatorProvider()

  return (
    <div 
      className={`bg-gray-900 rounded-lg p-4 h-full w-full cursor-pointer transition-all duration-200 border-2 ${
        selectedColleges.includes(name)
          ? 'border-purple-500 bg-purple-900/20' 
          : 'border-gray-700 hover:border-gray-600 hover:bg-gray-800'
      }`}
      onClick={() => handleCollegeSelect(name)}
    >
      <div className="aspect-square bg-gray-800 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
        <img 
          src={getCollegeImg(name)} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-semibold text-sm text-center text-white mb-1">{name}</h3>
    </div>
  );
};

export default CollegeCard