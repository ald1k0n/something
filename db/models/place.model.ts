import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { text, integer, sqliteTable, numeric } from 'drizzle-orm/sqlite-core';

export const place = sqliteTable('places', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	building_name: text('building_name').notNull(),
	city: text('city').notNull().default('Астана'),
	address: text('address'),
	price: numeric('price').default('500'),
});

export type IPlaceCreate = InferInsertModel<typeof place>;
export type IPlaceGet = InferSelectModel<typeof place>;
