"use strict";

const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const calcBtn = document.getElementById("calc-btn");

console.log(day.value);
console.log("it works");

day.addEventListener("input", logDay);

function logDay(e) {
    console.log(e.data);
}