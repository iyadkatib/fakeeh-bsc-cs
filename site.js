"use strict";

const {
  program, years, semesters, courses, textbooks, categories, electiveAreas, electiveReferences, electiveLocalPrecedent,
  healthElectiveFit, healthBenchmarks, healthSaudi, courseDecisions,
  benchmarks, benchmarkSections, benchmarkCourses, workplaceSkills, aiEthics,
  evidence, cs2023, etec, etecOutcomes, abet, abetOutcomeScope, abetCurriculum, abetCurriculumScope,
  outcomes, assessmentPlan, mission, coopDescription
} = curriculum;
const byId = (id) => document.getElementById(id);
const records = new Map(Object.entries(courses));

function element(tag, className, value) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (value !== undefined) node.textContent = value;
  return node;
}

function button(className, label, onClick) {
  const node = element("button", className, label);
  node.type = "button";
  node.addEventListener("click", onClick);
  return node;
}

function courseLabel(id) {
  const course = courses[id];
  return course ? [course.code, course.name].filter(Boolean).join(" · ") : id;
}

function creditLabel(credits) {
  return credits == null ? "Pending" : `${credits} ${credits === 1 ? "credit" : "credits"}`;
}

function courseTile(course, className, onClick, showCredits = false) {
  const node = button(className, undefined, onClick);
  node.dataset.category = course.category;
  node.setAttribute("aria-haspopup", "dialog");
  const category = categories[course.category];
  node.append(
    element("span", "course-code", course.code || category),
    element("span", "course-name", course.name)
  );
  if (showCredits) {
    const credit = course.credits == null ? "" : ` · ${creditLabel(course.credits)}`;
    node.append(element("span", "course-tag", category + credit));
  }
  return node;
}

const dialog = byId("detail-dialog");
function showDetails(kicker, title, content) {
  byId("dialog-kicker").textContent = kicker;
  byId("dialog-title").textContent = title;
  byId("dialog-content").replaceChildren(...content);
  dialog.showModal();
  dialog.scrollTop = 0;
}

function factRow(label, value) {
  const box = element("div");
  box.append(element("dt", null, label), element("dd", null, value));
  return box;
}

function requirementList(title, items) {
  const section = element("div", "dialog-prereqs");
  section.append(element("h3", null, title));
  if (items?.length) {
    const list = element("ul");
    items.forEach((id) => list.append(element("li", null, courseLabel(id))));
    section.append(list);
  } else {
    section.append(element("p", null, "None listed"));
  }
  return section;
}

function showCourse(id) {
  id = ({"MATH 220": "STAT 220", "MATH 102": "CS 103", "CS 420": "CS 370"})[id] || id;
  const course = records.get(id);
  const meta = element("dl", "dialog-facts");
  if (!course) {
    if (!Object.hasOwn(benchmarkCourses, id)) return;
    const peerCourse = benchmarkCourses[id];
    meta.append(...peerCourse.facts.map(([label, value]) => factRow(label, value)));
    const source = externalLink(peerCourse.url, "University program overview");
    source.className = "dialog-link";
    showDetails(id, peerCourse.title, [
      element("p", null, peerCourse.summary), meta,
      element("h3", null, peerCourse.detailHeading || "Training sequence"),
      element("p", null, peerCourse.detail),
      element("p", "dialog-note", peerCourse.source),
      source
    ]);
    return;
  }
  meta.append(
    factRow("Placement", course.placement),
    factRow("Credit hours", creditLabel(course.credits)),
    factRow("Category", categories[course.category])
  );
  if (course.lecture || course.practical) {
    meta.append(factRow("Weekly contact", `${course.lecture} lecture · ${course.practical} practical`));
  }
  const content = [element("p", null, course.summary), meta];
  if (course.prerequisites.length) content.push(requirementList("Prerequisites", course.prerequisites));
  if (course.corequisites?.length) content.push(requirementList("Prior or concurrent study", course.corequisites));
  if (course.requirement) content.push(element("p", "dialog-note", course.requirement));
  if (course.topics.length) {
    const list = element("ul");
    course.topics.forEach((topic) => list.append(element("li", null, topic)));
    content.push(element("h3", null, "Course topics"), list);
    const textbook = textbooks[id];
    if (textbook) {
      const book = externalLink(textbook.url, textbook.title);
      book.dir = "auto";
      const citation = element("p");
      citation.append(book, ` · ${textbook.citation}`);
      content.push(element("h3", null, "Suggested textbook"), citation);
    }
    const spec = element("a", "dialog-link", "Open course specification");
    spec.href = `./course-specifications.html#${course.anchor}`;
    content.push(spec);
  } else {
    const electives = element("button", "button secondary", "Browse technical electives");
    electives.addEventListener("click", () => {
      dialog.close();
      byId("electives").open = true;
      byId("electives").scrollIntoView({block: "start"});
    });
    content.push(electives);
  }
  showDetails(course.code || categories[course.category], course.name, content);
}

