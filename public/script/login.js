// console.log($("#loginBtn"));
// $("#loginBtn").click(e => {
//   e.preventDefault();
//   const username = $("#username").val();
//   const password = $("#password").val();
//   const admin = { username: username, password: password };

//   $.ajax({
//     url: "http://localhost:3000/admin",
//     method: "POST",
//     data: admin,
//     success: data => {
//       console.log("Signed up successfully");
//     },
//     error: error => {
//       console.log("Wrong username or password");
//     }
//   });
// });

// $(document).ready(() => {
//   const loginBtn = $("#loginBtn");
//   const form = $("#login");
//   const adminData = "http://localhost:3000/adminLogin";

//   $('#loginBtn').on('click', function (e) {
//     e.preventDefault();

//     console.log('Clicked')
//     $.ajax({
//       url: adminData,
//       type: 'GET',
//       success: function () {
//         const username = $('#username').val()
//         const password = $('#password').val()

//         if (username && password) {
//           document.replaceWith('/public/staff.html')
//         } else {
//           alert('Incorrect username and password.')
//         }
//       }
//     })
//   })
// })



/*****************************Variable Declaration**********************************/
const adminSignInButton = document.getElementById('loginBtn');
const loginForm = document.getElementById('login');

const adminDB = 'http://localhost:3000/adminLogin';
/**************************************************************************************/

/*******************************Get Admin Detail****************************/
const getAdminDetails = async () => {
  const data = await fetch(adminDB);
  const newData = await data.json();
  return newData
  
}
/***************************************************************************/
/***********************************Admin Sign In**************************************/
adminSignInButton.addEventListener('click', event => {
  event.preventDefault();
  getAdminDetails()
  .then(data => {
    let counter = 0
    const fillName = loginForm.elements.username.value;
    const fillPassword = loginForm.elements.password.value;
    data.forEach(obj => {if (obj.name == fillName && obj.password == fillPassword) counter++})

    if (counter === 1) {
      sessionStorage.setItem('name', fillName);
      sessionStorage.setItem('password', fillPassword);
      window.location.replace('../staff.html');      
    } else {
      alert('Incorrect Name or Password! Please try again')
    }
  })
  .catch(err=> console.error(err))
  
})
/***************************************************************************************/