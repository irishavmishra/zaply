import { ChromePicker, CirclePicker } from "react-color";
import { colors } from "../types";
import { Divide } from "lucide-react";
import { rgbaObjectToStringm } from "../utils";

interface ColorPickerProps {
  value: string;
  onChange: (value: string) => void;
}

export const ColorPicker = ({ value, onChange }: ColorPickerProps) => {
  return (
    <div className="w-full space-y-4 ">
      <ChromePicker
        color={value}
        onChange={(color) => {
          const formattedValue = rgbaObjectToStringm(color.rgb);
          onChange(formattedValue);
        }}
        className="border rounded-lg"
      />
      <CirclePicker
        color={value}
        colors={colors}
        onChangeComplete={(color) => {
          const formattedValue = rgbaObjectToStringm(color.rgb);
          onChange(formattedValue);
        }}
      />
    </div>
  );
};
