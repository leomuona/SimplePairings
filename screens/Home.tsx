import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text } from "react-native";
import { SafeView } from "../components/SafeView";
import type { RootStackParamList } from "../model/navigation";
import type { Tournament } from "../model/tournament";
import { useAppSelector } from "../store/hooks";

const getTournamentString = (tournament: Tournament) =>
  `${tournament.name} - ${tournament.date} - rounds: ${tournament.rounds}`;

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export function Home({ navigation }: Props) {
  const tournaments = useAppSelector((state) => state.tournaments.data);

  return (
    <SafeView hiddenHeader>
      <Button
        title="Lisää turnaus"
        onPress={() => navigation.navigate("NewTournament")}
      />
      {tournaments.length > 0 && <Text>Turnaukset:</Text>}
      {tournaments.map((tournament) => (
        <Text key={tournament.id}>{getTournamentString(tournament)}</Text>
      ))}
    </SafeView>
  );
}
