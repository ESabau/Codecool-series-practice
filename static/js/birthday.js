function init() {
      let numbers = document.getElementsByClassName('tooltiptext');
      for (let number of numbers) {
          console.log(number.innerHTML)
        if (number.innerHTML % 2 === 0) {
            number.style.backgroundColor = 'gray';
        }
        else {
            number.style.backgroundColor = 'green';
        }
    }
}

init()