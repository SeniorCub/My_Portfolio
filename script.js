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

   document.getElementById('contactForm').addEventListener('submit', function(event) {
       event.preventDefault(); // Prevent the form from submitting normally

       // Collect form data
       const formData = new FormData(this);

       // Construct email body
       const emailBody = `
           Name: ${formData.get('name')}
           Email: ${formData.get('email')}
           Subject: ${formData.get('subject')}
           Message: ${formData.get('message')}
       `;

       // Open default email client
       window.location.href = 'mailto:farinderif@gmail?subject=New%20Message&body=' + encodeURIComponent(emailBody);
   });