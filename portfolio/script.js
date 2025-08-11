// JavaScript to handle typing effect
const sentences = [
  "Computer Science Student",
  "Full Stack Web Developer",
  "AI & Data App Enthusiast",
  "Open Source Contributor",
  "Mentor at BuggyBillions",
  "Problem Solver & Innovator",
  "Always Exploring New Technologies"
];

const sentencess = [
  "Computer Science Student",
  "Full Stack Web Developer",
  "ReactJs & Angular Js Developer",
  "Node.js & Express Developer",
  "PHP & Laravel Developer",
  "Python & OpenCv Developer",
];


let sentenceIndex = 0;
let textIndex = 0;
let intervalId;
let sentenceIndexs = 0;
let textIndexs = 0;
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
  document.getElementById("datetime").innerHTML = `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}
// Initial update
updateTime();

// Refresh time every 1 second (1000 milliseconds)
setInterval(updateTime, 1000);

document.getElementById("downloadButton").addEventListener("click", function () {
  // Change 'path/to/your/pdf/file.pdf' to the actual path of your PDF file
  var pdfUrl = '/portfolio/MyResume.pdf';

  // Create a link element
  var link = document.createElement('a');

  // Set the href attribute to the PDF file URL
  link.href = pdfUrl;

  // Set the download attribute to force download the PDF file instead of opening it in a new tab
  link.download = 'Reuben Farinde resume.pdf';

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
  btn.addEventListener('click', function () {
    const text = this.parentElement.querySelector('.resume-lines__descr .remaining-text');
    text.classList.toggle('show');
    if (text.classList.contains('show')) {
      this.innerText = 'Read Less';
    } else {
      this.innerText = 'Read More';
    }
  });
});

// Portfolio Filter Functionality
document.addEventListener('DOMContentLoaded', function () {
  const filterTabs = document.querySelectorAll('.filter-tab');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  // Initialize portfolio filter
  function initPortfolioFilter() {
    filterTabs.forEach(tab => {
      tab.addEventListener('click', function () {
        const filter = this.getAttribute('data-filter');

        // Remove active class from all tabs
        filterTabs.forEach(t => t.classList.remove('active'));

        // Add active class to clicked tab
        this.classList.add('active');

        // Filter portfolio items
        filterPortfolioItems(filter);
      });
    });
  }

  function filterPortfolioItems(filter) {
    portfolioCards.forEach(card => {
      const category = card.getAttribute('data-category');

      if (filter === 'all' || category === filter) {
        // Show card
        card.style.display = 'block';
        card.classList.remove('hidden');

        // Add staggered animation
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        }, 100);
      } else {
        // Hide card
        card.classList.add('hidden');
        card.style.opacity = '0';
        card.style.transform = 'scale(0.8)';

        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  }

  // Initialize on page load
  initPortfolioFilter();

  // Enhanced hover effects for portfolio cards
  portfolioCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
      if (!this.classList.contains('hidden')) {
        this.style.transform = 'translateY(0) scale(1)';
      }
    });
  });

  // Add smooth scrolling to portfolio section
  const portfolioLinks = document.querySelectorAll('a[href="#portfolio"]');
  portfolioLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector('#portfolio');
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});