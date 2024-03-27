import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import {
  type EdgeInsets,
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

function AppWithContext() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles({ insets }).container}>
      <StatusBar style="auto" />
      <ScrollView>
        {Array(200)
          .fill(1)
          .map((_v, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <Text key={index}>{`SUDO WGET LOCALHOST ${index}`}</Text>
          ))}
      </ScrollView>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <AppWithContext />
    </SafeAreaProvider>
  );
}

type StylesProps = {
  insets: EdgeInsets;
};

const styles = ({ insets }: StylesProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      // safe area insets
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    },
  });
