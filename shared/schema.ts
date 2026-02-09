
import { pgTable, text, serial, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  fullContent: text("full_content").notNull(), // Markdown or detailed text
  externalUrl: text("external_url"), // Kaggle link
  category: text("category").notNull(), // "Optimization", "AI", "Health", "Economics"
  tags: jsonb("tags").$type<string[]>().default([]),
  featured: boolean("featured").default(false),
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const profile = pgTable("profile", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  bio: text("bio").notNull(),
  avatarUrl: text("avatar_url"),
  emails: jsonb("emails").$type<string[]>().notNull(),
  phone: text("phone"),
  address: text("address"),
  socialLinks: jsonb("social_links").$type<{ platform: string; url: string }[]>().notNull(),
});

// === SCHEMAS ===
export const insertProjectSchema = createInsertSchema(projects).omit({ id: true, createdAt: true });
export const insertProfileSchema = createInsertSchema(profile).omit({ id: true });

// === EXPLICIT API TYPES ===
export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Profile = typeof profile.$inferSelect;
export type InsertProfile = z.infer<typeof insertProfileSchema>;

export type ProjectResponse = Project;
export type ProfileResponse = Profile;
