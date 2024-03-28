CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_nane` text NOT NULL,
	`phone_number` text NOT NULL,
	`password` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `parking_places` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`place_id` integer,
	`section` text NOT NULL,
	`number` integer NOT NULL,
	`owned_by` integer,
	FOREIGN KEY (`place_id`) REFERENCES `places`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`owned_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `places` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`building_name` text NOT NULL,
	`city` text DEFAULT 'Астана' NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_phone_number_unique` ON `users` (`phone_number`);