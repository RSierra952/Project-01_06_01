/*
Project 01_06_01

Author: Rose Sierra
Date:   08/15/18

Filename: script.js
*/
"use strict"

var formValidity = true;



function setUpPage() {
    createEventListeners();
}


//validate form function

function validateForm(evt) {

    validateRequired();

    if (evt.preventDefault) {
        evt.preventDefault();

    } else {
        evt.returnValue = false;
    }
    if (formValidity === true) {
        document.getElementsByTagName("form")[0].submit();

    }

}

//function to validate required 
function validateRequired() {
    try {
        var selectElements = document.querySelectorAll("#contactinfo input");
        var errorDiv = document.getElementById("errorText");
        var fieldsetValidity = true;
        var elementCount = selectElements.length;
        var currentElement = null;
        // Loop required input elements
        for (var i = 0; i < elementCount; i++) {

            currentElement = selectElements[i];
            if (currentElement.value === "") {
                currentElement.style.background = "rgb(255, 233, 233)";
                fieldsetValidity = false;
            } else {
                currentElement.style.background = "white";
            }
        }
        if (fieldsetValidity) {
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
           
        } else {
           
            throw "Fill in all Fields";
        }
    } catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false;
    }
}
//eventlisteners for the load event
function createEventListeners() {

    var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", validateForm, false);
    } else if (form.attachEvent) {
        form.attachEvent("onsubmit", validateForm);
    }
}


window.addEventListener("load", setUpPage, false);