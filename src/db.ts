import Dexie, { Table } from "dexie";

export interface IEvent {
  id?: number;
  date: string;
  time: string;
  text: string;
}

export class CalendarDatabase extends Dexie {
  events!: Table<IEvent>;

  constructor() {
    super("CalendarDatabase");
    this.version(3).stores({
      events: "++id, date, time, text",
    });
  }
}

export const db = new CalendarDatabase();
