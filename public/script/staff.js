// Global variables
const dataTable = document.querySelector(".data-table");
const db = "http://localhost:3000/employees_data";

// Display List of staff

const employeeData = profile => {
  const { firstName, lastName, email, department, role, salary } = profile;
  return `
    <div class='employees' data-profile=${JSON.stringify(profile)}>
        <tr id="${profile.id}">
            <th scope="row">${profile.id}</th>
            <td>${firstName} ${lastName}</td>
            <td>${email}</td>
            <td>${department}</td>
            <td>${role}</td>
            <td>
              <div class="btn-group dropright">
              <buttton
                class="btn btn-primary"
                >Action</buttton
              >
              <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropright</span>
              </button>
              <div class="dropdown-menu">
                <li>August</li>
                <li>August</li>
                <li>August</li>
              </div>
              </div>
            </td>
          </tr>
    </div>
  `;
};

const displayEmployees = profiles => {
  const savedData = profiles.map(employeeData);
  dataTable.innerHTML += savedData.join("");
};

// Get data from db
const getData = async () => {
  const data = await fetch(db);
  const newData = await data.json();

  displayEmployees(newData);
};

getData();
