//selector

const currentDay = document.querySelector('[data-testid="currentDayOfTheWeek"]')
const currentUTC = document.querySelector('[data-testid="currentUTCTime"]')

//Initialization

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const UTCday = new Date().getUTCMilliseconds()
const day = new Date().getDay()

currentUTC.textContent = `CURRENT UTC TIME: ${UTCday}`
currentDay.textContent = `CURRENT DAY: ${daysOfWeek[day].toLocaleUpperCase()}`