// src/apiService.js

/**
 * This function gets the base URL for the API.
 * It uses an environment variable (VITE_API_URL) which you can set differently
 * for development and production environments.
 */
const getApiBaseUrl = () => {
  // In a Vite project, environment variables prefixed with VITE_ are exposed to the client-side code.
  // import.meta.env.VITE_API_URL will be replaced by Vite during the build process.
  return import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
};

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default API_URL;

/**
 * Sends the contact form data to the backend API.
 * @param {object} formData - The data from the contact form (name, email, message).
 * @returns {Promise<object>} - A promise that resolves to the JSON response from the server.
 */
export async function sendContactForm(data) {
  const response = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
}
