// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: yoocha Han
// Created on: Apr 2024
// This file contains the JS functions for index.html

function CalculateTrapezoid() {
  const top = parseFloat(document.getElementById("get_top").value)
  const base = parseFloat(document.getElementById("get_base").value)
  const height = parseFloat(document.getElementById("get_height").value)
  // caculate
  let answer = 1/2 * (top + base)*height
  document.getElementById("Answer").innerHTML = "area of trapezoid is " + answer + "cm³."
}