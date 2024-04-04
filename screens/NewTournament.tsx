import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeView } from "../components/SafeView";
import {
  type FormData,
  NewTournamentForm,
} from "../components/forms/NewTournamentForm";
import type { RootStackParamList } from "../model/navigation";

type Props = NativeStackScreenProps<RootStackParamList, "NewTournament">;

export function NewTournament({ navigation }: Props) {
  const onSubmit = (formData: FormData) => {
    // TODO GLOBAL STATE THING
    console.log(formData);

    navigation.navigate("Home");
  };

  return (
    <SafeView>
      <NewTournamentForm onSubmit={onSubmit} />
    </SafeView>
  );
}
