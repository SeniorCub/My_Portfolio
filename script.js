// JavaScript to handle typing effect
const sentences = [
     "Computer Science Student",
     "Front End Developer",
     "Back End Developer",
     "Problem Solver",
     "Competitive Programmer",
     "Always learning new things"
   ];
 
   let sentenceIndex = 0;
   let textIndex = 0;
   let intervalId;
 
   function typeWriter() {
     document.getElementById('typing-text').textContent = sentences[sentenceIndex].slice(0, textIndex);
     textIndex++;
 
     if (textIndex > sentences[sentenceIndex].length) {
       clearInterval(intervalId);
       textIndex = 0;
       sentenceIndex = (sentenceIndex + 1) % sentences.length;
       setTimeout(() => {
         intervalId = setInterval(typeWriter, 100);
       }, 2000);
     }
   }
 
   // Initial start
   intervalId = setInterval(typeWriter, 100);