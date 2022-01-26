import { StyleSheetProperties } from "react-native";

export interface FlagProps {
  code: String;
  size: "xs" | "sm" | "md" | "lg" | "xl";
  style?: StyleSheetProperties;
}

export default function Flag(props: FlagProps): React.FC;
