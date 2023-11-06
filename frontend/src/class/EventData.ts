export type EventData = {
  id: number;
  startTime: Date;
  endTime: Date;
  players: number;
  price: number;
  eventName: string;
  game: GameData;
  status: string;
};

export type GameData = {
  id: number;
  author: string;
  playerLimit: number;
  title: string;
};
