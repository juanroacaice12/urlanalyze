// src/api/api.js
import axios from 'axios';

// Cambia esto a la URL de tu API
const API_URL = 'https://ae69-186-144-26-34.ngrok-free.app/api/v1/predict/';

export const analyzeUrl = async (url) => {
  try {
    const response = await axios.post(API_URL, { url });
    return response.data; // Asegúrate de que esto se ajuste a la respuesta de tu API
  } catch (error) {
    throw new Error('Error al analizar la URL');
  }
};
