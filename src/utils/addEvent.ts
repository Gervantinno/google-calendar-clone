import { db } from "../db";

export default async function addEvent(
  date: string,
  time: string,
  text: string
) {
  try {
    await db.events.add({
      date,
      time,
      text,
    });
  } catch (error) {
    console.log("Error");
  }
}
