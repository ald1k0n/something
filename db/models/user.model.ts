import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  user_name: text("user_nane").notNull(),
  phone_number: text("phone_number").notNull().unique(),
  password: text("password").notNull(),
});

export type IUserCreate = InferInsertModel<typeof user>;
export type IUserGet = InferSelectModel<typeof user>;
