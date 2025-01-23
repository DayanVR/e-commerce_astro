export function truncateDecimals(number: number, decimals: number) {
  const factor = Math.pow(10, decimals);
  return Math.floor(number * factor) / factor;
}

export function getSizesByCategory(slug: string) {
  const clothingSizes = ["Small", "Medium", "Large", "X-Large"];
  const shoeSizes = [7, 8, 9, 10, 11, 12];

  if (slug.toLowerCase().includes("shoes")) {
    return shoeSizes;
  }
  if (slug.toLowerCase().includes("bags")) {
    return [];
  }
  return clothingSizes;
}
