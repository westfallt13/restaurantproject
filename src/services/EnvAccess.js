const MENU_URL = import.meta.env.VITE_MENU_URL;
const ORDERS_URL = import.meta.env.VITE_ORDERS_URL;
const APIKEY = import.meta.env.VITE_APIKEY;

export { MENU_URL, ORDERS_URL, APIKEY };

//import in other files like this: 
//import { MENU_URL, ORDERS_URL, APIKEY } from './services/EnvAccess.js';