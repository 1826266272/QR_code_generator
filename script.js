const generateBtn = document.getElementById("generateBtn");
const imageUrlInput = document.getElementById("imageUrl");
const qrImage = document.getElementById("qrImage");
const errorMsg = document.getElementById("error");

generateBtn.addEventListener("click", () => {
  let value = imageUrlInput.value.trim();
  errorMsg.textContent = "";
  qrImage.style.display = "none";

  if (!value) {
    errorMsg.textContent = "Please enter value";
    return;
  }

  if (value.includes(".com") && !value.startsWith("upi://")) {
    value = `mailto:${value}`;
  }

  if (value.includes("@") && !value.startsWith("mailto:")) {
    if (!value.startsWith("upi://")) {
      value = `upi://pay?pa=${value}&cu=INR`;
    }
  }

  if (value.includes(",") && value.split(",").length === 2) {
    value = `https://maps.google.com/?q=${value}`;
  }

  generateQR(value);
});

function generateQR(data) {
  const qrUrl =
    "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" +
    encodeURIComponent(data);

  qrImage.src = qrUrl;
  qrImage.style.display = "block";
}
