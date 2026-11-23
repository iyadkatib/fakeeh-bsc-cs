"use strict";
const units = [...document.querySelectorAll(".coverage-unit")];
const search = document.getElementById("coverage-search");
function filterCoverage() {
 const q = search.value.trim().toLowerCase(); let visible = 0;
 units.forEach(unit => { let count = 0;
  unit.querySelectorAll("tbody tr").forEach(row => { row.hidden = q && !row.textContent.toLowerCase().includes(q); if (!row.hidden) count++; });
  unit.hidden = count === 0; if(q && count) unit.open = true; visible += count;
 });
 document.getElementById("coverage-count").textContent = `${visible} of 191 outcome and topic records shown`;
}
function revealHash() {
 const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
 if (!target) return; search.value = ""; filterCoverage();
 const unit = target.closest(".coverage-unit"); if(unit) unit.open=true;
 target.scrollIntoView({block:"center"});
}
search.addEventListener("input",filterCoverage);
document.getElementById("expand-coverage").addEventListener("click",()=>units.forEach(u=>u.open=true));
document.getElementById("collapse-coverage").addEventListener("click",()=>units.forEach(u=>u.open=false));
window.addEventListener("hashchange",revealHash); filterCoverage(); revealHash();
