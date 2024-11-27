"use client";

import { CiFileOn, CiImageOn } from "react-icons/ci";
import { BsCloudCheck } from "react-icons/bs";
import {
  ChevronDown,
  Download,
  MousePointerClick,
  Redo2,
  Undo2,
} from "lucide-react";

import { Logo } from "./logo";

import { cn } from "@/lib/utils";
import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ActiveTool } from "../types";

interface NavbarProps {
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

export const Navbar = ({ activeTool, onChangeActiveTool }: NavbarProps) => {
  return (
    <nav className="w-full flex items-center p-4 h-[68px] gap-x-8 border-b lg:pl-[34px] ">
      {/* <Logo /> */}
      <p className="font-bold">ZAPLY</p>
      <div className="w-full flex items-center gap-x-1 h-full">
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button size="sm" variant="ghost">
              File <ChevronDown className="size-4 ml-2 " />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="min-w-60">
            <DropdownMenuItem
              onClick={() => {}}
              className="flex items-center gap-x-2"
            >
              // add Functionality
              <CiFileOn className="size-8" />
              <div>
                <p>Open</p>
                <p className="text-xs text-muted-foreground ">
                  Open A JSON file
                </p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Separator orientation="vertical" className="mx-2" />
        <Hint lable="Select" side="bottom" sideOffSet={10}>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onChangeActiveTool("select")}
            className={cn(activeTool === "select" && "bg-gray-100")}
          >
            <MousePointerClick className="size-4" />
          </Button>
        </Hint>
        <Hint lable="Undo" side="bottom" sideOffSet={10}>
          <Button variant="ghost" size="icon" onClick={() => {}} className="">
            <Undo2 className="size-4" />
          </Button>
        </Hint>
        <Hint lable="Redo" side="bottom" sideOffSet={10}>
          <Button variant="ghost" size="icon" onClick={() => {}} className="">
            <Redo2 className="size-4" />
          </Button>
        </Hint>
        <Separator orientation="vertical" className="mx-2" />
        <div className="flex items-center gap-x-2">
          <BsCloudCheck className="size-[20px] text-muted-foreground" />
          <p className="text-xs text-muted-foreground">Saved</p>
        </div>
        <div className="ml-auto flex items-center gap-x-4">
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant="ghost">
                Export <Download className="size-4 sl-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-60">
              <DropdownMenuItem
                className="flex items-center gap-x-2"
                onClick={() => {}} //TODO: Add functionality
              >
                <CiFileOn className="size-8" />
                <div>
                  <p>JSON</p>
                  <p className="text-xs text-muted-foreground">
                    Save for later editing
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center gap-x-2"
                onClick={() => {}} //TODO: Add functionality
              >
                <CiImageOn className="size-8" />
                <div>
                  <p>PNG</p>
                  <p className="text-xs text-muted-foreground">
                    Best for complex images, illustrations
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center gap-x-2"
                onClick={() => {}} //TODO: Add functionality
              >
                <CiImageOn className="size-8" />
                <div>
                  <p>JPG</p>
                  <p className="text-xs text-muted-foreground">
                    Best for sharing
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center gap-x-2"
                onClick={() => {}} //TODO: Add functionality
              >
                <CiImageOn className="size-8" />
                <div>
                  <p>SVG</p>
                  <p className="text-xs text-muted-foreground">
                    Best for web design and animations
                  </p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};
