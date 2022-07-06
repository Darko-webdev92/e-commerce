function passValues(){
    const val = document.getElementById('search-bar-header').value;
    localStorage.setItem('textValue', val);
  }

export default passValues;