// Show email function


function InfoKontak() {
  const contactInfo = `
    Email:fazriahmadmustaqim@gmail.com<br>
    Nomor HP: <a href="tel:+6287882313815">+62 878-8231-3815</a><br>
    LinkedIn: <a href="https://www.linkedin.com/in/fazri-ahmad-37065531b/" target="_blank">LinkedIn Profile</a>
  `;
  document.getElementById("contactField").innerHTML = contactInfo;
}


// AOS init
AOS.init();
const toggleBtn = document.getElementById("toggleDark");
const body = document.body;

