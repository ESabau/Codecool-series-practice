function init(){
    let button = document.getElementById('submit-button')
    button.addEventListener('click', display)
}

async function api_request(inputText){
    const response = await fetch(`/filter-actors_2?input-text=${inputText}`)
    document.getElementById('first').innerHTML = ""
    document.getElementById('results').innerHTML = ""
    return await response.json()
}

async function display(){
    let inputText = document.getElementById('dropdown').value;
    console.log(inputText)
    let results = await api_request(inputText);
    let inputField = document.getElementById('results');
    for (let row of results){
        inputField.insertAdjacentHTML('beforeend',
            '<ol>' + row['name'] + '</ol>');
    }
}

init()
