export type EventDTO = {
  id: number;
  startTime: Date;
  endTime: Date;
  players: number;
  price: number;
  eventName: string;
  game: GameDTO;
  status: string;
};

export type GameDTO = {
  id: number;
  author: string;
  playerLimit: number;
  title: string;
};
