import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import type { RootStackParamList } from "./model/navigation";
import { Home } from "./screens/Home";
import { NewTournament } from "./screens/NewTournament";
import { ReduxProvider } from "./store";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <ReduxProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              options={{ headerShown: false }}
              component={Home}
            />
            <Stack.Screen
              name="NewTournament"
              options={{ headerTitle: "Uusi turnaus" }}
              component={NewTournament}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ReduxProvider>
    </SafeAreaProvider>
  );
}
