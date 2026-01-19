document.getElementById('roll').onclick = function(){
    document.getElementById('dice_value').innerText = Math.floor(Math.random() * 6) + 1;
};