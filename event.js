let data = [
    {
        Name : "smit",
        Email : "smit@gmail.com",
        Password : 1234
    },
    {
        Name : "krish",
        Email : "krish@gmail.com",
        Password : 5678
    },
];

const viewData = () => {
    let tbl = "";
    data.map((val)=>{
        tbl +=`
            <tr>
                <td>${val.Name}</td>
                <td>${val.Email}</td>
                <td>${val.Password}</td>
            </tr>
        `
    })
    document.getElementById('record').innerHTML = tbl;
}
viewData();
const save = () => {
    let username = document.getElementById('name').value;
    let useremail = document.getElementById('email').value;
    let userpassword = document.getElementById('password').value;

    let obj = {
        Name : username,
        Email : useremail,
        Password : userpassword
    }
    data.push(obj);
    alert("Data Successfully Add");
    viewData();
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
}