import "./style.css";

window.onload = function() {

      const suits = ['♥', '♠', '♣', '♦'];
      const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
      
      const randomSuit = suits[Math.floor(Math.random() * suits.length)];
      const randomValue = values[Math.floor(Math.random() * values.length)];
      const cardElement = document.getElementById('card');
      
      document.getElementById('top-symbol').textContent = randomSuit;
      document.getElementById('value').textContent = randomValue;
      document.getElementById('bottom-symbol').textContent = randomSuit;

      if (randomSuit === '♥' || randomSuit === '♦') {
        cardElement.classList.add('red');
        cardElement.classList.remove('black');
      } else {
          cardElement.classList.add('black');
          cardElement.classList.remove('red');
      }

};
