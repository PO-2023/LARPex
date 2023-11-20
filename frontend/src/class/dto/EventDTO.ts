export type EventDTO = {
  id: number;
  startTime: Date;
  endTime: Date;
  players: number;
  price: number;
  name: string;
  game: GameDTO;
  status: string;
};

export type GameDTO = {
  id: number;
  author: string;
  playerLimit: number;
  title: string;
};
