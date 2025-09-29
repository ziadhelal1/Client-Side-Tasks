// 
const employees = [
    { name: "Ziad ", position: "Junior.net", office: "Mansoura", age: 24, startDate: "2008/11/28" },
    { name: "ali ", position: "Chief Executive Officer (CEO)", office: "Cairo", age: 25, startDate: "2009/10/09" },
    { name: "ayman  ", position: "Junior Technical Author", office: "Cairo", age: 13, startDate: "2023/01/12" },
    { name: "Kareem ", position: "Junior Technical Author", office: "Alex", age: 25, startDate: "2015/01/12" },
    { name: "sayd ", position: "Junior Technical Author", office: "Tanta", age: 26, startDate: "2020/01/12" },
    { name: "sayed", position: "Junior Technical Author", office: "Mansoura", age: 35, startDate: "2010/01/12" }
  ];

  const tableBody = document.querySelector("#emp tbody");
  let sortOrder = 1



  function renderTable(data) {
    tableBody.innerHTML = "";
    data.forEach(emp => {
      tableBody.innerHTML += `
      <tr>
        <td>${emp.name}</td>
        <td>${emp.position}</td>
        <td>${emp.office}</td>
        <td>${emp.age}</td>
        <td>${emp.startDate}</td>
      </tr>
    `;
    });
  }
  function sortByName() {
    employees.sort(function (a, b) {
      let result;
      if (a.name > b.name) {
        result = 1;
      } else if (a.name < b.name) {
        result = -1;
      } else {
        result = 0;
      }

      return result * sortOrder;
    });
    sortOrder *= -1;
    renderTable(employees);
  }


  function sortByPosition() {
    employees.sort(function (a, b) {
      let result;

      if (a.position > b.position) {
        result = 1;
      } else if (a.position < b.position) {
        result = -1;
      } else {
        result = 0;
      }

      return result * sortOrder;
    });
    sortOrder *= -1;
    renderTable(employees);
  }


  function sortByOffice() {
    employees.sort(function (a, b) {
      let result;
      if (a.office > b.office) {
        result = 1;
      } else if (a.office < b.office) {
        result = -1;
      } else {
        result = 0;
      }

      return result * sortOrder;
    });
    sortOrder *= -1;
    renderTable(employees);
  }



  function sortByAge() {
    employees.sort(function (a, b) {
      let result;
      if (a.age > b.age) {
        result = 1;
      } else if (a.age < b.age) {
        result = -1;
      } else {
        result = 0;
      }

      return result * sortOrder;
    });
    sortOrder *= -1;
    renderTable(employees);
  }

  function sortByDate() {
    employees.sort(function (a, b) {
      let result;
      if (a.startDate > b.startDate) {
        result = 1;
      } else if (a.startDate < b.startDate) {
        result = -1;
      } else {
        result = 0;
      }

      return result * sortOrder;
    });
    sortOrder *= -1;
    renderTable(employees);
  }
  document.getElementById("sortName").addEventListener("click", sortByName);
  document.getElementById("sortOffice").addEventListener("click", sortByOffice);
  document.getElementById("sortPosition").addEventListener("click", sortByPosition);
  document.getElementById("sortAge").addEventListener("click", sortByAge);
  document.getElementById("sortDate").addEventListener("click", sortByDate);

  renderTable(employees);
