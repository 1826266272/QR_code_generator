const generateBtn = document.getElementById("generateBtn");
const imageUrlInput = document.getElementById("imageUrl");
const qrImage = document.getElementById("qrImage");
const errorMsg = document.getElementById("error");

generateBtn.addEventListener("click", () => {
  const imageUrl = imageUrlInput.value.trim();
  errorMsg.textContent = "";
  qrImage.style.display = "none";

  if (!imageUrl) {
    errorMsg.textContent = "Please enter an image URL";
    return;
  }

  if (!imageUrl.startsWith("http")) {
    errorMsg.textContent = "Please enter a valid URL";
    return;
  }

  generateQR(imageUrl);
});

function generateQR(data) {
  const qrUrl =
    "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" +
    encodeURIComponent(data);

  qrImage.src = qrUrl;
  qrImage.style.display = "block";

}
