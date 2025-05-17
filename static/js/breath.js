const instruction = document.querySelector('.instruction');

function updateInstruction() {
  setTimeout(() => {
    instruction.textContent = 'Breathe In';
  }, 0);
  setTimeout(() => {
    instruction.textContent = 'Hold';
  }, 4000);
  setTimeout(() => {
    instruction.textContent = 'Breathe Out';
  }, 6000);
}

setInterval(updateInstruction, 8000);