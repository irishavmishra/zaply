import { useState } from "react";
import { useGenerateImage } from "@/features/ai/api/use-generate-image";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ToolSidebarHeader } from "./tool-sidebar-header";
import { ToolSIdebarClose } from "./tool-sidebar-close";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ActiveTool, Editor } from "../types";

interface AiSidebarProps {
  editor: Editor | undefined;
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

export const AiSidebar = ({
  editor,
  activeTool,
  onChangeActiveTool,
}: AiSidebarProps) => {
  const mutation = useGenerateImage();
  const [value, setValue] = useState<string>("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(
      { prompt: value },
      {
        onSuccess: ({ data }) => {
          editor?.addImage(data);
        },
      }
    );
  };

  const onClose = () => {
    onChangeActiveTool("select");
  };

  return (
    <aside
      className={`bg-white relative border-r z-[40] w-[360px] h-full flex flex-col ${
        activeTool === "ai" ? "visible" : "hidden"
      }`}
    >
      <ToolSidebarHeader title="AI" description="Generate image using AI" />
      <ScrollArea>
        <form onSubmit={onSubmit} className="p-4 space-y-6">
          <Textarea
            disabled={mutation.isPending}
            value={value}
            placeholder="Generate Elephent in garden..."
            onChange={(e) => setValue(e.target.value)}
          />
          <Button
            disabled={mutation.isPending}
            type="submit"
            className="w-full"
          >
            Generate
          </Button>
        </form>
      </ScrollArea>
      <ToolSIdebarClose onClick={onClose} />
    </aside>
  );
};
