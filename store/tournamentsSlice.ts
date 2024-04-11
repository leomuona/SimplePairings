import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { randomUUID } from "expo-crypto";
import type { Tournament } from "../model/tournament";

type TournamentsState = {
  data: Tournament[];
};

const initialState: TournamentsState = {
  data: [],
};

export const tournamentsSlice = createSlice({
  name: "tournaments",
  initialState,
  reducers: {
    addTournament: {
      reducer(state, action: PayloadAction<Tournament>) {
        state.data.push(action.payload);
      },
      prepare(name: string, date: Date, rounds: number) {
        return {
          payload: {
            id: randomUUID(),
            name,
            date: date.toISOString(),
            rounds,
          },
        };
      },
    },
    removeTournament: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTournament, removeTournament } = tournamentsSlice.actions;

export const tournamentsReducer = tournamentsSlice.reducer;
