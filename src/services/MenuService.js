import { MENU_URL, APIKEY } from './EnvAccess.js';

export const fetchMenuItems = async () => {
  try {
    
    const response = await fetch(MENU_URL, {
      headers: {
        'apikey': APIKEY,
        'Authorization': `Bearer ${APIKEY}`
      }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch menu items: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching menu items:', error);
    throw error;
  }
};