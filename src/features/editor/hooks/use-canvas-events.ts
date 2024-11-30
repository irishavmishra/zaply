import { fabric } from "fabric";
import { useEffect } from "react";

interface UseCanvasEventsProps {
  canvas: fabric.Canvas | null;
  container: HTMLDivElement | null;
  setSelectedObjects: (object: fabric.Object[]) => void;
}

export const useCanvasEvents = ({
  canvas,
  container,
  setSelectedObjects,
}: UseCanvasEventsProps) => {
  useEffect(() => {
    if (canvas) {
      canvas.on("selection:created", (e) => {
        setSelectedObjects(e.selected || []);
      });
      canvas.on("selection:updated", (e) => {
        setSelectedObjects(e.selected || []);
      });
      canvas.on("selection:cleared", () => {
        setSelectedObjects([]);
      });
      return () => {
        if (canvas) {
          canvas.off("selection:created");
          canvas.off("selection:updated");
          canvas.off("selection:cleared");
        }
      };
    }
  }, [canvas, setSelectedObjects]);
};