function courseLink(id, label = courseLabel(id)) {
  const node = button("table-course", label, () => showCourse(id));
  node.setAttribute("aria-haspopup", "dialog");
  return node;
}

dialog.addEventListener("click", (event) => {
  if (event.target !== dialog) return;
  const { left, right, top, bottom } = dialog.getBoundingClientRect();
  if (event.clientX < left || event.clientX > right || event.clientY < top || event.clientY > bottom) dialog.close();
});

function creditRow(label, credits, className) {
  const row = element("tr", className);
  const heading = element("th");
  heading.scope = "row";
  heading.append(label);
  row.append(heading, element("td", null, credits));
  return row;
}

function showCredits() {
  const table = element("table", "dialog-credit-table");
  const head = element("thead");
  const header = element("tr");
  for (const label of ["Requirement or course", "Credits"]) {
    const column = element("th", null, label);
    column.scope = "col";
    header.append(column);
  }
  head.append(header);
  const body = element("tbody");
  for (const [label, credits, codes] of program.creditGroups) {
    body.append(creditRow(label, credits, "credit-category"));
    for (const code of codes) {
      const course = records.get(code);
      const name = document.createDocumentFragment();
      const spec = element("a", null, code);
      spec.href = `./course-specifications.html#${course.anchor}`;
      name.append(spec, ` · ${course.name}`);
      body.append(creditRow(name, course.credits, "credit-course"));
    }
  }
  const foot = element("tfoot");
  foot.append(creditRow("Total credit hours", program.totalCredits));
  table.append(head, body, foot);
  showDetails("Curriculum structure", "Credit-hour breakdown", [
    table, element("p", "dialog-note", program.creditNote)
  ]);
}

byId("credits-button").addEventListener("click", showCredits);
byId("program-mission").textContent = mission;
byId("coop-description").textContent = coopDescription;
byId("abet-curriculum-scope").textContent = abetCurriculumScope;
byId("abet-outcome-scope").textContent = abetOutcomeScope;
document.querySelectorAll("[data-courses]").forEach((target) => {
  target.append(...target.dataset.courses.split("|").map((code) => courseLink(code, code)));
});

const yearList = byId("year-list");
const semesterList = byId("semester-list");
const journeyCourses = byId("journey-courses");
const yearButtons = years.map((year, index) => {
  const number = index + 1;
  const yearSemesters = semesters.map((semester, i) => ({ ...semester, number: i + 1 })).filter((semester) => semester.year === number);
  const node = button("year-button", undefined, () => selectYear(number));
  node.setAttribute("aria-controls", "journey-panel");
  const numbers = yearSemesters.map((semester) => semester.number);
  const range = numbers.length > 1 ? `Semesters ${numbers[0]}–${numbers.at(-1)}` : `Semester ${numbers[0]}`;
  node.append(
    element("small", null, range),
    element("strong", null, `Year ${number}`),
    element("span", null, year)
  );
  return node;
});
yearList.append(...yearButtons);

function selectSemester(index) {
  const semester = semesters[index];
  [...semesterList.children].forEach((node) => {
    node.setAttribute("aria-pressed", String(Number(node.dataset.index) === index));
  });
  byId("semester-label").textContent = `Year ${semester.year} · Semester ${index + 1}`;
  byId("semester-title").textContent = semester.title;
  byId("semester-credits").textContent = creditLabel(semester.credits);
  byId("semester-summary").textContent = semester.summary;
  journeyCourses.replaceChildren(...semester.courses.map((id) => (
    courseTile(records.get(id), "course-tile", () => showCourse(id), true)
  )));
}

