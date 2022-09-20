const input = document.getElementsByTagName("input")[0];


export const buscar = async () => {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data
  } catch (error) {
    console.log(error);
  }
};
