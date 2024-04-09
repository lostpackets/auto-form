// ==UserScript==
// @name         Auto fill in form
// @namespace    http://your.site.namespace
// @version      1.0
// @description  Generates random usernames and fills them into forms
// @author       Your Name
// @match        http://*/*
// @include     https://register.mailbox.org/* // Update this URL to match your target domain

// @match        https://*/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    // Only works with greasemonkey
    // Function to emulate keyboard strokes for the email input element
    function emulateEmailInput() {
        var emailInputElement = document.getElementById("mail");

        if (emailInputElement) {
            emailInputElement.focus();
            emailInputElement.value = "exampletest123asdqwg";
            emailInputElement.dispatchEvent(new Event("input"));
            emailInputElement.dispatchEvent(new Event("change"));
        } else {
            console.log("Email input element not found.");
        }
    }

    // Function to emulate keyboard strokes for the password input elements
    function emulatePasswordInputs() {
        var passwordInputElement = document.getElementById("passwort");
        var confirmPasswordInputElement = document.getElementById("passwort2");

        if (passwordInputElement && confirmPasswordInputElement) {
            passwordInputElement.focus();
            passwordInputElement.value = "yourpasswordA!1"; // Enter your desired password
            passwordInputElement.dispatchEvent(new Event("input"));
            passwordInputElement.dispatchEvent(new Event("change"));

            confirmPasswordInputElement.focus();
            confirmPasswordInputElement.value = "yourpasswordA!1"; // Enter your desired password
            confirmPasswordInputElement.dispatchEvent(new Event("input"));
            confirmPasswordInputElement.dispatchEvent(new Event("change"));
        } else {
            console.log("Password input elements not found.");
        }
    }

    // Function to click on the "Continue" button
    function clickContinueButton() {
        var continueButtonElement = document.getElementById("register_form_submit");

        if (continueButtonElement) {
            continueButtonElement.click();
        } else {
            console.log("Continue button not found.");
        }
    }

    // Run the functions when the document is fully loaded
    window.addEventListener("load", function() {
        emulateEmailInput();
        emulatePasswordInputs();
        clickContinueButton();
    });

})();
