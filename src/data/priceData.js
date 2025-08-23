// This will later be replaced with API calls
export const priceData = {
  producer: {
    white: 24,
    red: 26
  },
  retail: {
    white: 26,
    red: 28
  }
};

// Function to fetch prices (placeholder for future API integration)
export const fetchPrices = async () => {
  // TODO: Replace with actual API call
  // const response = await fetch('/api/prices');
  // return response.json();
  
  return priceData;
};