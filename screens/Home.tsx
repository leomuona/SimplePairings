import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button } from "react-native";
import { SafeView } from "../components/SafeView";
import type { RootStackParamList } from "../model/navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export function Home({ navigation }: Props) {
  return (
    <SafeView hiddenHeader>
      <Button
        title="Lisää turnaus"
        onPress={() => navigation.navigate("NewTournament")}
      />
    </SafeView>
  );
}
