function uploadImage() {
    const form = document.getElementById('uploadForm');
    const formData = new FormData(form);

    fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerText = `File size: ${data.fileSize} bytes`;
        })
}