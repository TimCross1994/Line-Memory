import tokenService from './tokenService';

const BASE_URL = '/api/NoteContainer/';

export default {
  index,
  create,
  update,
  deleteOne
};


function index() {
  const options = {
    // mode: 'cors',
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  };
  // console.log(BASE_URL, options)

  return fetch(BASE_URL, options).then(res => res.json());
}

function create(note) {
  return fetch(BASE_URL, {
    mode: 'cors',
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(note)
  }).then(res => res.json());
}

export function update(note) {
  return fetch(`${BASE_URL}/${note._id})`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(note)
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}


  
// function create(note) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//       // Add this header - don't forget the space after Bearer
//       'Authorization': 'Bearer ' + tokenService.getToken()
//     },
//     body: JSON.stringify(note)
//   };
//   return fetch(BASE_URL, options).then(res => res.json());
// }
