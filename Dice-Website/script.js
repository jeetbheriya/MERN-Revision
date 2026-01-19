function rollDice() {
    const diceCount = document.getElementById('diceCount').value;
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');
    const value = [];
    const img = [];

    for(let i=0; i<diceCount; i++){
        const roll = Math.floor(Math.random() * 6) + 1;
        console.log(roll); 
        value.push(roll);
        img.push(`<img src="Dice_Images/${roll}.png" class="roll-animation" alt="Dice ${roll}">`);
    }

    diceResult.textContent = `Dice: ${value.join(', ')}`;
    diceImages.innerHTML = img.join(' ');
}