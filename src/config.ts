export const serverUrl =
  location.hostname === 'localhost'
    ? 'http://localhost:3000'
    : 'https://andrea-final-project.onrender.com/';

console.log('LOCATION', location);
console.log(serverUrl);
