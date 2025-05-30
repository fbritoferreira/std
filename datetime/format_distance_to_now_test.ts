// Copyright 2018-2025 the Deno authors. MIT license.
import { assertEquals } from "jsr:@std/assert";
import { formatDistanceToNow } from "./format_distance_to_now.ts";

Deno.test("formats seconds ago", () => {
  const now = new Date();
  const past = new Date(now.getTime() - 30 * 1000); // 30 seconds ago
  const result = formatDistanceToNow(past);
  assertEquals(result, "30 seconds ago");
});

Deno.test("formats seconds ago", () => {
  const now = new Date();
  const past = new Date(now.getTime() - 1 * 1000); // 1 seconds ago
  const result = formatDistanceToNow(past);
  assertEquals(result, "1 second ago");
});

Deno.test("formats minute ago", () => {
  const now = new Date();
  const past = new Date(now.getTime() - 1 * 60 * 1000); // 1 minute ago
  const result = formatDistanceToNow(past);
  assertEquals(result, "1 minute ago");
});

Deno.test("formats minutes ago", () => {
  const now = new Date();
  const past = new Date(now.getTime() - 5 * 60 * 1000); // 5 minutes ago
  const result = formatDistanceToNow(past);
  assertEquals(result, "5 minutes ago");
});

Deno.test("formats hour ago", () => {
  const now = new Date();
  const past = new Date(now.getTime() - 1 * 60 * 60 * 1000); // 1 hour ago
  const result = formatDistanceToNow(past);
  assertEquals(result, "1 hour ago");
});

Deno.test("formats hours ago", () => {
  const now = new Date();
  const past = new Date(now.getTime() - 2 * 60 * 60 * 1000); // 2 hours ago
  const result = formatDistanceToNow(past);
  assertEquals(result, "2 hours ago");
});

Deno.test("formats day ago", () => {
  const now = new Date();
  const past = new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000); // 1 day ago
  const result = formatDistanceToNow(past);
  assertEquals(result, "1 day ago");
});

Deno.test("formats days ago", () => {
  const now = new Date();
  const past = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000); // 3 days ago
  const result = formatDistanceToNow(past);
  assertEquals(result, "3 days ago");
});

Deno.test("formats week ago", () => {
  const now = new Date();
  const past = new Date(now.getTime() - 1 * 7 * 24 * 60 * 60 * 1000); // 1 week ago
  const result = formatDistanceToNow(past);
  assertEquals(result, "1 week ago");
});

Deno.test("formats weeks ago", () => {
  const now = new Date();
  const past = new Date(now.getTime() - 2 * 7 * 24 * 60 * 60 * 1000); // 2 weeks ago
  const result = formatDistanceToNow(past);
  assertEquals(result, "2 weeks ago");
});

Deno.test("formats months ago", () => {
  const now = new Date();
  const past = new Date(now);
  past.setMonth(now.getMonth() - 1); // 1 month ago
  const result = formatDistanceToNow(past);
  assertEquals(result, "1 month ago");
});

Deno.test("formats year ago", () => {
  const now = new Date();
  const past = new Date(now);
  past.setFullYear(now.getFullYear() - 1); // 1 year ago
  const result = formatDistanceToNow(past);
  assertEquals(result, "1 year ago");
});

Deno.test("formats years ago", () => {
  const now = new Date();
  const past = new Date(now);
  past.setFullYear(now.getFullYear() - 2); // 2 years ago
  const result = formatDistanceToNow(past);
  assertEquals(result, "2 years ago");
});

Deno.test("formats just now", () => {
  const now = new Date();
  const result = formatDistanceToNow(now);
  assertEquals(result, "just now");
});
