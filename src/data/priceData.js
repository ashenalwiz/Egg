// Fetch prices from JSON file
export const fetchPrices = async () => {
  try {
    const response = await fetch('/data/prices.json');
    if (!response.ok) {
      throw new Error('Failed to fetch prices');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching prices:', error);
    // Fallback prices if JSON fails to load
    return {
      producer: { white: 24, red: 26 },
      retail: { white: 26, red: 28 },
      lastUpdated: new Date().toISOString(),
      updatedBy: "System Default"
    };
  }
};