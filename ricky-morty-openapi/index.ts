import { DefaultApi } from './api';
const api = new DefaultApi();
const data = await api.getCharacters();

const characters = data.results;
