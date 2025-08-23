import React, { useEffect, useState } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useCalculatorProvider } from '../providers/CalculatorProvider';
import { Stage } from '@/lib/types/athlete';
import { cn } from '@/lib/utils';

const Stepper = () => {
  const { stage } = useCalculatorProvider();
  const [isLg, setIsLg] = useState(false); // for tooltip side

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)'); // lg
    const update = () => setIsLg(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const steps: { id: number; title: string; description: string; active: Stage }[] = [
    { id: 1, title: 'Athlete Select', description: 'Choose which type of athlete you are', active: 'AS' },
    { id: 2, title: 'Sport Select', description: 'Choose which sport you play, and position if applicable', active: 'SS' },
    { id: 3, title: 'Social Media Select', description: "Choose which platforms you're active on, and how many followers on each", active: 'SMS' },
    { id: 4, title: 'College Select', description: "Pick 2 if youth, 5 if student", active: 'CS' },
    { id: 5, title: 'Valuation Dashboard', description: 'See your NIL valuation and platform earnings', active: 'E' },
  ];

  const getStepStatus = (step: any, currentStage: any) => {
    const order: Stage[] = ['AS', 'SS', 'SMS', 'CS', 'E'];
    const ci = order.indexOf(currentStage);
    const si = order.indexOf(step.active);
    if (si < ci) return 'completed';
    if (si === ci) return 'current';
    return 'upcoming';
  };

  const getStepStyles = (status: string) => {
    switch (status) {
      case 'completed':
      case 'current':
        return { circle: 'bg-purple-300 text-white border-purple-300', connector: 'bg-white' };
      default:
        return { circle: 'bg-slate-300 text-slate-600 border-slate-300', connector: 'bg-white' };
    }
  };

  return (
    <TooltipProvider>
      {/* Positioning:
          - mobile/tablet: bottom bar
          - lg+: right rail, centered */}
      <div
        className={cn(
          // base: bottom, horizontal
          'fixed inset-x-0 bottom-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40',
          'py-2 sm:py-3',
          // lg+: switch to right side, vertical
          'xl:fixed xl:inset-x-auto xl:bottom-auto xl:right-5 xl:top-1/2 xl:-translate-y-1/2 xl:bg-transparent xl:backdrop-blur-0 xl:py-8'
        )}
      >
        {/* Rail: horizontal by default, vertical on lg+ */}
        <div className={cn('flex items-center', 'xl:flex-col')}>
          {steps.map((step, idx) => {
            const status = getStepStatus(step, stage);
            const styles = getStepStyles(status);
            const isLast = idx === steps.length - 1;

            return (
              <div
                key={step.id}
                className={cn('flex items-center', 'xl:flex-col')}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className={cn(
                        'rounded-full border-2 flex items-center justify-center font-semibold cursor-pointer transition-transform duration-200 hover:scale-110',
                        // size scales with screen
                        'w-8 h-8 text-sm',
                        'sm:w-10 sm:h-10 sm:text-base',
                        'xl:w-12 xl:h-12 xl:text-lg',
                        styles.circle
                      )}
                      aria-current={status === 'current' ? 'step' : undefined}
                    >
                      {step.id}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent
                    side={isLg ? 'right' : 'top'}
                    className="max-w-xs"
                  >
                    <div className="text-center">
                      <p className="font-semibold">{step.title}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {step.description}
                      </p>
                    </div>
                  </TooltipContent>
                </Tooltip>

                {/* Connector: horizontal on mobile, vertical on lg+ */}
                {!isLast && (
                  <div
                    className={cn(
                      styles.connector,
                      // mobile connector
                      'h-1 w-10 mx-2',
                      'sm:w-14',
                      // lg vertical connector
                      'xl:mx-0 xl:my-2 xl:w-1 xl:h-12'
                    )}
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
