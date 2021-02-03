export interface GameEntry {
  title: String;
  year: String;
  started: String;
  lastPlayed: String;
  completed: Boolean;
  hours: number;
  completedOn: String;
  userId: String;
  rogueLike: Boolean;
  gameId: String;
  platform?: String;
  _id: String;
}

export interface Game {
  title: String;
  year: String;
  platform?: String;
  rogueLike: Boolean;
  _id: String;
}
