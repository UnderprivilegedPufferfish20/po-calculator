import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useCalculatorProvider } from "../providers/CalculatorProvider"
import { Stage } from "@/lib/types"

type Props = {
  name: string
  positions?: string[]
}

export function SportCard(sport: Props) {
  const {setSportPlayed, setStage} = useCalculatorProvider()

  const hasPositions = sport.positions && sport.positions.length > 0

  return (
      <div 
        className="relative border-white border-[2px] w-full max-w-sm aspect-square bg-black rounded-lg overflow-hidden cursor-pointer transform transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-lg group"
        onClick={
          hasPositions 
            ? () => {} 
            : () => {
            setSportPlayed({
              name: sport.name
            });
            setStage(Stage.SOCIAL_MEDIA_SELECT)
          }
        }
      >
      {/* Text Content - Top Left */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-start">
        <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
          {sport.name}
        </h3>
        
        {hasPositions && (
          <p className="text-gray-300 text-sm">
            {sport.positions?.length} positions available
          </p>
        )}
      </div>
      
      {/* Image with Diagonal Fade Effect */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent via-70% to-black to-90% z-10 opacity-50 group-hover:opacity-40 transition-opacity duration-500"></div>
        <img 
          src={"/sports/" + sport.name.replaceAll(' ', '_').toLowerCase() + '.avif'}
          alt={sport.name}
          className="w-full h-full object-cover opacity-60 transition-all duration-500 ease-in-out group-hover:opacity-70"
        />
      </div>
      {hasPositions && (

      <Dialog>
        <DialogTrigger asChild>
          <div className="absolute inset-0 z-20" />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-black border-white text-white">
          <DialogHeader>
            <DialogTitle>Select {sport.name} Position</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4 py-4">
            {sport.positions?.map((position) => (
              <Button
                key={position}
                variant="outline"
                className="text-black border-white hover:bg-gray-800 hover:text-white"
                onClick={() => {
                  setSportPlayed({
                    name: sport.name,
                    positions: [position]
                  });
                  setStage(Stage.SOCIAL_MEDIA_SELECT)
                }}
              >
                {position}
              </Button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
      )}
    </div>
  )
}