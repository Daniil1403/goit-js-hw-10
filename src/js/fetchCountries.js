const URL = 'https://restcountries.com/v3.1/name';

export function fetchCountries(name) {
  return fetch(
    `${URL}/${name}?fields=name,capital,population,flag,languages`
  ).then(res => res.json());
}

// const URL = 'https://restcountries.com/v3.1/name';

// export function fetchCountries(name) {
//   return fetch(`${URL}/${name}?fields=name,capital,population,flags,languages`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error();
//       }
//       return response.json();
//     })
//     .catch(error =>
//       // добавить всплывающее сообщение /404?/
//       console.log(error)
//     );
// }
