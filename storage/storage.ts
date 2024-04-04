import AsyncStorage from "@react-native-async-storage/async-storage";
import type { Tournament } from "../model/tournament";

const TOURNAMENTS_KEY = "tournaments";

export async function saveTournaments(tournaments: Tournament[]) {
  try {
    const jsonValue = JSON.stringify(tournaments);
    await AsyncStorage.setItem(TOURNAMENTS_KEY, jsonValue);
  } catch (e) {
    // saving error
  }
}

export async function loadTournaments(): Promise<Tournament[]> {
  try {
    const jsonValue = await AsyncStorage.getItem(TOURNAMENTS_KEY);
    if (jsonValue) {
      return JSON.parse(jsonValue);
    }
  } catch (e) {
    // error reading value
  }
  return [];
}
