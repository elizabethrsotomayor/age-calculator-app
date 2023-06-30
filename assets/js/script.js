"use strict";

const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const calcBtn = document.getElementById("calc-btn");
const dayDisp = document.getElementById("days-value");
const monthsDisp = document.getElementById("months-value");
const yearsDisp = document.getElementById("years-value");
const errDay = document.getElementById("error-day");
const errMonth = document.getElementById("error-month");
const errYear = document.getElementById("error-year");
const dayLabel = document.getElementById("day-label");
const monthLabel = document.getElementById("month-label");
const yearLabel = document.getElementById("year-label");
 
let day_value, month_value, year_value;

calcBtn.addEventListener("click", retrieveValues);

function retrieveValues(e) {
    day_value = +day.value;
    month_value = +month.value - 1; // Date objects 0-indexed
    year_value = +year.value;
    
    const now = new Date();
    const past = new Date(year_value, month_value, day_value);

    if (isValidInput(day_value, month_value, year_value)) {
        calcTime(now, past);
    }
}

function isValidDate(year, month, day) {
  var d = new Date(year, month, day);
  if (d.getFullYear() == year && d.getMonth() == month && d.getDate() == day) {
      return true;
  }
  return false;
}

function isValidInput(d,m,y) {
    const i = new Date(y, m, d);
    const curYear = new Date().getFullYear();

    let res = false;
    let validDate = isValidDate(y,m,d);

    if (d === 0 || m === 0 || y > curYear || !validDate) {
      if (d === 0) {
        errDay.textContent = "This field is required";
        errDay.style.color = "red";
        errDay.style.fontStyle = "italic";
        dayLabel.style.color = "red";
        day.style.border = "1px solid red";
      }

      if (m === -1) {
        errMonth.textContent = "This field is required";
        errMonth.style.color = "red";
        errMonth.style.fontStyle = "italic";
        monthLabel.style.color = "red";
        month.style.border = "1px solid red";
      }

      if (y === 0) {
        errYear.textContent = "This field is required";
        errYear.style.color = "red";
        errYear.style.fontStyle = "italic";
        yearLabel.style.color = "red";
        year.style.border = "1px solid red";
      }

      if (d < 1 || d > 31) {
        errDay.textContent = "Must be a valid day";
        errDay.style.color = "red";
        errDay.style.fontStyle = "italic";
        dayLabel.style.color = "red";
      }

      if (m < 1 || m > 12) {
        errMonth.textContent = "Must be a valid month";
        errMonth.style.color = "red";
        errMonth.style.fontStyle = "italic";
        monthLabel.style.color = "red";
        month.style.border = "1px solid red"
      }

      if (y > curYear) {
        errYear.textContent = "Year cannot be in the future";
        errYear.style.color = "red";
        errYear.style.fontStyle = "italic";
        yearLabel.style.color = "red";
        year.style.border = "1px solid red"
      }

      if (!validDate) {
        errDay.textContent = "Must be a valid date";
        errDay.style.color = "red";
        errDay.style.fontStyle = "italic";
        dayLabel.style.color = "red";
        month.style.border = "1px solid red"

        errMonth.textContent = "Must be a valid date";
        errMonth.style.color = "red";
        errMonth.style.fontStyle = "italic";
        monthLabel.style.color = "red";
        month.style.border = "1px solid red"

        errYear.textContent = "Must be a valid date";
        errYear.style.color = "red";
        errYear.style.fontStyle = "italic";
        yearLabel.style.color = "red";
        year.style.border = "1px solid red"
      }
    } else {
      errDay.textContent = "";
      errMonth.textContent = "";
      errYear.textContent = "";
      dayLabel.style.color = "hsl(0, 1%, 44%)";
      monthLabel.style.color = "hsl(0, 1%, 44%)";
      yearLabel.style.color = "hsl(0, 1%, 44%)";
      day.style.border = "1px solid hsl(0, 1%, 44%)";
      month.style.border = "1px solid hsl(0, 1%, 44%)";
      year.style.border = "1px solid hsl(0, 1%, 44%)";

      res = true;
    }

    return res;
}

function calcTime(startingDate, endingDate) {
    let startDate = new Date(new Date(startingDate).toISOString().substr(0, 10));
    if (!endingDate) {
      endingDate = new Date().toISOString().substr(0, 10); // need date in YYYY-MM-DD format
    }
    let endDate = new Date(endingDate);
    if (startDate > endDate) {
      const swap = startDate;
      startDate = endDate;
      endDate = swap;
    }
    const startYear = startDate.getFullYear();
    const february = (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0 ? 29 : 28;
    const daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    let yearDiff = endDate.getFullYear() - startYear;
    let monthDiff = endDate.getMonth() - startDate.getMonth();
    if (monthDiff < 0) {
      yearDiff--;
      monthDiff += 12;
    }
    let dayDiff = endDate.getDate() - startDate.getDate();
    if (dayDiff < 0) {
      if (monthDiff > 0) {
        monthDiff--;
      } else {
        yearDiff--;
        monthDiff = 11;
      }
      dayDiff += daysInMonth[startDate.getMonth()];
    }

    yearsDisp.innerText = yearDiff;
    monthsDisp.innerText = monthDiff;
    dayDisp.innerText = dayDiff;
}

