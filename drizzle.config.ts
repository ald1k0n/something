import type { Config } from "drizzle-kit";

export default {
  schema: "./db/models/*.ts",
  out: "./drizzle",
  driver: "better-sqlite",
  dbCredentials: {
    url: "./db/sqlite.db",
  },
} satisfies Config;
