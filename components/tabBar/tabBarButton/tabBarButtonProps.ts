import { icons } from "@/assets/icons";

export interface TabBarButtonProps {
  isFocused: boolean;
  label: string;
  routeName: keyof typeof icons;
  color: string;
  onPress: () => void;
  onLongPress: () => void;
  style?: any;
}