function selectYear(year) {
  yearButtons.forEach((node, index) => node.setAttribute("aria-pressed", String(index + 1 === year)));
  semesterList.replaceChildren();
  semesters.forEach((semester, index) => {
    if (semester.year !== year) return;
    const node = button("pill", `Semester ${index + 1}`, () => selectSemester(index));
    node.dataset.index = index;
    semesterList.append(node);
  });
  selectSemester(semesters.findIndex((semester) => semester.year === year));
}
selectYear(1);


const planBody = byId("plan-body");
semesters.forEach((semester) => {
  const row = element("tr");
  const header = element("th", null, `Semester ${semester.number}`);
  header.scope = "row";
  header.append(element("small", null, `Year ${semester.year}`));
  const courseCell = element("td");
  const courseList = element("div", "table-courses");
  semester.courses.forEach((id) => courseList.append(courseLink(id)));
  courseCell.append(courseList);
  row.append(header, courseCell, element("td", null, creditLabel(semester.credits)));
  planBody.append(row);
});

const electiveIds = Object.values(electiveAreas).flat().sort();
byId("elective-count").textContent = electiveIds.length;
const electiveButtons = ["All electives", ...Object.keys(electiveAreas)]
  .map((label) => button("pill", label, () => renderElectives(label)));
byId("elective-filter").append(...electiveButtons);

function renderElectives(area) {
  electiveButtons.forEach((node) => node.setAttribute("aria-pressed", String(node.textContent === area)));
  const ids = electiveAreas[area] || electiveIds;
  byId("elective-courses").replaceChildren(...ids.map((id) => (
    courseTile(records.get(id), "course-tile", () => showCourse(id), true)
  )));
}
renderElectives("All electives");

const mapViewport = byId("map-viewport");
const mapSpace = byId("map-space");
const mapCanvas = byId("map-canvas");
const mapSelect = byId("map-select");
const nodeWidth = 156;
const nodeHeight = 70;
const columnGap = 12;
const sideInset = 47;
const bandHeight = 133;
const mapBands = semesters.map((semester, index) => ({
  label: `Semester ${index + 1}`,
  details: `Year ${semester.year} · ${creditLabel(semester.credits)}`,
  courses: semester.courses
}));
const largestSemester = Math.max(...mapBands.map((band) => band.courses.length));
const mapWidth = Math.max(680, 2 * sideInset + largestSemester * (nodeWidth + columnGap) - columnGap);
const mapHeight = mapBands.length * bandHeight + 10;
const positions = new Map();
const mapNodes = new Map();
const links = [];
let selection = "";
let scale = 1;
let fitMap = false;

function position(node, x, y, width, height) {
  Object.assign(node.style, { left: `${x}px`, top: `${y}px`, width: `${width}px`, height: `${height}px` });
}

function svgElement(tag, attributes) {
  const node = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, value));
  return node;
}

