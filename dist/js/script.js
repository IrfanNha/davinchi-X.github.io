window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

window.addEventListener("click", function (e) {
  if (e.target != navMenu && e.target != hamburger) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

//contact
const fullName = document.getElementById("fullName");
const email_id = document.getElementById("email_id");
const message = document.getElementById("message");
const sendButton = document.getElementById("sendButton");

function SendMail() {
  if (
    document.getElementById("fullName").value != "" &&
    document.getElementById("email_id").value != "" &&
    document.getElementById("message").value != ""
  ) {
    // check email
    if (email_id.value.includes("@")) {
      var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value,
      };
      emailjs
        .send("service_eqmlq79", "template_ik1wyxc", params)
        .then(function (res) {
          alert(
            "Your Message has sent successfully!, We will contact you soon!"
          );
        });
    } else {
      alert("please fill in a valid email address!");
    }
  } else {
    alert("please fill out this field");
  }

  clear();
}

function clear() {
  document.getElementById("fullName").value = "";
  document.getElementById("email_id").value = "";
  document.getElementById("message").value = "";
}
