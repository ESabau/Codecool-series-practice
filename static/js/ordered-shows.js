const header = document.querySelectorAll('.title')
var sorty = 'asc'
function init(){
    header.forEach((title)=>{
        title.addEventListener('click', display)
    })
}

async function api_request(inputText){
    const response = await fetch(`/ordered-shows_2?input-text=${inputText}`);
    document.getElementById('data').innerHTML= "";
    return response.json();
}

async function display(){
    if (sorty==='asc'){
        sorty='desc'
        var  data = await api_request('asc');
    } else {sorty='asc';
        var  data = await api_request('desc');}
    console.log(data)
    let inputField = document.getElementById('data');
    const star = "*"
    for (let row of data){
        inputField.insertAdjacentHTML('beforeend',
            "<td id='titlu'>" + row['title'] + '</td>' +
            "<td id='counts'>" + row['counts'] + '</td>' +
            "<td id='rating'>" + (star.repeat(row['rating']))+ '</td>') ;
    }
}



init()