function buildMap() {
  Object.assign(mapCanvas.style, { width: `${mapWidth}px`, height: `${mapHeight}px` });
  const visibleCategories = new Set(mapBands.flatMap((band) => band.courses.map((id) => courses[id].category)));
  const legend = byId("map-legend");
  Object.entries(categories).forEach(([category, label]) => {
    if (!visibleCategories.has(category)) return;
    const item = element("span", "legend-item");
    const swatch = element("i", "legend-swatch");
    swatch.dataset.category = category;
    item.append(swatch, document.createTextNode(label));
    legend.append(item);
  });

  const edges = svgElement("svg", { class: "map-edges", width: mapWidth, height: mapHeight, "aria-hidden": "true" });
  const defs = svgElement("defs", {});
  const marker = svgElement("marker", { id: "prerequisite-arrow", viewBox: "0 0 8 8", refX: 7, refY: 4, markerWidth: 6, markerHeight: 6, orient: "auto" });
  marker.append(svgElement("path", { d: "M 0 0 L 8 4 L 0 8 z", fill: "#3a8494" }));
  defs.append(marker);
  edges.append(defs);

  const courseButtons = [];
  mapBands.forEach((semester, index) => {
    const bandY = index * bandHeight + 8;
    const band = element("div", "map-band");
    band.append(element("strong", null, semester.label), element("span", null, semester.details));
    position(band, sideInset - 12, bandY, mapWidth - 2 * (sideInset - 12), bandHeight - 14);
    mapCanvas.append(band);
    const group = document.createElement("optgroup");
    group.label = semester.label;
    const startX = (mapWidth - semester.courses.length * (nodeWidth + columnGap) + columnGap) / 2;
    semester.courses.forEach((id, column) => {
      const x = startX + column * (nodeWidth + columnGap);
      const y = bandY + 31;
      const course = records.get(id);
      const node = courseTile(course, "course-tile map-course", () => {
        focusCourse(id);
        showCourse(id);
      });
      position(node, x, y, nodeWidth, nodeHeight);
      mapNodes.set(id, node);
      positions.set(id, { x, y, row: index });
      courseButtons.push(node);
      const option = element("option", null, courseLabel(id));
      option.value = id;
      group.append(option);
    });
    mapSelect.append(group);
  });

  for (const id of positions.keys()) {
    courses[id].prerequisites.filter((from) => positions.has(from)).forEach((from) => addLink(from, id));
  }
  const edgeLegend = element("span", "legend-item");
  edgeLegend.append(element("i", "legend-edge"), document.createTextNode("Prerequisite"));
  legend.append(edgeLegend);

  function addLink(from, to) {
    const a = positions.get(from);
    const b = positions.get(to);
    const x1 = a.x + nodeWidth / 2;
    const x2 = b.x + nodeWidth / 2;
    const y1 = a.y + nodeHeight;
    const y2 = b.y - 2;
    const middle = (y1 + y2) / 2;
    let path = `M ${x1} ${y1} C ${x1} ${middle}, ${x2} ${middle}, ${x2} ${y2}`;
    if (b.row - a.row > 1) {
      const laneOffset = 9 + (links.length % 5) * 5;
      const lane = x1 + x2 < mapWidth ? laneOffset : mapWidth - laneOffset;
      const out = y1 + 14;
      const into = y2 - 18;
      path = `M ${x1} ${y1} Q ${x1} ${out}, ${lane} ${out} L ${lane} ${into} Q ${x2} ${into}, ${x2} ${y2}`;
    }
    const line = svgElement("path", { class: "map-edge", d: path, "marker-end": "url(#prerequisite-arrow)" });
    edges.append(line);
    links.push({ from, to, line });
  }

  mapCanvas.append(edges, ...courseButtons);
}

function focusCourse(id, scroll = false) {
  selection = id;
  mapSelect.value = id;
  const neighbors = new Set();
  let prerequisites = 0;
  let dependents = 0;
  links.forEach(({ from, to, line }) => {
    const active = Boolean(id) && (from === id || to === id);
    line.classList.toggle("active-edge", active);
    line.classList.toggle("muted-edge", Boolean(id) && !active);
    if (!active) return;
    neighbors.add(from === id ? to : from);
    if (to === id) prerequisites++;
    else dependents++;
  });
  for (const [key, node] of mapNodes) {
    node.classList.toggle("is-selected", key === id);
    node.classList.toggle("is-related", neighbors.has(key));
  }
  byId("map-clear").hidden = !id;
  if (!id) {
    byId("map-focus").textContent = "Select a course to highlight its connections.";
    return;
  }

  const linksText = [
    prerequisites ? `${prerequisites} prerequisite ${prerequisites === 1 ? "link" : "links"}` : "",
    dependents ? `${dependents} ${dependents === 1 ? "course follows" : "courses follow"}` : ""
  ].filter(Boolean).join(" · ");
  byId("map-focus").textContent = `${courseLabel(id)} · ${linksText || "No connections drawn"}`;
  if (scroll) centerCourse(id);
}

