// ===== Display Real-Time Date and Time =====
function updateDateTime() {
  const now = new Date();
  const datetimeElement = document.getElementById("datetime");
  if (datetimeElement) {
    const options = { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    };
    datetimeElement.textContent = now.toLocaleDateString('en-US', options);
  }
}
setInterval(updateDateTime, 1000);
updateDateTime();

// ===== Booking Form Validation =====
function validateBooking() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;
  const roomtype = document.getElementById("roomtype").value;

  if (!name || !email || !contact || !checkin || !checkout || !roomtype) {
    alert("⚠️ Please fill in all required fields before submitting.");
    return false;
  }

  // Ensure check-out is after check-in
  if (new Date(checkout) <= new Date(checkin)) {
    alert("⚠️ Check-out date must be after check-in date.");
    return false;
  }

  alert(`✅ Thank you, ${name}! Your booking for a ${roomtype} has been received.\nCheck-in: ${checkin}\nCheck-out: ${checkout}`);
  return true;
}

// ========== LIVE DATE & TIME ==========
function updateDateTime() {
  const now = new Date();
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  };
  document.getElementById('dateTime').textContent = now.toLocaleString('en-US', options);
}
setInterval(updateDateTime, 1000);
updateDateTime();

// ========== IMAGE SLIDER (AUTOMATIC) ==========
let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');

function showSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === slideIndex) slide.classList.add('active');
  });
  slideIndex = (slideIndex + 1) % slides.length;
}

setInterval(showSlides, 5000);
showSlides(); 

