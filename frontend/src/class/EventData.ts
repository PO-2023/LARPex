export class EventData {
  id: number;
  dateTime: Date;
  endTime: Date;
  gameName: string;
  eventName: string;
  maxPlayers: number;
  players: number;
  price: number;

  constructor(
    id: number,
    dateTime: Date,
    endTime: Date,
    gameName: string,
    maxPlayers: number,
    players: number,
    price: number,
    eventName: string
  ) {
    this.id = id;
    this.dateTime = dateTime;
    this.endTime = endTime;
    this.gameName = gameName;
    this.maxPlayers = maxPlayers;
    this.players = players;
    this.price = price;
    this.eventName = eventName;
  }
}