function centerCourse(id) {
  const { x, y } = positions.get(id);
  mapViewport.scrollTo({
    left: (x + nodeWidth / 2) * scale - mapViewport.clientWidth / 2,
    top: (y + nodeHeight / 2) * scale - mapViewport.clientHeight / 2
  });
}

function zoomTo(nextScale) {
  const previous = scale;
  const focusX = (mapViewport.scrollLeft + mapViewport.clientWidth / 2) / previous;
  const focusY = mapViewport.scrollTop / previous;
  scale = nextScale;
  mapSpace.style.width = `${Math.ceil(mapWidth * scale)}px`;
  mapSpace.style.height = `${Math.ceil(mapHeight * scale)}px`;
  mapCanvas.style.transform = `scale(${scale})`;
  byId("zoom-value").textContent = `${Math.round(scale * 100)}%`;
  byId("zoom-in").disabled = scale >= 1.5;
  byId("zoom-out").disabled = scale <= .25;
  if (selection) centerCourse(selection);
  else mapViewport.scrollTo({ left: focusX * scale - mapViewport.clientWidth / 2, top: focusY * scale });
}

function zoomBy(delta) {
  fitMap = false;
  zoomTo(Math.max(.25, Math.min(1.5, scale + delta)));
}

function fitWidth() {
  fitMap = true;
  zoomTo(Math.min(1.5, mapViewport.clientWidth / mapWidth));
}

buildMap();
if (mapViewport.clientWidth >= mapWidth * .75) fitWidth();
else zoomTo(.75);
byId("zoom-out").addEventListener("click", () => zoomBy(-.15));
byId("zoom-in").addEventListener("click", () => zoomBy(.15));
byId("zoom-fit").addEventListener("click", fitWidth);
byId("map-clear").addEventListener("click", () => {
  focusCourse("");
  mapSelect.focus();
});
mapSelect.addEventListener("change", () => focusCourse(mapSelect.value, true));
new ResizeObserver(() => { if (fitMap) fitWidth(); }).observe(mapViewport);


function externalLink(url, label) {
  const link = element("a", null, label);
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  return link;
}

for (const entry of evidence) {
  const card = element("article", "evidence-card");
  card.append(element("p", "label", entry.label), element("h3", null, entry.metric),
    element("p", null, entry.finding), element("p", "evidence-decision", entry.decision));
  const source = entry.url ? externalLink(entry.url, entry.source) : element("span", null, entry.source);
  source.className = "source";
  card.append(source);
  byId("evidence-grid").append(card);
}

function addRow(target, heading, cells) {
  const row = element("tr");
  const header = element("th", null, heading);
  header.scope = "row";
  row.append(header);
  for (const content of cells) {
    const cell = element("td");
    cell.append(content);
    row.append(cell);
  }
  byId(target).append(row);
  return header;
}

function linkedCourseText(prose) {
  const content = document.createDocumentFragment();
  let position = 0;
  for (const match of prose.matchAll(/\b[A-Z]{2,6} [0-9]{3,4}\b/g)) {
    const code = match[0];
    content.append(prose.slice(position, match.index));
    const known = records.has(code) || Object.hasOwn(benchmarkCourses, code);
    content.append(known ? courseLink(code, code) : code);
    position = match.index + code.length;
  }
  content.append(prose.slice(position));
  return content;
}

const sharedCourseLine = byId("shared-general-education");
sharedCourseLine.append("Computer Science and Business share ");
program.sharedCourses.forEach((code, index) => {
  if (index) sharedCourseLine.append(index === program.sharedCourses.length - 1 ? ", and " : ", ");
  sharedCourseLine.append(courseLink(code, records.get(code).name));
});
sharedCourseLine.append(" at three credits each.");

byId("health-elective-fit").append(linkedCourseText(healthElectiveFit));
for (const peer of healthBenchmarks) {
  const heading = addRow("health-benchmark-body", undefined, [peer.model, peer.adopted, peer.difference]);
  heading.append(externalLink(peer.url, peer.label));
}
byId("health-saudi-context").append(healthSaudi.context, " ", externalLink(healthSaudi.url, healthSaudi.label));

