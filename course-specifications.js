"use strict";

const picker = document.getElementById("spec-select");

function openSpecification() {
  const id = location.hash.slice(1);
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
