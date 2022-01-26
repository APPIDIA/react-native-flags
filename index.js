import React from "react";
import { Image, StyleSheet } from "react-native";
import * as flags from "./flags";

const sizeMap = {
  xs: 16,
  sm: 24,
  md: 32,
  lg: 48,
  xl: 64,
};

export default function Flag({ code, size, style }) {
  const styles = useStyle({ size });

  const flag = flags[`icons${sizeMap[size]}`][code];
  const unknownFlag = flags[`icons${sizeMap[size]}`].unknown;

  return <Image source={flag || unknownFlag} style={[styles.flag, style]} />;
}

Flag.defaultProps = {
  size: "md",
};

const useStyle = ({ size }) =>
  StyleSheet.create({
    flag: {
      alignSelf: "center",
      width: sizeMap[size],
      height: sizeMap[size],
    },
  });