for (const [, title] of benchmarkSections) {
  const heading = element("th", null, title);
  heading.scope = "col";
  byId("benchmark-header").append(heading);
}
for (const peer of benchmarks) {
  const cells = benchmarkSections.map(([field]) => {
    const cell = element("div");
    const description = element("p");
    description.append(linkedCourseText(peer[field]));
    cell.append(description);
    if (field === "model") {
      if (peer.note) cell.append(element("p", "section-note", peer.note));
      cell.append(externalLink(peer.url, "Program source"));
    }
    return cell;
  });
  const heading = addRow("benchmark-body", peer.name, cells);
  heading.append(element("small", null, peer.region), element("small", null, peer.program));
}
for (const [code, reference] of Object.entries(electiveReferences)) {
  const heading = addRow("elective-reference-body", undefined, [
    externalLink(reference.url, reference.label), reference.rationale
  ]);
  heading.append(courseLink(code, code), element("small", null, records.get(code).name));
}
byId("elective-local-precedent").textContent = electiveLocalPrecedent;

for (const [target, rows] of [["workplace-skills-body", workplaceSkills], ["ai-ethics-body", aiEthics]]) {
  for (const [codes, practice, assessment] of rows) {
    const rowHeading = addRow(target, undefined, [practice, assessment]);
    for (const code of codes) {
      const item = element("div", "coverage-course");
      const course = courses[code];
      item.append(courseLink(code, code), element("div", null, course.name), element("small", null, course.placement));
      rowHeading.append(item);
    }
  }
}
for (const [id, name, hours, allocation, topics] of cs2023) {
  const links = element("div", "table-courses");
  allocation.forEach(([code, count]) => links.append(courseLink(code, `${code} · ${count} h`)));
  addRow("cs2023-body", `${id} · ${name}`, [hours, links, topics]);
}
for (const [name, weight, codes, topics] of etec) {
  const links = element("div", "table-courses");
  codes.forEach((code) => links.append(courseLink(code, code)));
  addRow("etec-body", name, [weight, links, topics]);
}
function assessmentLinks(assessments) {
  const evidenceList = element("div", "assessment-items");
  for (const [code, task] of assessments) {
    const item = element("p");
    item.append(courseLink(code, code), " · ", task);
    evidenceList.append(item);
  }
  return evidenceList;
}
for (const [id, label, mapped, codes, assessments] of etecOutcomes) {
  const links = element("div", "table-courses");
  codes.forEach((code) => links.append(courseLink(code, code)));
  const heading = addRow("etec-klo-body", `KLO ${id}`, [mapped.join(", "), links, assessmentLinks(assessments)]);
  heading.append(element("small", null, label));
}
for (const [id, label, mapped, explanation, assessments] of abet) {
  const heading = addRow("abet-body", `SO ${id}`, [mapped.join(", "), explanation, assessmentLinks(assessments)]);
  heading.append(element("small", null, label));
}
for (const [requirement, coverage] of abetCurriculum) {
  addRow("abet-curriculum-body", requirement, [linkedCourseText(coverage)]);
}
for (const [id, [area, description]] of Object.entries(outcomes)) {
  const [first, firstAssessment, second, secondAssessment] = assessmentPlan[id];
  const name = addRow("outcomes-body", `${id} · ${description}`, [
    courseLink(first, `${first} · ${firstAssessment}`), courseLink(second, `${second} · ${secondAssessment}`)
  ]);
  name.append(element("small", null, area));
}

const requestedBenchmarkCourse = new URLSearchParams(window.location.search).get("benchmarkCourse");
if (requestedBenchmarkCourse) showCourse(requestedBenchmarkCourse);

for (const entry of courseDecisions) {
  const section = element("section", "course-decision");
  const heading = element("h3");
  heading.append(courseLink(entry.course, entry.course), " · ", entry.title);
  section.append(heading, element("p", "section-note", entry.decision));
  const sources = element("p", "section-note");
  entry.sources.forEach((source, index) => {
    if (index) sources.append(" · ");
    sources.append(externalLink(source.url, source.label));
  });
  section.append(sources);
  byId("course-decision-content").append(section);
}
