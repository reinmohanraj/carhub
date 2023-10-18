export const fetchCars = async () => {
  const headers = {
    "X-RapidAPI-Key": "cfdba1273fmsh26900a18ab27fefp11bc60jsn6e607959496a",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

  const results = await response.json();

  return results;
};
