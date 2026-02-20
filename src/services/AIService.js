import { CLOUDFLARE_WORKER_URL } from './EnvAccess.js';

export const sendChatMessage = async (messages, menuItems) => {
  const response = await fetch(CLOUDFLARE_WORKER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messages,
      menuItems
    })
  });

  const data = await response.json();
  return data.response;
};