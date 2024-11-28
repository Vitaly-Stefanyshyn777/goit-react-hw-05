import axios from "axios";

// Використання змінної середовища для API ключа
const API_KEY = import.meta.env.VITE_TMDB_API_KEY; 
const BASE_URL = "https://api.themoviedb.org/3";

// Bearer токен для авторизації
const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWI4NmViYWIzMzMxNDdhYTA2YjlhODk5YjY0YzYxNCIsInN1YiI6IjY1ZTc2YjQ4MzFkMDliMDE2MmUzMWE5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AB-5VH5rmU095UcQzHVjMm3vM3utfCAE_YAytC-tzY0";

// Налаштування axios
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`, // Додаємо Bearer токен у заголовки
  },
  params: {
    api_key: API_KEY, // Додаємо API ключ до параметрів
    language: "en-US",
  },
});

// Функція для отримання трендових фільмів
export const getTrendingFilms = async () => {
  try {
    const response = await apiClient.get("/trending/movie/day");
    return response.data.results;
  } catch (error) {
    handleApiError(error, "fetching trending films");
    throw error;
  }
};

// Функція для отримання деталей фільму
export const getFilmDetails = async (id, endpoint = "") => {
  try {
    const response = await apiClient.get(`/movie/${id}${endpoint}`);
    return response.data;
  } catch (error) {
    handleApiError(error, `fetching film details for ID ${id}`);
    throw error;
  }
};

// Функція для пошуку фільмів
export const searchFilms = async (query, page = 1) => {
  try {
    const response = await apiClient.get("/search/movie", {
      params: {
        query: encodeURIComponent(query),
        page,
        include_adult: false,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error, `searching films with query "${query}"`);
    throw error;
  }
};

// Функція для обробки помилок API
const handleApiError = (error, context) => {
  if (error.response) {
    // Сервер відповів з кодом статусу, який позначає помилку
    console.error(`Error ${context}:`, error.response.status, error.response.data);
  } else if (error.request) {
    // Запит був зроблений, але немає відповіді
    console.error(`No response received while ${context}:`, error.request);
  } else {
    // Виникла помилка при налаштуванні запиту
    console.error(`Error setting up request while ${context}:`, error.message);
  }
};