document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("form.users-login")
    .addEventListener("submit", function (e) {
      e.preventDefault();


      const firstName = document.getElementById("firstname").value;
      const lastName = document.getElementById("lastname" ).value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const phone = document.getElementById("phone").value;
      const address = document.getElementById("address").value;

      const userData = [firstName, lastName, email, password, phone, address];
      userData.innerHTML=localStorage.getItem("value");

      const newRow = document.createElement("tr");
      userData.forEach((data) => {
        const newCell = document.createElement("td");
        newCell.textContent = data;
        newRow.appendChild(newCell);
        
      });

      document.getElementById("usersList").appendChild(newRow);
      
    });
});
function display() {
  localStorage.setItem('users', JSON.stringify(users));
  userData.innerHTML=localStorage.getItem("users");
}


let form=document.getElementById("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let data=new FormData(e.target)
    console.log(data)
    for(const pair of data.entries()){
        console.log(pair)
    }
})
function display() {
  localStorage.setItem('users', JSON.stringify(users));
  userData.innerHTML=localStorage.getItem("users");
}


