"use strict";

const picker = document.getElementById("spec-select");

function openSpecification() {
  const requested = location.hash.slice(1);
  const id = ({"math-220": "stat-220", "math-102": "cs-103", "cs-420": "cs-370"})[requested] || requested;
  const entry = document.getElementById(id);
  if (!entry?.classList.contains("spec-entry")) return;
  entry.open = true;
  picker.value = id;
  entry.scrollIntoView({block: "start"});
}

picker.addEventListener("change", () => {
  if (picker.value) location.hash = picker.value;
});
window.addEventListener("hashchange", openSpecification);
openSpecification();
