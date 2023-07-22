// All code wrapped in function to wait for window to load
$( document ).ready(function () {
  // All my various variables
  var timeDisplayEl = $('#currentDay');
  var hour9 = document.getElementById('hour-9');
  var hour10 = document.getElementById('hour-10');
  var hour11 = document.getElementById('hour-11');
  var hour12 = document.getElementById('hour-12');
  var hour13 = document.getElementById('hour-1');
  var hour14 = document.getElementById('hour-2');
  var hour15 = document.getElementById('hour-3');
  var hour16 = document.getElementById('hour-4');
  var hour17 = document.getElementById('hour-5');
  

  var currentHour = dayjs().format('H');
  var saveBtn9 = document.getElementById('saveBtn9');
  var saveBtn10 = document.getElementById('saveBtn10');
  var saveBtn11 = document.getElementById('saveBtn11');
  var saveBtn12 = document.getElementById('saveBtn12');
  var saveBtn1 = document.getElementById('saveBtn1');
  var saveBtn2 = document.getElementById('saveBtn2');
  var saveBtn3 = document.getElementById('saveBtn3');
  var saveBtn4 = document.getElementById('saveBtn4');
  var saveBtn5 = document.getElementById('saveBtn5');
  

  // Left these console.logs in because this is how I researched. Both here and in the inspect console on the website.
  console.log(currentHour);
  console.log(saveBtn9);

  //both of these return the value text into hour 9 and return undefined after something is input
  // Really tried to figure out how to iterate through these instead of how I ended up doing it.
  console.log(hour9.childNodes[3].value);
  //console.log(saveBtn.previousElementSibling.value);

  // functions doing the same thins with different elements. Cry for help? Maybe
  function hour9Input() {
    console.log(this.previousElementSibling.value);
    var userInput = this.previousElementSibling.value;
    localStorage.setItem('hour9', userInput);

  }

  function hour10Input() {
    console.log(this.previousElementSibling.value);
    var userInput = this.previousElementSibling.value;
    localStorage.setItem('hour10', userInput);

  }

  function hour11Input() {
    console.log(this.previousElementSibling.value);
    var userInput = this.previousElementSibling.value;
    localStorage.setItem('hour11', userInput);

  }

  function hour12Input() {
    console.log(this.previousElementSibling.value);
    var userInput = this.previousElementSibling.value;
    localStorage.setItem('hour12', userInput);

  }

  function hour1Input() {
    console.log(this.previousElementSibling.value);
    var userInput = this.previousElementSibling.value;
    localStorage.setItem('hour1', userInput);

  }

  function hour2Input() {
    console.log(this.previousElementSibling.value);
    var userInput = this.previousElementSibling.value;
    localStorage.setItem('hour2', userInput);

  }

  function hour3Input() {
    console.log(this.previousElementSibling.value);
    var userInput = this.previousElementSibling.value;
    localStorage.setItem('hour3', userInput);

  }

  function hour4Input() {
    console.log(this.previousElementSibling.value);
    var userInput = this.previousElementSibling.value;
    localStorage.setItem('hour4', userInput);

  }

  function hour5Input() {
    console.log(this.previousElementSibling.value);
    var userInput = this.previousElementSibling.value;
    localStorage.setItem('hour5', userInput);

  }
  
  // Made each button its own listener
  saveBtn9.addEventListener('click', hour9Input);
  saveBtn10.addEventListener('click', hour10Input);
  saveBtn11.addEventListener('click', hour11Input);
  saveBtn12.addEventListener('click', hour12Input);
  saveBtn1.addEventListener('click', hour1Input);
  saveBtn2.addEventListener('click', hour2Input);
  saveBtn3.addEventListener('click', hour3Input);
  saveBtn4.addEventListener('click', hour4Input);
  saveBtn5.addEventListener('click', hour5Input);

 // Here we go with the functions that do the same things with different elements. 
  function checkHour9() {
    if (currentHour > 9) {
      hour9.classList.add('past');
    } else if (currentHour === 9) {
      hour9.classList.add('present');
    } else {
      hour9.classList.add('future');
    }
  }

  function checkHour10() {
    if (currentHour > 10) {
      hour10.classList.add('past');
    } else if (currentHour === 10) {
      hour10.classList.add('present');
    } else {
      hour10.classList.add('future');
    }
  }

  function checkHour11() {
    if (currentHour > 11) {
      hour11.classList.add('past');
    } else if (currentHour === 11) {
      hour11.classList.add('present');
    } else {
      hour11.classList.add('future');
    }
  }

  function checkHour12() {
    if (currentHour > 12) {
      hour12.classList.add('past');
    } else if (currentHour === 12) {
      hour12.classList.add('present');
    } else {
      hour12.classList.add('future');
    }
  }

  function checkHour1() {
    if (currentHour > 13) {
      hour13.classList.add('past');
    } else if (currentHour === 13) {
      hour13.classList.add('present');
    } else {
      hour13.classList.add('future');
    }
  }

  function checkHour2() {
    if (currentHour > 14) {
      hour14.classList.add('past');
    } else if (currentHour === 14) {
      hour14.classList.add('present');
    } else {
      hour14.classList.add('future');
    }
  }

  function checkHour3() {
    if (currentHour > 15) {
      hour15.classList.add('past');
    } else if (currentHour === 15) {
      hour15.classList.add('present');
    } else {
      hour15.classList.add('future');
    }
  }

  function checkHour4() {
    if (currentHour > 16) {
      hour16.classList.add('past');
    } else if (currentHour === 16) {
      hour16.classList.add('present');
    } else {
      hour16.classList.add('future');
    }
  }

  
  function checkHour5() {
    if (currentHour > 17) {
      hour17.classList.add('past');
    } else if (currentHour === 17) {
      hour17.classList.add('present');
    } else {
      hour17.classList.add('future');
    }
  }
 
  // How I recalled everything from local storage
  function storedInput() {
    hour9.childNodes[3].value = localStorage.getItem('hour9');
    hour10.childNodes[3].value = localStorage.getItem('hour10');
    hour11.childNodes[3].value = localStorage.getItem('hour11');
    hour12.childNodes[3].value = localStorage.getItem('hour12');
    hour13.childNodes[3].value = localStorage.getItem('hour1');
    hour14.childNodes[3].value = localStorage.getItem('hour2');
    hour15.childNodes[3].value = localStorage.getItem('hour3');
    hour16.childNodes[3].value = localStorage.getItem('hour4');
    hour17.childNodes[3].value = localStorage.getItem('hour5');
    
  }

  // Displayed time. I might've got this right from the day.js documentation.
  function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

  // I have to call all my functions
  checkHour9();
  checkHour10();
  checkHour11();
  checkHour12();
  checkHour1();
  checkHour2();
  checkHour3();
  checkHour4();
  checkHour5();
  
  storedInput();
  displayTime();
  setInterval(displayTime, 1000);
});
