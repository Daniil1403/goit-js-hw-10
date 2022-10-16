const URL = 'https://restcountries.com/v2/name';

export function fetchCountries(name) {
  return fetch(
    `${URL}/${name}?fields=name,capital,population,flag,languages`
  ).then(res => {
    if (!res.ok) {
      throw new Error('Oops, there is no country with that name');
    }
    return res.json();
  });
}
