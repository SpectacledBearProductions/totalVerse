function loadMainPage() {
  let user = localStorage.getItem("user");
  let password = localStorage.getItem("password");

  if (user && password) {
    document.getElementById("outputuser").innerHTML = "Welcome, " + user;
  } else {
    window.location.href = "Login.html";
  }
}
loadMainPage();