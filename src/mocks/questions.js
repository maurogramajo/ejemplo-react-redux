const questions = [{
  title: 'Cuál es el peor día de la semana?',
  answers: [
    {label: 'Lunes', correct: false, id: 0,},
    {label: 'Martes', correct: true, id: 1,},
    {label: 'Jueves', correct: false, id: 2,},
    {label: 'Domingo', correct: false, id: 3,},
  ],
},{
  title: 'Cuál es la mejor sitcom?',
  answers: [
    {label: 'Friends', correct: false, id: 0,},
    {label: 'The Big Bang Theory', correct: false, id: 1,},
    {label: 'Seinfeld', correct: true, id: 2,},
    {label: 'How I met your mother', correct: false, id: 3,},
  ],
},{
  id: 2,
  title: 'Cuál es el mejor juego de Rol?',
  answers: [
    {label: 'WoW', correct: false, id: 0,},
    {label: 'Fallout', correct: false, id: 1,},
    {label: 'Diablo', correct: false, id: 2,},
    {label: 'Skyrim', correct: true, id: 3,},
  ],
},{
  id: 3,
  title: 'Cuál es la mejor serie de todos los tiempos?',
  answers: [
    {label: 'Dark', correct: false, id: 0,},
    {label: 'Lost', correct: false, id: 1,},
    {label: 'Game of Thrones', correct: false, id: 2,},
    {label: 'Breaking Bad', correct: true, id: 3,},
  ],
}];

export default questions;