import { eq } from "drizzle-orm";
import { db } from "../../../db";
import { addParkingPlaces, createMega } from "../../../db/mock";
import { place } from "../../../db/models";
import { NextResponse } from "next/server";

export const checkMock = async () => {
  const isMockExists = await db
    .select({ id: place.id })
    .from(place)
    .where(eq(place.building_name, "Mega Silk Way"));

  console.log(isMockExists);

  if (!isMockExists[0]) {
    const { id: megaId } = await createMega();
    console.log(megaId, "mega id");
    const parking = await addParkingPlaces(megaId);
    console.log(parking, "parking places");
    return "Mock Data successfully added into db";
  } else {
    return "Mock Data already exists";
  }
};

export const GET = async (res: NextResponse) => {
  const mock = await checkMock();
  return Response.json({ mock });
};
