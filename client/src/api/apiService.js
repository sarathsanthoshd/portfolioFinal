// src/apiService.js

const getApiBaseUrl = () => {
  // In a Vite project, environment variables prefixed with VITE_ are exposed to the client-side code.
  // import.meta.env.VITE_API_URL will be replaced by Vite during the build process.
  return import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
};

const API_URL = getApiBaseUrl();

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
