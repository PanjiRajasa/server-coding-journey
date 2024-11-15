"use strict";

window.onload = function() {
    document.body.style.fontFamily = "'Poppins', sans-serif";
    console.info("Time for Server Learning!");

    let data;
    document.getElementById("submitbuttonexample").onclick = datafrominput;

    function datafrominput() {
        data = document.getElementById("inputexample").value;
        console.log(data); 
        document.getElementById("datadisplay").innerHTML = `${data}`;
    }

    const checkproperty = document.getElementById("checkproperty");
    const visa = document.getElementById("visa");
    const mastercardradio = document.getElementById("mastercardradio");
    const paypalRadio = document.getElementById("paypalRadio");
    const buttonSubmit = document.getElementById("buttonSubmit");
    const checkboxResult = document.getElementById("checkboxResult");
    const radioResult = document.getElementById("radioResult");

    buttonSubmit.onclick = function() {
        if (checkproperty.checked) {
            checkboxResult.textContent = `Check Property is checkded: ${checkproperty.value}`;
        } else {
            checkboxResult.textContent = `Check Property is not checkded`;
        }

        if (visa.checked) {
            radioResult.textContent = `You are using visa`;
        } else if (mastercardradio.checked) {
            radioResult.textContent = `You are using master card`;
        } else if (paypalRadio.checked) {
            radioResult.textContent = `You are using PayPal`;
        } else {
            radioResult.textContent = `You must select one of several radio buttons`;
        }
    }

    // chaining method
    const chainingMethodButton = document.getElementById("chainingMethodButton");
    const chainingMethodInput = document.getElementById("chainingMethodInput");
    const chainingMethodResult = document.getElementById("chainingMethodResult");

    chainingMethodButton.onclick = function() {
        if(!chainingMethodInput.value.trim()) {
            chainingMethodResult.textContent = `You must input a value`
        } else {
            const transformInputValue = chainingMethodInput.value.trim().charAt(0).toUpperCase() + chainingMethodInput.value.trim().slice(1).toLowerCase();
            chainingMethodResult.textContent = `${transformInputValue}`;
        }
    }
}