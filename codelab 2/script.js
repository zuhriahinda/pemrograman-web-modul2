const form = document.getElementById("registration-form");
const daftarButton = document.getElementById("daftar-button");
const resultDiv = document.getElementById("result");

daftarButton.addEventListener("click", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const alamat = document.getElementById("alamat").value;

  if (nama && email && alamat) {
    resultDiv.textContent = "Anda telah terdaftar";
    resultDiv.style.color = "green";
  } else {
    resultDiv.textContent = "Anda harus mengisi data dengan lengkap";
    resultDiv.style.color = "red";
  }

  resultDiv.classList.remove("hidden");
});
