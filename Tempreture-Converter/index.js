const tempInput = document.getElementById("temp_val");
const btn = document.getElementById("convert_btn");
const resultDiv = document.getElementById("result");
const c_to_f = document.getElementById("c_to_f");
const f_to_c = document.getElementById("f_to_c");

btn.onclick = () => {
    if(c_to_f.checked){
        let celsius = Number(tempInput.value);
        let fahrenheit = (celsius * 9/5) + 32;
        resultDiv.innerText = `${celsius}°C = ${fahrenheit}°F`;
    }

    if(f_to_c.checked){
        let fahrenheit = Number(tempInput.value);
        let celsius = (fahrenheit - 32) * 5/9;
        resultDiv.innerText = `${fahrenheit}°F = ${celsius}°C`;
    }
}