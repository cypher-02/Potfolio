const hireBtn = document.querySelector('.btn');
const modal = document.getElementById('contactModal');
const closeBtn = document.getElementById('closeModal');

hireBtn.addEventListener('click', ()=> {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
});
document.getElementById("openModal").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("contactModal").style.display = "flex";
});

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("contactModal").style.display = "none";
});

window.addEventListener("click", function (event) {
  const modal = document.getElementById("contactModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
