// fetchData.js
export const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/reservationApi.json');
      if (!response.ok) {
        throw new Error('Network response was not ok' + response.statusText);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
      return [];
    }
  };