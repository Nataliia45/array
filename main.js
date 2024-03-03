function createArray() {
    const length = parseInt(document.getElementById('lengthInput').value);
    let array = [];

    for (var i = 0; i < length; i++) {
      array.push(Math.floor(Math.random() * 100)); 
    }
    displayArray(array);


    array.sort(function(a, b) {
      return a - b;
    });
    

    array.splice(1, 3);


    displayArray(array);
  }


  function displayArray(array) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = "<b>Масив:</b> " + array.join(', ');
  }