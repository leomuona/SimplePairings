import type { Player } from "./player";

export type Tournament = {
  id: string;
  date: Date;
  name: string;
  players: Player[];
  rounds: number;
};
