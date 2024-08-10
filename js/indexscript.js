// navbar scroll effect
let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector("nav");
let navbarHeight = navbar.offsetHeight;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Scroll ke atas
    navbar.style.top = "0";
  } else {
    // Scroll ke bawah
    navbar.style.top = `-${navbarHeight}px`;
  }

  prevScrollPos = currentScrollPos;
};

// Modals for project details
const exampleModal = document.getElementById("exampleModal");
exampleModal.addEventListener("show.bs.modal", function (event) {
  const button = event.relatedTarget;
  const project = button.getAttribute("data-project");

  const modalTitle = exampleModal.querySelector(".modal-title");
  const modalBody = exampleModal.querySelector(".modal-body");
  const modalLink = exampleModal.querySelector("#modalLink");

  // Menentukan konten modal berdasarkan data-project
  if (project === "project1") {
    modalTitle.textContent = "Aplikasi Pembayaran Listrik Pascabayar";
    modalBody.innerHTML = `
                <p>Postpaid Electricity Payment Application is a web application developed using CodeIgniter 4 framework with PHP language. This application provides login and register features for users as well as admins, allowing them to securely access and manage their accounts.</p>
                <p>In addition, the app is equipped with a calculator to calculate electricity usage based on the rate per kWh, a feature to record and display monthly electricity usage, as well as the ability to view electricity bill details.</p>
            `;
    modalLink.href = "https://github.com/ImperFecti/bayar-listrik"; // Ganti dengan link project yang sesuai
  } else if (project === "project2") {
    modalTitle.textContent = "BMI Calculator";
    modalBody.innerHTML = `
                <p>Developed as part of the RevoU Mini Project: Fundamental Course Software Engineering. This BMI calculator is a web-based application that calculates a user's Body Mass Index (BMI) based on their weight and height inputs.</p>
                <p>The project uses HTML, CSS, and JavaScript to create a user-friendly interface and ensure accurate calculations. This tool provides a quick and easy way to determine BMI, increasing awareness of healthy weight.</p>
            `;
    modalLink.href = "https://github.com/ImperFecti/BMIcalc"; // Ganti dengan link project yang sesuai
  } else if (project === "project3") {
    modalTitle.textContent = "ranMa - Laporan Masjid";
    modalBody.innerHTML = `
                <p>ranMa is a web-based application for mosque financial reporting developed using CodeIgniter 4 and PHP. It aims to help mosques publish financial reports transparently and efficiently.</p>
                <p>With this website, mosques can move from manual reports to a digital system, making access to financial information easier for worshipers.</p>
            `;
    modalLink.href = "https://github.com/ImperFecti/ranMa"; // Ganti dengan link project yang sesuai
  } else if (project === "project4") {
    modalTitle.textContent = "aROG";
    modalBody.innerHTML = `
                <p>aROG is an Augmented Reality (AR)-based mobile application developed using Unity and Vuforia SDK.</p>
                <p>This project combines real-world elements with digital ones in an interactive and immersive way, providing innovative and engaging experiences in education, entertainment, and marketing.</p>
            `;
    modalLink.href =
      "https://drive.google.com/drive/folders/1PYn79KkB5IOmWN4YHn52hGVTO6gdnhtw?usp=sharing"; // Ganti dengan link project yang sesuai
  }
});

// JavaScript for fade-in effect on scroll
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fade-in");

  // Function to check if elements should fade in based on scroll position
  function checkFadeIn() {
    const triggerHeight = window.innerHeight * 0.75;

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < triggerHeight) {
        element.classList.add("show");
      } else {
        element.classList.remove("show");
      }
    });
  }

  // Add scroll event listener to check for fade-in effect
  window.addEventListener("scroll", checkFadeIn);
  checkFadeIn(); // Initial check in case elements are already in view
});
