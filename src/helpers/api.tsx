import axios from 'axios';

export const listAllCharacters = async (filter?: string) => {
  try {
    const url = filter
      ? filter
      : 'https://swapi.co/api/people/?format=json';
    const result = await axios.get(url);
    return { result, success: true };
  }
  catch (err) {
    console.log(err);
    return { success: false };
  }
};

export const listByName = async (name: string) => {
  try {
    const url = `https://swapi.co/api/people/?format=json&search=${name}`;
    const result = await axios.get(url);
    return { result, success: true };
  }
  catch (err) {
    console.log(err);
    return { success: false };
  }
};