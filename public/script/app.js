$("document").ready(() => {

  $("#submit-btn").on("click", () => {
    const firstName = $("#firstName").val();
    const lastName = $("#lastName").val();
    const email = $("#email").val();
    const phoneNum = $("#phoneNumber").val();
    const department = $("#department").val();
    const role = $("#role").val();
    const getSalary = function() {
      switch (role) {
        case 'Intern':
          salary = 80000;
          break;
        case 'Associate I':
          salary = 90000;
          break
        case 'Associate II':
          salary = 100000
          break
        case 'Senior Associate':
          salary = 120000
          break
        case 'Manager':
          salary = 130000
      }
    };

    getSalary();
    const empData = {
      firstName,
      lastName,
      email,
      phoneNum,
      department,
      role,
      salary
    };

    console.log(firstName);

    $.ajax({
      url: "http://localhost:3000/employees_data",
      type: "POST",
      data: empData,
      success: function(data) {
        console.log(data);
      }
    });
  });
});
