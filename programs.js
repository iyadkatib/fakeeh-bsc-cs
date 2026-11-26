/* Preserve links saved before the college programs home was introduced. */
(() => {
  'use strict';
  const csSections = new Set(["rationale", "program-mission", "evidence-grid", "study", "shared-general-education", "credits-button", "year-list", "journey-panel", "semester-list", "semester-label", "semester-title", "semester-credits", "semester-summary", "journey-courses", "full-plan", "plan-body", "electives", "elective-count", "elective-filter", "elective-courses", "elective-research", "elective-reference-body", "elective-local-precedent", "health-informatics", "health-elective-fit", "health-benchmark-body", "health-saudi-context", "course-map", "zoom-out", "zoom-value", "zoom-in", "zoom-fit", "map-select", "map-legend", "map-viewport", "map-space", "map-canvas", "map-focus", "map-clear", "placement", "coop-description", "workplace-and-ai", "workplace-skills-body", "ai-ethics-body", "benchmarks", "benchmark-header", "benchmark-body", "standards", "course-decisions", "course-decision-content", "cs2023-body", "etec-body", "etec-klo-heading", "etec-klo-body", "abet-curriculum-scope", "abet-curriculum-body", "abet-outcome-scope", "abet-body", "outcomes-body", "specification", "detail-dialog", "dialog-kicker", "dialog-title", "dialog-content"]);
  function openSavedCSSection() {
    let section;
    try { section = decodeURIComponent(window.location.hash.slice(1)); }
    catch { return; }
    if (csSections.has(section)) {
      const target = new URL('./computer-science.html', window.location.href);
      target.search = window.location.search;
      target.hash = window.location.hash;
      window.location.replace(target.href);
    }
  }
  openSavedCSSection();
  window.addEventListener('hashchange', openSavedCSSection);
})();
