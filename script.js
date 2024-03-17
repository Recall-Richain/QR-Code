document.getElementById('generateBtn').addEventListener('click', function() {
    var url = document.getElementById('urlInput').value;
    if (url) {
     
        document.getElementById('qrCode').innerHTML = "";
      
        new QRCode(document.getElementById('qrCode'), url);
    } else {
        alert("Please enter a URL");
    }
});