const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const captureButton = document.getElementById('captureButton');
const resultDiv = document.getElementById('result');

const constraints = {
  video: true
};

captureButton.addEventListener('click', async () => {
  const context = canvas.getContext('2d');
  context.drawImage(video, 0, 0, 640, 480);
  const imageData = canvas.toDataURL('image/jpeg');
  
  // Send imageData to backend for facial recognition
  const response = await fetch('/recognize', {
    method: 'POST',
    body: JSON.stringify({ image: imageData }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  const data = await response.json();
  resultDiv.innerText = `Detected face: ${data.face}`;
});

navigator.mediaDevices.getUserMedia(constraints)
  .then((stream) => {
    video.srcObject = stream;
  })
  .catch((err) => {
    console.error('Error accessing the webcam: ', err);
  });
