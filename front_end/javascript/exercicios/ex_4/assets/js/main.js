const dateToday = new Date();

const dateDayOfWeek = dateToday.getDate();
const dateDay = dateToday.getDate();
const dateMonth = dateToday.getMonth();
const dateYear = dateToday.getFullYear();
const dateHour = dateToday.getHours();
const dateMinut = dateToday.getMinutes();

const arrayDaysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Satuday",
];

const arrayMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayOfWeek = arrayDaysOfWeek[dateToday.getDay()];
const monthName = arrayMonths[dateToday.getMonth()];

function zeroLeftNumber(number) {
  if (number < 10) {
    return `0${number}`
  } else {
    return number
  }
}

const containerParagraf = document.querySelector(".container-paragraf").innerHTML = `${dayOfWeek}, ${zeroLeftNumber(dateDay)} of ${monthName} of ${dateYear}<br>${zeroLeftNumber(dateHour)}:${dateMinut}`;

// Abaixo a versão conforme documentação


const containerParagraf2 = document.querySelector(".container-paragraf-2").innerHTML = dateToday.toLocaleString('pt-BR', {
  dateStyle: 'full',
  timeStyle: 'short'
});