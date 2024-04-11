import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeView } from "../components/SafeView";
import {
  type FormData,
  NewTournamentForm,
} from "../components/forms/NewTournamentForm";
import type { RootStackParamList } from "../model/navigation";
import { useAppDispatch } from "../store/hooks";
import { addTournament } from "../store/tournamentsSlice";

type Props = NativeStackScreenProps<RootStackParamList, "NewTournament">;

export function NewTournament({ navigation }: Props) {
  const dispatch = useAppDispatch();

  const onSubmit = (formData: FormData) => {
    dispatch(addTournament(formData.name, formData.date, formData.rounds));
    navigation.navigate("Home");
  };

  return (
    <SafeView>
      <NewTournamentForm onSubmit={onSubmit} />
    </SafeView>
  );
}
