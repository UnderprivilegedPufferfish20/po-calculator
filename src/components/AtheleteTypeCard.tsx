import Link from "next/link";
import { SetStateAction } from "react";

interface Props {
  imgUrl: string,
  desc: string,
  label: 'Youth Athelete' | 'College Athelete' | 'Pro Athelete',
  onClick: React.Dispatch<SetStateAction<'Youth Athelete' | 'College Athelete' | 'Pro Athelete' | null>>
}


export function AtheleteTypeCard(props: Props) {
  return (
    <div
      onClick={() => props.onClick(props.label)}
      className="relative border-white border-[2px] w-full max-w-sm aspect-square bg-black rounded-lg overflow-hidden cursor-pointer transform transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-lg group"
    >
      {/* Text Content - Top Left */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-start">
        <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
          {props.label}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          {props.desc}
        </p>
      </div>
      
      {/* Image with Diagonal Fade Effect */}
      <div className="absolute inset-0 w-full h-full">
        {/* Diagonal fade gradient overlay - more subtle */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent via-70% to-black to-90% z-10 opacity-50 group-hover:opacity-40 transition-opacity duration-500"></div>
        
        {/* Image with softer opacity */}
        <img 
          src={props.imgUrl}
          alt={props.label}
          className="w-full h-full object-cover opacity-60 transition-all duration-500 ease-in-out group-hover:opacity-70"
        />
      </div>
    </div>
  );
}
