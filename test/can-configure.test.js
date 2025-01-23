import { describe, it, expect } from "vitest";

export default function canReconfigure(from, to) {
  if (typeof from !== "string")
    throw new Error("from must be a string");
  if (typeof to !== "string")
    throw new Error("to must be a string");

  const isSameLength = from.length === to.length;
  if (!isSameLength) return false;

  const sameUniqueChars =
    new Set(from).size === new Set(to).size;
  if (!sameUniqueChars) return false;

  const transformations = {};
  for (let i = 0; i < from.length; i++) {
    let fromLetter = from[i];
    let toLetter = to[i];

    const storedLetter = transformations[fromLetter];
    if (storedLetter && storedLetter !== toLetter)
      return false;

    transformations[fromLetter] = toLetter;
  }

  return true;
}

describe("pruebas de adventJS", () => {
  it("should throw if first param is missing", () => {
    expect(() => canReconfigure()).toThrow();
  });
  it("should throw if first param is not string", () => {
    expect(() => canReconfigure(123)).toThrow();
  });

  it("should throw if first param is empty", () => {
    expect(() => canReconfigure("")).toThrow();
  });

  it("should throw if second param is missing", () => {
    expect(() => canReconfigure("abc")).toThrow();
  });

  it("should return a boolean", () => {
    expect(canReconfigure("a", "a")).toBeTypeOf("boolean");
  });

  it("should return false if params doesn't have same length", () => {
    expect(canReconfigure("abc", "de")).toBe(false);
  });

  it("should return false if params have different length even with same unique letters", () => {
    expect(canReconfigure("aab", "ab")).toBe(false);
  });

  it("should return false if params have different numbers of unique chars", () => {
    expect(canReconfigure("abc", "ddd")).toBe(false);
  });

  it("should return false if have different order of transformation", () => {
    expect(canReconfigure("XBOX", "XXBO")).toBe(false);
  });
});
