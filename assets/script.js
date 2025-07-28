function toggleList(id) {
  const clickedList = document.getElementById(id);
  if (!clickedList) return;

  // Get all product lists
  const allLists = document.querySelectorAll('#products ul');

  allLists.forEach(list => {
    if (list !== clickedList) {
      list.classList.add('hidden'); // Close all other lists
    }
  });

  // Toggle the clicked one
  clickedList.classList.toggle('hidden');
}

// Close any open list when clicking outside
document.addEventListener('click', function(event) {
  // Check if the click was inside a product card or its children
  const isClickInsideProduct = event.target.closest('.card');

  if (!isClickInsideProduct) {
    // If click outside any product card, close all lists
    const allLists = document.querySelectorAll('#products ul');
    allLists.forEach(list => list.classList.add('hidden'));
  }
});
