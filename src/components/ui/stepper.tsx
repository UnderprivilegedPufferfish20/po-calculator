import React from 'react';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useCalculatorProvider } from '../providers/CalculatorProvider';
import { Stage } from '@/lib/types/athlete';
import { cn } from '@/lib/utils';

const Stepper = ({className}: {className: string}) => {
  const {stage} = useCalculatorProvider()

  const steps = [
    {
      id: 1,
      title: "Athlete Select",
      description: "Choose which type of athlete you are",
      active: Stage.ATHLETE_SELECT
    },
    {
      id: 2,
      title: "Sport Select",
      description: "Choose which sport you play, and position if applicable",
      active: Stage.SPORT_SELECT
    },
    {
      id: 3,
      title: "Social Media Select",
      description: "Choose which platforms you're active on, and how many followers on each",
      active: Stage.SOCIAL_MEDIA_SELECT
    },
    {
      id: 4,
      title: "College Select",
      description: "Pick out 2 colleges you're interested in knowing your NIL value if you went there if you're youth, 5 if you're student",
      active: Stage.COLLEGE_SELECT
    },
    {
      id: 5,
      title: "Valuation Dashboard",
      description: "View you NIL career valuation for each college you picked, and see potential earning from each social media platform.",
      active: Stage.END
    }
  ];

  const getStepStatus = (step: any, currentStage: any) => {
    const stageOrder = [
      Stage.ATHLETE_SELECT,
      Stage.SPORT_SELECT,
      Stage.SOCIAL_MEDIA_SELECT,
      Stage.COLLEGE_SELECT,
      Stage.END
    ];
    
    const currentIndex = stageOrder.indexOf(currentStage);
    const stepIndex = stageOrder.indexOf(step.active);
    
    if (stepIndex < currentIndex) {
      return 'completed';
    } else if (stepIndex === currentIndex) {
      return 'current';
    } else {
      return 'upcoming';
    }
  };

  const getStepStyles = (status: string) => {
    switch (status) {
      case 'completed':
        return {
          circle: 'bg-purple-300 text-white border-purple-300',
          connector: 'bg-white'
        };
      case 'current':
        return {
          circle: 'bg-purple-300 text-white border-purple-300',
          connector: 'bg-white'
        };
      case 'upcoming':
        return {
          circle: 'bg-slate-300 text-slate-600 border-slate-300',
          connector: 'bg-white'
        };
      default:
        return {
          circle: 'bg-slate-300 text-slate-600 border-slate-300',
          connector: 'bg-white'
        };
    }
  };

  return (
    <TooltipProvider>
      <div className={cn("flex flex-col items-center py-8", className)}>
        <div className="relative">
          {steps.map((step, index) => {
            const stepStatus = getStepStatus(step, stage);
            const styles = getStepStyles(stepStatus);
            const isLast = index === steps.length - 1;
            
            return (
              <div key={step.id} className="relative flex flex-col items-center">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className={`
                        w-12 h-12 rounded-full border-2 flex items-center justify-center
                        font-semibold text-lg cursor-pointer transition-all duration-200
                        hover:scale-110 ${styles.circle}
                      `}
                    >
                      {step.id}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="max-w-xs">
                    <div className="text-center">
                      <p className="font-semibold">{step.title}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {step.description}
                      </p>
                    </div>
                  </TooltipContent>
                </Tooltip>
                
                {!isLast && (
                  <div
                    className={`w-1 h-16 ${styles.connector} my-2`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Stepper;