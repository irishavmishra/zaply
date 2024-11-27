import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export interface HintProps {
  lable: String;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
  sideOffSet?: number;
  alignOffSet?: number;
}

export const Hint = ({
  lable,
  children,
  side,
  align,
  sideOffSet,
  alignOffSet,
}: HintProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          className="text-white bg-slate-800 border-slate-800"
          side={side}
          align={align}
          sideOffset={sideOffSet}
          alignOffset={alignOffSet}
        >
          <p className="font-semibold capitalize">{lable}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
