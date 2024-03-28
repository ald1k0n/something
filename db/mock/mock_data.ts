import { db } from "../drizzle";
import {
  IPlaceCreate,
  place,
  parkingPlaces,
  IParkingPlaceCreate,
} from "../models";

export const createMega = async () => {
  const [mega] = await db
    .insert(place)
    .values({
      building_name: "Mega Silk Way",
      city: "Астана",
    } as IPlaceCreate)
    .returning({ id: place.id });
  return mega;
};

export const addParkingPlaces = async (place_id: number) => {
  const sections = ["A", "B", "C", "D", "E", "F"];
  const parkingPlacesArray: IParkingPlaceCreate[] = [];

  sections.forEach((section) => {
    for (let i = 1; i <= 7; i++) {
      parkingPlacesArray.push({ section, number: i });
    }
  });

  return await db.insert(parkingPlaces).values(parkingPlacesArray);
};
