import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {
  type EdgeInsets,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { colors } from "../design";

type Props = {
  children?: React.ReactNode;
};

export function SafeView({ children }: Props) {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles({ insets }).container}>
      <StatusBar style="auto" />
      {children}
    </View>
  );
}

type StylesProps = {
  insets: EdgeInsets;
};

const styles = ({ insets }: StylesProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.cold,
      alignItems: "center",
      justifyContent: "center",
      // safe area insets
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    },
  });
