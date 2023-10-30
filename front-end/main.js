const secretKey = "mySuperSecretKey"; // Replace this with a user-provided or generated key

function encryptFile(data) {
    const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Latin1.parse(data), secretKey).toString();
    console.log("Encrypted:", encrypted);
    // TODO: Now send `encrypted` to your server, IPFS, etc.
}

const fileInput = document.getElementById("file-input");
const dropArea = document.getElementById("drop-area");

fileInput.addEventListener("change", handleFileSelect);
dropArea.addEventListener("dragenter", preventDefaults);
dropArea.addEventListener("dragover", preventDefaults);
dropArea.addEventListener("dragleave", preventDefaults);
dropArea.addEventListener("drop", handleFileSelect);
document.querySelector(".cursor-pointer").addEventListener("click", () => {
    fileInput.click();
});

let selectedFile = null;

// This function will be called when the "Upload" button is clicked
function uploadFile() {
    if (selectedFile) {
        const formData = new FormData();
        formData.append('file', selectedFile);

        fetch('http://127.0.0.1:5000/upload', {
            method: 'POST',
            body: formData
        }).then(response => response.json())
          .then(data => console.log("Response:", data))
          .catch((error) => console.error('Error:', error));
    }
}

function handleFileSelect(event) {
    event.preventDefault();
    event.stopPropagation();

    const file = event.type === "drop" ? event.dataTransfer.files[0] : fileInput.files[0];
    selectedFile = file;  // Store the file in the global variable
    console.log("Selected file:", selectedFile);
    const reader = new FileReader();

    reader.onload = function(event) {
        console.log("reader.onload fired");
        const data = event.target.result;

        // Clear out old previews
        document.getElementById('preview').innerHTML = '';

        // Show preview if it's an image
        if (file.type.startsWith("image/")) {
            // Create a div to wrap both the image and the X icon
            const imgWrapper = document.createElement('div');
            imgWrapper.classList.add('relative', 'm-2');

            const img = document.createElement("img");
            img.src = URL.createObjectURL(file);
            img.width = 100; 
            img.classList.add('rounded', 'rounded-lg'); 

            const closeIcon = document.createElement("span");
            closeIcon.innerHTML = "&times;";
            closeIcon.classList.add('close-icon','absolute', 'top-1', 'right-1', 'bg-gray-300', 'text-white', 'cursor-pointer', 'rounded-full', 'h-6', 'w-6', 'flex', 'items-center', 'justify-center');
            closeIcon.addEventListener("click", function() {
              imgWrapper.remove();
              // Additional code to handle file removal from list if needed
            });

            imgWrapper.appendChild(img);
            imgWrapper.appendChild(closeIcon);
            document.getElementById("preview").appendChild(imgWrapper);
        } else {
            // For non-image files
            const fileInfo = document.createElement("div");
            fileInfo.classList.add('relative', 'm-2');

            const fileInfoText = document.createElement("span");
            fileInfoText.textContent = `${file.name} (${file.type})`;
            fileInfoText.classList.add('bg-gray-300', 'text-gray-800', 'p-2', 'rounded-lg');

            const closeIcon = document.createElement("span");
            closeIcon.innerHTML = "&times;";
            closeIcon.classList.add('close-icon', 'absolute', 'top-0', 'right-1', 'bg-gray-200', 'text-black', 'cursor-pointer', 'rounded-full', 'h-6', 'w-6', 'flex', 'items-center', 'justify-center');
            closeIcon.addEventListener("click", function() {
            fileInfo.remove();
            // Additional code to handle file removal from list if needed
            });

            fileInfo.appendChild(fileInfoText);
            fileInfo.appendChild(closeIcon);
            document.getElementById("preview").appendChild(fileInfo);
          }

        // Encrypt the file
        const wordArray = CryptoJS.lib.WordArray.create(data);
        console.log("Word array:", wordArray);
        encryptFile(wordArray);
    };

    reader.readAsArrayBuffer(file);
}

function preventDefaults(event) {
    event.preventDefault();
    event.stopPropagation();
}

document.getElementById("upload-button").addEventListener("click", uploadFile);