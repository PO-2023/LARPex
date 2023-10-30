export class EventData {
  id: number;
  startTime: Date;
  endTime: Date;
  eventName: string;
  players: number;
  price: number;
  game: GameData;

  constructor(
    id: number,
    startTime: Date,
    endTime: Date,
    players: number,
    price: number,
    eventName: string,
    game: GameData
  ) {
    this.id = id;
    this.startTime = startTime;
    this.endTime = endTime;
    this.players = players;
    this.price = price;
    this.eventName = eventName;
    this.game = game;
  }
}

export class GameData {
  id: number;
  author: string;
  playerLimit: number;
  title: string;

  constructor(id: number, author: string, playerLimit: number, title: string) {
    this.id = id;
    this.author = author;
    this.playerLimit = playerLimit;
    this.title = title;
  }
}
