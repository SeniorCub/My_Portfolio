// JavaScript to handle typing effect
const sentences = [
     "Computer Science Student",
     "Front End Developer",
     "Back End Developer",
     "Problem Solver",
     "Competitive Programmer",
     "Always learning new things"
   ];
const sentencess = [
     "Computer Science Student",
     "Front End Developer",
     "Back End Developer"
   ];
 
   let sentenceIndex = 0;
   let textIndex = 0;
   let intervalId;
   let sentenceIndexs = 0;
   let textIndexs= 0;
   let intervalIds;
 
   function typeWriter() {
     document.getElementById('typing-text').textContent = sentences[sentenceIndex].slice(0, textIndex);
     document.getElementById('typing-texts').textContent = sentencess[sentenceIndexs].slice(0, textIndexs);
     textIndex++;
     textIndexs++;
 
     if (textIndex > sentences[sentenceIndex].length) {
       clearInterval(intervalId);
       textIndex = 0;
       sentenceIndex = (sentenceIndex + 1) % sentences.length;
       setTimeout(() => {
         intervalId = setInterval(typeWriter, 500);
       }, 2000);
     }
     if (textIndexs > sentencess[sentenceIndexs].length) {
       clearInterval(intervalIds);
       textIndexs = 0;
       sentenceIndexs = (sentenceIndexs + 1) % sentencess.length;
       setTimeout(() => {
         intervalIds = setInterval(typeWriter, 800);
       }, 9000);
     }

   }
 
   // Initial start
   intervalId = setInterval(typeWriter, 500);
   intervalIds = setInterval(typeWriter, 800);

   function updateTime() {
     var d = new Date();

     var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     var months = ["January", "Febuary", "March", "April", "May", "June", "July", "Agust", "September", "October", "November", "December"];
     document.getElementById("datetime").innerHTML =`${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}
// Initial update
updateTime();

// Refresh time every 1 second (1000 milliseconds)
setInterval(updateTime, 1000);

document.getElementById("downloadButton").addEventListener("click", function() {
     // Change 'path/to/your/pdf/file.pdf' to the actual path of your PDF file
     var pdfUrl = 'MyResume.pdf';
     
     // Create a link element
     var link = document.createElement('a');
     
     // Set the href attribute to the PDF file URL
     link.href = pdfUrl;
     
     // Set the download attribute to force download the PDF file instead of opening it in a new tab
     link.download = 'resume.pdf';
     
     // Append the link to the document body
     document.body.appendChild(link);
     
     // Trigger a click event on the link
     link.click();
     
     // Remove the link from the document body
     document.body.removeChild(link);

});
     
let fullName = document.querySelector('#name').value;
let phoneNumber = document.querySelector('#phone').value;
let email = document.querySelector('#email').value;
let subject = document.querySelector('#subject').value;
let message = document.querySelector('#message').value;
document.querySelector('#sendEmail').addEventListener('click', sendEmail);

function sendEmail(event) {
    event.preventDefault(); // Prevent form submission

    let fullName = document.querySelector('#name').value;
    let phoneNumber = document.querySelector('#phone').value;
    let email = document.querySelector('#email').value;
    let subject = document.querySelector('#subject').value;
    let message = document.querySelector('#message').value;

    // Construct mailto link with variables
    let mailtoLink = `mailto:blinkgraphics05@gmail.com?subject=${encodeURIComponent(subject)}&body=Name: ${encodeURIComponent(fullName)}%0APhone: ${encodeURIComponent(phoneNumber)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;

    // Open mail client
    window.location.href = mailtoLink;
}
document.querySelectorAll('.read-more-btn').forEach(btn => {
     btn.addEventListener('click', function() {
     const text = this.parentElement.querySelector('.resume-lines__descr .remaining-text');
     text.classList.toggle('show');
     if (text.classList.contains('show')) {
          this.innerText = 'Read Less';
     } else {
          this.innerText = 'Read More';
     }
     });
}); 