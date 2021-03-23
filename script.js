const toggles = document.querySelectorAll(".toggle");
const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");

// listen for change event on each toggle and call doTheTrick function when changed
toggles.forEach(toggle =>
  toggle.addEventListener("change", e => {
    doTheTrick(e.target);
  })
);

function doTheTrick(theClickedOne) {
  // if all 3 checked
  if (good.checked && cheap.checked && fast.checked) {
    // if good was just clicked on
    if (good === theClickedOne) {
      // set fast to unchecked
      fast.checked = false;
    }
    // if cheap was just clicked on
    if (cheap === theClickedOne) {
      // set good to unchecked
      good.checked = false;
    }
    // if fast was just clicked on
    if (fast === theClickedOne) {
      // set cheap to unchecked
      cheap.checked = false;
    }
  }
}
