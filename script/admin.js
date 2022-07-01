let takkies = JSON.parse(localStorage.getItem('takkies'));

function table(){
    let admin = document.getElementById('body');
    admin.innerHTML = '';
    takkies.forEach((takkie,index) =>{
        admin.innerHTML += `
        <tr>
        <td>${takkie.id}</td>
        <td>${takkie.name}</td>
        <td>${takkie.price}</td>
        <td>${takkie.size}</td>
        <td>${takkie.store}</td>
        <td>${takkie.description}</td>
        <td><i class="bi bi-pencil-square"></i></td>
        <td><i class="bi bi-trash3-fill"></i></td>
        </tr>
        
        `
    })
}

table()

