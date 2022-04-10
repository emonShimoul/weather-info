
const loadData = async(value) => {
    const apiKey = "c277f146d751b90021a8b9e842027aef";
    const unit = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}&units=${unit}`;
    // console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    displayData(data);
}

document.getElementById('search-button').addEventListener('click', () => {
    const getInputValue = document.getElementById('input-value');
    const inputValue = getInputValue.value;
    getInputValue.value = '';
    loadData(inputValue);
});

const displayData = (data) => {
    // console.log(data);
    console.log(data.name);
    const showError = document.getElementById('show-error');
    showError.textContent = '';
    if(data.name == undefined){
        displayError("Please enter a valid name !!")
    }
    const displayData = document.getElementById('display-data');
    displayData.innerText = '';
    const div = document.createElement('div');
    div.classList.add('text-center','text-white','mt-5','pt-3');
    div.innerHTML = `
        <h1>${data.name}</h1>
        <img width="100px" height="100px" src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h3><span>${data.main.temp}</span>°C</h3>
        <h5>${data.weather[0].main}</h5>
    `;
    displayData.appendChild(div);
}

const displayError = (text) => {
    const showError = document.getElementById('show-error');
    showError.textContent = '';
    const h3 = document.createElement('h3');
    h3.classList.add('text-danger', 'text-center','mt-5');
    h3.innerText = text;
    showError.appendChild(h3);
}