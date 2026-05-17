import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchPokemonList = async (
  limit = 20,
  offset = 0,
  signal?: AbortSignal,
) => {
  const res = await api.get(`/pokemon?limit=${limit}&offset=${offset}`, {
    signal,
  });
  return res.data;
};

export const fetchPokemonTypes = async (signal?: AbortSignal) => {
  const res = await api.get("/type", {
    signal,
  });

  return res.data;
};

export const fetchPokemonByType = async (
  type: string,
  signal?: AbortSignal,
) => {
  const res = await api.get(`/type/${type}`, {
    signal,
  });

  return res.data;
};
