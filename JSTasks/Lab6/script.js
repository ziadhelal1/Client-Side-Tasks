

function Emplyee(name,position,office,age,startDate){
    this.name=name
    this.position=position
    this.office=office
    this.age=age
    this.startDate=startDate
}



let emps=[
    new Emplyee("ziad",".net","Mansoura",25,"19-7-2025"),
    new Emplyee("ali",".net","Mansoura",33,"3-7-2022"),
    new Emplyee("sami","php","cairo",25,"19-7-2025")
]

let table=document.querySelector("#emps tbody")
emps.forEach(employee => {
  let row = table.insertRow();   

  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);

  cell1.textContent = employee.name;
  cell2.textContent = employee.position;
  cell3.textContent = employee.office;
  cell4.textContent = employee.age;
  cell5.textContent = employee.startDate;
});

function renderTable() {
  let tbody = document.querySelector("#emps tbody")
  tbody.innerHTML = "";
  

  
  emps.forEach(employee => {
    let row = tbody.insertRow();

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);

    cell1.textContent = employee.name;
    cell2.textContent = employee.position;
    cell3.textContent = employee.office;
    cell4.textContent = employee.age;
    cell5.textContent = employee.startDate;
  });
}

function sortEmps(key, asc = true) {
      emps.sort((a, b) => {
        let x = a[key].toLowerCase();
        let y = b[key].toLowerCase();
        return asc ? x.localeCompare(y) : y.localeCompare(x);
      });
      renderTable(emps);
    }