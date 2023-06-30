"use strict";

const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const calcBtn = document.getElementById("calc-btn");
const dayDisp = document.getElementById("days-value");
const monthsDisp = document.getElementById("months-value");
const yearsDisp = document.getElementById("years-value");
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

function isValidInput(d,m,y) {
    const i = new Date(y, m, d);
    const curYear = new Date().getFullYear;

    if (d < 1 || d > 31 || m < 1 || m > 12 || y > curYear) {
        alert("Please enter a valid date")
        return false;
    } else {
        return true;
    }
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

