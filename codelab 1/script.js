function jumlahkan() {
  // Mengambil nilai dari input
  var bilangan1 = parseFloat(document.getElementById("bilangan1").value);
  var bilangan2 = parseFloat(document.getElementById("bilangan2").value);

  // Melakukan penjumlahan
  var hasil = bilangan1 + bilangan2;

  // Menampilkan hasil pada elemen dengan id "hasil"
  document.getElementById("hasil").innerHTML = hasil;
}

function resetForm() {
  // Mengosongkan input dan hasil
  document.getElementById("bilangan1").value = "";
  document.getElementById("bilangan2").value = "";
  document.getElementById("hasil").innerHTML = "";
}
