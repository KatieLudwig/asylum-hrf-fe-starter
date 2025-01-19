import { useEffect } from 'react';

export const useLocalStorage = ({ graphData, setGraphData }) => {
  useEffect(() => {
    try {
      // Retrieve state from local storage on mount
      const storedState = localStorage.getItem('myAppState');
      if (storedState) {
        setGraphData(JSON.parse(storedState));
      }
    } catch (error) {
      console.error('Error parsing local storage item:', error);
    }
  }, [setGraphData]);

  useEffect(() => {
    try {
      // Store state in local storage on every state change
      localStorage.setItem('myAppState', JSON.stringify(graphData));
    } catch (error) {
      console.error('Error setting local storage item:', error);
    }
  }, [graphData]);
};
