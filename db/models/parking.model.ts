import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
import { place } from "./place.model";
import { user } from "./user.model";

export const parkingPlaces = sqliteTable("parking_places", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  place_id: integer("place_id").references(() => place.id),
  section: text("section").notNull(),
  number: integer("number").notNull(),
  owned_by: integer("owned_by").references(() => user.id),
});

export type IParkingPlaceCreate = InferInsertModel<typeof parkingPlaces>;
export type IParkingPlaceGet = InferSelectModel<typeof parkingPlaces>;
