"use strict";
const curriculum = {
  "program": {
    "totalCredits": 130,
    "creditGroups": [
      [
        "College Requirements",
        9,
        [
          "ARAB 101",
          "COMM 101",
          "ISLM 101"
        ]
      ],
      [
        "Department Requirements",
        36,
        [
          "MATH 101",
          "CS 103",
          "PHYS 101",
          "ENG 101",
          "MATH 120",
          "PHYS 102",
          "BIO 101",
          "STAT 220",
          "MATH 230",
          "MATH 340",
          "BUS 401"
        ]
      ],
      [
        "Computer Science core",
        61,
        []
      ],
      [
        "Technical electives",
        9,
        []
      ],
      [
        "Capstone project",
        6,
        []
      ],
      [
        "Cooperative training",
        9,
        []
      ]
    ],
    "creditNote": "The 130 credits include one 9-credit co-op registration across Semester 6 and the following summer. CS 103 Discrete Structures is included in mathematics/statistics and Department Requirements, not in the CS core, despite its CS prefix.",
    "sharedCourses": [
      "ARAB 101",
      "COMM 101",
      "ISLM 101"
    ],
    "electiveCount": 19
  },
  "years": [
    "Foundations",
    "Computing core",
    "Advanced study and co-op",
    "Capstone and specialization"
  ],
  "semesters": [
    {
      "number": 1,
      "year": 1,
      "title": "Programming and scientific foundations",
      "summary": "Connect the main ideas of computing with programming, discrete reasoning, calculus and scientific investigation.",
      "courses": [
        "CS 101",
        "MATH 101",
        "CS 103",
        "PHYS 101",
        "ENG 101"
      ],
      "credits": 17
    },
    {
      "number": 2,
      "year": 1,
      "title": "Software and applied mathematics",
      "summary": "Build object-oriented software and learn the linear algebra and physical science that support computing.",
      "courses": [
        "CS 102",
        "MATH 120",
        "PHYS 102",
        "BIO 101",
        "COMM 101"
      ],
      "credits": 16
    },
    {
      "number": 3,
      "year": 2,
      "title": "Data, digital logic and computer organization",
      "summary": "Develop data structures, database skills, digital circuits and computer organization alongside probability, statistics and Arabic.",
      "courses": [
        "CS 201",
        "CS 210",
        "STAT 220",
        "CS 230",
        "ARAB 101"
      ],
      "credits": 16
    },
    {
      "number": 4,
      "year": 2,
      "title": "Algorithms and software systems",
      "summary": "Develop algorithms, networked software, and systems code in preparation for advanced study.",
      "courses": [
        "CS 220",
        "CS 240",
        "CS 250",
        "MATH 230",
        "CS 260",
        "ISLM 101"
      ],
      "credits": 18
    },
    {
      "number": 5,
      "year": 3,
      "title": "Systems, applications and research",
      "summary": "Build web and mobile applications while studying operating systems, programming languages, AI, interaction and research before the full-time placement.",
      "courses": [
        "CS 310",
        "CS 320",
        "CS 370",
        "CS 340",
        "CS 350",
        "CS 360"
      ],
      "credits": 18
    },
    {
      "number": 6,
      "year": 3,
      "title": "Full-time cooperative training",
      "summary": "Begin the placement in Semester 6 and continue through the following summer under the same course registration.",
      "courses": [
        "CS 390"
      ],
      "credits": 9
    },
    {
      "number": 7,
      "year": 4,
      "title": "Theory, advanced systems and Capstone I",
      "summary": "Deepen theory, distributed computing and security, apply numerical methods, and define and prototype the capstone project.",
      "courses": [
        "CS 401",
        "CS 402",
        "MATH 340",
        "BUS 401",
        "CS 410",
        "CS 330"
      ],
      "credits": 18
    },
    {
      "number": 8,
      "year": 4,
      "title": "Capstone II and technical depth",
      "summary": "Complete Capstone II, build dependable data pipelines and cloud services, and select three technical electives.",
      "courses": [
        "CS 411",
        "CS 451",
        "CS 455",
        "EL-1",
        "EL-2",
        "EL-3"
      ],
      "credits": 18
    }
  ],
  "categories": {
    "college": "College Requirements",
    "department": "Department Requirements",
    "core": "Computer Science core",
    "elective": "Technical electives",
    "capstone": "Capstone project",
    "coop": "Cooperative training"
  },
  "courses": {
    "CS 101": {
      "id": "CS 101",
      "code": "CS 101",
      "title": "Programming I",
      "term": 1,
      "credits": 4,
      "category": "core",
      "lecture": 3,
      "practical": 2,
      "prerequisites": [],
      "summary": "Understand the main ideas and layers of computing, then design, trace, test and document programs in Python.",
      "topics": [
        "Computing as a discipline: algorithms, abstraction, data and information; relationships among CS, IS, IT and cybersecurity",
        "Hardware, software, operating systems, networks and databases; an introductory map of AI and emerging computing technologies",
        "Problem decomposition, representations, types, expressions and input/output",
        "Selection and iteration",
        "Functions, recursion and scope",
        "Strings, collections and file input/output",
        "Program readability, debugging, test design and version control; responsible use and disclosure of AI assistance"
      ],
      "clos": [
        {
          "plo": "K2",
          "stage": "I",
          "statement": "Explain the evolution of the five computer generations and relate hardware, software, networks and data to modern computing disciplines.",
          "etecRefs": [
            "SKU2.1-SLO1"
          ],
          "evidence": "Individual computing-systems explanation",
          "id": "CLO 1"
        },
        {
          "plo": "S1",
          "stage": "I",
          "statement": "Decompose a problem into an algorithm with explicit inputs, outputs and test cases.",
          "etecRefs": [],
          "evidence": "Algorithm and trace exercise",
          "id": "CLO 2"
        },
        {
          "plo": "S2",
          "stage": "I",
          "statement": "Implement a program using selection, iteration, functions and file input/output.",
          "etecRefs": [],
          "evidence": "Supervised individual programming task",
          "id": "CLO 3"
        },
        {
          "plo": "S2",
          "stage": "I",
          "statement": "Develop and test algorithms that manipulate strings, character encodings and other non-numeric representations.",
          "etecRefs": [
            "SKU2.1-SLO7"
          ],
          "evidence": "String and encoding implementation",
          "id": "CLO 4"
        },
        {
          "plo": "S4",
          "stage": "I",
          "statement": "Locate faults with a debugger and verify a program using normal, boundary and invalid-input tests.",
          "etecRefs": [
            "SKU7.1-SLO8"
          ],
          "evidence": "Debugging practical and test record",
          "id": "CLO 5"
        },
        {
          "plo": "V1",
          "stage": "I",
          "statement": "Explain and attribute an individually written solution and disclose any AI assistance.",
          "etecRefs": [],
          "evidence": "Code explanation and integrity record",
          "id": "CLO 6"
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": null,
      "resource": "Computing foundations readings, MIT introductory computing materials, the Python Tutorial, and supervised programming exercises. The first two units orient students to the discipline; later required courses develop their technical depth.",
      "name": "Programming I",
      "placement": "Semester 1",
      "anchor": "cs-101",
      "topicHours": [
        6,
        6,
        12,
        12,
        15,
        12,
        12
      ],
      "etecTopics": [
        "SKU2.1-T1",
        "SKU2.1-T3"
      ],
      "etecSLOs": [
        "SKU2.1-SLO1",
        "SKU2.1-SLO7",
        "SKU7.1-SLO8"
      ],
      "facilities": {
        "lab": "General programming lab",
        "hardware": "Standard workstation; keyboard and assistive-technology access.",
        "software": "Python 3, VS Code or IDLE, Git, unittest or pytest.",
        "practice": "Individual programming, strings and encoding, debugger use, tests and version-controlled submissions.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "MATH 101": {
      "id": "MATH 101",
      "code": "MATH 101",
      "title": "Calculus I",
      "term": 1,
      "credits": 4,
      "category": "department",
      "lecture": 4,
      "practical": 0,
      "prerequisites": [],
      "summary": "Use limits, derivatives, and integrals to analyze changing quantities.",
      "topics": [
        "Functions and modeling",
        "Limits and continuity",
        "Differentiation and rates",
        "Optimization in one variable",
        "Definite integrals and the fundamental theorem",
        "Numerical approximation and interpretation",
        "Sequences, convergence tests, infinite series, Taylor and Maclaurin approximation and error estimates"
      ],
      "clos": [
        {
          "plo": "K1",
          "stage": "I",
          "statement": "Explain functions, limits and continuity using symbolic and graphical representations.",
          "etecRefs": [],
          "evidence": "Written conceptual problems",
          "id": "CLO 1"
        },
        {
          "plo": "S1",
          "stage": "I",
          "statement": "Calculate derivatives and interpret rates of change in a mathematical model.",
          "etecRefs": [],
          "evidence": "Differentiation examination tasks",
          "id": "CLO 2"
        },
        {
          "plo": "S1",
          "stage": "I",
          "statement": "Solve single-variable optimization problems and justify critical points and boundary choices.",
          "etecRefs": [],
          "evidence": "Optimization problem set",
          "id": "CLO 3"
        },
        {
          "plo": "S1",
          "stage": "I",
          "statement": "Evaluate definite integrals and use the fundamental theorem of calculus.",
          "etecRefs": [],
          "evidence": "Integration examination tasks",
          "id": "CLO 4"
        },
        {
          "plo": "S1",
          "stage": "I",
          "statement": "Analyze convergence and Taylor or Maclaurin series expansions to approximate a function with a justified error estimate.",
          "etecRefs": [
            "EKU.1-SLO3"
          ],
          "evidence": "Series convergence and approximation assignment",
          "id": "CLO 5"
        },
        {
          "plo": "S4",
          "stage": "I",
          "statement": "Compare an analytic result with a numerical or graphical check and explain approximation error.",
          "etecRefs": [],
          "evidence": "Individual computational worksheet",
          "id": "CLO 6"
        }
      ],
      "profile": "lecture",
      "group": null,
      "requirement": null,
      "resource": "OpenStax Calculus Volume 1 and problem sets.",
      "name": "Calculus I",
      "placement": "Semester 1",
      "anchor": "math-101",
      "etecTopics": [
        "EKU.1-T2"
      ],
      "etecSLOs": [
        "EKU.1-SLO3"
      ],
      "facilities": {
        "lab": "Mathematics classroom and computational workspace",
        "hardware": "No dedicated hardware lab required; shared computer access for approximation investigations.",
        "software": "Python, Jupyter, NumPy, SymPy and Matplotlib, or GNU Octave.",
        "practice": "Derivative and integral checks, Taylor approximation and numerical error comparisons.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "CS 103": {
      "id": "CS 103",
      "code": "CS 103",
      "title": "Discrete Structures",
      "term": 1,
      "credits": 3,
      "category": "department",
      "lecture": 3,
      "practical": 0,
      "prerequisites": [],
      "summary": "Use logic, proof, sets, relations, counting, graphs and trees to model and reason about computing problems.",
      "topics": [
        "Sets, relations, functions, and cardinality",
        "Propositional and predicate logic, inference, and normal forms",
        "Direct and contradiction proofs; weak and strong induction, well-ordering, recursive definitions and algorithm correctness",
        "Sum and product rules, inclusion-exclusion, arithmetic/geometric progressions, permutations, combinations and pigeonhole proofs",
        "Elementary recurrence relations, modular arithmetic and order notation",
        "Graphs and trees: representations, spanning-tree construction and graph-isomorphism reasoning; discrete probability examples"
      ],
      "clos": [
        {
          "plo": "K1",
          "stage": "I",
          "statement": "Illustrate sets, relations and functions and apply their operations to computing examples.",
          "etecRefs": [
            "SKU3.1-SLO1",
            "SKU3.1-SLO2",
            "EKU.1-SLO1"
          ],
          "evidence": "Set and relation modeling problems",
          "id": "CLO 1"
        },
        {
          "plo": "K1",
          "stage": "I",
          "statement": "Explain propositional and predicate logic and translate informal requirements into quantified statements.",
          "etecRefs": [
            "SKU3.1-SLO3",
            "SKU3.1-SLO4"
          ],
          "evidence": "Logic translation examination",
          "id": "CLO 2"
        },
        {
          "plo": "S1",
          "stage": "I",
          "statement": "Use symbolic logic and inference rules to construct valid proofs and model a real situation.",
          "etecRefs": [
            "SKU3.1-SLO5",
            "SKU3.1-SLO6",
            "SKU3.1-SLO7"
          ],
          "evidence": "Formal derivation and scenario model",
          "id": "CLO 3"
        },
        {
          "plo": "S1",
          "stage": "I",
          "statement": "Identify and construct direct, contradiction and inductive proofs, explaining weak and strong induction and the well-ordering principle.",
          "etecRefs": [
            "SKU3.2-SLO1",
            "SKU3.2-SLO2",
            "EKU.1-SLO2"
          ],
          "evidence": "Proof portfolio and algorithm-correctness proof",
          "id": "CLO 4"
        },
        {
          "plo": "S1",
          "stage": "I",
          "statement": "Apply sum and product rules, inclusion-exclusion, progressions, permutations and combinations to counting problems.",
          "etecRefs": [
            "SKU3.2-SLO3",
            "SKU3.2-SLO5"
          ],
          "evidence": "Counting problem set",
          "id": "CLO 5"
        },
        {
          "plo": "S1",
          "stage": "I",
          "statement": "Use the pigeonhole principle to prove a discrete claim and perform modular-arithmetic computations.",
          "etecRefs": [
            "SKU3.2-SLO4",
            "SKU3.2-SLO7"
          ],
          "evidence": "Pigeonhole proof and modular arithmetic test",
          "id": "CLO 6"
        },
        {
          "plo": "S1",
          "stage": "I",
          "statement": "Formulate recursive definitions and solve elementary recurrence relations.",
          "etecRefs": [
            "SKU3.2-SLO6"
          ],
          "evidence": "Recurrence derivation",
          "id": "CLO 7"
        },
        {
          "plo": "S4",
          "stage": "I",
          "statement": "Model computing problems with graphs and trees, construct spanning trees, and justify whether two small graphs are isomorphic.",
          "etecRefs": [
            "SKU3.3-SLO2"
          ],
          "evidence": "Individual graph-model, spanning-tree and isomorphism worksheet",
          "id": "CLO 8"
        }
      ],
      "profile": "lecture",
      "group": null,
      "requirement": "These three credits are classified as mathematics and statistics in the ABET and ETEC allocations. The CS prefix identifies academic ownership; the credits are not also counted in the CS core.",
      "resource": "Rosen problem sets and MIT Mathematics for Computer Science materials. Formal reasoning and proof remain central to assessment.",
      "name": "Discrete Structures",
      "placement": "Semester 1",
      "anchor": "cs-103",
      "creditClassification": "Mathematics and statistics",
      "etecTopics": [
        "EKU.1-T1",
        "SKU3.1-T1",
        "SKU3.1-T2",
        "SKU3.1-T3",
        "SKU3.2-T1",
        "SKU3.2-T2",
        "SKU3.2-T3",
        "SKU3.3-T1"
      ],
      "etecSLOs": [
        "SKU3.1-SLO1",
        "SKU3.1-SLO2",
        "EKU.1-SLO1",
        "SKU3.1-SLO3",
        "SKU3.1-SLO4",
        "SKU3.1-SLO5",
        "SKU3.1-SLO6",
        "SKU3.1-SLO7",
        "SKU3.2-SLO1",
        "SKU3.2-SLO2",
        "EKU.1-SLO2",
        "SKU3.2-SLO3",
        "SKU3.2-SLO5",
        "SKU3.2-SLO4",
        "SKU3.2-SLO7",
        "SKU3.2-SLO6",
        "SKU3.3-SLO2"
      ],
      "facilities": {
        "lab": "Mathematics classroom with shared computational workspace",
        "hardware": "No dedicated hardware lab required; individual computer access for optional verification exercises.",
        "software": "Python with NetworkX and SymPy, or equivalent graph and symbolic tools.",
        "practice": "Logic and graph checks supplement individually assessed proofs and mathematical reasoning.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      },
      "topicHours": [
        6,
        8,
        10,
        8,
        5,
        8
      ]
    },
    "PHYS 101": {
      "id": "PHYS 101",
      "code": "PHYS 101",
      "title": "Physics I with Laboratory",
      "term": 1,
      "credits": 3,
      "category": "department",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [],
      "summary": "Study mechanics and apply the scientific method through physical experiments.",
      "topics": [
        "Measurement, units, uncertainty, and lab safety",
        "Kinematics, testable hypotheses, and experimental design",
        "Newtonian mechanics",
        "Energy and momentum",
        "Rotational motion and oscillations",
        "Data analysis and reproducible lab reports"
      ],
      "clos": [
        {
          "plo": "K2",
          "stage": "I",
          "statement": "Explain the physical principles behind a mechanics experiment.",
          "id": "CLO 1",
          "etecRefs": [],
          "evidence": "Individual conceptual examination and system analysis"
        },
        {
          "plo": "S4",
          "stage": "I",
          "statement": "Test a mechanics prediction and report measurements, uncertainty, and conclusions.",
          "id": "CLO 2",
          "etecRefs": [],
          "evidence": "Reproducible investigation, results and limitations report"
        },
        {
          "plo": "V1",
          "stage": "I",
          "statement": "Apply laboratory safety and data-integrity procedures.",
          "id": "CLO 3",
          "etecRefs": [],
          "evidence": "Professional or ethical decision case with justified safeguards"
        },
        {
          "plo": "K1",
          "stage": "I",
          "statement": "Apply mechanics, energy and momentum principles to predict measurable outcomes.",
          "id": "CLO 4",
          "etecRefs": [],
          "evidence": "Individual conceptual examination and applied explanation"
        },
        {
          "plo": "S4",
          "stage": "I",
          "statement": "Use calibrated motion and force sensors to collect data with documented units and uncertainty.",
          "id": "CLO 5",
          "etecRefs": [],
          "evidence": "Reproducible investigation, results and limitations report"
        },
        {
          "plo": "S3",
          "stage": "I",
          "statement": "Present a laboratory conclusion that connects evidence to a physical model.",
          "id": "CLO 6",
          "etecRefs": [],
          "evidence": "Assessed report or presentation and individual responses"
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": null,
      "resource": "OpenStax University Physics Volume 1 and the physics lab manual.",
      "name": "Physics I with Laboratory",
      "placement": "Semester 1",
      "anchor": "phys-101",
      "etecTopics": [],
      "etecSLOs": [],
      "facilities": {
        "lab": "Supervised mechanics teaching laboratory",
        "hardware": "Motion tracks and carts, motion/force sensors, balances, timers, pendulums, springs and data-acquisition interfaces; accessible benches and laboratory safety equipment.",
        "software": "Spreadsheet analysis and Python/Matplotlib or equivalent data-acquisition and analysis software.",
        "practice": "Controlled measurements in mechanics, energy, momentum and oscillations with uncertainty and calibrated instruments.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "COMM 101": {
      "id": "COMM 101",
      "code": "COMM 101",
      "title": "Professional Communication & Presentation",
      "term": 2,
      "credits": 3,
      "category": "college",
      "lecture": 3,
      "practical": 0,
      "prerequisites": [
        "ENG 101"
      ],
      "summary": "Communicate evidence and professional decisions to specialist and non-specialist audiences through writing and presentations.",
      "topics": [
        "Audience, purpose, and intercultural communication",
        "Evidence evaluation and attribution",
        "Workplace correspondence, status updates, and reports",
        "Data presentation and visual accessibility",
        "Oral presentation, questions, and team communication",
        "Revision, feedback, and academic integrity"
      ],
      "clos": [
        {
          "plo": "S3",
          "stage": "I",
          "statement": "Prepare a professional report and deliver a briefing suited to their audiences.",
          "id": "CLO 1",
          "etecRefs": [],
          "evidence": "Assessed report or presentation and individual responses"
        },
        {
          "plo": "S4",
          "stage": "I",
          "statement": "Evaluate and cite evidence used in professional communication.",
          "id": "CLO 2",
          "etecRefs": [],
          "evidence": "Reproducible investigation, results and limitations report"
        },
        {
          "plo": "V1",
          "stage": "I",
          "statement": "Apply standards of academic integrity and accessible communication.",
          "id": "CLO 3",
          "etecRefs": [],
          "evidence": "Professional or ethical decision case with justified safeguards"
        },
        {
          "plo": "S3",
          "stage": "I",
          "statement": "Write clear workplace correspondence and status reports adapted to audience and purpose.",
          "id": "CLO 4",
          "etecRefs": [],
          "evidence": "Assessed report or presentation and individual responses"
        },
        {
          "plo": "S3",
          "stage": "I",
          "statement": "Design an accessible evidence-based visual explanation and answer audience questions.",
          "id": "CLO 5",
          "etecRefs": [],
          "evidence": "Assessed report or presentation and individual responses"
        },
        {
          "plo": "V2",
          "stage": "I",
          "statement": "Use peer feedback to revise a team presentation and document individual contributions.",
          "id": "CLO 6",
          "etecRefs": [],
          "evidence": "Contribution record, peer or host review and individual reflection"
        }
      ],
      "profile": "project",
      "group": null,
      "requirement": null,
      "resource": "Shared business and computing cases and a common report and presentation rubric.",
      "name": "Professional Communication & Presentation",
      "placement": "Semester 2",
      "anchor": "comm-101",
      "etecTopics": [],
      "etecSLOs": [],
      "facilities": {
        "lab": "Presentation and communication workshop",
        "hardware": "Display, microphones, recording capability and small-group rehearsal areas; shared computers.",
        "software": "Word processor, presentation tools, accessible charting tools, video-conferencing and LMS.",
        "practice": "Workplace reports, accessible visuals, presentations, peer feedback and revision.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "CS 102": {
      "id": "CS 102",
      "code": "CS 102",
      "title": "Programming II",
      "term": 2,
      "credits": 3,
      "category": "core",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "CS 101"
      ],
      "summary": "Design and test object-oriented programs in Python and explore alternative programming styles.",
      "topics": [
        "Abstract data types, classes, objects and modular interfaces",
        "Encapsulation, contracts, composition and reusable components",
        "Inheritance, polymorphism and dynamic dispatch",
        "Exceptions, debugging, unit tests, test boundaries and coverage",
        "Typed collections, iterators, Python type annotations and introductory generic abstractions",
        "Recursion, higher-order functions, immutability and functional patterns",
        "Team development, individual code review and refactoring in a shared repository"
      ],
      "clos": [
        {
          "plo": "K3",
          "stage": "I",
          "statement": "Explain abstract data types, contracts, classes, objects and dynamic dispatch.",
          "etecRefs": [],
          "evidence": "Conceptual examination and code trace",
          "id": "CLO 1"
        },
        {
          "plo": "S2",
          "stage": "I",
          "statement": "Design a reusable class hierarchy using inheritance, subtyping, composition and encapsulation.",
          "etecRefs": [
            "SKU7.1-SLO1"
          ],
          "evidence": "Class hierarchy and tested implementation",
          "id": "CLO 2"
        },
        {
          "plo": "S2",
          "stage": "I",
          "statement": "Apply object-oriented and closure-based functional encapsulation to implement a modular program.",
          "etecRefs": [
            "SKU7.1-SLO3"
          ],
          "evidence": "Paired implementation with individual defense",
          "id": "CLO 3"
        },
        {
          "plo": "S2",
          "stage": "I",
          "statement": "Use typed collections, generics and exception handling to implement type-safe reusable components.",
          "etecRefs": [
            "SKU7.1-SLO7"
          ],
          "evidence": "Typed collection and exception practical",
          "id": "CLO 4"
        },
        {
          "plo": "S2",
          "stage": "I",
          "statement": "Implement recursive solutions and iterator-based operations on collections.",
          "etecRefs": [],
          "evidence": "Collection-processing practical",
          "id": "CLO 5"
        },
        {
          "plo": "S4",
          "stage": "I",
          "statement": "Test, debug and inspect a medium-sized code segment, recording defects and test results.",
          "etecRefs": [
            "SKU7.1-SLO8",
            "SKU8.2-SLO8"
          ],
          "evidence": "Individual inspection and debugging record",
          "id": "CLO 6"
        },
        {
          "plo": "S3",
          "stage": "I",
          "statement": "Document interfaces and apply consistent code style to make software readable and maintainable.",
          "etecRefs": [
            "SKU7.1-SLO9"
          ],
          "evidence": "Documentation and style review",
          "id": "CLO 7"
        },
        {
          "plo": "V2",
          "stage": "I",
          "statement": "Contribute reviewed changes to a shared repository and explain individual decisions and contributions.",
          "etecRefs": [],
          "evidence": "Repository history and individual explanation",
          "id": "CLO 8"
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": null,
      "resource": "Python Tutorial and curated object-oriented programming labs.",
      "name": "Programming II",
      "placement": "Semester 2",
      "anchor": "cs-102",
      "etecTopics": [
        "SKU7.1-T1",
        "SKU7.1-T2",
        "SKU7.1-T4",
        "SKU7.1-T5",
        "SKU8.2-T3"
      ],
      "etecSLOs": [
        "SKU7.1-SLO1",
        "SKU7.1-SLO3",
        "SKU7.1-SLO7",
        "SKU7.1-SLO8",
        "SKU8.2-SLO8",
        "SKU7.1-SLO9"
      ],
      "facilities": {
        "lab": "General programming lab",
        "hardware": "Standard workstation and individual repositories.",
        "software": "Python 3, VS Code, Git, pytest, mypy or Pyright; an object-modeling tool.",
        "practice": "Object-oriented and functional encapsulation, typed collections, code inspection and unit testing.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "MATH 120": {
      "id": "MATH 120",
      "code": "MATH 120",
      "title": "Linear Algebra",
      "term": 2,
      "credits": 3,
      "category": "department",
      "lecture": 3,
      "practical": 0,
      "prerequisites": [],
      "summary": "Use vectors and matrices to represent and solve computational problems.",
      "topics": [
        "Vectors and matrix operations",
        "Linear systems and elimination",
        "Vector spaces, bases, and dimension",
        "Linear maps and coordinate transformations",
        "Eigenvalues and eigenvectors",
        "Least squares and numerical interpretation"
      ],
      "clos": [
        {
          "plo": "K1",
          "stage": "I",
          "statement": "Explain vectors, matrices, linear maps and the geometry of linear systems.",
          "etecRefs": [],
          "evidence": "Written conceptual questions",
          "id": "CLO 1"
        },
        {
          "plo": "S1",
          "stage": "I",
          "statement": "Perform matrix operations and solve linear systems using elimination or factorization.",
          "etecRefs": [
            "EKU.1-SLO5"
          ],
          "evidence": "Matrix and linear-system examination",
          "id": "CLO 2"
        },
        {
          "plo": "S1",
          "stage": "I",
          "statement": "Determine bases, dimension, rank and independence for a vector space.",
          "etecRefs": [],
          "evidence": "Basis and rank problem set",
          "id": "CLO 3"
        },
        {
          "plo": "S1",
          "stage": "I",
          "statement": "Compute eigenvalues and eigenvectors and interpret their role in a computing model.",
          "etecRefs": [],
          "evidence": "Eigenvalue application assignment",
          "id": "CLO 4"
        },
        {
          "plo": "S1",
          "stage": "I",
          "statement": "Formulate and solve a least-squares approximation problem.",
          "etecRefs": [],
          "evidence": "Least-squares derivation and computation",
          "id": "CLO 5"
        },
        {
          "plo": "S4",
          "stage": "I",
          "statement": "Check numerical linear-algebra results and explain conditioning and residual error.",
          "etecRefs": [],
          "evidence": "Reproducible numerical worksheet",
          "id": "CLO 6"
        }
      ],
      "profile": "lecture",
      "group": null,
      "requirement": null,
      "resource": "MIT OpenCourseWare Linear Algebra and selected computational exercises.",
      "name": "Linear Algebra",
      "placement": "Semester 2",
      "anchor": "math-120",
      "etecTopics": [
        "EKU.1-T3"
      ],
      "etecSLOs": [
        "EKU.1-SLO5"
      ],
      "facilities": {
        "lab": "Mathematics classroom and computational workspace",
        "hardware": "Standard workstation; no specialist physical equipment.",
        "software": "Python, Jupyter, NumPy and Matplotlib, or GNU Octave.",
        "practice": "Matrix operations, linear systems, least squares and residual/conditioning experiments.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "PHYS 102": {
      "id": "PHYS 102",
      "code": "PHYS 102",
      "title": "Physics II with Laboratory",
      "term": 2,
      "credits": 3,
      "category": "department",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "PHYS 101"
      ],
      "summary": "Investigate electricity, magnetism, and circuits through measurement.",
      "topics": [
        "Electric charge, fields, and potential",
        "Capacitance and energy",
        "DC circuits and measurement instruments",
        "Magnetic fields and induction",
        "Electromagnetic phenomena and applications",
        "Experimental uncertainty and lab reports"
      ],
      "clos": [
        {
          "plo": "K2",
          "stage": "I",
          "statement": "Explain the physical behavior of a basic circuit.",
          "id": "CLO 1",
          "etecRefs": [],
          "evidence": "Individual conceptual examination and system analysis"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Design and report an experiment testing a circuit prediction.",
          "id": "CLO 2",
          "etecRefs": [],
          "evidence": "Reproducible investigation, results and limitations report"
        },
        {
          "plo": "V1",
          "stage": "I",
          "statement": "Apply electrical safety and document anomalous measurements.",
          "id": "CLO 3",
          "etecRefs": [],
          "evidence": "Professional or ethical decision case with justified safeguards"
        },
        {
          "plo": "K1",
          "stage": "I",
          "statement": "Apply electrostatic, circuit and induction models to predict measurable electrical behavior.",
          "id": "CLO 4",
          "etecRefs": [],
          "evidence": "Individual conceptual examination and applied explanation"
        },
        {
          "plo": "S4",
          "stage": "I",
          "statement": "Configure a circuit and use a multimeter and oscilloscope to verify a testable prediction.",
          "id": "CLO 5",
          "etecRefs": [],
          "evidence": "Reproducible investigation, results and limitations report"
        },
        {
          "plo": "S3",
          "stage": "I",
          "statement": "Explain a discrepancy between an electromagnetic model and laboratory evidence.",
          "id": "CLO 6",
          "etecRefs": [],
          "evidence": "Assessed report or presentation and individual responses"
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": null,
      "resource": "OpenStax University Physics Volume 2 and the physics lab manual.",
      "name": "Physics II with Laboratory",
      "placement": "Semester 2",
      "anchor": "phys-102",
      "etecTopics": [],
      "etecSLOs": [],
      "facilities": {
        "lab": "Supervised electricity and magnetism laboratory",
        "hardware": "Current-limited low-voltage DC supplies, multimeters, oscilloscopes, breadboards, resistors, capacitors, coils and magnetic-field sensors; protected benches and safety equipment.",
        "software": "Circuit simulation such as LTspice or an equivalent supported tool, plus spreadsheet or Python data analysis.",
        "practice": "Circuit, field and induction experiments; simulation complements physical measurements.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "ARAB 101": {
      "id": "ARAB 101",
      "code": "ARAB 101",
      "title": "Arabic Language",
      "term": 3,
      "credits": 3,
      "category": "college",
      "lecture": 3,
      "practical": 0,
      "prerequisites": [],
      "summary": "Use Arabic to communicate accurately in academic and professional settings.",
      "topics": [
        "Reading and comprehension",
        "Clarity and correctness in Arabic writing",
        "Professional correspondence",
        "Reports and summaries",
        "Arabic terminology in technology and business",
        "Oral presentation and audience adaptation"
      ],
      "clos": [
        {
          "plo": "S3",
          "stage": "P",
          "statement": "Write a coherent Arabic professional report.",
          "id": "CLO 1",
          "etecRefs": [],
          "evidence": "Assessed report or presentation and individual responses"
        },
        {
          "plo": "S3",
          "stage": "P",
          "statement": "Deliver an Arabic briefing tailored to a specific audience.",
          "id": "CLO 2",
          "etecRefs": [],
          "evidence": "Assessed report or presentation and individual responses"
        },
        {
          "plo": "V1",
          "stage": "I",
          "statement": "Attribute sources and respect professional communication conventions.",
          "id": "CLO 3",
          "etecRefs": [],
          "evidence": "Professional or ethical decision case with justified safeguards"
        },
        {
          "plo": "S3",
          "stage": "P",
          "statement": "Analyze an Arabic text and produce a concise, accurate summary.",
          "id": "CLO 4",
          "etecRefs": [],
          "evidence": "Assessed report or presentation and individual responses"
        },
        {
          "plo": "S3",
          "stage": "P",
          "statement": "Edit a professional Arabic report for structure, correctness and appropriate terminology.",
          "id": "CLO 5",
          "etecRefs": [],
          "evidence": "Assessed report or presentation and individual responses"
        },
        {
          "plo": "S3",
          "stage": "P",
          "statement": "Deliver an audience-appropriate Arabic presentation and respond to questions.",
          "id": "CLO 6",
          "etecRefs": [],
          "evidence": "Assessed report or presentation and individual responses"
        }
      ],
      "profile": "project",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Arabic Language",
      "placement": "Semester 3",
      "anchor": "arab-101",
      "etecTopics": [],
      "etecSLOs": [],
      "facilities": {
        "lab": "Language and writing classroom",
        "hardware": "Shared computers with Arabic keyboards and right-to-left display support; presentation recording capability.",
        "software": "Arabic-enabled word processor, presentation tools, approved dictionaries and LMS.",
        "practice": "Arabic reports, correspondence, editing and oral presentation; no dedicated technical lab required.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "CS 201": {
      "id": "CS 201",
      "code": "CS 201",
      "title": "Data Structures",
      "term": 3,
      "credits": 3,
      "category": "core",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "CS 102",
        "CS 103"
      ],
      "summary": "Implement data structures and analyze trade-offs among their operations.",
      "topics": [
        "Abstract data types, representation invariants and operation complexity",
        "Lists, stacks, queues and iterators",
        "Trees and balanced search structures",
        "Hash tables, heaps and priority queues",
        "Graph representations, tree traversal, BFS and DFS",
        "Elementary numerical, search, sort and string-matching implementations",
        "Record and array layout, workload selection, tests and reproducible benchmarks"
      ],
      "clos": [
        {
          "plo": "K1",
          "stage": "P",
          "statement": "Explain representation invariants and the implementations of lists, stacks, queues, trees and hash tables.",
          "etecRefs": [
            "SKU1.2-SLO3"
          ],
          "evidence": "Data-structure trace and hash-table explanation",
          "id": "CLO 1"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Compare runtime and memory costs and select a data structure for a stated workload.",
          "etecRefs": [
            "SKU1.2-SLO2",
            "SKU1.2-SLO6"
          ],
          "evidence": "Justified workload analysis",
          "id": "CLO 2"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Implement and test elementary numerical, searching and sorting algorithms.",
          "etecRefs": [
            "SKU1.2-SLO1"
          ],
          "evidence": "Individual algorithm laboratory",
          "id": "CLO 3"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Implement a string-matching algorithm and verify correctness on boundary cases.",
          "etecRefs": [
            "SKU1.2-SLO7"
          ],
          "evidence": "String-matching practical",
          "id": "CLO 4"
        },
        {
          "plo": "K1",
          "stage": "P",
          "statement": "Recognize graph and tree types, representations and traversal methods.",
          "etecRefs": [
            "SKU3.3-SLO1"
          ],
          "evidence": "Graph and tree examination",
          "id": "CLO 5"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Implement graph traversals and apply fundamental graph algorithms to computing problems.",
          "etecRefs": [
            "SKU1.2-SLO4"
          ],
          "evidence": "Individual graph implementation and correctness tests",
          "id": "CLO 6"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Evaluate array and record layouts for storage efficiency and retrieval cost.",
          "etecRefs": [
            "SKU2.1-SLO8"
          ],
          "evidence": "Layout and retrieval benchmark",
          "id": "CLO 7"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Measure algorithm performance reproducibly and interpret time-space trade-offs.",
          "etecRefs": [],
          "evidence": "Benchmark report with individual explanation",
          "id": "CLO 8"
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": "The three-credit design retains two supervised practical hours each week. CS 103 teaches graph isomorphism and mathematical spanning-tree reasoning; CS 220 develops greedy spanning-tree and shortest-path algorithms, proofs and complexity. CS 201 retains individual data-structure, search, sort, string and graph implementation assessments.",
      "resource": "Open Data Structures by Pat Morin and programming labs.",
      "name": "Data Structures",
      "placement": "Semester 3",
      "anchor": "cs-201",
      "etecTopics": [
        "SKU1.2-T1",
        "SKU1.2-T2",
        "SKU2.1-T3",
        "SKU3.3-T1"
      ],
      "etecSLOs": [
        "SKU1.2-SLO3",
        "SKU1.2-SLO2",
        "SKU1.2-SLO6",
        "SKU1.2-SLO1",
        "SKU1.2-SLO7",
        "SKU3.3-SLO1",
        "SKU1.2-SLO4",
        "SKU2.1-SLO8"
      ],
      "facilities": {
        "lab": "Algorithms and data-structures programming lab",
        "hardware": "Standard workstation; repeatable timing setup with workload and machine metadata.",
        "software": "Python 3 and/or a supported C++/Java toolchain, Git, unit-test framework, profiler and graph-visualization tools.",
        "practice": "Data structures, numerical/search/sort/string algorithms, graph traversal, spanning trees and layout benchmarks.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      },
      "topicHours": [
        6,
        9,
        9,
        9,
        9,
        12,
        6
      ]
    },
    "CS 210": {
      "id": "CS 210",
      "code": "CS 210",
      "title": "Digital Logic and Computer Organization",
      "term": 3,
      "credits": 3,
      "category": "core",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "CS 102",
        "CS 103"
      ],
      "summary": "Design and test digital building blocks, connect them into a simple processor, and relate instruction execution and memory organization to software behavior.",
      "topics": [
        "Evolution of computers, system layers, stored-program organization and digital versus analog systems",
        "Binary and hexadecimal numbers, signed integers, floating-point data, character encoding and data conversion",
        "Logic gates, truth tables, Boolean algebra, simplification and sum-of-products representations",
        "Combinational design: adders, multiplexers, decoders, comparators and the ALU",
        "Sequential design: clocks, flip-flops, registers, counters and finite-state control",
        "Construction and verification of a small processor using datapath, control, registers and memory",
        "Instruction sets, addressing, assembly programming, subroutines and high-level-to-machine execution",
        "Memory hierarchy, caching, buses and data layout",
        "Processor performance, introductory pipelining, multi-core comparison and performance measurement",
        "Input/output, interrupts, hardware-software interfaces and integrated simulator experiments"
      ],
      "clos": [
        {
          "plo": "K2",
          "stage": "P",
          "statement": "Explain stored-program and von Neumann organization and identify processor, memory and I/O interactions.",
          "etecRefs": [
            "SKU2.2-SLO1"
          ],
          "evidence": "System organization examination",
          "id": "CLO 1"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Convert and verify integer and floating-point representations across numerical formats.",
          "etecRefs": [
            "SKU2.1-SLO6"
          ],
          "evidence": "Data-representation practical",
          "id": "CLO 2"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Simplify Boolean expressions and design optimized combinational and sequential logic circuits.",
          "etecRefs": [
            "SKU2.1-SLO3"
          ],
          "evidence": "Gate-level circuit design and tests",
          "id": "CLO 3"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Prototype an ALU, registers, control unit and memory and evaluate a small processor for correctness and efficiency.",
          "etecRefs": [
            "SKU2.1-SLO4",
            "SKU2.1-SLO5"
          ],
          "evidence": "Processor construction and verification dossier",
          "id": "CLO 4"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Write machine and assembly instruction sequences and subroutine calls for a computing problem.",
          "etecRefs": [
            "SKU2.2-SLO3",
            "SKU2.2-SLO5"
          ],
          "evidence": "Individual assembly practical",
          "id": "CLO 5"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Evaluate memory technologies and cache delay and design a memory configuration to improve average access time.",
          "etecRefs": [
            "SKU2.3-SLO1",
            "SKU2.3-SLO2",
            "SKU2.3-SLO3"
          ],
          "evidence": "Cache and memory design investigation",
          "id": "CLO 6"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Justify bus types for a workload and simulate interrupt-driven data transfer and I/O control.",
          "etecRefs": [
            "SKU2.3-SLO5",
            "SKU2.3-SLO6",
            "SKU2.2-SLO4"
          ],
          "evidence": "Bus comparison and interrupt simulation",
          "id": "CLO 7"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Measure processor behavior using a simulator and explain the limitations of a performance comparison.",
          "etecRefs": [],
          "evidence": "Reproducible architecture experiment",
          "id": "CLO 8"
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": null,
      "resource": "Logic-circuit and instruction-set simulators, supplied test benches, assembly exercises, and component construction laboratories. Students prototype an ALU, registers, memory and a small processor in simulation.",
      "name": "Digital Logic and Computer Organization",
      "placement": "Semester 3",
      "anchor": "cs-210",
      "topicHours": [
        2,
        6,
        6,
        6,
        6,
        8,
        8,
        6,
        6,
        6
      ],
      "etecTopics": [
        "SKU2.1-T1",
        "SKU2.1-T2",
        "SKU2.1-T3",
        "SKU2.2-T1",
        "SKU2.2-T2",
        "SKU2.2-T3",
        "SKU2.3-T1",
        "SKU2.3-T3",
        "SKU6.2-T3"
      ],
      "etecSLOs": [
        "SKU2.2-SLO1",
        "SKU2.1-SLO6",
        "SKU2.1-SLO3",
        "SKU2.1-SLO4",
        "SKU2.1-SLO5",
        "SKU2.2-SLO3",
        "SKU2.2-SLO5",
        "SKU2.3-SLO1",
        "SKU2.3-SLO2",
        "SKU2.3-SLO3",
        "SKU2.3-SLO5",
        "SKU2.3-SLO6",
        "SKU2.2-SLO4"
      ],
      "facilities": {
        "lab": "Digital logic and architecture simulation laboratory",
        "hardware": "Standard workstation and simulator access; optional FPGA or logic-trainer kits for enrichment.",
        "software": "Logisim-evolution, a supported Java runtime, RARS or an equivalent RISC-V assembly simulator, and spreadsheet/Python analysis.",
        "practice": "Gate and sequential circuit construction, ALU/register/control integration, processor tests, assembly, cache and interrupt-driven I/O simulation.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "STAT 220": {
      "id": "STAT 220",
      "code": "STAT 220",
      "title": "Probability and Statistics",
      "term": 3,
      "credits": 4,
      "category": "department",
      "lecture": 3,
      "practical": 2,
      "prerequisites": [
        "MATH 101",
        "CS 103"
      ],
      "summary": "Use probability and statistical inference to reason about uncertainty and data.",
      "topics": [
        "Probability axioms, conditioning, independence, and Bayes' rule",
        "Discrete and continuous random variables",
        "Expectation, variance, and distributions",
        "Sampling and descriptive statistics",
        "Confidence intervals and hypothesis testing",
        "Regression, experiment design, and data interpretation",
        "Graph-structured event dependencies and combined graph/probability models for real-world scenarios"
      ],
      "clos": [
        {
          "plo": "K1",
          "stage": "P",
          "statement": "Explain probability axioms, random variables, sampling and common distributions.",
          "etecRefs": [],
          "evidence": "Conceptual examination",
          "id": "CLO 1"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Apply counting methods to calculate probabilities in discrete scenarios.",
          "etecRefs": [
            "EKU.1-SLO6"
          ],
          "evidence": "Combinatorial probability problems",
          "id": "CLO 2"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Compute event and conditional probabilities using Bayes theorem and distinguish dependent from independent events.",
          "etecRefs": [
            "SKU3.3-SLO3",
            "SKU3.3-SLO4"
          ],
          "evidence": "Conditional-probability examination",
          "id": "CLO 3"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Calculate binomial probabilities, expectations and variance and select probability tools for an application.",
          "etecRefs": [
            "SKU3.3-SLO5",
            "SKU3.3-SLO6"
          ],
          "evidence": "Distribution modeling assignment",
          "id": "CLO 4"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Formulate probabilistic models for uncertainty and dependence, including a graph-structured real-world example.",
          "etecRefs": [
            "EKU.1-SLO7",
            "SKU3.3-SLO7"
          ],
          "evidence": "Graph and dependency modeling investigation",
          "id": "CLO 5"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Construct confidence intervals and perform hypothesis tests with stated assumptions and population interpretations.",
          "etecRefs": [
            "EKU.1-SLO8"
          ],
          "evidence": "Individual inference report",
          "id": "CLO 6"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Fit and diagnose a simple regression model and explain uncertainty and validity threats.",
          "etecRefs": [],
          "evidence": "Reproducible statistical notebook",
          "id": "CLO 7"
        },
        {
          "plo": "V1",
          "stage": "P",
          "statement": "Report statistical evidence honestly, distinguishing association from causation and documenting limitations.",
          "etecRefs": [],
          "evidence": "Interpretation and reporting rubric",
          "id": "CLO 8"
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": null,
      "resource": "OpenStax Introductory Statistics and computing-focused problem sets.",
      "name": "Probability and Statistics",
      "placement": "Semester 3",
      "anchor": "stat-220",
      "etecTopics": [
        "EKU.1-T4",
        "EKU.1-T5",
        "SKU3.3-T2",
        "SKU3.3-T3"
      ],
      "etecSLOs": [
        "EKU.1-SLO6",
        "SKU3.3-SLO3",
        "SKU3.3-SLO4",
        "SKU3.3-SLO5",
        "SKU3.3-SLO6",
        "EKU.1-SLO7",
        "SKU3.3-SLO7",
        "EKU.1-SLO8"
      ],
      "facilities": {
        "lab": "Statistics and data-analysis workspace",
        "hardware": "Standard workstation; curated datasets and protected individual storage.",
        "software": "R with RStudio, or Python with Jupyter, pandas, SciPy, statsmodels and Matplotlib.",
        "practice": "Probability simulations, regression, confidence intervals, tests and reproducible inference reports.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "CS 230": {
      "id": "CS 230",
      "code": "CS 230",
      "title": "Database Systems",
      "term": 3,
      "credits": 3,
      "category": "core",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "CS 102"
      ],
      "summary": "Model, query, and manage data using relational database systems.",
      "topics": [
        "Data lifecycle, database architecture, and data independence",
        "Conceptual and relational data models and integrity",
        "Relational algebra, SQL, and programmatic queries",
        "Keys, dependencies, and normalization",
        "Indexing, buffering, and query plans",
        "Transactions, concurrency, and recovery",
        "NoSQL and distributed data systems for large or semi-structured datasets",
        "Access control, provenance, and data governance",
        "Persistent object identity, object-oriented data modeling and database implementation; comparison with object-relational storage"
      ],
      "clos": [
        {
          "plo": "K3",
          "stage": "P",
          "statement": "Identify and explain the roles of query optimization, execution, storage, access methods and transaction processing in a DBMS.",
          "etecRefs": [
            "SKU4.1-SLO1",
            "SKU4.1-SLO2"
          ],
          "evidence": "DBMS component analysis",
          "id": "CLO 1"
        },
        {
          "plo": "K3",
          "stage": "P",
          "statement": "Explain relational-model concepts, integrity constraints and relational algebra.",
          "etecRefs": [
            "SKU4.1-SLO3"
          ],
          "evidence": "Relational-model examination",
          "id": "CLO 2"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Write and test declarative SQL queries to retrieve, modify and aggregate data.",
          "etecRefs": [
            "SKU4.1-SLO4"
          ],
          "evidence": "Individual SQL practical",
          "id": "CLO 3"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Compare relational, object-oriented and document data models and justify a choice for a workload.",
          "etecRefs": [
            "SKU4.1-SLO5"
          ],
          "evidence": "Data-model comparison",
          "id": "CLO 4"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Construct ER and UML class models and derive an implementable database schema.",
          "etecRefs": [
            "SKU4.1-SLO6",
            "SKU8.1-SLO8"
          ],
          "evidence": "ER and UML design dossier",
          "id": "CLO 5"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Design and implement an object-oriented data model using persistent objects and object identity, contrasting it with an object-relational implementation.",
          "etecRefs": [
            "SKU4.1-SLO7"
          ],
          "evidence": "Persistent-object database mini-lab",
          "id": "CLO 6"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Evaluate normalization, query plans, indexes and transaction behavior using a reproducible workload.",
          "etecRefs": [],
          "evidence": "Database performance and transaction experiment",
          "id": "CLO 7"
        },
        {
          "plo": "V1",
          "stage": "P",
          "statement": "Apply access control and provenance rules and justify data-governance decisions.",
          "etecRefs": [],
          "evidence": "Security and provenance review",
          "id": "CLO 8"
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": null,
      "resource": "PostgreSQL documentation and the database lab manual.",
      "name": "Database Systems",
      "placement": "Semester 3",
      "anchor": "cs-230",
      "etecTopics": [
        "SKU4.1-T1",
        "SKU4.1-T2",
        "SKU4.1-T3",
        "SKU8.1-T2"
      ],
      "etecSLOs": [
        "SKU4.1-SLO1",
        "SKU4.1-SLO2",
        "SKU4.1-SLO3",
        "SKU4.1-SLO4",
        "SKU4.1-SLO5",
        "SKU4.1-SLO6",
        "SKU8.1-SLO8",
        "SKU4.1-SLO7"
      ],
      "facilities": {
        "lab": "Database and data-modeling lab",
        "hardware": "Standard workstation; isolated local databases or per-student database containers and backed-up project storage.",
        "software": "PostgreSQL and pgAdmin or DBeaver; ER/UML modeling tool; Python with ZODB or an equivalent persistent-object database for the object-oriented mini-lab.",
        "practice": "SQL, ER/UML design, query plans, transactions, access control and object-oriented versus object-relational persistence.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "ISLM 101": {
      "id": "ISLM 101",
      "code": "ISLM 101",
      "title": "Islamic Culture and Professional Values",
      "term": 4,
      "credits": 3,
      "category": "college",
      "lecture": 3,
      "practical": 0,
      "prerequisites": [],
      "summary": "Apply Islamic cultural and ethical principles to professional decisions in Saudi Arabia.",
      "topics": [
        "Foundations of Islamic culture and ethical reasoning",
        "Integrity, trust, justice, and public interest",
        "Professional responsibilities and accountability",
        "Fairness, privacy, and responsible AI use",
        "Ethics, law, and cultural context",
        "Evidence-based ethical case analysis in business and computing"
      ],
      "clos": [
        {
          "plo": "S3",
          "stage": "P",
          "statement": "Communicate a reasoned ethical decision to stakeholders.",
          "id": "CLO 1",
          "etecRefs": [],
          "evidence": "Assessed report or presentation and individual responses"
        },
        {
          "plo": "V1",
          "stage": "P",
          "statement": "Compare professional actions using Islamic ethical principles and applicable professional standards.",
          "id": "CLO 2",
          "etecRefs": [],
          "evidence": "Professional or ethical decision case with justified safeguards"
        },
        {
          "plo": "V1",
          "stage": "P",
          "statement": "Explain the sources and central concepts of Islamic culture relevant to professional conduct.",
          "id": "CLO 3",
          "etecRefs": [],
          "evidence": "Professional or ethical decision case with justified safeguards"
        },
        {
          "plo": "V1",
          "stage": "P",
          "statement": "Analyze a workplace case using integrity, trust, justice and public-interest principles.",
          "id": "CLO 4",
          "etecRefs": [],
          "evidence": "Professional or ethical decision case with justified safeguards"
        },
        {
          "plo": "V1",
          "stage": "P",
          "statement": "Justify a response to conflicts of interest, confidentiality or misuse of professional authority.",
          "id": "CLO 5",
          "etecRefs": [],
          "evidence": "Professional or ethical decision case with justified safeguards"
        },
        {
          "plo": "V2",
          "stage": "P",
          "statement": "Participate respectfully in a case discussion and revise a decision in light of reasoned feedback.",
          "id": "CLO 6",
          "etecRefs": [],
          "evidence": "Contribution record, peer or host review and individual reflection"
        }
      ],
      "profile": "project",
      "group": null,
      "requirement": null,
      "resource": "Instructor-selected Islamic culture and ethics readings, discipline-specific professional codes, and case materials.",
      "name": "Islamic Culture and Professional Values",
      "placement": "Semester 4",
      "anchor": "islm-101",
      "textbookStatus": "To be selected.",
      "etecTopics": [],
      "etecSLOs": [],
      "facilities": {
        "lab": "Seminar classroom and case-discussion space",
        "hardware": "Shared presentation and library access; no dedicated technical lab required.",
        "software": "Browser, LMS, word processor and presentation tools.",
        "practice": "Reasoned professional case analysis, source review and discussion of Islamic culture and professional values.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "CS 220": {
      "id": "CS 220",
      "code": "CS 220",
      "title": "Design and Analysis of Algorithms",
      "term": 4,
      "credits": 3,
      "category": "core",
      "lecture": 3,
      "practical": 0,
      "prerequisites": [
        "CS 201"
      ],
      "summary": "Design algorithms and assess their correctness and efficiency.",
      "topics": [
        "Asymptotic bounds and recurrence analysis",
        "Divide and conquer",
        "Greedy methods, minimum spanning trees and correctness proofs",
        "Dynamic programming",
        "Graph algorithms, shortest paths and comparative complexity",
        "Reductions, lower bounds, and complexity classes",
        "Recursive backtracking and heuristic algorithms; empirical runtime hypotheses and input-size experiments"
      ],
      "clos": [
        {
          "plo": "K1",
          "stage": "P",
          "statement": "Explain best, average and worst algorithm behavior and use asymptotic notation to derive time and space bounds.",
          "etecRefs": [
            "SKU1.1-SLO1",
            "SKU1.1-SLO2"
          ],
          "evidence": "Algorithm analysis examination",
          "id": "CLO 1"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Compare standard complexity classes and justify algorithm choices under workload and resource constraints.",
          "etecRefs": [
            "SKU1.1-SLO3",
            "SKU1.2-SLO5"
          ],
          "evidence": "Complexity and selection argument",
          "id": "CLO 2"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Solve recurrences and prove correctness of recursive algorithms.",
          "etecRefs": [],
          "evidence": "Recurrence and correctness proof",
          "id": "CLO 3"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Implement divide-and-conquer algorithms and analyze their correctness and complexity.",
          "etecRefs": [
            "SKU1.1-SLO7"
          ],
          "evidence": "Divide-and-conquer practical",
          "id": "CLO 4"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Apply greedy, dynamic-programming, recursive-backtracking and heuristic techniques to appropriate problems.",
          "etecRefs": [
            "SKU1.1-SLO5"
          ],
          "evidence": "Comparative algorithm assignments",
          "id": "CLO 5"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Select and justify an algorithmic method for an unfamiliar computing problem.",
          "etecRefs": [
            "SKU1.1-SLO6"
          ],
          "evidence": "Individual problem-solving defense",
          "id": "CLO 6"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Design empirical tests across input sizes to validate runtime hypotheses and compare algorithms.",
          "etecRefs": [
            "SKU1.1-SLO4"
          ],
          "evidence": "Reproducible benchmark report",
          "id": "CLO 7"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Use reductions and lower-bound arguments to distinguish feasible solutions from computationally difficult problems.",
          "etecRefs": [],
          "evidence": "Reduction examination tasks",
          "id": "CLO 8"
        }
      ],
      "profile": "lecture",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Design and Analysis of Algorithms",
      "placement": "Semester 4",
      "anchor": "cs-220",
      "etecTopics": [
        "SKU1.1-T1",
        "SKU1.1-T2",
        "SKU1.2-T1",
        "SKU1.2-T4",
        "SKU3.2-T1",
        "SKU3.2-T3"
      ],
      "etecSLOs": [
        "SKU1.1-SLO1",
        "SKU1.1-SLO2",
        "SKU1.1-SLO3",
        "SKU1.2-SLO5",
        "SKU1.1-SLO7",
        "SKU1.1-SLO5",
        "SKU1.1-SLO6",
        "SKU1.1-SLO4"
      ],
      "facilities": {
        "lab": "Algorithm design and experimental analysis lab",
        "hardware": "Standard workstation with reproducible benchmark environment.",
        "software": "Python 3 or supported C++/Java, Git, testing framework, profiler and plotting tools.",
        "practice": "Divide-and-conquer, greedy, dynamic-programming, backtracking and heuristic implementations with runtime experiments.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      },
      "topicHours": [
        7,
        6,
        7,
        7,
        7,
        6,
        5
      ]
    },
    "CS 240": {
      "id": "CS 240",
      "code": "CS 240",
      "title": "Systems Programming",
      "term": 4,
      "credits": 3,
      "category": "core",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "CS 201",
        "CS 210"
      ],
      "summary": "Build systems software and examine how programs interact with a machine and its operating environment.",
      "topics": [
        "C, pointers, and memory ownership",
        "Compilation, linking, and executable layout",
        "Unix shell and tooling",
        "Processes, signals, and system calls",
        "File input/output and inter-process communication",
        "Debugging, test harnesses, memory safety, profiling and performance measurement",
        "Resource measurement, system failures, and defensive design",
        "Logical layers, APIs and middleware; code/global/heap/stack layout; source-to-assembly trace and memory-leak repair"
      ],
      "clos": [
        {
          "plo": "K2",
          "stage": "P",
          "statement": "Explain the roles of logical layers, system APIs and middleware in the construction of system software.",
          "etecRefs": [
            "SKU6.1-SLO3",
            "SKU6.1-SLO4"
          ],
          "evidence": "System-interface design explanation",
          "id": "CLO 1"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Implement C programs with pointers, dynamic allocation, files and defensible ownership rules.",
          "etecRefs": [],
          "evidence": "Supervised C programming practical",
          "id": "CLO 2"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Trace high-level constructs through assembly, compilation, linking and machine execution.",
          "etecRefs": [
            "SKU2.2-SLO6"
          ],
          "evidence": "Source-to-machine trace",
          "id": "CLO 3"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Analyze code, global data, heap and stack layouts in an executable process.",
          "etecRefs": [
            "SKU7.2-SLO6"
          ],
          "evidence": "Executable and debugger investigation",
          "id": "CLO 4"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Diagnose and repair memory leaks and dangling pointers using memory-checking tools.",
          "etecRefs": [
            "SKU7.2-SLO7"
          ],
          "evidence": "Memory-safety repair practical",
          "id": "CLO 5"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Develop programs using processes, signals, system calls and inter-process communication.",
          "etecRefs": [],
          "evidence": "System-call programming assignment",
          "id": "CLO 6"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Profile application resource use and propose and test a system-software optimization.",
          "etecRefs": [
            "SKU6.1-SLO5"
          ],
          "evidence": "Profile and before-after experiment",
          "id": "CLO 7"
        },
        {
          "plo": "S3",
          "stage": "P",
          "statement": "Document a reproducible build and explain a system failure and its correction.",
          "etecRefs": [],
          "evidence": "Build instructions and individual technical explanation",
          "id": "CLO 8"
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Systems Programming",
      "placement": "Semester 4",
      "anchor": "cs-240",
      "etecTopics": [
        "SKU2.2-T2",
        "SKU2.2-T3",
        "SKU6.1-T2",
        "SKU6.1-T3",
        "SKU7.2-T3"
      ],
      "etecSLOs": [
        "SKU6.1-SLO3",
        "SKU6.1-SLO4",
        "SKU2.2-SLO6",
        "SKU7.2-SLO6",
        "SKU7.2-SLO7",
        "SKU6.1-SLO5"
      ],
      "facilities": {
        "lab": "Linux systems programming lab",
        "hardware": "Virtualization-capable workstations; isolated Linux VMs or equivalent remote Linux accounts with reset capability.",
        "software": "Linux, GCC or Clang, Make, GDB, Valgrind and/or sanitizers, strace, perf where available, Git and shell utilities.",
        "practice": "Source-to-executable tracing, pointers, process memory, system calls, signals, IPC and resource profiling.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "CS 250": {
      "id": "CS 250",
      "code": "CS 250",
      "title": "Software Engineering",
      "term": 4,
      "credits": 3,
      "category": "core",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "CS 201",
        "CS 230"
      ],
      "summary": "Develop maintainable software in teams from requirements through verification.",
      "topics": [
        "Requirements and stakeholder analysis",
        "Software process, agile planning, and estimation",
        "Team roles, constructive feedback, and conflict resolution",
        "Architecture, modular design, selected design patterns, contracts and version control",
        "Construction, refactoring, individual code review, automated tests and continuous integration",
        "Verification, validation, and security by design",
        "Maintenance and accessible technical documentation",
        "Professional codes, software licensing, accountability, and escalation of concerns",
        "Lifecycle comparison, testable use cases and requirements models; design paradigms and architecture; verification versus validation; defect tracking"
      ],
      "clos": [
        {
          "plo": "K3",
          "stage": "P",
          "statement": "Explain interactions between software and information-management, embedded, process-control and communication systems.",
          "etecRefs": [
            "SKU8.1-SLO1"
          ],
          "evidence": "System context comparison",
          "id": "CLO 1"
        },
        {
          "plo": "K3",
          "stage": "P",
          "statement": "Compare waterfall, iterative and agile processes and illustrate lifecycle phases and deliverables with a worked example.",
          "etecRefs": [
            "SKU8.1-SLO2",
            "SKU8.1-SLO3"
          ],
          "evidence": "Lifecycle and process portfolio",
          "id": "CLO 2"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Analyze a requirements model and write testable functional and non-functional requirements, including use cases.",
          "etecRefs": [
            "SKU8.1-SLO5",
            "SKU8.1-SLO6",
            "SKU8.1-SLO9"
          ],
          "evidence": "Requirements specification and critique",
          "id": "CLO 3"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Select elicitation techniques and explain their limitations and challenges in stakeholder work.",
          "etecRefs": [
            "SKU8.1-SLO7"
          ],
          "evidence": "Interview plan and elicitation reflection",
          "id": "CLO 4"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Apply coupling, cohesion and encapsulation and use a design paradigm to model a software architecture.",
          "etecRefs": [
            "SKU8.2-SLO1",
            "SKU8.2-SLO2",
            "SKU8.2-SLO3",
            "SKU8.2-SLO4"
          ],
          "evidence": "Architecture and design-model review",
          "id": "CLO 5"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Implement design mechanisms for reliability, efficiency and robustness and justify their trade-offs.",
          "etecRefs": [
            "SKU8.2-SLO5"
          ],
          "evidence": "Implemented design and quality evidence",
          "id": "CLO 6"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Distinguish verification from validation and apply both to trace requirements to acceptance evidence.",
          "etecRefs": [
            "SKU8.2-SLO7"
          ],
          "evidence": "Verification and validation plan",
          "id": "CLO 7"
        },
        {
          "plo": "V2",
          "stage": "P",
          "statement": "Manage reviewed team work with an issue and defect tracker, documenting responsibilities and professional decisions.",
          "etecRefs": [
            "SKU8.2-SLO10"
          ],
          "evidence": "Issue history and individual contribution defense",
          "id": "CLO 8"
        }
      ],
      "profile": "project",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Software Engineering",
      "placement": "Semester 4",
      "anchor": "cs-250",
      "etecTopics": [
        "SKU8.1-T1",
        "SKU8.1-T2",
        "SKU8.1-T3",
        "SKU8.2-T1",
        "SKU8.2-T3"
      ],
      "etecSLOs": [
        "SKU8.1-SLO1",
        "SKU8.1-SLO2",
        "SKU8.1-SLO3",
        "SKU8.1-SLO5",
        "SKU8.1-SLO6",
        "SKU8.1-SLO9",
        "SKU8.1-SLO7",
        "SKU8.2-SLO1",
        "SKU8.2-SLO2",
        "SKU8.2-SLO3",
        "SKU8.2-SLO4",
        "SKU8.2-SLO5",
        "SKU8.2-SLO7",
        "SKU8.2-SLO10"
      ],
      "facilities": {
        "lab": "Collaborative software engineering lab",
        "hardware": "Team workspaces, individual repositories, CI runner and shared test environment.",
        "software": "Git with an issue/defect tracker, UML tool, language toolchain, unit-test framework and CI service or local runner.",
        "practice": "Requirements and architecture models, reviewed implementation, defect tracking and verification/validation evidence.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "MATH 230": {
      "id": "MATH 230",
      "code": "MATH 230",
      "title": "Multivariable Calculus and Optimization",
      "term": 4,
      "credits": 3,
      "category": "department",
      "lecture": 3,
      "practical": 0,
      "prerequisites": [
        "MATH 101",
        "MATH 120"
      ],
      "summary": "Use multivariable calculus and optimization to prepare for machine learning and computational modeling.",
      "topics": [
        "Multivariable functions and level sets",
        "Partial derivatives, the chain rule, and gradients",
        "Selected applications of multiple integration",
        "Constrained optimization and Lagrange multipliers",
        "Convexity and global and local optima",
        "Gradient descent and computational interpretation"
      ],
      "clos": [
        {
          "plo": "K1",
          "stage": "P",
          "statement": "Explain multivariable functions, level sets, gradients and local linear approximation.",
          "etecRefs": [],
          "evidence": "Conceptual examination",
          "id": "CLO 1"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Calculate partial derivatives and apply the multivariable chain rule.",
          "etecRefs": [],
          "evidence": "Differentiation problem set",
          "id": "CLO 2"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Formulate and evaluate selected multiple-integral models.",
          "etecRefs": [],
          "evidence": "Integration assignment",
          "id": "CLO 3"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Analyze stationary points, convexity and constraints, using Lagrange multipliers where appropriate.",
          "etecRefs": [],
          "evidence": "Constrained-optimization examination",
          "id": "CLO 4"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Calculate gradients and implement gradient-based optimization for a small learning problem.",
          "etecRefs": [
            "EKU.1-SLO4"
          ],
          "evidence": "Gradient-descent notebook and derivative check",
          "id": "CLO 5"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Evaluate convergence and sensitivity and explain how mathematical assumptions affect a computed optimum.",
          "etecRefs": [],
          "evidence": "Optimization experiment report",
          "id": "CLO 6"
        }
      ],
      "profile": "lecture",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Multivariable Calculus and Optimization",
      "placement": "Semester 4",
      "anchor": "math-230",
      "etecTopics": [
        "EKU.1-T2"
      ],
      "etecSLOs": [
        "EKU.1-SLO4"
      ],
      "facilities": {
        "lab": "Mathematics classroom and computational workspace",
        "hardware": "Standard workstation; no GPU required.",
        "software": "Python, Jupyter, NumPy, SciPy, SymPy and Matplotlib.",
        "practice": "Derivative verification, constrained optimization and gradient-descent experiments.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "CS 260": {
      "id": "CS 260",
      "code": "CS 260",
      "title": "Computer Networks",
      "term": 4,
      "credits": 3,
      "category": "core",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "CS 201",
        "CS 210"
      ],
      "summary": "Explain communication across networks and build simple networked applications.",
      "topics": [
        "Network models and layering",
        "Link layers and addressing",
        "IP, forwarding, and routing",
        "Transport protocols and congestion",
        "Application protocols and socket programming",
        "Measurement, reliability, and network security foundations",
        "Internet edge/core complexity, circuit/packet switching, physical network components and naming; reliable protocol construction and optimization"
      ],
      "clos": [
        {
          "plo": "K2",
          "stage": "P",
          "statement": "Describe Internet organization, define network terminology and assess complexity at the edge and core.",
          "etecRefs": [
            "SKU5.1-SLO1",
            "SKU5.1-SLO2",
            "SKU5.1-SLO3"
          ],
          "evidence": "Network architecture examination",
          "id": "CLO 1"
        },
        {
          "plo": "K2",
          "stage": "P",
          "statement": "Explain layering, circuit and packet switching and the roles of physical networking components.",
          "etecRefs": [
            "SKU5.1-SLO4"
          ],
          "evidence": "Protocol-layer and switching analysis",
          "id": "CLO 2"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Apply addressing and naming schemes and explain resource location and routing decisions.",
          "etecRefs": [
            "SKU5.1-SLO5"
          ],
          "evidence": "Addressing and DNS practical",
          "id": "CLO 3"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Design and implement a client-server socket application against a communication specification.",
          "etecRefs": [
            "SKU5.1-SLO6"
          ],
          "evidence": "Individual socket application",
          "id": "CLO 4"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Develop and optimize a reliable delivery protocol using error, flow and congestion-control mechanisms.",
          "etecRefs": [
            "SKU5.1-SLO7"
          ],
          "evidence": "Reliable-protocol simulator and tests",
          "id": "CLO 5"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Measure delay, throughput and packet loss and interpret capture and simulation evidence.",
          "etecRefs": [],
          "evidence": "Controlled network performance investigation",
          "id": "CLO 6"
        },
        {
          "plo": "V1",
          "stage": "P",
          "statement": "Explain privacy and security implications of network design and measurement.",
          "etecRefs": [],
          "evidence": "Network risk review",
          "id": "CLO 7"
        },
        {
          "plo": "S3",
          "stage": "P",
          "statement": "Document a network experiment so that another student can reproduce and interpret it.",
          "etecRefs": [],
          "evidence": "Protocol and experiment report",
          "id": "CLO 8"
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Computer Networks",
      "placement": "Semester 4",
      "anchor": "cs-260",
      "etecTopics": [
        "SKU5.1-T1",
        "SKU5.1-T2",
        "SKU5.1-T3",
        "SKU5.1-T4",
        "SKU5.1-T5"
      ],
      "etecSLOs": [
        "SKU5.1-SLO1",
        "SKU5.1-SLO2",
        "SKU5.1-SLO3",
        "SKU5.1-SLO4",
        "SKU5.1-SLO5",
        "SKU5.1-SLO6",
        "SKU5.1-SLO7"
      ],
      "facilities": {
        "lab": "Isolated networking and socket-programming laboratory",
        "hardware": "Virtual network sandbox; small switches/routers or equivalent emulated network; per-student packet-capture access in the teaching environment.",
        "software": "Wireshark, ns-3 or an equivalent network simulator, Linux networking tools, Python/C socket libraries and Git.",
        "practice": "Addressing, DNS, packet analysis, client-server applications and reliable-protocol experiments.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "CS 310": {
      "id": "CS 310",
      "code": "CS 310",
      "title": "Operating Systems",
      "term": 5,
      "credits": 3,
      "category": "core",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "CS 240"
      ],
      "summary": "Study how operating systems manage execution, memory, storage, and isolation.",
      "topics": [
        "OS structure and system interfaces",
        "Processes, threads, scheduling, and synchronization",
        "Deadlocks and concurrent programming",
        "Virtual memory and protection",
        "File systems, storage, and I/O",
        "Virtualization, access controls, and resource experiments",
        "OS objectives, kernel/user modes and system types; interrupt handling, device lists, drivers and I/O queues",
        "Task-state transition models; allocation policies, cache behavior, thrashing, disk-access patterns and cost-performance trade-offs"
      ],
      "clos": [
        {
          "plo": "K2",
          "stage": "P",
          "statement": "Explain operating-system objectives and functions and compare kernel and user modes for security and efficiency.",
          "etecRefs": [
            "SKU6.1-SLO1",
            "SKU6.1-SLO6"
          ],
          "evidence": "OS architecture examination",
          "id": "CLO 1"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Analyze interrupt handling and evaluate device lists, drivers and I/O queues.",
          "etecRefs": [
            "SKU6.1-SLO7",
            "SKU6.1-SLO8"
          ],
          "evidence": "Interrupt and device-management investigation",
          "id": "CLO 2"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Analyze concurrent tasks, task states and runtime faults using state-transition models.",
          "etecRefs": [
            "SKU6.2-SLO1",
            "SKU6.2-SLO2",
            "SKU6.2-SLO4"
          ],
          "evidence": "Task-state model and concurrency diagnosis",
          "id": "CLO 3"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Implement and compare synchronization techniques for shared resources.",
          "etecRefs": [
            "SKU6.2-SLO3"
          ],
          "evidence": "Concurrent-programming practical",
          "id": "CLO 4"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Compare processes, threads and scheduling algorithms for distinct workloads.",
          "etecRefs": [
            "SKU6.2-SLO5"
          ],
          "evidence": "Scheduling simulation and workload analysis",
          "id": "CLO 5"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Simulate virtual memory and compare allocation policies, cache behavior, thrashing and cost-performance trade-offs.",
          "etecRefs": [
            "SKU2.3-SLO4",
            "SKU6.2-SLO6",
            "SKU6.2-SLO7"
          ],
          "evidence": "Memory-management simulator and report",
          "id": "CLO 6"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Evaluate disk access patterns, file-system storage and I/O scheduling for efficient retrieval.",
          "etecRefs": [
            "SKU2.3-SLO7"
          ],
          "evidence": "Storage-access experiment",
          "id": "CLO 7"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Analyze resource access controls and test a resource-use optimization with reproducible evidence.",
          "etecRefs": [
            "SKU6.2-SLO8"
          ],
          "evidence": "Access-control and resource experiment",
          "id": "CLO 8"
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Operating Systems",
      "placement": "Semester 5",
      "anchor": "cs-310",
      "etecTopics": [
        "SKU2.3-T1",
        "SKU2.3-T2",
        "SKU2.3-T3",
        "SKU6.1-T1",
        "SKU6.1-T2",
        "SKU6.1-T3",
        "SKU6.1-T4",
        "SKU6.2-T1",
        "SKU6.2-T2",
        "SKU6.2-T3",
        "SKU6.2-T4"
      ],
      "etecSLOs": [
        "SKU6.1-SLO1",
        "SKU6.1-SLO6",
        "SKU6.1-SLO7",
        "SKU6.1-SLO8",
        "SKU6.2-SLO1",
        "SKU6.2-SLO2",
        "SKU6.2-SLO4",
        "SKU6.2-SLO3",
        "SKU6.2-SLO5",
        "SKU2.3-SLO4",
        "SKU6.2-SLO6",
        "SKU6.2-SLO7",
        "SKU2.3-SLO7",
        "SKU6.2-SLO8"
      ],
      "facilities": {
        "lab": "Operating systems and concurrency lab",
        "hardware": "Virtualization-capable workstation and isolated Linux VMs with snapshots; approved access to instrumentation.",
        "software": "Linux, GCC/Clang, GDB, pthreads or equivalent concurrency APIs, system monitoring and profiling tools, scheduling/memory simulators.",
        "practice": "Task states, synchronization, scheduling, virtual memory, interrupts, devices, storage and access-control experiments.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "CS 320": {
      "id": "CS 320",
      "code": "CS 320",
      "title": "Programming Language Concepts",
      "term": 5,
      "credits": 3,
      "category": "core",
      "lecture": 3,
      "practical": 0,
      "prerequisites": [
        "CS 240",
        "CS 102"
      ],
      "summary": "Compare programming paradigms and analyze how languages represent, translate, and execute programs.",
      "topics": [
        "Syntax, grammars, and abstract syntax trees",
        "Binding, scope, types, and inference",
        "Typed generic collections, subtyping, iterators and aggregate operations across Python and a statically typed language such as Java or C#",
        "Semantics, lambda expressions, and runtime representation",
        "Functional, imperative, object-oriented, and logic paradigms",
        "Exceptions, event-driven programming, and reactive execution",
        "Parsing, compilation, interpretation, and just-in-time execution",
        "Memory management, concurrency, safety, and liveness",
        "Immutable algorithms and higher-order functions; program-as-data, AST analysis, interpreter or optimizer construction and garbage collection"
      ],
      "clos": [
        {
          "plo": "K3",
          "stage": "P",
          "statement": "Compare inheritance and subtyping with functional approaches and justify a programming paradigm for a problem.",
          "etecRefs": [
            "SKU7.1-SLO2"
          ],
          "evidence": "Cross-paradigm comparison",
          "id": "CLO 1"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Implement iterator and aggregate operations in Python and a statically typed language.",
          "etecRefs": [
            "SKU7.1-SLO4"
          ],
          "evidence": "Two-language collection practical",
          "id": "CLO 2"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Construct immutable algorithms and higher-order functions that accept and return functions.",
          "etecRefs": [
            "SKU7.1-SLO5",
            "SKU7.1-SLO6"
          ],
          "evidence": "Functional-programming implementation",
          "id": "CLO 3"
        },
        {
          "plo": "K3",
          "stage": "P",
          "statement": "Distinguish syntax, parsing, semantics and evaluation using small executable examples.",
          "etecRefs": [
            "SKU7.2-SLO4"
          ],
          "evidence": "Language-concept examination",
          "id": "CLO 4"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Examine program-as-data representations and evaluate the structure and behavior of an abstract syntax tree.",
          "etecRefs": [
            "SKU7.2-SLO1",
            "SKU7.2-SLO2"
          ],
          "evidence": "AST and program-representation analysis",
          "id": "CLO 5"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Build a small interpreter or expression optimizer and test it against specified language behavior.",
          "etecRefs": [
            "SKU7.2-SLO3"
          ],
          "evidence": "Individual language-processing project",
          "id": "CLO 6"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Construct low-level runtime representations of bindings, closures, calls and core language constructs.",
          "etecRefs": [
            "SKU7.2-SLO5"
          ],
          "evidence": "Runtime representation and execution trace",
          "id": "CLO 7"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Compare garbage collection and explicit memory management and evaluate implications for type safety and execution.",
          "etecRefs": [],
          "evidence": "Runtime and memory-management investigation",
          "id": "CLO 8"
        }
      ],
      "profile": "project",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Programming Language Concepts",
      "placement": "Semester 5",
      "anchor": "cs-320",
      "etecTopics": [
        "SKU7.1-T1",
        "SKU7.1-T2",
        "SKU7.1-T3",
        "SKU7.1-T4",
        "SKU7.1-T5",
        "SKU7.2-T1",
        "SKU7.2-T2",
        "SKU7.2-T3",
        "SKU7.2-T4"
      ],
      "etecSLOs": [
        "SKU7.1-SLO2",
        "SKU7.1-SLO4",
        "SKU7.1-SLO5",
        "SKU7.1-SLO6",
        "SKU7.2-SLO4",
        "SKU7.2-SLO1",
        "SKU7.2-SLO2",
        "SKU7.2-SLO3",
        "SKU7.2-SLO5"
      ],
      "facilities": {
        "lab": "Programming languages and runtime lab",
        "hardware": "Standard workstation with multiple supported language runtimes.",
        "software": "Python 3 and a supported Java JDK or C#/.NET SDK; Git; parser/AST library or generator; unit testing and runtime tracing tools.",
        "practice": "Two-language aggregate processing, closures, immutable and higher-order code, ASTs, a small interpreter/optimizer and garbage-collection studies.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "CS 330": {
      "id": "CS 330",
      "code": "CS 330",
      "title": "Theory of Computation",
      "term": 7,
      "credits": 3,
      "category": "core",
      "lecture": 3,
      "practical": 0,
      "prerequisites": [
        "CS 220"
      ],
      "summary": "Study formal models of computation, decidability, and computational complexity.",
      "topics": [
        "Regular languages and finite automata",
        "Context-free languages and pushdown automata",
        "Turing machines and computability",
        "Decidable and undecidable problems",
        "Reductions and completeness",
        "Time complexity, P, NP, and tractability"
      ],
      "clos": [
        {
          "plo": "K1",
          "stage": "P",
          "statement": "Distinguish regular, context-free and computably enumerable languages and their recognizing machines.",
          "etecRefs": [],
          "evidence": "Formal-language examination",
          "id": "CLO 1"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Design and test a deterministic finite automaton for a specified language.",
          "etecRefs": [
            "SKU1.2-SLO8"
          ],
          "evidence": "DFA construction and acceptance tests",
          "id": "CLO 2"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Construct regular expressions, grammars and pushdown-automaton models.",
          "etecRefs": [],
          "evidence": "Formal model problem set",
          "id": "CLO 3"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Use closure properties and pumping arguments to establish limits of language classes.",
          "etecRefs": [],
          "evidence": "Proof examination",
          "id": "CLO 4"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Analyze decidability using Turing machines and computable reductions.",
          "etecRefs": [],
          "evidence": "Decidability proof",
          "id": "CLO 5"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Classify time complexity and justify NP-completeness or tractability claims with suitable reductions.",
          "etecRefs": [],
          "evidence": "Complexity analysis and reduction defense",
          "id": "CLO 6"
        }
      ],
      "profile": "lecture",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Theory of Computation",
      "placement": "Semester 7",
      "anchor": "cs-330",
      "etecTopics": [
        "SKU1.2-T3",
        "SKU1.2-T4"
      ],
      "etecSLOs": [
        "SKU1.2-SLO8"
      ],
      "facilities": {
        "lab": "Theory classroom with formal-model workspace",
        "hardware": "Standard workstation for automata exercises; no dedicated hardware laboratory.",
        "software": "JFLAP or an equivalent automata tool, Python and a text/diagram editor.",
        "practice": "DFA/PDA/Turing-machine construction and testing accompany individually assessed formal proofs.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "CS 340": {
      "id": "CS 340",
      "code": "CS 340",
      "title": "Artificial Intelligence",
      "term": 5,
      "credits": 3,
      "category": "core",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "CS 220",
        "STAT 220",
        "MATH 120"
      ],
      "summary": "Build intelligent problem solvers and evaluate their performance and limitations.",
      "topics": [
        "Intelligent agents, AI problem formulation and limits of the Turing test",
        "Uninformed, heuristic and adversarial search",
        "Constraints, knowledge representation, logic and planning",
        "Reasoning under uncertainty and decision-making",
        "Supervised, unsupervised and reinforcement learning; a simple classifier and neural/generative concepts",
        "Data preparation, train-validation-test separation, metrics, generalization and overfitting",
        "Dataset and evaluation bias, subgroup performance, privacy, interpretability and model cards",
        "Societal impacts, AI-assisted work, failure modes, human oversight and justified safeguards"
      ],
      "clos": [
        {
          "plo": "K3",
          "stage": "M",
          "statement": "Explain when search, reasoning or learning methods are appropriate and identify their assumptions.",
          "evidence": "Individual AI methods comparison",
          "etecRefs": [],
          "id": "CLO 1"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Implement and compare search methods on a defined problem with explicit performance criteria.",
          "evidence": "Individual search implementation and tests",
          "etecRefs": [],
          "id": "CLO 2"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Formulate a constraint or knowledge-based problem and justify a representation and reasoning strategy.",
          "evidence": "Knowledge-model and reasoning examination",
          "etecRefs": [],
          "id": "CLO 3"
        },
        {
          "plo": "K3",
          "stage": "P",
          "statement": "Distinguish learning paradigms and explain simple supervised models, basic neural networks and generative-model limitations.",
          "evidence": "Individual ML foundations examination",
          "etecRefs": [],
          "id": "CLO 4"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Prepare a dataset and fit a simple classifier with separate training, validation and test data.",
          "evidence": "Supervised individual classification practical",
          "etecRefs": [],
          "id": "CLO 5"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Evaluate held-out performance and subgroup results and diagnose overfitting and threats to validity.",
          "evidence": "Reproducible evaluation and failure-case report",
          "etecRefs": [],
          "id": "CLO 6"
        },
        {
          "plo": "V1",
          "stage": "P",
          "statement": "Justify safeguards for bias, privacy and foreseeable AI harms using affected-user analysis and human oversight.",
          "evidence": "Model card and ethical decision case",
          "etecRefs": [],
          "id": "CLO 7"
        },
        {
          "plo": "S3",
          "stage": "P",
          "statement": "Communicate an AI method choice, evidence and limitations to a non-specialist stakeholder.",
          "evidence": "Individual evidence briefing",
          "etecRefs": [],
          "id": "CLO 8"
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": "Required teaching reserves the 12 AI CS Core instructional hours, including four for Machine Learning, and three additional Society, Ethics and the Profession hours transferred from the former compulsory Machine Learning course. The 3-credit Machine Learning elective adds depth; baseline assessed learning and AI ethics do not depend on choosing it.",
      "resource": null,
      "name": "Artificial Intelligence",
      "placement": "Semester 5",
      "anchor": "cs-340",
      "etecTopics": [],
      "etecSLOs": [],
      "facilities": {
        "lab": "AI programming and experimentation lab",
        "hardware": "Standard workstation; shared accelerator access only for optional larger demonstrations.",
        "software": "Python, Jupyter, NumPy, pandas, scikit-learn, a supported neural-network demonstration environment, Git, and model-card/evaluation templates.",
        "practice": "Individual search and reasoning tasks, a simple classifier with train-validation-test separation, bias and failure analysis, and an assessed model card.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      },
      "topicHours": [
        6,
        10,
        8,
        6,
        8,
        8,
        8,
        6
      ]
    },
    "CS 350": {
      "id": "CS 350",
      "code": "CS 350",
      "title": "Human–Computer Interaction",
      "term": 5,
      "credits": 3,
      "category": "core",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "CS 250"
      ],
      "summary": "Design and evaluate interactive systems with attention to accessibility and user needs.",
      "topics": [
        "Human factors, interaction models and task analysis",
        "Stakeholder interviews, user research and participant protections",
        "Prototyping, interface design and iteration",
        "Accessibility, inclusive interaction and visual perception",
        "Graphics foundations: digitization and image formats, color, coordinates, spatial transformations and the rendering pipeline",
        "Interactive visualizations, input events and animation with accessible encodings",
        "Usability study design, data interpretation and evaluation",
        "Design accountability, stakeholder communication and documented limitations"
      ],
      "clos": [
        {
          "plo": "K3",
          "stage": "P",
          "statement": "Explain human factors and interaction models and relate them to an interface design.",
          "evidence": "Individual interaction-model analysis",
          "etecRefs": [],
          "id": "CLO 1"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Build and revise an accessible interactive prototype using requirements and user evidence.",
          "evidence": "Prototype, accessibility checks and revision record",
          "etecRefs": [],
          "id": "CLO 2"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Plan and conduct a usability evaluation and interpret results and limitations.",
          "evidence": "Usability protocol, results and individual analysis",
          "etecRefs": [],
          "id": "CLO 3"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Formulate a stakeholder interview or usability study with a defined question and participant protections.",
          "evidence": "Interview plan and consent safeguards",
          "etecRefs": [],
          "id": "CLO 4"
        },
        {
          "plo": "K3",
          "stage": "P",
          "statement": "Explain digitization, image formats, color, spatial transformations and the graphics rendering pipeline.",
          "evidence": "Individual graphics-foundations examination",
          "etecRefs": [],
          "id": "CLO 5"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Implement a simple interactive graphic using coordinate transformations, visual encodings and input events.",
          "evidence": "Individual graphics programming practical",
          "etecRefs": [],
          "id": "CLO 6"
        },
        {
          "plo": "S3",
          "stage": "P",
          "statement": "Present a design rationale connecting requirements, graphical choices, usability evidence and limitations.",
          "evidence": "Stakeholder briefing and individual defense",
          "etecRefs": [],
          "id": "CLO 7"
        },
        {
          "plo": "V1",
          "stage": "P",
          "statement": "Justify accessible design, participant welfare and responsible visual communication.",
          "evidence": "Accessibility and design-accountability case",
          "etecRefs": [],
          "id": "CLO 8"
        }
      ],
      "profile": "project",
      "group": null,
      "requirement": "The 60 contact hours include an 18-hour graphics and interactive-visualization strand, with at least four lecture hours allocated to ACM/IEEE Graphics and Interactive Techniques CS Core topics and an individual graphics practical. Eight HCI CS Core hours and two Society, Ethics and the Profession hours remain separately allocated.",
      "resource": "W3C Web Content Accessibility Guidelines and an instructor-supplied usability protocol.",
      "name": "Human–Computer Interaction",
      "placement": "Semester 5",
      "anchor": "cs-350",
      "etecTopics": [],
      "etecSLOs": [],
      "facilities": {
        "lab": "HCI prototyping and usability laboratory",
        "hardware": "Accessible workstations, screen/audio recording, representative mobile devices and quiet test space.",
        "software": "Figma/Penpot or equivalent prototyping tool, browser developer tools, JavaScript Canvas or p5.js, SVG tools, accessibility checker, consent and usability templates, Git.",
        "practice": "Stakeholder interviews, accessible prototypes, individual interactive graphics with transformations/color/input, usability evaluation and documented iteration.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      },
      "topicHours": [
        6,
        6,
        8,
        8,
        12,
        6,
        8,
        6
      ]
    },
    "CS 390": {
      "id": "CS 390",
      "code": "CS 390",
      "title": "Cooperative Training",
      "term": 6,
      "credits": 9,
      "category": "coop",
      "lecture": 0,
      "practical": 0,
      "prerequisites": [
        "CS 240",
        "CS 250",
        "CS 260"
      ],
      "summary": "Complete one supervised full-time placement across Semester 6 and the following summer.",
      "topics": [
        "Placement agreement and learning plan",
        "Workplace induction, communication, confidentiality, and team responsibilities",
        "Supervised computing assignments, time management, and progress logs",
        "Midpoint feedback from college and host supervisors",
        "Evidence portfolio and reflection",
        "Host appraisal and academic presentation at the close of summer"
      ],
      "clos": [
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Complete a substantive computing assignment and evaluate its result.",
          "id": "CLO 1",
          "etecRefs": [],
          "evidence": "Individually demonstrated artifact with tests and correctness explanation"
        },
        {
          "plo": "S3",
          "stage": "P",
          "statement": "Give workplace status updates and present results with appropriate disclosure.",
          "id": "CLO 2",
          "etecRefs": [],
          "evidence": "Assessed report or presentation and individual responses"
        },
        {
          "plo": "V1",
          "stage": "P",
          "statement": "Apply workplace ethics, confidentiality, and applicable policies.",
          "id": "CLO 3",
          "etecRefs": [],
          "evidence": "Professional or ethical decision case with justified safeguards"
        },
        {
          "plo": "V2",
          "stage": "M",
          "statement": "Work reliably with colleagues, communicate progress, and act on feedback.",
          "id": "CLO 4",
          "etecRefs": [],
          "evidence": "Contribution record, peer or host review and individual reflection"
        },
        {
          "plo": "V3",
          "stage": "P",
          "statement": "Manage work priorities and use feedback to address a professional learning need.",
          "id": "CLO 5",
          "etecRefs": [],
          "evidence": "Plan or decision record with cost, risk and learning rationale"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Assemble verifiable workplace artifacts and evaluate progress against the approved learning plan.",
          "id": "CLO 6",
          "etecRefs": [],
          "evidence": "Reproducible investigation, results and limitations report"
        }
      ],
      "profile": "coop",
      "group": null,
      "requirement": "Complete all 85 credits in Semesters 1–5 and secure a college-approved placement and learning plan.",
      "resource": "College placement handbook, signed learning plan, host induction materials, and reporting templates.",
      "name": "Cooperative Training",
      "placement": "Semester 6 and the following summer",
      "anchor": "cs-390",
      "etecTopics": [],
      "etecSLOs": [],
      "facilities": {
        "lab": "Approved host computing workplace with academic remote access",
        "hardware": "Host-provided workstation, role-appropriate secure accounts, supervision, meeting facilities and college check-in access.",
        "software": "Host-approved development, data or security tools aligned to the signed learning plan; college LMS and portfolio tools.",
        "practice": "A host/college resource checklist records tool access and supervised assignments before placement; software is specified for each approved host role.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "CS 401": {
      "id": "CS 401",
      "code": "CS 401",
      "title": "Parallel and Distributed Computing",
      "term": 7,
      "credits": 3,
      "category": "core",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "CS 310",
        "CS 260"
      ],
      "summary": "Design concurrent and distributed systems and evaluate scalability and efficiency.",
      "topics": [
        "Parallel decomposition, dependencies, and performance models",
        "Synchronization, race conditions, and parallel patterns",
        "Shared memory and message passing",
        "Communication, replication, and consistency",
        "Failures, safety and liveness, and distributed coordination",
        "Scalability, energy use, and resource efficiency",
        "Service observability, reliability, failure recovery and operational resource trade-offs",
        "Single-core/multicore architecture, instruction-level parallelism and comparison of client-server, distributed and single-user OS designs"
      ],
      "clos": [
        {
          "plo": "K2",
          "stage": "M",
          "statement": "Compare single-core and multicore architectures and justify multicore performance and scalability benefits.",
          "etecRefs": [
            "SKU2.1-SLO2"
          ],
          "evidence": "Architecture and scalability analysis",
          "id": "CLO 1"
        },
        {
          "plo": "S1",
          "stage": "M",
          "statement": "Analyze instruction-level parallelism and its effect on execution efficiency.",
          "etecRefs": [
            "SKU2.2-SLO2"
          ],
          "evidence": "Instruction scheduling and timing exercise",
          "id": "CLO 2"
        },
        {
          "plo": "K2",
          "stage": "M",
          "statement": "Compare client-server, distributed and single-user OS designs, explaining benefits and limitations.",
          "etecRefs": [
            "SKU6.1-SLO2"
          ],
          "evidence": "Distributed-system design comparison",
          "id": "CLO 3"
        },
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Implement shared-memory and message-passing solutions with explicit synchronization and dependency handling.",
          "etecRefs": [],
          "evidence": "Individual parallel programming practical",
          "id": "CLO 4"
        },
        {
          "plo": "S4",
          "stage": "M",
          "statement": "Measure speedup, scaling and resource efficiency and diagnose communication or synchronization overhead.",
          "etecRefs": [],
          "evidence": "Reproducible scalability experiment",
          "id": "CLO 5"
        },
        {
          "plo": "S1",
          "stage": "M",
          "statement": "Analyze replication, consistency, failures, safety and liveness in a distributed system.",
          "etecRefs": [],
          "evidence": "Failure and consistency investigation",
          "id": "CLO 6"
        },
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Implement and test a distributed coordination or recovery mechanism.",
          "etecRefs": [],
          "evidence": "Distributed prototype and failure-injection tests",
          "id": "CLO 7"
        },
        {
          "plo": "V1",
          "stage": "M",
          "statement": "Justify reliability, energy and resource trade-offs for a distributed workload.",
          "etecRefs": [],
          "evidence": "Operational trade-off report",
          "id": "CLO 8"
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Parallel and Distributed Computing",
      "placement": "Semester 7",
      "anchor": "cs-401",
      "etecTopics": [
        "SKU2.1-T1",
        "SKU2.2-T2",
        "SKU6.1-T1"
      ],
      "etecSLOs": [
        "SKU2.1-SLO2",
        "SKU2.2-SLO2",
        "SKU6.1-SLO2"
      ],
      "facilities": {
        "lab": "Parallel and distributed systems laboratory",
        "hardware": "Multicore workstations plus a small cluster or equivalent isolated multi-VM/remote nodes; controlled resource limits.",
        "software": "Linux, OpenMP, MPI, Docker or Podman, a messaging framework, Git and monitoring/profiling tools.",
        "practice": "Instruction-level analysis, shared-memory/message-passing code, scaling, replication, coordination and failure-recovery experiments.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "CS 402": {
      "id": "CS 402",
      "code": "CS 402",
      "title": "Cybersecurity Fundamentals",
      "term": 7,
      "credits": 3,
      "category": "core",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "CS 310",
        "CS 260"
      ],
      "summary": "Evaluate threats and design protections for computing systems, software, and data.",
      "topics": [
        "Security goals, assets, threats, and risk",
        "Cryptographic primitives and trust",
        "Authentication, authorization, and least privilege",
        "Secure design, coding practices, and verification",
        "Network and system protection, monitoring, and incident response",
        "Privacy rights, anonymity, pseudonymity, and safeguards",
        "Social engineering, cybercrime impacts, and professional reporting"
      ],
      "clos": [
        {
          "plo": "K2",
          "stage": "P",
          "statement": "Explain security goals, assets, threats, cryptographic primitives and trust assumptions.",
          "etecRefs": [],
          "evidence": "Security concepts examination",
          "id": "CLO 1"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Assess a computing system using a documented threat and risk model.",
          "etecRefs": [],
          "evidence": "Threat model and risk register",
          "id": "CLO 2"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Implement and verify authentication, authorization and least-privilege controls.",
          "etecRefs": [],
          "evidence": "Individual defensive control practical",
          "id": "CLO 3"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Assess OS protection and security features, explain their limitations and recommend defensible safeguards.",
          "etecRefs": [
            "SKU6.2-SLO9"
          ],
          "evidence": "OS protection evaluation",
          "id": "CLO 4"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Evaluate monitoring and incident-response evidence in an isolated defensive laboratory.",
          "etecRefs": [],
          "evidence": "Defensive investigation and response report",
          "id": "CLO 5"
        },
        {
          "plo": "V1",
          "stage": "P",
          "statement": "Justify privacy, anonymity and pseudonymity choices and communicate professional reporting obligations.",
          "etecRefs": [],
          "evidence": "Privacy and professional-decision case",
          "id": "CLO 6"
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Cybersecurity Fundamentals",
      "placement": "Semester 7",
      "anchor": "cs-402",
      "etecTopics": [
        "SKU6.2-T4"
      ],
      "etecSLOs": [
        "SKU6.2-SLO9"
      ],
      "facilities": {
        "lab": "Isolated defensive cybersecurity laboratory",
        "hardware": "Resettable VMs, segregated virtual networks, benign/curated logs and per-student authorized lab accounts.",
        "software": "Linux and Windows teaching VMs, Wireshark, OpenSSL, static-analysis tools and a defensive log-analysis platform such as Wazuh.",
        "practice": "OS protections, least privilege, cryptographic use, defensive monitoring and incident-response evidence on teaching assets.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "CS 403": {
      "id": "CS 403",
      "code": "CS 403",
      "title": "Graphics and Interactive Techniques",
      "term": null,
      "credits": 3,
      "category": "elective",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "CS 240",
        "MATH 120",
        "CS 350"
      ],
      "summary": "Develop deeper graphics skills through geometry, rendering, shading and an evaluated interactive scene, building on the compulsory HCI graphics strand.",
      "topics": [
        "Graphics representations, spatial geometry and transformation composition",
        "Viewing, projection, clipping and rasterization",
        "Color, lighting, surface materials and shading",
        "Geometry, meshes, textures and rendering trade-offs",
        "Interactive input, animation and visual simulation",
        "Rendering performance, visual accuracy and accessibility",
        "Implemented scene or visualization project and individual evaluation"
      ],
      "clos": [
        {
          "plo": "K3",
          "stage": "P",
          "statement": "Explain transformations and the graphics pipeline.",
          "id": "CLO 1",
          "etecRefs": [],
          "evidence": "Individual conceptual examination and applied design explanation"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Implement an interactive visualization or scene.",
          "id": "CLO 2",
          "etecRefs": [],
          "evidence": "Individually demonstrated artifact with tests and correctness explanation"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Evaluate rendering performance and interpretation.",
          "id": "CLO 3",
          "etecRefs": [],
          "evidence": "Reproducible investigation, results and limitations report"
        },
        {
          "plo": "K3",
          "stage": "P",
          "statement": "Explain color models, light, projection and basic shading assumptions.",
          "id": "CLO 4",
          "etecRefs": [],
          "evidence": "Individual conceptual examination and applied design explanation"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Apply geometric transformations and implement interactive input and animation.",
          "id": "CLO 5",
          "etecRefs": [],
          "evidence": "Individually demonstrated artifact with tests and correctness explanation"
        },
        {
          "plo": "V1",
          "stage": "P",
          "statement": "Justify accessible visual encodings and disclose limitations of a graphical representation.",
          "id": "CLO 6",
          "etecRefs": [],
          "evidence": "Professional or ethical decision case with justified safeguards"
        }
      ],
      "profile": "lab",
      "group": "Graphics and interaction",
      "requirement": null,
      "resource": null,
      "name": "Graphics and Interactive Techniques",
      "placement": "Semester 8 technical elective",
      "anchor": "cs-403",
      "etecTopics": [],
      "etecSLOs": [],
      "facilities": {
        "lab": "Graphics and interactive visualization laboratory",
        "hardware": "Workstations with WebGL/OpenGL-capable graphics; shared GPU workstations if scene complexity requires them.",
        "software": "Browser WebGL with Three.js or an equivalent graphics API, Blender, image tools and Git.",
        "practice": "Transformations, projection, shading, interaction, animation and measured rendering performance.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      },
      "topicHours": [
        8,
        10,
        10,
        8,
        8,
        8,
        8
      ]
    },
    "BUS 401": {
      "id": "BUS 401",
      "code": "BUS 401",
      "title": "Computing Project Management and Finance",
      "term": 7,
      "credits": 3,
      "category": "department",
      "lecture": 3,
      "practical": 0,
      "prerequisites": [
        "CS 250"
      ],
      "summary": "Plan, cost, and justify a computing project in organizational and market context.",
      "topics": [
        "Project scope, stakeholder expectations, and market needs",
        "Prioritization, scheduling, effort estimation, and resources",
        "Budgeting, cash flows, and cost–benefit analysis",
        "Risk, procurement, and quality management",
        "Product viability and entrepreneurship",
        "Project monitoring, governance, and stakeholder reporting"
      ],
      "clos": [
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Define project scope, stakeholder expectations and measurable success criteria.",
          "etecRefs": [],
          "evidence": "Scope and stakeholder charter",
          "id": "CLO 1"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Estimate effort, dependencies, resources and a defensible delivery schedule.",
          "etecRefs": [],
          "evidence": "Work breakdown and schedule",
          "id": "CLO 2"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Analyze software risks and plan, prioritize and monitor risk responses.",
          "etecRefs": [
            "SKU8.1-SLO4"
          ],
          "evidence": "Software risk register",
          "id": "CLO 3"
        },
        {
          "plo": "V3",
          "stage": "P",
          "statement": "Prepare a computing-project budget and compare cash-flow, cost-benefit and product-viability alternatives.",
          "etecRefs": [],
          "evidence": "Costed business case",
          "id": "CLO 4"
        },
        {
          "plo": "S3",
          "stage": "P",
          "statement": "Present project performance, procurement and governance decisions to technical and business stakeholders.",
          "etecRefs": [],
          "evidence": "Status brief and decision presentation",
          "id": "CLO 5"
        },
        {
          "plo": "V2",
          "stage": "P",
          "statement": "Coordinate a team plan and explain individual responsibilities, escalation and lessons learned.",
          "etecRefs": [],
          "evidence": "Team plan and individual reflection",
          "id": "CLO 6"
        }
      ],
      "profile": "project",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Computing Project Management and Finance",
      "placement": "Semester 7",
      "anchor": "bus-401",
      "etecTopics": [],
      "etecSLOs": [
        "SKU8.1-SLO4"
      ],
      "facilities": {
        "lab": "Project planning and finance workshop",
        "hardware": "Shared computers, group planning space and presentation facilities; no dedicated hardware lab.",
        "software": "Spreadsheet with financial functions, ProjectLibre or equivalent scheduling tool, issue board and presentation software.",
        "practice": "Estimates, schedules, risk registers, budgets, cash-flow comparisons and costed project cases.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "CS 410": {
      "id": "CS 410",
      "code": "CS 410",
      "title": "Capstone Project I",
      "term": 7,
      "credits": 3,
      "category": "capstone",
      "lecture": 1,
      "practical": 4,
      "prerequisites": [
        "CS 390",
        "CS 340",
        "CS 350",
        "CS 360"
      ],
      "summary": "Define a substantial computing problem, develop a design, and defend a tested prototype and evaluation plan.",
      "topics": [
        "Problem definition and stakeholder needs",
        "Literature and comparable systems",
        "Requirements, ethics, privacy, and AI risk where applicable",
        "Architecture, alternatives, team roles, and project planning",
        "Prototype and early verification",
        "Design review, application of earlier coursework, and proposal defense"
      ],
      "clos": [
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Formulate and justify a complex project problem and requirements.",
          "id": "CLO 1",
          "etecRefs": [],
          "evidence": "Individual problem analysis, model and justified method selection"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Develop and verify an initial prototype against selected requirements.",
          "id": "CLO 2",
          "etecRefs": [],
          "evidence": "Individually demonstrated artifact with tests and correctness explanation"
        },
        {
          "plo": "S3",
          "stage": "M",
          "statement": "Defend technical decisions and the evaluation plan before a panel.",
          "id": "CLO 3",
          "etecRefs": [],
          "evidence": "Assessed report or presentation and individual responses"
        },
        {
          "plo": "V2",
          "stage": "M",
          "statement": "Coordinate and evidence individual and collective project work.",
          "id": "CLO 4",
          "etecRefs": [],
          "evidence": "Contribution record, peer or host review and individual reflection"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Design a feasible evaluation protocol with baselines, metrics and validity controls.",
          "id": "CLO 5",
          "etecRefs": [],
          "evidence": "Reproducible investigation, results and limitations report"
        },
        {
          "plo": "V1",
          "stage": "P",
          "statement": "Assess ethical, privacy, safety and sustainability risks and propose project safeguards.",
          "id": "CLO 6",
          "etecRefs": [],
          "evidence": "Professional or ethical decision case with justified safeguards"
        }
      ],
      "profile": "capstone",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Capstone Project I",
      "placement": "Semester 7",
      "anchor": "cs-410",
      "etecTopics": [],
      "etecSLOs": [],
      "facilities": {
        "lab": "Supervised capstone development workspace",
        "hardware": "Team workstations and meeting space, individual accounts and project-specific compute/equipment recorded in the approved resource plan.",
        "software": "Git, issue tracker, CI/test tools, modeling and prototyping tools plus the approved project stack.",
        "practice": "A resource and access plan is agreed at proposal review; datasets, test environment and individual contribution evidence are prepared.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "EL-1": {
      "id": "EL-1",
      "code": "",
      "title": "Technical Elective I",
      "term": 8,
      "credits": 3,
      "category": "elective",
      "lecture": 0,
      "practical": 0,
      "prerequisites": [],
      "summary": "Select one course from the approved technical elective pool and satisfy its prerequisites.",
      "topics": [],
      "clos": [],
      "profile": "slot",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Technical Elective I",
      "placement": "Semester 8",
      "anchor": "el-1",
      "etecSLOs": []
    },
    "CS 411": {
      "id": "CS 411",
      "code": "CS 411",
      "title": "Capstone Project II",
      "term": 8,
      "credits": 3,
      "category": "capstone",
      "lecture": 1,
      "practical": 4,
      "prerequisites": [
        "CS 410"
      ],
      "summary": "Build, evaluate, document, and defend the completed capstone project.",
      "topics": [
        "Implementation using earlier coursework, integration, and project tracking",
        "Integration testing and reproducible evaluation",
        "Security, privacy, sustainability, accessibility, and AI safeguards where applicable",
        "Deployment, release automation, observability, recovery checks and handover of a demonstrable release",
        "Technical documentation and reflection",
        "Individual and team defense and handover"
      ],
      "clos": [
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Integrate skills from earlier coursework in a substantial solution and evaluate it against measurable requirements.",
          "id": "CLO 1",
          "etecRefs": [],
          "evidence": "Individually demonstrated artifact with tests and correctness explanation"
        },
        {
          "plo": "S3",
          "stage": "M",
          "statement": "Communicate results and limitations in a report and oral defense.",
          "id": "CLO 2",
          "etecRefs": [],
          "evidence": "Assessed report or presentation and individual responses"
        },
        {
          "plo": "S4",
          "stage": "M",
          "statement": "Conduct a reproducible evaluation and interpret uncertainty.",
          "id": "CLO 3",
          "etecRefs": [],
          "evidence": "Reproducible investigation, results and limitations report"
        },
        {
          "plo": "V1",
          "stage": "M",
          "statement": "Justify professional decisions about impacts and risks.",
          "id": "CLO 4",
          "etecRefs": [],
          "evidence": "Professional or ethical decision case with justified safeguards"
        },
        {
          "plo": "V2",
          "stage": "M",
          "statement": "Demonstrate individual contributions and team accountability.",
          "id": "CLO 5",
          "etecRefs": [],
          "evidence": "Contribution record, peer or host review and individual reflection"
        },
        {
          "plo": "V3",
          "stage": "M",
          "statement": "Review costs, project decisions, and future learning priorities.",
          "id": "CLO 6",
          "etecRefs": [],
          "evidence": "Plan or decision record with cost, risk and learning rationale"
        }
      ],
      "profile": "capstone",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Capstone Project II",
      "placement": "Semester 8",
      "anchor": "cs-411",
      "etecTopics": [],
      "etecSLOs": [],
      "facilities": {
        "lab": "Supervised capstone integration and evaluation lab",
        "hardware": "Team workstations, isolated staging/deployment environment, test devices and approved project-specific compute/equipment.",
        "software": "Approved project stack, Git, CI/CD, test automation, monitoring, backup/recovery tools and documentation software.",
        "practice": "Integration, evaluation, tested release, handover and individual defense; capacity and any project licenses are recorded before implementation.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "CS 370": {
      "id": "CS 370",
      "code": "CS 370",
      "title": "Web and Mobile Application Development",
      "term": 5,
      "credits": 3,
      "category": "core",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "CS 201",
        "CS 230",
        "CS 250"
      ],
      "summary": "Build and evaluate a secure web client and a cross-platform mobile client using a shared API and database-backed service.",
      "topics": [
        "Web and mobile application architecture, HTTP, platform APIs and a shared client-server project",
        "JavaScript and TypeScript for reusable components, typed interfaces, events and asynchronous programming",
        "Responsive and accessible web interfaces, application state, forms and navigation",
        "REST APIs, server-side validation, database integration, authentication and authorization",
        "Cross-platform mobile interfaces, device and network constraints, API access and application lifecycle",
        "Individual unit, API and integration tests, secure coding, privacy and accessibility checks",
        "Version control, basic release automation, deployment, logging, recovery and responsible operation",
        "Team delivery, usability feedback, individual demonstration and explanation of the implemented solution"
      ],
      "clos": [
        {
          "plo": "K3",
          "stage": "P",
          "statement": "Explain web and mobile architectures, API contracts, application state and platform constraints.",
          "etecRefs": [],
          "evidence": "Architecture and API examination",
          "id": "CLO 1"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Implement an accessible responsive web client and a cross-platform mobile client connected to a shared service.",
          "etecRefs": [],
          "evidence": "Individual web and mobile practical",
          "id": "CLO 2"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Build a validated API with database access, authentication and authorization.",
          "etecRefs": [],
          "evidence": "API implementation and authorization tests",
          "id": "CLO 3"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Compare top-down, bottom-up and sandwich integration and choose an integration strategy for the application.",
          "etecRefs": [
            "SKU8.2-SLO6"
          ],
          "evidence": "Integration strategy and test sequence",
          "id": "CLO 4"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Create and document unit, API and integration tests for a medium-sized code component.",
          "etecRefs": [
            "SKU8.2-SLO9"
          ],
          "evidence": "Test design, code and results",
          "id": "CLO 5"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Deploy a tested release and evaluate logging, recovery, accessibility and operational behavior.",
          "etecRefs": [],
          "evidence": "Release and recovery demonstration",
          "id": "CLO 6"
        },
        {
          "plo": "V1",
          "stage": "P",
          "statement": "Justify privacy, access and responsible data-use choices for the application.",
          "etecRefs": [],
          "evidence": "Application privacy and security review",
          "id": "CLO 7"
        },
        {
          "plo": "V2",
          "stage": "P",
          "statement": "Collaborate with version control and demonstrate and explain individual contributions.",
          "etecRefs": [],
          "evidence": "Repository and individual defense",
          "id": "CLO 8"
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": "CS 350 Human–Computer Interaction must be completed previously or taken concurrently. The course uses one bounded application and a shared backend; advanced native mobile development and extensive cloud operations remain specialist study.",
      "resource": "Current React, React Native, TypeScript and server-framework documentation; API and database exercises; individual coding tasks and a team application using synthetic data.",
      "name": "Web and Mobile Application Development",
      "placement": "Semester 5",
      "anchor": "cs-370",
      "corequisites": [
        "CS 350"
      ],
      "topicHours": [
        4,
        8,
        8,
        10,
        10,
        8,
        6,
        6
      ],
      "etecTopics": [
        "SKU8.2-T2",
        "SKU8.2-T3"
      ],
      "etecSLOs": [
        "SKU8.2-SLO6",
        "SKU8.2-SLO9"
      ],
      "facilities": {
        "lab": "Web and mobile application laboratory",
        "hardware": "Standard workstations; mobile emulator and shared Android devices; isolated deployment/test server.",
        "software": "Node.js, TypeScript, a supported web framework, Expo/React Native or equivalent cross-platform SDK, Android emulator, PostgreSQL, Git and automated API/UI test tools.",
        "practice": "Shared web/mobile API project, authentication, accessibility, integration tests, deployment and recovery demonstrations.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "CS 430": {
      "id": "CS 430",
      "code": "CS 430",
      "title": "Machine Learning",
      "term": null,
      "credits": 3,
      "category": "elective",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "CS 340",
        "MATH 230"
      ],
      "summary": "Train, evaluate, and communicate findings from machine learning models.",
      "topics": [
        "Data preparation and experimental design",
        "Supervised learning and model selection",
        "Unsupervised learning and representation",
        "Validation, metrics, and generalization",
        "Neural and generative methods overview",
        "Model audits, subgroup performance, fairness, interpretability, and privacy",
        "Effects of automated decisions on users and society, human oversight, and deployment safeguards"
      ],
      "clos": [
        {
          "plo": "K3",
          "stage": "M",
          "statement": "Explain the assumptions and limitations of representative learning methods.",
          "id": "CLO 1",
          "etecRefs": [],
          "evidence": "Individual conceptual examination and applied design explanation"
        },
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Train and compare models using a reproducible workflow.",
          "id": "CLO 2",
          "etecRefs": [],
          "evidence": "Individually demonstrated artifact with tests and correctness explanation"
        },
        {
          "plo": "S4",
          "stage": "M",
          "statement": "Evaluate generalization and report uncertainty and failure cases.",
          "id": "CLO 3",
          "etecRefs": [],
          "evidence": "Reproducible investigation, results and limitations report"
        },
        {
          "plo": "V1",
          "stage": "M",
          "statement": "Assess subgroup performance and privacy risks, and justify limits and safeguards for deployment.",
          "id": "CLO 4",
          "etecRefs": [],
          "evidence": "Professional or ethical decision case with justified safeguards"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Prepare a dataset and justify baselines, train-validation-test separation and model-selection criteria.",
          "id": "CLO 5",
          "etecRefs": [],
          "evidence": "Individual problem analysis, model and justified method selection"
        },
        {
          "plo": "S3",
          "stage": "P",
          "statement": "Communicate model evidence, failure cases and deployment limits to an affected stakeholder.",
          "id": "CLO 6",
          "etecRefs": [],
          "evidence": "Assessed report or presentation and individual responses"
        }
      ],
      "profile": "lab",
      "group": "Data and AI",
      "requirement": null,
      "resource": null,
      "name": "Machine Learning",
      "placement": "Semester 8 technical elective",
      "anchor": "cs-430",
      "etecTopics": [],
      "etecSLOs": [],
      "facilities": {
        "lab": "Machine-learning experimentation laboratory",
        "hardware": "Standard workstation and shared accelerator server or scheduled GPU notebooks for neural-network exercises; approved dataset storage.",
        "software": "Python, Jupyter, NumPy, pandas, scikit-learn, PyTorch or an equivalent framework, Git and experiment tracking.",
        "practice": "Train/validation/test workflows, generalization and subgroup evaluation, privacy and model limitations.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "EL-2": {
      "id": "EL-2",
      "code": "",
      "title": "Technical Elective II",
      "term": 8,
      "credits": 3,
      "category": "elective",
      "lecture": 0,
      "practical": 0,
      "prerequisites": [],
      "summary": "Select another course from the technical elective pool.",
      "topics": [],
      "clos": [],
      "profile": "slot",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Technical Elective II",
      "placement": "Semester 8",
      "anchor": "el-2",
      "etecSLOs": []
    },
    "EL-3": {
      "id": "EL-3",
      "code": "",
      "title": "Technical Elective III",
      "term": 8,
      "credits": 3,
      "category": "elective",
      "lecture": 0,
      "practical": 0,
      "prerequisites": [],
      "summary": "Complete a third distinct technical elective from the pool.",
      "topics": [],
      "clos": [],
      "profile": "slot",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Technical Elective III",
      "placement": "Semester 8",
      "anchor": "el-3",
      "etecSLOs": []
    },
    "CS 451": {
      "id": "CS 451",
      "code": "CS 451",
      "title": "Data Engineering",
      "term": 8,
      "credits": 3,
      "category": "core",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "CS 230",
        "CS 260"
      ],
      "summary": "Design reliable pipelines for collecting, transforming, and serving data.",
      "topics": [
        "Data-system architecture and the engineering lifecycle; database and analytics interfaces",
        "Source integration, schemas, formats, data contracts and change management",
        "Batch ingestion, transformation, orchestration and idempotent recovery",
        "Streaming, event time, delivery semantics and incremental processing",
        "Data quality tests, lineage, metadata, observability and reproducibility",
        "Storage and processing trade-offs, partitioning and distributed execution",
        "Privacy, access control, retention, governance and resource cost",
        "Implemented pipeline project, failure injection, benchmarking and individual defense"
      ],
      "clos": [
        {
          "plo": "K3",
          "stage": "M",
          "statement": "Explain the data-engineering lifecycle and justify an architecture for a defined analytical or operational workload.",
          "evidence": "Individual data-system architecture examination",
          "etecRefs": [],
          "id": "CLO 1"
        },
        {
          "plo": "S1",
          "stage": "M",
          "statement": "Compare schema, storage, processing and consistency choices against workload, cost and reliability constraints.",
          "evidence": "Justified architecture and workload analysis",
          "etecRefs": [],
          "id": "CLO 2"
        },
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Implement an integrated batch pipeline with explicit schemas, orchestration and repeatable recovery.",
          "evidence": "Individually demonstrated pipeline and recovery tests",
          "etecRefs": [],
          "id": "CLO 3"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Implement a small streaming pipeline and explain event-time and delivery-semantics trade-offs.",
          "evidence": "Streaming practical and duplicate/late-event tests",
          "etecRefs": [],
          "id": "CLO 4"
        },
        {
          "plo": "S4",
          "stage": "M",
          "statement": "Design reproducible experiments that measure data quality, throughput, latency and failure recovery against stated baselines.",
          "evidence": "Reproducible benchmark repository and limitations report",
          "etecRefs": [],
          "id": "CLO 5"
        },
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Automate data-contract and quality checks and record lineage and versioned transformations.",
          "evidence": "Automated pipeline tests and lineage record",
          "etecRefs": [],
          "id": "CLO 6"
        },
        {
          "plo": "V1",
          "stage": "M",
          "statement": "Justify data access, privacy, retention and resource-use controls for the proposed pipeline.",
          "evidence": "Governance and privacy decision case",
          "etecRefs": [],
          "id": "CLO 7"
        },
        {
          "plo": "S3",
          "stage": "M",
          "statement": "Defend a data-system design and communicate experimental findings and limitations to a stakeholder.",
          "evidence": "Individual technical report and oral defense",
          "etecRefs": [],
          "id": "CLO 8"
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Data Engineering",
      "placement": "Semester 8",
      "anchor": "cs-451",
      "etecTopics": [],
      "etecSLOs": [],
      "facilities": {
        "lab": "Data-engineering lab",
        "hardware": "Workstations plus shared multi-container services or equivalent remote processing environment.",
        "software": "Python, PostgreSQL, Apache Spark, an orchestrator such as Airflow, Kafka or equivalent streaming tool, Git and containers.",
        "practice": "Batch/stream pipelines, data quality, lineage, schema tests, observability and throughput measurements.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      },
      "topicHours": [
        6,
        8,
        10,
        8,
        8,
        8,
        6,
        6
      ]
    },
    "CS 452": {
      "id": "CS 452",
      "code": "CS 452",
      "title": "Applied Data Analytics",
      "term": null,
      "credits": 3,
      "category": "elective",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "CS 230",
        "STAT 220"
      ],
      "summary": "Analyze a domain dataset and communicate evidence for a decision.",
      "topics": [
        "Data acquisition and cleaning",
        "Exploratory and descriptive analytics",
        "Statistical comparison and uncertainty",
        "Data visualization and interpretation",
        "Reproducible reporting and governance",
        "Stakeholder decision brief"
      ],
      "clos": [
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Formulate a measurable analytic question.",
          "id": "CLO 1",
          "etecRefs": [],
          "evidence": "Individual problem analysis, model and justified method selection"
        },
        {
          "plo": "S4",
          "stage": "M",
          "statement": "Analyze data and explain uncertainty and possible bias.",
          "id": "CLO 2",
          "etecRefs": [],
          "evidence": "Reproducible investigation, results and limitations report"
        },
        {
          "plo": "S3",
          "stage": "M",
          "statement": "Deliver an evidence-based decision brief.",
          "id": "CLO 3",
          "etecRefs": [],
          "evidence": "Assessed report or presentation and individual responses"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Clean and transform a dataset and retain an auditable preparation record.",
          "id": "CLO 4",
          "etecRefs": [],
          "evidence": "Individually demonstrated artifact with tests and correctness explanation"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Compare alternative analyses and evaluate the effect of missing data and selection bias.",
          "id": "CLO 5",
          "etecRefs": [],
          "evidence": "Reproducible investigation, results and limitations report"
        },
        {
          "plo": "V1",
          "stage": "P",
          "statement": "Justify lawful, privacy-aware and proportionate use of the data.",
          "id": "CLO 6",
          "etecRefs": [],
          "evidence": "Professional or ethical decision case with justified safeguards"
        }
      ],
      "profile": "project",
      "group": "Data and AI",
      "requirement": null,
      "resource": null,
      "name": "Applied Data Analytics",
      "placement": "Semester 8 technical elective",
      "anchor": "cs-452",
      "etecTopics": [],
      "etecSLOs": [],
      "facilities": {
        "lab": "Data analytics laboratory",
        "hardware": "Standard workstation, curated datasets and controlled data storage.",
        "software": "Python/R, Jupyter, pandas, SciPy or statsmodels, visualization libraries and Git.",
        "practice": "Cleaning, exploratory analysis, statistical comparisons, reproducible visual reports and stakeholder briefs.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "CS 453": {
      "id": "CS 453",
      "code": "CS 453",
      "title": "Health Informatics",
      "term": null,
      "credits": 3,
      "category": "elective",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "CS 230",
        "STAT 220",
        "CS 350"
      ],
      "summary": "Build and evaluate a small interoperable health application for a hospital workflow using synthetic data.",
      "topics": [
        "Clinical workflows, electronic health records, and data quality",
        "Clinical data models, terminology, and data provenance",
        "HL7 FHIR resources, APIs, data mapping, and validation",
        "Saudi NPHIES exchange example, data privacy, and access control",
        "Usability, patient safety, and evaluation of workflow and analytics",
        "Team interoperability project and individual defense"
      ],
      "clos": [
        {
          "plo": "K3",
          "stage": "P",
          "statement": "Explain how EHR data models and interoperability rules support a clinical workflow.",
          "id": "CLO 1",
          "etecRefs": [],
          "evidence": "Individual conceptual examination and applied design explanation"
        },
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Build and test a FHIR-based prototype with a synthetic health dataset.",
          "id": "CLO 2",
          "etecRefs": [],
          "evidence": "Individually demonstrated artifact with tests and correctness explanation"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Evaluate data quality and workflow usability using defined measures.",
          "id": "CLO 3",
          "etecRefs": [],
          "evidence": "Reproducible investigation, results and limitations report"
        },
        {
          "plo": "V1",
          "stage": "M",
          "statement": "Justify privacy, access, and patient-safety safeguards for the prototype.",
          "id": "CLO 4",
          "etecRefs": [],
          "evidence": "Professional or ethical decision case with justified safeguards"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Map a clinical workflow to EHR data elements and identify interoperability and patient-safety risks.",
          "id": "CLO 5",
          "etecRefs": [],
          "evidence": "Individual problem analysis, model and justified method selection"
        },
        {
          "plo": "S3",
          "stage": "P",
          "statement": "Demonstrate a synthetic-data health prototype and explain its clinical and technical limitations.",
          "id": "CLO 6",
          "etecRefs": [],
          "evidence": "Assessed report or presentation and individual responses"
        }
      ],
      "profile": "project",
      "group": "Business and health",
      "requirement": null,
      "resource": "HL7 FHIR specification, the Saudi NPHIES FHIR implementation guide, and synthetic health records for classroom use.",
      "name": "Health Informatics",
      "placement": "Semester 8 technical elective",
      "anchor": "cs-453",
      "etecTopics": [],
      "etecSLOs": [],
      "facilities": {
        "lab": "Health interoperability teaching sandbox",
        "hardware": "Standard workstation, local/isolated FHIR server and synthetic clinical datasets; clinical-workflow review access through an agreed hospital liaison.",
        "software": "HAPI FHIR or equivalent test server, HL7 FHIR validator, Python or Java, REST client, Git and data-analysis tools.",
        "practice": "FHIR resource mapping, validation, access-control checks and workflow evaluation; synthetic data supports all required assessments.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "CS 454": {
      "id": "CS 454",
      "code": "CS 454",
      "title": "Digital Product Engineering",
      "term": null,
      "credits": 3,
      "category": "elective",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "CS 250",
        "CS 350"
      ],
      "summary": "Design and validate a digital product against a business or public-service problem.",
      "topics": [
        "Problem discovery and user needs",
        "Product metrics and experimentation",
        "Architecture and minimum viable scope",
        "Prototyping and accessibility",
        "Product economics, risk, and iteration",
        "Technical product demonstration"
      ],
      "clos": [
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Deliver a validated prototype against user and business requirements.",
          "id": "CLO 1",
          "etecRefs": [],
          "evidence": "Individually demonstrated artifact with tests and correctness explanation"
        },
        {
          "plo": "S3",
          "stage": "M",
          "statement": "Defend trade-offs to technical and business audiences.",
          "id": "CLO 2",
          "etecRefs": [],
          "evidence": "Assessed report or presentation and individual responses"
        },
        {
          "plo": "V3",
          "stage": "P",
          "statement": "Use evidence and cost to prioritize product work.",
          "id": "CLO 3",
          "etecRefs": [],
          "evidence": "Plan or decision record with cost, risk and learning rationale"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Formulate a product hypothesis using user research and measurable success criteria.",
          "id": "CLO 4",
          "etecRefs": [],
          "evidence": "Individual problem analysis, model and justified method selection"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Design and analyze a prototype experiment and justify an iteration decision.",
          "id": "CLO 5",
          "etecRefs": [],
          "evidence": "Reproducible investigation, results and limitations report"
        },
        {
          "plo": "V1",
          "stage": "P",
          "statement": "Evaluate accessibility, privacy and sustainability risks in a proposed product.",
          "id": "CLO 6",
          "etecRefs": [],
          "evidence": "Professional or ethical decision case with justified safeguards"
        }
      ],
      "profile": "project",
      "group": "Business and health",
      "requirement": null,
      "resource": null,
      "name": "Digital Product Engineering",
      "placement": "Semester 8 technical elective",
      "anchor": "cs-454",
      "etecTopics": [],
      "etecSLOs": [],
      "facilities": {
        "lab": "Digital product prototyping studio",
        "hardware": "Team workstations, shared mobile devices and user-feedback space.",
        "software": "Penpot/Figma, web/mobile development stack, Git, analytics test harness and spreadsheet tools.",
        "practice": "Discovery, prototype experiments, product metrics, accessibility and product-economics comparisons.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "CS 455": {
      "id": "CS 455",
      "code": "CS 455",
      "title": "Cloud Computing & DevOps",
      "term": 8,
      "credits": 3,
      "category": "core",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "CS 310",
        "CS 260"
      ],
      "summary": "Deploy, secure and operate a cloud application through reproducible infrastructure, automated delivery and measured reliability.",
      "topics": [
        "Cloud service and deployment models, virtualization and workload architecture",
        "Containers and reproducible infrastructure as code",
        "Continuous integration, automated tests, delivery gates and deployment rollback",
        "Container orchestration, service communication and managed storage",
        "Availability, scaling, observability, service objectives and incident response",
        "Identity, secrets, least privilege, dependency controls and software supply-chain security",
        "Performance, cloud cost, sustainability and shared-responsibility decisions",
        "Resilient service project, recovery exercise, runbook and individual defense"
      ],
      "clos": [
        {
          "plo": "K2",
          "stage": "M",
          "statement": "Explain cloud execution, storage and networking abstractions and distinguish provider and application responsibilities.",
          "evidence": "Individual cloud architecture examination",
          "etecRefs": [],
          "id": "CLO 1"
        },
        {
          "plo": "S1",
          "stage": "M",
          "statement": "Select a deployment architecture against availability, consistency, security and cost requirements.",
          "evidence": "Architecture trade-off analysis",
          "etecRefs": [],
          "id": "CLO 2"
        },
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Provision a reproducible application environment using containers and infrastructure as code.",
          "evidence": "Individually demonstrated environment recreation",
          "etecRefs": [],
          "id": "CLO 3"
        },
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Implement an automated delivery pipeline with tests, release controls and a verified rollback.",
          "evidence": "Pipeline execution record and rollback practical",
          "etecRefs": [],
          "id": "CLO 4"
        },
        {
          "plo": "S4",
          "stage": "M",
          "statement": "Evaluate service latency, scaling and recovery through controlled load and failure experiments.",
          "evidence": "Reproducible reliability and cost evaluation",
          "etecRefs": [],
          "id": "CLO 5"
        },
        {
          "plo": "V1",
          "stage": "M",
          "statement": "Implement and justify least-privilege access, secrets handling and software supply-chain controls.",
          "evidence": "Security review and automated control checks",
          "etecRefs": [],
          "id": "CLO 6"
        },
        {
          "plo": "V3",
          "stage": "M",
          "statement": "Manage a bounded cloud budget and justify operational and sustainability trade-offs.",
          "evidence": "Costed operating plan and resource-use evidence",
          "etecRefs": [],
          "id": "CLO 7"
        },
        {
          "plo": "V2",
          "stage": "M",
          "statement": "Coordinate a release and incident exercise with documented responsibilities, handover and individual contributions.",
          "evidence": "Release review, runbook, peer evidence and individual defense",
          "etecRefs": [],
          "id": "CLO 8"
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": "CS 401 supplies distributed-computing theory; CS 370 introduces application delivery. This course assesses production-style provisioning, automated release, observability, security, cost and recovery through a bounded teaching deployment.",
      "resource": null,
      "name": "Cloud Computing & DevOps",
      "placement": "Semester 8",
      "anchor": "cs-455",
      "etecTopics": [],
      "etecSLOs": [],
      "facilities": {
        "lab": "Cloud and distributed application sandbox",
        "hardware": "Virtualization-capable machines or allocated cloud education accounts with bounded quotas and teardown controls.",
        "software": "Docker/Podman, a local Kubernetes environment, OpenTofu or equivalent IaC tool, messaging, monitoring, Git and CI.",
        "practice": "Deployment, resilience, scaling, resource-cost measurement and tested recovery.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      },
      "topicHours": [
        6,
        10,
        10,
        8,
        8,
        8,
        4,
        6
      ]
    },
    "CS 456": {
      "id": "CS 456",
      "code": "CS 456",
      "title": "Secure Software Engineering",
      "term": null,
      "credits": 3,
      "category": "elective",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "CS 250",
        "CS 260"
      ],
      "summary": "Design and verify secure software throughout its lifecycle.",
      "topics": [
        "Security requirements and threat modeling",
        "Secure architecture and access control",
        "Defensive development and review",
        "Dependency and supply-chain assurance",
        "Verification, privacy, and response planning",
        "Secure product assurance case"
      ],
      "clos": [
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Build software with verifiable defensive controls.",
          "id": "CLO 1",
          "etecRefs": [],
          "evidence": "Individually demonstrated artifact with tests and correctness explanation"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Evaluate control effectiveness using a safe verification plan.",
          "id": "CLO 2",
          "etecRefs": [],
          "evidence": "Reproducible investigation, results and limitations report"
        },
        {
          "plo": "V1",
          "stage": "M",
          "statement": "Justify controls in light of user, organizational, and professional obligations.",
          "id": "CLO 3",
          "etecRefs": [],
          "evidence": "Professional or ethical decision case with justified safeguards"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Derive security requirements from assets, threat models and misuse cases.",
          "id": "CLO 4",
          "etecRefs": [],
          "evidence": "Individual problem analysis, model and justified method selection"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Apply dependency, code-review and automated security checks to a controlled development pipeline.",
          "id": "CLO 5",
          "etecRefs": [],
          "evidence": "Individually demonstrated artifact with tests and correctness explanation"
        },
        {
          "plo": "S3",
          "stage": "P",
          "statement": "Present a security assurance argument with residual risks and remediation priorities.",
          "id": "CLO 6",
          "etecRefs": [],
          "evidence": "Assessed report or presentation and individual responses"
        }
      ],
      "profile": "project",
      "group": "Systems and security",
      "requirement": null,
      "resource": null,
      "name": "Secure Software Engineering",
      "placement": "Semester 8 technical elective",
      "anchor": "cs-456",
      "etecTopics": [],
      "etecSLOs": [],
      "facilities": {
        "lab": "Secure software assurance lab",
        "hardware": "Isolated application test environment and resettable containers or VMs.",
        "software": "Git, CI runner, OWASP ZAP, dependency and secret scanners, static analysis and automated test tools.",
        "practice": "Threat models, secure implementation, code/dependency checks and a documented assurance case.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "CS 457": {
      "id": "CS 457",
      "code": "CS 457",
      "title": "Blockchain and Cryptocurrencies",
      "term": null,
      "credits": 3,
      "category": "elective",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "CS 230",
        "CS 260"
      ],
      "summary": "Analyze distributed ledgers and test when they are suitable for a computing problem.",
      "topics": [
        "Hashing, signatures, and ledger data structures",
        "Transactions and digital asset models",
        "Consensus, replication, and finality",
        "Smart contract design and testing in a local sandbox",
        "Permissioned ledgers and interoperability",
        "Security, privacy, scalability, and energy trade-offs"
      ],
      "clos": [
        {
          "plo": "K2",
          "stage": "P",
          "statement": "Explain how distributed consensus and ledger validation work.",
          "id": "CLO 1",
          "etecRefs": [],
          "evidence": "Individual conceptual examination and system analysis"
        },
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Build and test a contract or ledger application in a local sandbox.",
          "id": "CLO 2",
          "etecRefs": [],
          "evidence": "Individually demonstrated artifact with tests and correctness explanation"
        },
        {
          "plo": "V1",
          "stage": "M",
          "statement": "Justify the choice of a ledger architecture using security, privacy, and sustainability evidence.",
          "id": "CLO 3",
          "etecRefs": [],
          "evidence": "Professional or ethical decision case with justified safeguards"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Compare consensus, finality and scalability trade-offs for a specified ledger workload.",
          "id": "CLO 4",
          "etecRefs": [],
          "evidence": "Individual problem analysis, model and justified method selection"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Evaluate contract correctness and failure cases using repeatable local tests.",
          "id": "CLO 5",
          "etecRefs": [],
          "evidence": "Reproducible investigation, results and limitations report"
        },
        {
          "plo": "S3",
          "stage": "P",
          "statement": "Explain why a ledger is or is not appropriate for an application and document its limitations.",
          "id": "CLO 6",
          "etecRefs": [],
          "evidence": "Assessed report or presentation and individual responses"
        }
      ],
      "profile": "project",
      "group": "Systems and security",
      "requirement": null,
      "resource": "Distributed-ledger protocol documentation, a local ledger simulator, and instructor-provided contract test cases.",
      "name": "Blockchain and Cryptocurrencies",
      "placement": "Semester 8 technical elective",
      "anchor": "cs-457",
      "etecTopics": [],
      "etecSLOs": [],
      "facilities": {
        "lab": "Local distributed-ledger laboratory",
        "hardware": "Standard workstation; private local blockchain network and test-only accounts.",
        "software": "Solidity toolchain with Hardhat or Foundry, local Ethereum-compatible node, Git and contract-test tools.",
        "practice": "Consensus/ledger demonstrations, smart-contract tests and failure/security cases using local test assets.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "CS 458": {
      "id": "CS 458",
      "code": "CS 458",
      "title": "Robotics and Autonomous Systems",
      "term": null,
      "credits": 3,
      "category": "elective",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "CS 340",
        "MATH 120"
      ],
      "summary": "Integrate sensing, estimation, planning, and control to evaluate a mobile robot.",
      "topics": [
        "Coordinate frames and robot kinematics",
        "Sensors and perception",
        "Localization and mapping",
        "Motion planning and obstacle avoidance",
        "Feedback control and system integration",
        "Navigation trials and safety evaluation in simulation"
      ],
      "clos": [
        {
          "plo": "K2",
          "stage": "P",
          "statement": "Explain the interaction of sensing, planning, and control in a robot.",
          "id": "CLO 1",
          "etecRefs": [],
          "evidence": "Individual conceptual examination and system analysis"
        },
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Integrate a navigation stack for a simulated mobile robot.",
          "id": "CLO 2",
          "etecRefs": [],
          "evidence": "Individually demonstrated artifact with tests and correctness explanation"
        },
        {
          "plo": "S4",
          "stage": "M",
          "statement": "Compare navigation performance across controlled scenarios.",
          "id": "CLO 3",
          "etecRefs": [],
          "evidence": "Reproducible investigation, results and limitations report"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Model coordinate frames, kinematics and sensing assumptions for a mobile robot.",
          "id": "CLO 4",
          "etecRefs": [],
          "evidence": "Individual problem analysis, model and justified method selection"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Implement localization, planning and feedback components in a simulation.",
          "id": "CLO 5",
          "etecRefs": [],
          "evidence": "Individually demonstrated artifact with tests and correctness explanation"
        },
        {
          "plo": "V1",
          "stage": "P",
          "statement": "Assess failure modes and justify safe operating constraints and human oversight.",
          "id": "CLO 6",
          "etecRefs": [],
          "evidence": "Professional or ethical decision case with justified safeguards"
        }
      ],
      "profile": "lab",
      "group": "Robotics and IoT",
      "requirement": null,
      "resource": "A robotics simulator, sample maps and sensor recordings, and an accessible computing laboratory.",
      "name": "Robotics and Autonomous Systems",
      "placement": "Semester 8 technical elective",
      "anchor": "cs-458",
      "etecTopics": [],
      "etecSLOs": [],
      "facilities": {
        "lab": "Robotics simulation and integration lab",
        "hardware": "Graphics-capable workstations; optional small mobile robots, sensors and controlled indoor test space.",
        "software": "Supported ROS 2/Gazebo combination, Python/C++, navigation libraries, Git and simulation logging.",
        "practice": "Localization, perception, planning and feedback integration; simulation provides the assessed baseline.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "CS 459": {
      "id": "CS 459",
      "code": "CS 459",
      "title": "Aerial Robotics and Drones",
      "term": null,
      "credits": 3,
      "category": "elective",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "CS 340",
        "PHYS 101"
      ],
      "summary": "Model and evaluate autonomous drone navigation in a flight simulator.",
      "topics": [
        "Aerial robot dynamics and coordinate frames",
        "Aerial sensors and state estimation",
        "Trajectory planning and obstacle avoidance",
        "Flight control and telemetry",
        "Simulated mission testing under safety constraints",
        "Failure handling, performance analysis, and flight-test reporting"
      ],
      "clos": [
        {
          "plo": "K2",
          "stage": "P",
          "statement": "Explain how flight dynamics and sensing influence autonomous navigation.",
          "id": "CLO 1",
          "etecRefs": [],
          "evidence": "Individual conceptual examination and system analysis"
        },
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Develop and test a simulated inspection or survey mission.",
          "id": "CLO 2",
          "etecRefs": [],
          "evidence": "Individually demonstrated artifact with tests and correctness explanation"
        },
        {
          "plo": "S4",
          "stage": "M",
          "statement": "Evaluate tracking, safety margins, and recovery from simulated failures.",
          "id": "CLO 3",
          "etecRefs": [],
          "evidence": "Reproducible investigation, results and limitations report"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Plan a simulated mission using state estimates, trajectories and explicit operating constraints.",
          "id": "CLO 4",
          "etecRefs": [],
          "evidence": "Individual problem analysis, model and justified method selection"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Implement telemetry, failure detection and a recovery behavior for a simulated aerial vehicle.",
          "id": "CLO 5",
          "etecRefs": [],
          "evidence": "Individually demonstrated artifact with tests and correctness explanation"
        },
        {
          "plo": "V1",
          "stage": "P",
          "statement": "Justify privacy, safety and operational decisions using a mission risk assessment.",
          "id": "CLO 6",
          "etecRefs": [],
          "evidence": "Professional or ethical decision case with justified safeguards"
        }
      ],
      "profile": "lab",
      "group": "Robotics and IoT",
      "requirement": null,
      "resource": "A software flight simulator, synthetic telemetry, and instructor-provided inspection and survey scenarios.",
      "name": "Aerial Robotics and Drones",
      "placement": "Semester 8 technical elective",
      "anchor": "cs-459",
      "etecTopics": [],
      "etecSLOs": [],
      "facilities": {
        "lab": "Aerial robotics simulation laboratory",
        "hardware": "Graphics-capable workstation and telemetry display; optional supervised indoor drone training enclosure and appropriate safety equipment.",
        "software": "PX4 software-in-the-loop, Gazebo, QGroundControl and Python/MAVSDK or equivalent supported stack.",
        "practice": "Simulated mission planning, control, telemetry, failure injection and recovery; required work can be completed in simulation.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "CS 460": {
      "id": "CS 460",
      "code": "CS 460",
      "title": "AI for Cybersecurity and AI Assurance",
      "term": null,
      "credits": 3,
      "category": "elective",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "CS 340",
        "CS 260"
      ],
      "summary": "Use AI to improve defensive monitoring and evaluate the reliability of AI systems.",
      "topics": [
        "Security telemetry and labeled datasets",
        "Anomaly detection for defensive monitoring",
        "Detection metrics, false alarms, and drift",
        "Alert triage and human review",
        "Data provenance, access controls, and secure AI pipelines",
        "Model assurance and evaluation under controlled input changes"
      ],
      "clos": [
        {
          "plo": "S1",
          "stage": "M",
          "statement": "Select a defensible detection method and justify an evaluation metric.",
          "id": "CLO 1",
          "etecRefs": [],
          "evidence": "Individual problem analysis, model and justified method selection"
        },
        {
          "plo": "S4",
          "stage": "M",
          "statement": "Evaluate alerts and false positives using controlled security datasets.",
          "id": "CLO 2",
          "etecRefs": [],
          "evidence": "Reproducible investigation, results and limitations report"
        },
        {
          "plo": "V1",
          "stage": "M",
          "statement": "Propose safeguards for an AI-assisted monitoring workflow.",
          "id": "CLO 3",
          "etecRefs": [],
          "evidence": "Professional or ethical decision case with justified safeguards"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Build a reproducible defensive detection workflow with documented telemetry and data provenance.",
          "id": "CLO 4",
          "etecRefs": [],
          "evidence": "Individually demonstrated artifact with tests and correctness explanation"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Investigate drift, subgroup effects and model robustness under controlled changes.",
          "id": "CLO 5",
          "etecRefs": [],
          "evidence": "Reproducible investigation, results and limitations report"
        },
        {
          "plo": "S3",
          "stage": "P",
          "statement": "Communicate alerts, uncertainty and escalation decisions to a human reviewer.",
          "id": "CLO 6",
          "etecRefs": [],
          "evidence": "Assessed report or presentation and individual responses"
        }
      ],
      "profile": "lab",
      "group": "Systems and security",
      "requirement": null,
      "resource": "Public or synthetic security logs, a supervised analysis environment, and instructor-provided AI assurance cases.",
      "name": "AI for Cybersecurity and AI Assurance",
      "placement": "Semester 8 technical elective",
      "anchor": "cs-460",
      "etecTopics": [],
      "etecSLOs": [],
      "facilities": {
        "lab": "AI and defensive security analytics laboratory",
        "hardware": "Isolated security datasets, standard workstations and scheduled accelerator access if needed.",
        "software": "Python, Jupyter, pandas, scikit-learn/PyTorch, defensive log-analysis tools, Git and experiment tracking.",
        "practice": "Defensive detection, drift/robustness studies, false-positive analysis and human-review workflows.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "CS 461": {
      "id": "CS 461",
      "code": "CS 461",
      "title": "Competitive Programming",
      "term": null,
      "credits": 3,
      "category": "elective",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "CS 220"
      ],
      "summary": "Solve advanced algorithmic problems under time and resource constraints.",
      "topics": [
        "Problem reduction and complexity budgeting",
        "Advanced dynamic programming and state compression",
        "Graph flows and matching",
        "String algorithms and indexing",
        "Number theory and combinatorial techniques",
        "Timed practice, test design, and solution review"
      ],
      "clos": [
        {
          "plo": "S1",
          "stage": "M",
          "statement": "Derive and justify an efficient algorithm for an unfamiliar problem.",
          "id": "CLO 1",
          "etecRefs": [],
          "evidence": "Individual problem analysis, model and justified method selection"
        },
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Implement and test a solution against edge cases and performance limits.",
          "id": "CLO 2",
          "etecRefs": [],
          "evidence": "Individually demonstrated artifact with tests and correctness explanation"
        },
        {
          "plo": "V2",
          "stage": "P",
          "statement": "Review a teammate's solution and contribute to a timed team exercise.",
          "id": "CLO 3",
          "etecRefs": [],
          "evidence": "Contribution record, peer or host review and individual reflection"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Compare dynamic programming, graph, string and number-theoretic approaches under resource limits.",
          "id": "CLO 4",
          "etecRefs": [],
          "evidence": "Individual problem analysis, model and justified method selection"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Generate adversarial test cases and diagnose a wrong answer or timeout.",
          "id": "CLO 5",
          "etecRefs": [],
          "evidence": "Reproducible investigation, results and limitations report"
        },
        {
          "plo": "S3",
          "stage": "P",
          "statement": "Explain a correctness proof and complexity argument after a timed programming exercise.",
          "id": "CLO 6",
          "etecRefs": [],
          "evidence": "Assessed report or presentation and individual responses"
        }
      ],
      "profile": "lab",
      "group": "Algorithms and quantum",
      "requirement": null,
      "resource": "An online judge or local judging system, curated public problem sets, and code review tools.",
      "name": "Competitive Programming",
      "placement": "Semester 8 technical elective",
      "anchor": "cs-461",
      "etecTopics": [],
      "etecSLOs": [],
      "facilities": {
        "lab": "Timed algorithm programming laboratory",
        "hardware": "Standard workstations and isolated local contest/judge server or equivalent teaching service.",
        "software": "Supported C++/Java/Python toolchains, DOMjudge or equivalent judge, generators, test harnesses and Git.",
        "practice": "Timed individual/team problems, adversarial tests, complexity limits and solution review.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "CS 462": {
      "id": "CS 462",
      "code": "CS 462",
      "title": "Quantum Computing",
      "term": null,
      "credits": 3,
      "category": "elective",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "MATH 120",
        "CS 220"
      ],
      "summary": "Build and evaluate introductory quantum algorithms using a circuit simulator.",
      "topics": [
        "Qubits, states, measurement, and probability",
        "Quantum gates and circuit composition",
        "Entanglement and simple protocols",
        "Oracle algorithms and quantum search",
        "Quantum Fourier transform and applications",
        "Noise, simulation, and limits of quantum advantage"
      ],
      "clos": [
        {
          "plo": "K1",
          "stage": "M",
          "statement": "Use linear algebra to reason about quantum states and circuits.",
          "id": "CLO 1",
          "etecRefs": [],
          "evidence": "Individual conceptual examination and applied explanation"
        },
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Implement and test a representative algorithm in a simulator.",
          "id": "CLO 2",
          "etecRefs": [],
          "evidence": "Individually demonstrated artifact with tests and correctness explanation"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Compare classical and quantum approaches and explain the limits of the comparison.",
          "id": "CLO 3",
          "etecRefs": [],
          "evidence": "Reproducible investigation, results and limitations report"
        },
        {
          "plo": "K1",
          "stage": "P",
          "statement": "Calculate state transformations, entanglement and measurement probabilities in a small quantum circuit.",
          "id": "CLO 4",
          "etecRefs": [],
          "evidence": "Individual conceptual examination and applied explanation"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Analyze a representative search or Fourier-based quantum algorithm and its assumptions.",
          "id": "CLO 5",
          "etecRefs": [],
          "evidence": "Individual problem analysis, model and justified method selection"
        },
        {
          "plo": "V3",
          "stage": "P",
          "statement": "Critically assess a quantum-advantage claim using reproducible simulation evidence.",
          "id": "CLO 6",
          "etecRefs": [],
          "evidence": "Plan or decision record with cost, risk and learning rationale"
        }
      ],
      "profile": "lab",
      "group": "Algorithms and quantum",
      "requirement": null,
      "resource": "A quantum circuit simulator, linear-algebra exercises, and reproducible circuit notebooks.",
      "name": "Quantum Computing",
      "placement": "Semester 8 technical elective",
      "anchor": "cs-462",
      "etecTopics": [],
      "etecSLOs": [],
      "facilities": {
        "lab": "Quantum simulation laboratory",
        "hardware": "Standard workstation; small-circuit local simulation, with optional allocated cloud quantum access.",
        "software": "Python, Qiskit and Aer or an equivalent quantum-circuit simulator, Jupyter, NumPy and Git.",
        "practice": "State/circuit calculations, noise experiments and classical/quantum comparisons; physical quantum hardware is not required.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "CS 463": {
      "id": "CS 463",
      "code": "CS 463",
      "title": "Internet of Things and Edge Computing",
      "term": null,
      "credits": 3,
      "category": "elective",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "CS 240",
        "CS 260"
      ],
      "summary": "Build a connected device system and evaluate where its data processing should run.",
      "topics": [
        "Sensors and embedded platforms",
        "Device networking and messaging",
        "Edge gateways, data streams, and local processing",
        "Cloud integration and intermittent connectivity",
        "Latency, energy, and reliability evaluation",
        "Device identity, secure updates, and privacy"
      ],
      "clos": [
        {
          "plo": "K2",
          "stage": "P",
          "statement": "Explain the role of device, edge, and cloud components.",
          "id": "CLO 1",
          "etecRefs": [],
          "evidence": "Individual conceptual examination and system analysis"
        },
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Develop and test a networked sensor prototype.",
          "id": "CLO 2",
          "etecRefs": [],
          "evidence": "Individually demonstrated artifact with tests and correctness explanation"
        },
        {
          "plo": "S4",
          "stage": "M",
          "statement": "Evaluate latency, resource use, and reliability across deployment choices.",
          "id": "CLO 3",
          "etecRefs": [],
          "evidence": "Reproducible investigation, results and limitations report"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Implement sensor acquisition, edge processing and a resilient messaging path.",
          "id": "CLO 4",
          "etecRefs": [],
          "evidence": "Individually demonstrated artifact with tests and correctness explanation"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Select a device-edge-cloud partition using latency, energy and connectivity constraints.",
          "id": "CLO 5",
          "etecRefs": [],
          "evidence": "Individual problem analysis, model and justified method selection"
        },
        {
          "plo": "V1",
          "stage": "P",
          "statement": "Justify device identity, update, access and privacy controls for the prototype.",
          "id": "CLO 6",
          "etecRefs": [],
          "evidence": "Professional or ethical decision case with justified safeguards"
        }
      ],
      "profile": "project",
      "group": "Robotics and IoT",
      "requirement": null,
      "resource": "Simulated or teaching-board sensors, a local messaging broker, and an accessible computing laboratory.",
      "name": "Internet of Things and Edge Computing",
      "placement": "Semester 8 technical elective",
      "anchor": "cs-463",
      "etecTopics": [],
      "etecSLOs": [],
      "facilities": {
        "lab": "IoT and edge-computing laboratory",
        "hardware": "Per-team microcontroller/sensor kit such as ESP32, safe low-voltage supplies, edge gateway such as Raspberry Pi, and isolated Wi-Fi; accessible simulator alternative.",
        "software": "Arduino IDE or PlatformIO, MQTT/Mosquitto, Python, Node-RED, containers and logging tools.",
        "practice": "Sensor-edge-cloud prototype, intermittent connectivity, latency/energy measurements and device security.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "CS 464": {
      "id": "CS 464",
      "code": "CS 464",
      "title": "Generative AI and Large Language Models",
      "term": null,
      "credits": 3,
      "category": "elective",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "CS 340",
        "CS 230"
      ],
      "summary": "Develop and evaluate a small-scale language-model application.",
      "topics": [
        "Tokenization, embeddings, attention, and transformers",
        "Data preparation and training objectives",
        "Prompting and model adaptation",
        "Retrieval-grounded generation",
        "Evaluation of factuality, bias, and robustness",
        "Privacy, oversight, and inference cost"
      ],
      "clos": [
        {
          "plo": "K3",
          "stage": "P",
          "statement": "Explain the components and limitations of a language model.",
          "id": "CLO 1",
          "etecRefs": [],
          "evidence": "Individual conceptual examination and applied design explanation"
        },
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Build a retrieval-grounded application with repeatable tests.",
          "id": "CLO 2",
          "etecRefs": [],
          "evidence": "Individually demonstrated artifact with tests and correctness explanation"
        },
        {
          "plo": "V1",
          "stage": "M",
          "statement": "Justify safeguards and document limitations using evaluation evidence.",
          "id": "CLO 3",
          "etecRefs": [],
          "evidence": "Professional or ethical decision case with justified safeguards"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Select a model, adaptation approach and retrieval strategy for a defined task and resource budget.",
          "id": "CLO 4",
          "etecRefs": [],
          "evidence": "Individual problem analysis, model and justified method selection"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Measure factuality, retrieval quality, bias and robustness using a documented test set.",
          "id": "CLO 5",
          "etecRefs": [],
          "evidence": "Reproducible investigation, results and limitations report"
        },
        {
          "plo": "S3",
          "stage": "P",
          "statement": "Present a reproducible model and application evaluation with costs, failure cases and human-review requirements.",
          "id": "CLO 6",
          "etecRefs": [],
          "evidence": "Assessed report or presentation and individual responses"
        }
      ],
      "profile": "project",
      "group": "Data and AI",
      "requirement": null,
      "resource": "Small language models, public or synthetic text collections, and evaluation notebooks that can run in a teaching lab.",
      "name": "Generative AI and Large Language Models",
      "placement": "Semester 8 technical elective",
      "anchor": "cs-464",
      "etecTopics": [],
      "etecSLOs": [],
      "facilities": {
        "lab": "Generative AI and retrieval laboratory",
        "hardware": "Standard workstations with allocated shared GPU or approved hosted inference quota, local vector storage and curated datasets.",
        "software": "Python, PyTorch/Transformers or equivalent supported model stack, embedding/vector-index libraries, Git and evaluation harness.",
        "practice": "Retrieval-grounded applications, repeatable evaluation, cost measurement, privacy and human-oversight checks.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "ENG 101": {
      "id": "ENG 101",
      "code": "ENG 101",
      "title": "Technical English for Computing",
      "term": 1,
      "credits": 3,
      "category": "department",
      "lecture": 3,
      "practical": 0,
      "prerequisites": [],
      "summary": "Develop the English language skills needed to read computing materials, understand technical teaching, and explain simple computing processes.",
      "topics": [
        "Diagnostic assessment and strategies for learning technical vocabulary",
        "Reading computing textbooks, instructions, error messages, and documentation",
        "Word formation, grammar, definitions, comparison, and cause and effect",
        "Listening to short technical explanations and taking useful notes",
        "Writing explanations of algorithms, processes, diagrams, and simple results",
        "Asking questions, explaining a solution, and giving a short computing demonstration"
      ],
      "clos": [
        {
          "plo": "S3",
          "stage": "I",
          "statement": "Explain the main ideas and instructions in an introductory computing text using accurate technical vocabulary.",
          "id": "CLO 1",
          "etecRefs": [],
          "evidence": "Assessed report or presentation and individual responses"
        },
        {
          "plo": "S3",
          "stage": "I",
          "statement": "Follow a short technical explanation and ask relevant clarification questions.",
          "id": "CLO 2",
          "etecRefs": [],
          "evidence": "Assessed report or presentation and individual responses"
        },
        {
          "plo": "S3",
          "stage": "I",
          "statement": "Write a coherent explanation of a computing process and present it in clear spoken English.",
          "id": "CLO 3",
          "etecRefs": [],
          "evidence": "Assessed report or presentation and individual responses"
        },
        {
          "plo": "V3",
          "stage": "I",
          "statement": "Use feedback and a vocabulary learning record to improve independent language learning.",
          "id": "CLO 4",
          "etecRefs": [],
          "evidence": "Plan or decision record with cost, risk and learning rationale"
        },
        {
          "plo": "S3",
          "stage": "I",
          "statement": "Define and use computing vocabulary accurately in descriptions, comparisons and instructions.",
          "id": "CLO 5",
          "etecRefs": [],
          "evidence": "Assessed report or presentation and individual responses"
        },
        {
          "plo": "S3",
          "stage": "I",
          "statement": "Interpret a technical diagram, error message or documentation extract and write a clear explanation.",
          "id": "CLO 6",
          "etecRefs": [],
          "evidence": "Assessed report or presentation and individual responses"
        }
      ],
      "profile": "project",
      "group": null,
      "requirement": null,
      "resource": "Computing documentation, recorded introductory explanations, and a diagnostic vocabulary portfolio.",
      "name": "Technical English for Computing",
      "placement": "Semester 1",
      "anchor": "eng-101",
      "etecTopics": [],
      "etecSLOs": [],
      "facilities": {
        "lab": "Language classroom and shared language workspace",
        "hardware": "Headsets and microphones, audio playback and individual recording capability; no specialist computing hardware required.",
        "software": "Browser, LMS, word processor, presentation and audio-recording software; computing documentation and learner dictionaries.",
        "practice": "Reading technical documentation, listening and note-taking, vocabulary records and recorded computing explanations.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "BIO 101": {
      "id": "BIO 101",
      "code": "BIO 101",
      "title": "Biology for Digital Health with Laboratory",
      "term": 2,
      "credits": 4,
      "category": "department",
      "lecture": 3,
      "practical": 2,
      "prerequisites": [],
      "summary": "Study biological systems and apply the scientific method through controlled laboratory investigations relevant to health.",
      "topics": [
        "Scientific questions, controls, reproducibility, measurement, and laboratory safety",
        "Cells, biological molecules, microscopy, and quantitative observation",
        "Membranes, diffusion, osmosis, and controlled laboratory experiments",
        "Enzymes, metabolism, homeostasis, and experimental uncertainty",
        "Genetics, variation, and interpretation of biological evidence",
        "Human organ systems, physiological measurements, and limits of inference"
      ],
      "clos": [
        {
          "plo": "S4",
          "stage": "I",
          "statement": "Use cellular processes and homeostasis to explain a testable biological model and its predicted measurements.",
          "id": "CLO 1",
          "etecRefs": [],
          "evidence": "Reproducible investigation, results and limitations report"
        },
        {
          "plo": "S4",
          "stage": "I",
          "statement": "Formulate a testable biological hypothesis and conduct a controlled experiment with safe procedures.",
          "id": "CLO 2",
          "etecRefs": [],
          "evidence": "Reproducible investigation, results and limitations report"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Interpret biological measurements, uncertainty, and limitations using a reproducible laboratory report.",
          "id": "CLO 3",
          "etecRefs": [],
          "evidence": "Reproducible investigation, results and limitations report"
        },
        {
          "plo": "V1",
          "stage": "I",
          "statement": "Apply laboratory safety, research integrity, and responsible handling of biological materials.",
          "id": "CLO 4",
          "etecRefs": [],
          "evidence": "Professional or ethical decision case with justified safeguards"
        },
        {
          "plo": "K1",
          "stage": "I",
          "statement": "Explain how cells, biological molecules, genetics and organ systems contribute to homeostasis.",
          "id": "CLO 5",
          "etecRefs": [],
          "evidence": "Individual conceptual examination and applied explanation"
        },
        {
          "plo": "S4",
          "stage": "I",
          "statement": "Use microscopy or physiological measurements to compare observations with a biological prediction.",
          "id": "CLO 6",
          "etecRefs": [],
          "evidence": "Reproducible investigation, results and limitations report"
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": null,
      "resource": "Supervised microscopy, osmosis and enzyme experiments, biological models, a laboratory manual, and safe physiological measurements.",
      "name": "Biology for Digital Health with Laboratory",
      "placement": "Semester 2",
      "anchor": "bio-101",
      "etecTopics": [],
      "etecSLOs": [],
      "facilities": {
        "lab": "Supervised introductory biology teaching laboratory",
        "hardware": "Microscopes, prepared slides, pipettes, balances, pH meters, water baths, basic spectrophotometer access and non-invasive physiological sensors; PPE, washing, waste-handling and safe storage facilities.",
        "software": "Spreadsheet or Python/Jupyter data analysis; image-analysis software such as ImageJ.",
        "practice": "Microscopy, osmosis, enzyme or safe biological-response investigations and quantitative physiological observation.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "CS 360": {
      "id": "CS 360",
      "code": "CS 360",
      "title": "Research Methods in Computing",
      "term": 5,
      "credits": 3,
      "category": "core",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "CS 201",
        "STAT 220",
        "COMM 101"
      ],
      "summary": "Formulate a computing research question, evaluate literature, design a defensible investigation, and report a small reproducible study.",
      "topics": [
        "Research questions, novelty, feasibility, and computing research contributions",
        "Search strategies, source appraisal, literature synthesis, and research gaps",
        "Experimental, design science, case study, and user study methods",
        "Hypotheses, baselines, sampling, metrics, uncertainty, and validity threats",
        "Reproducible code, datasets, experiment logs, research ethics, and AI disclosure",
        "Pilot investigation, proposal, paper structure, poster, and individual defense"
      ],
      "clos": [
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Formulate a focused computing research question supported by a critical synthesis of relevant literature.",
          "id": "CLO 1",
          "etecRefs": [],
          "evidence": "Individual problem analysis, model and justified method selection"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Design and conduct a feasible pilot study with suitable baselines, measures, and reproducible artifacts.",
          "id": "CLO 2",
          "etecRefs": [],
          "evidence": "Reproducible investigation, results and limitations report"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Interpret results and limitations with appropriate statistical reasoning and validity analysis.",
          "id": "CLO 3",
          "etecRefs": [],
          "evidence": "Reproducible investigation, results and limitations report"
        },
        {
          "plo": "S3",
          "stage": "P",
          "statement": "Present a research proposal and report and defend methodological choices.",
          "id": "CLO 4",
          "etecRefs": [],
          "evidence": "Assessed report or presentation and individual responses"
        },
        {
          "plo": "V1",
          "stage": "P",
          "statement": "Apply research integrity, ethical participant handling, source attribution, and transparent AI disclosure.",
          "id": "CLO 5",
          "etecRefs": [],
          "evidence": "Professional or ethical decision case with justified safeguards"
        },
        {
          "plo": "V3",
          "stage": "P",
          "statement": "Prepare a feasible research schedule and data-management plan and identify further methodological learning needs.",
          "id": "CLO 6",
          "etecRefs": [],
          "evidence": "Plan or decision record with cost, risk and learning rationale"
        }
      ],
      "profile": "project",
      "group": null,
      "requirement": null,
      "resource": "ACM Digital Library and IEEE Xplore access, Zotero, a version-controlled experiment repository, and a research ethics protocol.",
      "name": "Research Methods in Computing",
      "placement": "Semester 5",
      "anchor": "cs-360",
      "etecTopics": [],
      "etecSLOs": [],
      "facilities": {
        "lab": "Computing research methods workspace",
        "hardware": "Individual computers, scholarly database access and controlled storage for research artifacts.",
        "software": "Zotero or equivalent reference manager, Python/R, Jupyter, Git, survey tool and word-processing or LaTeX tools.",
        "practice": "Literature synthesis, pilot investigations, experimental logs, analysis and reproducible proposals/reports.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "MATH 340": {
      "id": "MATH 340",
      "code": "MATH 340",
      "title": "Numerical Methods",
      "term": 7,
      "credits": 3,
      "category": "department",
      "lecture": 3,
      "practical": 0,
      "prerequisites": [
        "MATH 101",
        "MATH 120",
        "MATH 230"
      ],
      "summary": "Analyze numerical methods and their accuracy, stability, and convergence for scientific problems.",
      "topics": [
        "Floating-point arithmetic, truncation error, conditioning, and stability",
        "Root finding, convergence, and stopping criteria",
        "Linear systems, least squares, and numerical conditioning",
        "Interpolation, approximation, and error bounds",
        "Numerical differentiation, integration, and initial value problems",
        "Comparison of numerical solutions and interpretation of scientific uncertainty"
      ],
      "clos": [
        {
          "plo": "K1",
          "stage": "P",
          "statement": "Explain convergence, stability, and error in representative numerical methods.",
          "id": "CLO 1",
          "etecRefs": [],
          "evidence": "Individual conceptual examination and applied explanation"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Select and analyze a numerical method for a mathematical model.",
          "id": "CLO 2",
          "etecRefs": [],
          "evidence": "Individual problem analysis, model and justified method selection"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Compare numerical results with an analytical solution or convergence study and interpret limitations.",
          "id": "CLO 3",
          "etecRefs": [],
          "evidence": "Reproducible investigation, results and limitations report"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Implement root-finding and linear-system methods with justified stopping criteria.",
          "id": "CLO 4",
          "etecRefs": [],
          "evidence": "Individually demonstrated artifact with tests and correctness explanation"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Derive an interpolation or approximation method and estimate its error.",
          "id": "CLO 5",
          "etecRefs": [],
          "evidence": "Individual problem analysis, model and justified method selection"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Compute numerical derivatives, integrals and a simple initial-value solution and check convergence.",
          "id": "CLO 6",
          "etecRefs": [],
          "evidence": "Individually demonstrated artifact with tests and correctness explanation"
        }
      ],
      "profile": "lecture",
      "group": null,
      "requirement": null,
      "resource": "Instructor-supplied mathematical problem sets and Python or MATLAB demonstrations with error and convergence analyses.",
      "name": "Numerical Methods",
      "placement": "Semester 7",
      "anchor": "math-340",
      "etecTopics": [],
      "etecSLOs": [],
      "facilities": {
        "lab": "Numerical computing workspace",
        "hardware": "Standard workstation; local or hosted notebooks with saved environment files.",
        "software": "Python, Jupyter, NumPy, SciPy and Matplotlib, or GNU Octave.",
        "practice": "Root finding, numerical linear algebra, approximation, integration, ODE and convergence studies.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "CS 465": {
      "id": "CS 465",
      "code": "CS 465",
      "title": "Selected Topics",
      "term": null,
      "credits": 3,
      "category": "elective",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "CS 201"
      ],
      "summary": "Investigate an announced emerging computing topic through critical reading, an applied prototype or experiment, and evidence-based evaluation.",
      "topics": [
        "Current research and professional context for the announced topic",
        "Key concepts, architectures, and relevant computing foundations",
        "Tools, methods, and comparison with established approaches",
        "Prototype or experimental investigation of a focused problem",
        "Evaluation, reproducibility, security, ethics, and societal implications",
        "Technical report, demonstration, and individual defense"
      ],
      "clos": [
        {
          "plo": "K3",
          "stage": "P",
          "statement": "Explain the foundations and limitations of the announced computing topic.",
          "id": "CLO 1",
          "etecRefs": [],
          "evidence": "Individual conceptual examination and applied design explanation"
        },
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Build a prototype or experimental artifact that applies the topic to a defined problem.",
          "id": "CLO 2",
          "etecRefs": [],
          "evidence": "Individually demonstrated artifact with tests and correctness explanation"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Evaluate the artifact against a suitable baseline and report reproducible evidence.",
          "id": "CLO 3",
          "etecRefs": [],
          "evidence": "Reproducible investigation, results and limitations report"
        },
        {
          "plo": "V3",
          "stage": "P",
          "statement": "Identify learning needs and critically assess an emerging technology using reliable sources.",
          "id": "CLO 4",
          "etecRefs": [],
          "evidence": "Plan or decision record with cost, risk and learning rationale"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Formulate a focused problem and select a defensible baseline for the announced topic.",
          "id": "CLO 5",
          "etecRefs": [],
          "evidence": "Individual problem analysis, model and justified method selection"
        },
        {
          "plo": "V1",
          "stage": "P",
          "statement": "Assess ethical, privacy, security and societal implications of the proposed application.",
          "id": "CLO 6",
          "etecRefs": [],
          "evidence": "Professional or ethical decision case with justified safeguards"
        }
      ],
      "profile": "project",
      "group": "Selected topics",
      "requirement": "The department publishes the topic, additional prerequisites, learning outcomes, assessment, and primary textbook before registration. One 3-credit Selected Topics course may count within the nine elective credits.",
      "resource": "Topic-specific textbook, recent peer-reviewed papers, official documentation, and a reproducible project environment.",
      "name": "Selected Topics",
      "placement": "Semester 8 technical elective",
      "anchor": "cs-465",
      "etecTopics": [],
      "etecSLOs": [],
      "facilities": {
        "lab": "Topic-specific computing laboratory",
        "hardware": "Baseline workstations; any accelerator, device or dataset needs specified in the offering plan before registration.",
        "software": "The course leader publishes a supported toolchain, licenses/access arrangements, datasets and baseline tests for the announced topic.",
        "practice": "The approved offering brief maps the six CLOs to topic-specific lab exercises, resource capacity and an assessed prototype or investigation.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      }
    },
    "CS 466": {
      "id": "CS 466",
      "code": "CS 466",
      "title": "Bioinformatics and Computational Biology",
      "name": "Bioinformatics and Computational Biology",
      "term": null,
      "credits": 3,
      "category": "elective",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "BIO 101",
        "CS 220",
        "STAT 220"
      ],
      "summary": "Apply algorithms and reproducible computational methods to biological sequence data, with an undergraduate scope benchmarked against CMU and Prince Sultan University.",
      "topics": [
        "Biological questions, molecular foundations and computational representations",
        "Sequence formats, quality checks, biological databases and provenance",
        "String matching and dynamic-programming sequence alignment",
        "Graphs, read overlaps and introductory genome assembly",
        "Database similarity search and BLAST interpretation",
        "Statistical evidence, multiple comparisons and limits of biological inference",
        "Reproducible workflows, genomic privacy and responsible data use",
        "Implemented biological-data investigation and individual defense"
      ],
      "clos": [
        {
          "plo": "K3",
          "stage": "P",
          "statement": "Translate a biological sequence question into a computational problem with explicit assumptions.",
          "evidence": "Individual problem-formulation examination",
          "etecRefs": [],
          "id": "CLO 1"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Parse sequence data and implement quality and provenance checks.",
          "evidence": "Sequence-data practical",
          "etecRefs": [],
          "id": "CLO 2"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Implement a dynamic-programming sequence-alignment algorithm and verify its correctness.",
          "evidence": "Alignment implementation and tests",
          "etecRefs": [],
          "id": "CLO 3"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Model an introductory genome-assembly problem using graphs and explain algorithmic limitations.",
          "evidence": "Graph model and assembly analysis",
          "etecRefs": [],
          "id": "CLO 4"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Interpret similarity-search results using appropriate statistical evidence and stated limitations.",
          "evidence": "BLAST analysis and significance report",
          "etecRefs": [],
          "id": "CLO 5"
        },
        {
          "plo": "S4",
          "stage": "M",
          "statement": "Conduct a reproducible analysis of a public biological dataset with documented methods and uncertainty.",
          "evidence": "Versioned investigation repository",
          "etecRefs": [],
          "id": "CLO 6"
        },
        {
          "plo": "V1",
          "stage": "P",
          "statement": "Justify genomic-data privacy, consent, provenance and responsible-use safeguards.",
          "evidence": "Genomic-data ethics case",
          "etecRefs": [],
          "id": "CLO 7"
        },
        {
          "plo": "S3",
          "stage": "P",
          "statement": "Defend computational findings and distinguish evidence from biological speculation.",
          "evidence": "Individual report and oral defense",
          "etecRefs": [],
          "id": "CLO 8"
        }
      ],
      "profile": "lab",
      "group": "Business and health",
      "requirement": null,
      "resource": "CMU 02-251 computational biology benchmark; PSU CS 455 local 3-credit precedent (https://psu.edu.sa/en/CCIS/cs-cd); public sequence datasets, BLAST and Biopython documentation.",
      "placement": "Semester 8 technical elective",
      "anchor": "cs-466",
      "etecTopics": [],
      "etecSLOs": [],
      "facilities": {
        "lab": "Computational biology and sequence-analysis lab",
        "hardware": "Standard workstation; public or synthetic sequence datasets and allocated shared compute for demonstrations.",
        "software": "Python, Biopython, Jupyter, BLAST+, Git and a container or reproducible environment manager.",
        "practice": "Sequence parsing, alignment, assembly exercises and public-data investigation; no patient-identifiable genomic data or wet-lab work is required.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      },
      "topicHours": [
        8,
        8,
        8,
        8,
        8,
        8,
        6,
        6
      ]
    },
    "CS 467": {
      "id": "CS 467",
      "code": "CS 467",
      "title": "Information Retrieval and Natural Language Processing",
      "name": "Information Retrieval and Natural Language Processing",
      "term": null,
      "credits": 3,
      "category": "elective",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "CS 220",
        "CS 230",
        "CS 340"
      ],
      "summary": "Build and evaluate a text retrieval system, connecting lexical and semantic search with NLP foundations and retrieval-augmented applications.",
      "topics": [
        "Text representation, tokenization, normalization and Arabic/English text considerations",
        "Inverted indexes, index construction and query processing",
        "Lexical ranking, TF-IDF/BM25 and relevance judgments",
        "Embeddings, semantic retrieval and vector similarity",
        "Text classification, language models and structured information extraction",
        "Retrieval evaluation, ranking metrics, baselines and error analysis",
        "Retrieval-augmented generation, provenance, privacy and bias",
        "Search-system project and individual comparative evaluation"
      ],
      "clos": [
        {
          "plo": "K3",
          "stage": "P",
          "statement": "Explain lexical and semantic text representations and their retrieval trade-offs.",
          "evidence": "Individual representation and ranking examination",
          "etecRefs": [],
          "id": "CLO 1"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Implement tokenization, indexing and query processing for a text collection.",
          "evidence": "Indexing and query-processing practical",
          "etecRefs": [],
          "id": "CLO 2"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Select lexical or embedding-based retrieval for a defined information need.",
          "evidence": "Justified retrieval design",
          "etecRefs": [],
          "id": "CLO 3"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Apply an NLP method to classify text or extract structured information.",
          "evidence": "NLP implementation and tests",
          "etecRefs": [],
          "id": "CLO 4"
        },
        {
          "plo": "S4",
          "stage": "M",
          "statement": "Design a reproducible retrieval evaluation with relevance judgments, baselines and ranking metrics.",
          "evidence": "Comparative retrieval evaluation",
          "etecRefs": [],
          "id": "CLO 5"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Analyze retrieval-augmented answers for evidence support, retrieval failures and generation errors.",
          "evidence": "Grounding and error-analysis report",
          "etecRefs": [],
          "id": "CLO 6"
        },
        {
          "plo": "V1",
          "stage": "P",
          "statement": "Evaluate privacy, copyright and language or demographic bias in a retrieval application.",
          "evidence": "Responsible retrieval decision case",
          "etecRefs": [],
          "id": "CLO 7"
        },
        {
          "plo": "S3",
          "stage": "P",
          "statement": "Defend system choices and communicate evaluation limitations.",
          "evidence": "Individual technical report and defense",
          "etecRefs": [],
          "id": "CLO 8"
        }
      ],
      "profile": "lab",
      "group": "Data and AI",
      "requirement": null,
      "resource": "Current Jurafsky–Martin online manuscript (explicitly a draft), CMU 11-442 retrieval benchmark, public Arabic/English text collections and reproducible relevance judgments.",
      "placement": "Semester 8 technical elective",
      "anchor": "cs-467",
      "etecTopics": [],
      "etecSLOs": [],
      "facilities": {
        "lab": "Text analytics and retrieval lab",
        "hardware": "Standard workstation; small Arabic/English public corpora and optional shared GPU or bounded embedding API access.",
        "software": "Python, a supported NLP toolkit, scikit-learn, a local text-search engine or equivalent index, sentence-transformer embeddings, Git and evaluation scripts.",
        "practice": "Lexical and semantic retrieval, NLP baselines, relevance evaluation and grounded-answer analysis with reproducible local datasets.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      },
      "topicHours": [
        8,
        8,
        8,
        8,
        8,
        8,
        6,
        6
      ]
    },
    "CS 468": {
      "id": "CS 468",
      "code": "CS 468",
      "title": "Machine Learning Systems and MLOps",
      "name": "Machine Learning Systems and MLOps",
      "term": null,
      "credits": 3,
      "category": "elective",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "CS 340",
        "CS 250",
        "CS 230"
      ],
      "summary": "Engineer and evaluate an operating ML service through reproducible training, deployment, monitoring and responsible lifecycle controls.",
      "topics": [
        "ML system requirements, baselines and production failure modes",
        "Versioned data, features, experiments and reproducible training",
        "Model packaging, registries and batch/online serving",
        "Automated data/model tests, deployment gates and rollback",
        "Monitoring, drift, performance decay and retraining decisions",
        "Latency, resource cost, robustness and reliability experiments",
        "Security, privacy, subgroup performance and human oversight",
        "Operating ML service, incident exercise and individual defense"
      ],
      "clos": [
        {
          "plo": "K3",
          "stage": "M",
          "statement": "Explain ML lifecycle stages and distinguish model accuracy from operational system quality.",
          "evidence": "Individual ML-system analysis",
          "etecRefs": [],
          "id": "CLO 1"
        },
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Create a reproducible training workflow with versioned data, features and experiments.",
          "evidence": "Recreated training and provenance practical",
          "etecRefs": [],
          "id": "CLO 2"
        },
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Package and deploy a model service with explicit interfaces and automated tests.",
          "evidence": "Deployed service and test evidence",
          "etecRefs": [],
          "id": "CLO 3"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Implement release gates and verify model rollback under a stated failure condition.",
          "evidence": "Release and rollback exercise",
          "etecRefs": [],
          "id": "CLO 4"
        },
        {
          "plo": "S4",
          "stage": "M",
          "statement": "Evaluate model and service performance using baselines, resource measurements and drift scenarios.",
          "evidence": "Reproducible monitoring and failure investigation",
          "etecRefs": [],
          "id": "CLO 5"
        },
        {
          "plo": "S1",
          "stage": "M",
          "statement": "Justify retraining, monitoring and deployment choices under quality, cost and risk constraints.",
          "evidence": "Lifecycle decision record",
          "etecRefs": [],
          "id": "CLO 6"
        },
        {
          "plo": "V1",
          "stage": "M",
          "statement": "Assess security, privacy and subgroup risks and implement a human-oversight safeguard.",
          "evidence": "Assurance report and safeguard demonstration",
          "etecRefs": [],
          "id": "CLO 7"
        },
        {
          "plo": "V2",
          "stage": "M",
          "statement": "Coordinate an ML service handover with a runbook and individually evidenced responsibilities.",
          "evidence": "Team handover, contribution record and individual defense",
          "etecRefs": [],
          "id": "CLO 8"
        }
      ],
      "profile": "lab",
      "group": "Data and AI",
      "requirement": "CS 430 Machine Learning and CS 455 Cloud Computing & DevOps must be completed before or taken concurrently. Students choosing CS 468 in Semester 8 normally use a second elective slot for CS 430; the taught sequence schedules model preparation before service deployment.",
      "resource": "CMU 17-445 Machine Learning in Production benchmark, current tracking/serving documentation and small-model datasets. Prior or concurrent CS 430 is required.",
      "placement": "Semester 8 technical elective",
      "anchor": "cs-468",
      "etecTopics": [],
      "etecSLOs": [],
      "facilities": {
        "lab": "ML service engineering sandbox",
        "hardware": "Standard workstation; bounded CPU training datasets, container runtime and allocated cloud/remote lab capacity.",
        "software": "Python, scikit-learn, MLflow or equivalent tracking/registry, FastAPI or equivalent serving, Docker/Podman, Git, CI and monitoring tools.",
        "practice": "Versioned model pipeline, tested service, drift simulation and rollback; small models support all required assessments.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      },
      "corequisites": [
        "CS 430",
        "CS 455"
      ],
      "topicHours": [
        8,
        8,
        8,
        8,
        8,
        8,
        6,
        6
      ]
    },
    "CS 469": {
      "id": "CS 469",
      "code": "CS 469",
      "title": "Compiler Construction",
      "name": "Compiler Construction",
      "term": null,
      "credits": 3,
      "category": "elective",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "CS 320",
        "CS 330",
        "CS 240"
      ],
      "summary": "Implement a compiler for a small language, extending compulsory translation and interpreter foundations into code generation and optimization.",
      "topics": [
        "Compiler architecture and source-language specification",
        "Lexical analysis, grammars and parsing",
        "Abstract syntax, name resolution and type checking",
        "Intermediate representations and control-flow graphs",
        "Runtime organization and code generation",
        "Data-flow analysis and selected optimizations",
        "Diagnostics, correctness, testing and performance",
        "Small-language compiler project and individual defense"
      ],
      "clos": [
        {
          "plo": "K1",
          "stage": "P",
          "statement": "Explain compiler phases and connect them to formal-language and programming-language concepts.",
          "evidence": "Individual compiler architecture examination",
          "etecRefs": [],
          "id": "CLO 1"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Implement a lexer and parser for a specified small language.",
          "evidence": "Front-end implementation and tests",
          "etecRefs": [],
          "id": "CLO 2"
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Perform name resolution and type checking and construct an intermediate representation.",
          "evidence": "Semantic-analysis practical",
          "etecRefs": [],
          "id": "CLO 3"
        },
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Generate executable or virtual-machine code with a documented runtime model.",
          "evidence": "Code-generation project demonstration",
          "etecRefs": [],
          "id": "CLO 4"
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Apply a data-flow analysis and justify a semantics-preserving optimization.",
          "evidence": "Optimization and correctness argument",
          "etecRefs": [],
          "id": "CLO 5"
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Evaluate correctness and performance with systematic and differential tests.",
          "evidence": "Reproducible compiler test and benchmark suite",
          "etecRefs": [],
          "id": "CLO 6"
        },
        {
          "plo": "V1",
          "stage": "P",
          "statement": "Identify unsafe translation behavior and justify diagnostic and implementation safeguards.",
          "evidence": "Compiler robustness case",
          "etecRefs": [],
          "id": "CLO 7"
        },
        {
          "plo": "S3",
          "stage": "P",
          "statement": "Defend compiler design choices and communicate implementation limitations.",
          "evidence": "Individual technical report and defense",
          "etecRefs": [],
          "id": "CLO 8"
        }
      ],
      "profile": "lab",
      "group": "Algorithms and quantum",
      "requirement": null,
      "resource": null,
      "placement": "Semester 8 technical elective",
      "anchor": "cs-469",
      "etecTopics": [],
      "etecSLOs": [],
      "facilities": {
        "lab": "Language implementation and compiler lab",
        "hardware": "Standard Linux-capable workstation and sandboxed test execution.",
        "software": "Supported Python/C++/Java toolchain, lexer/parser generator where appropriate, LLVM or a small virtual-machine target, Git and automated test tools.",
        "practice": "Implement and test a small compiler with staged front end, semantic checks, code generation and a limited optimization.",
        "baseline": "Accessible teaching room with display and whiteboard; LMS and library access. Practical work uses one account and workstation per student, normally a multicore CPU, 16 GB RAM and SSD storage, or an equivalent remotely accessible lab image; shared demonstrations do not replace individual assessed access.",
        "provision": "A supported, course-tested software image, repository access and reproducible environment instructions are provided before teaching. Tools below are the planned teaching stack; equivalent supported tools may be approved if they support the same assessed tasks."
      },
      "topicHours": [
        8,
        8,
        8,
        8,
        8,
        8,
        6,
        6
      ]
    }
  },
  "textbooks": {
    "CS 101": {
      "title": "Think Python: How to Think Like a Computer Scientist",
      "citation": "Allen B. Downey · O’Reilly · 3rd ed. · 2024",
      "url": "https://www.oreilly.com/library/view/think-python-3rd/9781098155421/"
    },
    "MATH 101": {
      "title": "Thomas’ Calculus: Early Transcendentals, SI Units",
      "citation": "Joel Hass, Christopher Heil, and Maurice D. Weir · Pearson · 15th ed. · 2024",
      "url": "https://www.pearson.com/en-gb/subject-catalog/p/thomas-calculus-early-transcendentals/P200000010771/9781292725901"
    },
    "CS 103": {
      "title": "Discrete Mathematics and Its Applications",
      "citation": "Kenneth H. Rosen · McGraw Hill · 2025 release",
      "url": "https://www.mheducation.com/highered/product/discrete-mathematics-and-its-applications-rosen.html"
    },
    "PHYS 101": {
      "title": "University Physics with Modern Physics",
      "citation": "Hugh D. Young and Roger A. Freedman · Pearson · 16th ed. · © 2027 (released 2026)",
      "url": "https://www.pearson.com/en-us/subject-catalog/p/university-physics-with-modern-physics/P200000012703"
    },
    "COMM 101": {
      "title": "Technical Communication",
      "citation": "Mike Markel and Stuart A. Selber · Macmillan Learning · 14th ed. · © 2025",
      "url": "https://store.macmillanlearning.com/us/product/Technical-Communication/p/1319414257"
    },
    "CS 102": {
      "title": "Python Object-Oriented Programming",
      "citation": "Steven F. Lott and Dusty Phillips · Packt · 5th ed. · 2025",
      "url": "https://www.oreilly.com/library/view/python-object-oriented-programming/9781836642596/"
    },
    "MATH 120": {
      "title": "Introduction to Linear Algebra",
      "citation": "Gilbert Strang · Wellesley-Cambridge Press · 6th ed. · 2023",
      "url": "https://wellesleycambridge.com/books/introduction-to-linear-algebra-6th-edition"
    },
    "PHYS 102": {
      "title": "University Physics with Modern Physics",
      "citation": "Hugh D. Young and Roger A. Freedman · Pearson · 16th ed. · © 2027 (released 2026)",
      "url": "https://www.pearson.com/en-us/subject-catalog/p/university-physics-with-modern-physics/P200000012703"
    },
    "ARAB 101": {
      "title": "الكتابة الوظيفية والإبداعية",
      "citation": "ماهر شعبان عبدالباري · دار المسيرة · الطبعة الرابعة · طباعة ٢٠٢٥",
      "url": "https://www.massira.jo/content/%D8%A7%D9%84%D9%83%D8%AA%D8%A7%D8%A8%D8%A9-%D8%A7%D9%84%D9%88%D8%B8%D9%8A%D9%81%D9%8A%D8%A9-%D9%88%D8%A7%D9%84%D8%A7%D8%A8%D8%AF%D8%A7%D8%B9%D9%8A%D8%A9"
    },
    "CS 201": {
      "title": "Data Structures & Algorithms in Python",
      "citation": "John Canning, Alan Broder, and Robert Lafore · Pearson · 1st ed. · 2023",
      "url": "https://www.pearson.com/en-us/subject-catalog/p/data-structures-algorithms-in-python/P200000007285/9780134855899"
    },
    "CS 210": {
      "title": "Essentials of Computer Organization and Architecture",
      "citation": "Linda Null · Jones & Bartlett Learning · 6th ed. · © 2024",
      "url": "https://www.jblearning.com/science-technology/computing/computer-architecture/productdetails/9781284259438"
    },
    "STAT 220": {
      "title": "Probability and Statistics for Engineering and the Sciences",
      "citation": "Leif Ellingson and Anna Panorska · Cengage · 10th ed. · © 2027 (released 2026)",
      "url": "https://www.cengage.com/c/probability-and-statistics-for-engineering-and-the-sciences-10e-ellingson-panorska/9798214023823"
    },
    "CS 230": {
      "title": "Database Systems: Design, Implementation, & Management",
      "citation": "Carlos Coronel and Steven Morris · Cengage · 15th ed. · © 2027 (released 2026)",
      "url": "https://www.cengage.com/c/new-edition/9798214410241/"
    },
    "ISLM 101": null,
    "CS 220": {
      "title": "Introduction to Algorithms",
      "citation": "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein · MIT Press · 4th ed. · 2022",
      "url": "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/"
    },
    "CS 240": {
      "title": "Dive Into Systems: A Gentle Introduction to Computer Systems",
      "citation": "Suzanne J. Matthews, Tia Newhall, and Kevin C. Webb · No Starch Press · 1st ed. · 2022",
      "url": "https://nostarch.com/dive-systems"
    },
    "CS 250": {
      "title": "Essentials of Software Engineering",
      "citation": "Frank Tsui, Orlando Karam, and Barbara Bernal · Jones & Bartlett Learning · 5th ed. · © 2023",
      "url": "https://www.jblearning.com/catalog/productdetails/9781284228991"
    },
    "MATH 230": {
      "title": "Thomas’ Calculus: Early Transcendentals, SI Units",
      "citation": "Joel Hass, Christopher Heil, and Maurice D. Weir · Pearson · 15th ed. · 2024",
      "url": "https://www.pearson.com/en-gb/subject-catalog/p/thomas-calculus-early-transcendentals/P200000010771/9781292725901"
    },
    "CS 260": {
      "title": "Computer Networking: A Top-Down Approach",
      "citation": "James F. Kurose and Keith W. Ross · Pearson · 9th ed. · © 2026 (released 2025)",
      "url": "https://www.pearson.com/en-us/subject-catalog/p/computer-networking-a-top-down-approach/P200000013385/9780135429334"
    },
    "CS 310": {
      "title": "Operating System Concepts",
      "citation": "Abraham Silberschatz, Peter B. Galvin, and Greg Gagne · Wiley · 10th ed. · 2018",
      "url": "https://www.wiley.com/en-us/operating-system-concepts-10th-edition-p-9781119320913"
    },
    "CS 320": {
      "title": "Programming Language Pragmatics",
      "citation": "Michael L. Scott and Jonathan Aldrich · Morgan Kaufmann · 5th ed. · 2025",
      "url": "https://shop.elsevier.com/books/programming-language-pragmatics/scott/978-0-323-99966-3"
    },
    "CS 330": {
      "title": "An Introduction to Formal Languages and Automata",
      "citation": "Peter Linz and Susan H. Rodger · Jones & Bartlett Learning · 7th ed. · 2023",
      "url": "https://www.jflap.org/linzbook7/"
    },
    "CS 340": {
      "title": "Artificial Intelligence: Foundations of Computational Agents",
      "citation": "David L. Poole and Alan K. Mackworth · Cambridge University Press · 3rd ed. · 2023",
      "url": "https://www.cambridge.org/highereducation/books/artificial-intelligence/C113F6CE284AB00F5489EBA5A59B93B7"
    },
    "CS 350": {
      "title": "Interaction Design: Beyond Human–Computer Interaction",
      "citation": "Yvonne Rogers, Helen Sharp, and Jennifer Preece · Wiley · 6th ed. · 2023",
      "url": "https://www.wiley-vch.de/de/fachgebiete/computer-und-informatik/interaction-design-978-1-119-90109-9"
    },
    "CS 390": {
      "title": "Business Communication Today",
      "citation": "Courtland L. Bovée and John V. Thill · Pearson · 16th ed. · © 2026 (released 2025)",
      "url": "https://www.pearson.com/en-us/subject-catalog/p/business-communication-today/P200000012878/9780135354711"
    },
    "CS 401": {
      "title": "An Introduction to Parallel Programming",
      "citation": "Peter Pacheco and Matthew Malensek · Morgan Kaufmann · 2nd ed. · 2021",
      "url": "https://shop.elsevier.com/books/an-introduction-to-parallel-programming/pacheco/978-0-12-804605-0"
    },
    "CS 402": {
      "title": "Computer Security: Principles and Practice",
      "citation": "William Stallings and Lawrie Brown · Pearson · 5th ed. · © 2024",
      "url": "https://www.pearson.com/en-us/subject-catalog/p/computer-security-principles-and-practice/P200000010333/9780138091712"
    },
    "CS 403": {
      "title": "Fundamentals of Computer Graphics",
      "citation": "Steve Marschner and Peter Shirley (eds.) · CRC Press · 5th ed. · © 2021",
      "url": "https://www.routledge.com/Fundamentals-of-Computer-Graphics/Marschner-Shirley/p/book/9780367505035"
    },
    "BUS 401": {
      "title": "Project Management: A Systems Approach to Planning, Scheduling, and Controlling",
      "citation": "Harold Kerzner · Wiley · 14th ed. · 2025",
      "url": "https://www.wiley-vch.de/en/areas-interest/engineering/project-management-978-1-394-29003-1"
    },
    "CS 410": {
      "title": "Designing Software Architectures: A Practical Approach",
      "citation": "Humberto Cervantes and Rick Kazman · Addison-Wesley Professional · 2nd ed. · 2024",
      "url": "https://www.pearson.com/en-us/subject-catalog/p/designing-software-architectures/P200000010265/9780138108021"
    },
    "CS 411": {
      "title": "Modern Software Engineering: Doing What Works to Build Better Software Faster",
      "citation": "David Farley · Addison-Wesley Professional · 1st ed. · © 2022",
      "url": "https://www.pearson.com/en-us/subject-catalog/p/Farley-Modern-Software-Engineering-Doing-What-Really-Works-to-Build-Better-Software-Faster/P200000009466"
    },
    "CS 370": {
      "title": "Fundamentals of Web Development",
      "citation": "Randy Connolly and Ricardo Hoar · Pearson · 3rd ed. · © 2022",
      "url": "https://www.pearson.com/en-us/subject-catalog/p/fundamentals-of-web-development/P200000003214/9780136792857"
    },
    "CS 430": {
      "title": "An Introduction to Statistical Learning: with Applications in Python",
      "citation": "Gareth James et al. · Springer · 1st Python ed. · 2023",
      "url": "https://link.springer.com/book/10.1007/978-3-031-38747-0"
    },
    "CS 451": {
      "title": "Fundamentals of Data Engineering: Plan and Build Robust Data Systems",
      "citation": "Joe Reis and Matt Housley · O’Reilly · 1st ed. · 2022",
      "url": "https://www.oreilly.com/library/view/fundamentals-of-data/9781098108298/"
    },
    "CS 452": {
      "title": "Python Data Science Handbook",
      "citation": "Jake VanderPlas · O’Reilly · 2nd ed. · 2022",
      "url": "https://www.oreilly.com/library/view/python-data-science/9781098121211/"
    },
    "CS 453": {
      "title": "Biomedical Informatics: Computer Applications in Health Care and Biomedicine",
      "citation": "Edward H. Shortliffe and James J. Cimino (eds.) · Springer · 5th ed. · 2021",
      "url": "https://link.springer.com/book/10.1007/978-3-030-58721-5"
    },
    "CS 454": {
      "title": "Software Product Management: The ISPMA-Compliant Study Guide and Handbook",
      "citation": "Hans-Bernd Kittlaus · Springer · 2nd ed. · 2022",
      "url": "https://link.springer.com/book/10.1007/978-3-662-65116-2"
    },
    "CS 455": {
      "title": "Cloud Computing: Concepts, Technology, Security, and Architecture",
      "citation": "Thomas Erl and Eric Barceló Monroy · Pearson · 2nd ed. · © 2024",
      "url": "https://www.pearson.com/en-us/subject-catalog/p/cloud-computing-concepts-technology-and-architecture-second-edition/P200000009788/9780138052188"
    },
    "CS 456": {
      "title": "Alice and Bob Learn Secure Coding",
      "citation": "Tanya Janca · Wiley · 1st ed. · © 2025",
      "url": "https://onlinelibrary.wiley.com/doi/book/10.1002/9781394277179"
    },
    "CS 457": {
      "title": "Mastering Blockchain",
      "citation": "Imran Bashir · Packt · 4th ed. · 2023",
      "url": "https://www.oreilly.com/library/view/mastering-blockchain-fourth/9781803241067/"
    },
    "CS 458": {
      "title": "Robotics, Vision and Control: Fundamental Algorithms in Python",
      "citation": "Peter Corke · Springer · 3rd ed. · 2023",
      "url": "https://link.springer.com/book/10.1007/978-3-031-06469-2"
    },
    "CS 459": {
      "title": "Introduction to UAV Systems",
      "citation": "Paul G. Fahlstrom, Thomas J. Gleason, and Mohammad H. Sadraey · Wiley · 5th ed. · 2022",
      "url": "https://www.wiley-vch.de/en/areas-interest/engineering/mechanical-engineering-10me/aeronautic-aerospace-engineering-10me7/introduction-to-uav-systems-978-1-119-80261-7"
    },
    "CS 460": {
      "title": "Applying Artificial Intelligence in Cybersecurity Analytics and Cyber Threat Detection",
      "citation": "Shilpa Mahajan, Mehak Khurana, and Vania Vieira Estrela (eds.) · Wiley · 1st ed. · 2024",
      "url": "https://onlinelibrary.wiley.com/doi/book/10.1002/9781394196470"
    },
    "CS 461": {
      "title": "Guide to Competitive Programming: Learning and Improving Algorithms Through Contests",
      "citation": "Antti Laaksonen · Springer · 3rd ed. · 2024",
      "url": "https://link.springer.com/book/10.1007/978-3-031-61794-2"
    },
    "CS 462": {
      "title": "A First Introduction to Quantum Computing and Information",
      "citation": "Bernard Zygelman · Springer · 2nd ed. · 2024",
      "url": "https://link.springer.com/book/10.1007/978-3-031-66425-0"
    },
    "CS 463": {
      "title": "Internet of Things A to Z: Technologies and Applications",
      "citation": "Qusay F. Hassan (ed.) · Wiley · 2nd ed. · 2025",
      "url": "https://www.wiley-vch.de/en/areas-interest/engineering/internet-of-things-a-to-z-978-1-394-28046-9"
    },
    "CS 464": {
      "title": "Hands-On Large Language Models: Language Understanding and Generation",
      "citation": "Jay Alammar and Maarten Grootendorst · O’Reilly · 1st ed. · 2024",
      "url": "https://www.oreilly.com/library/view/hands-on-large-language/9781098150952/"
    },
    "ENG 101": {
      "title": "Technical English 2",
      "citation": "David Bonamy · Pearson · 2nd ed. · 2022",
      "url": "https://www.pearson.com/nl/en_NL/english-language-teaching/business-english-courses/technical-english.html"
    },
    "BIO 101": {
      "title": "Campbell Biology",
      "citation": "Lisa A. Urry, Peter V. Minorsky, Kerry L. Hull and Rebecca B. Orr · Pearson · 13th ed. · 2026 copyright",
      "url": "https://www.pearson.com/en-us/subject-catalog/p/campbell-s-biology/P200000014184/9780135455890"
    },
    "CS 360": {
      "title": "Researching Information Systems and Computing",
      "citation": "Briony J. Oates, Marie Griffiths and Rachel McLean · Sage · 2nd ed. · 2026 publisher release",
      "url": "https://www.sagepub.com/shop/buy-a-book/researching-information-systems-and-computing-2-272083"
    },
    "MATH 340": {
      "title": "Applied Numerical Methods with MATLAB for Engineers and Scientists",
      "citation": "Steven C. Chapra · McGraw Hill · 5th ed. · 2023",
      "url": "https://www.mheducation.com/highered/product/applied-numerical-methods-with-matlab-for-engineers-and-scientists-chapra"
    },
    "CS 465": {
      "title": "AI Engineering: Building Applications with Foundation Models",
      "citation": "Chip Huyen · O'Reilly · 1st ed. · 2025 · Illustrative offering on agentic computing and evaluation",
      "url": "https://www.oreilly.com/library/view/ai-engineering/9781098166298/"
    },
    "CS 466": {
      "title": "Bioinformatics Algorithms: An Active Learning Approach",
      "citation": "Phillip Compeau and Pavel Pevzner · Active Learning Publishers · 3rd ed.",
      "url": "https://www.bioinformaticsalgorithms.org/product-page/bioinformatics-algorithms-3rd-edition"
    },
    "CS 467": {
      "title": "Speech and Language Processing",
      "citation": "Daniel Jurafsky and James H. Martin · 3rd ed. online draft · 19 August 2026",
      "url": "https://web.stanford.edu/~jurafsky/slp3/"
    },
    "CS 468": {
      "title": "Designing Machine Learning Systems",
      "citation": "Chip Huyen · O’Reilly · 1st ed. · 2022",
      "url": "https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/"
    },
    "CS 469": {
      "title": "Engineering a Compiler",
      "citation": "Keith D. Cooper and Linda Torczon · Morgan Kaufmann · 3rd ed. · 2022",
      "url": "https://shop.elsevier.com/books/engineering-a-compiler/cooper/978-0-12-815412-0"
    }
  },
  "electiveAreas": {
    "Data and AI": [
      "CS 430",
      "CS 452",
      "CS 464",
      "CS 467",
      "CS 468"
    ],
    "Business and health": [
      "CS 453",
      "CS 454",
      "CS 466"
    ],
    "Systems and security": [
      "CS 456",
      "CS 457",
      "CS 460"
    ],
    "Robotics and IoT": [
      "CS 458",
      "CS 459",
      "CS 463"
    ],
    "Algorithms and quantum": [
      "CS 461",
      "CS 462",
      "CS 469"
    ],
    "Graphics and interaction": [
      "CS 403"
    ],
    "Selected topics": [
      "CS 465"
    ]
  },
  "electiveReferences": {
    "CS 457": {
      "label": "Stanford CS 251 · Blockchain Technologies",
      "url": "https://bulletin.stanford.edu/courses/2171371/tab-aoYks",
      "rationale": "Builds on networks and data management with consensus, smart contract testing, and decisions about when a ledger is appropriate."
    },
    "CS 458": {
      "label": "MIT 6.4200 · Robotics: Science and Systems",
      "url": "https://student.mit.edu/catalog/m6d.html",
      "rationale": "Connects AI and linear algebra to localization, planning, and control in a simulated mobile robot."
    },
    "CS 459": {
      "label": "University of Bristol · Aerial Robotics curriculum",
      "url": "https://www.bristol.ac.uk/study/postgraduate/taught/msc-aerial-robotics/",
      "rationale": "Adapts flight dynamics, sensing, and navigation to an undergraduate computing lab built around simulation and mission testing."
    },
    "CS 460": {
      "label": "UW–Stevens Point AI 321 · Artificial Intelligence for Cybersecurity",
      "url": "https://catalog.uwsp.edu/courses/1215181",
      "rationale": "Extends AI and networking into defensive monitoring, detection evaluation, and assurance of the AI pipeline."
    },
    "CS 461": {
      "label": "NUS CS 3233 · Competitive Programming",
      "url": "https://www.comp.nus.edu.sg/~stevenha/cs3233.html",
      "rationale": "Deepens algorithm design through timed problem solving, complexity analysis, and review of working solutions."
    },
    "CS 462": {
      "label": "NUS CS 4268 · Quantum Computing",
      "url": "https://www.comp.nus.edu.sg/programmes/ug/focus/algo/",
      "rationale": "Uses linear algebra and algorithms to study quantum circuits and compare solutions in a simulator."
    },
    "CS 463": {
      "label": "University of Illinois CS 437 · Topics in Internet of Things",
      "url": "https://courses.illinois.edu/schedule/2026/fall/CS/437",
      "rationale": "Applies systems programming and networking to connected sensors, edge processing, and device lifecycle security."
    },
    "CS 464": {
      "label": "Stanford CS 336 · Language Modeling from Scratch",
      "url": "https://bulletin.stanford.edu/courses/2255541/tab-aoYks",
      "rationale": "Adapts the language-model lifecycle to small models, retrieval, and evidence-based evaluation in an undergraduate lab."
    },
    "CS 403": {
      "label": "CMU 15-462 Computer Graphics",
      "url": "https://15462.courses.cs.cmu.edu/",
      "rationale": "A deeper elective rendering and geometry project follows the required HCI graphics strand; no required core coverage depends on this elective."
    },
    "CS 430": {
      "label": "Stanford CS 229 Machine Learning",
      "url": "https://cs229.stanford.edu/",
      "rationale": "Adds mathematical and experimental depth beyond the required AI course; all students retain assessed ML foundations and AI ethics in CS 340."
    },
    "CS 466": {
      "label": "CMU 02-251 and PSU CS 455 Computational Bioinformatics",
      "url": "https://www.cmu.edu/cbd/education/courses-offered/02-251-great-ideas-in-comp-bio.html",
      "rationale": "Adopts algorithmic biological-data problems and an implemented investigation. PSU provides a local three-credit CS precedent. Fakeeh uses BIO 101, Algorithms and Statistics preparation and a bounded sequence-analysis project."
    },
    "CS 467": {
      "label": "CMU 11-442 Search Engines",
      "url": "https://boston.lti.cs.cmu.edu/classes/11-642/description.html",
      "rationale": "Adopts indexing, lexical/semantic retrieval and measured relevance; adds selected NLP and Arabic/English examples within one undergraduate course."
    },
    "CS 468": {
      "label": "CMU 17-445 Machine Learning in Production",
      "url": "https://mlip-cmu.github.io/f2026/",
      "rationale": "Adopts reproducible lifecycle, serving, monitoring and assurance. Fakeeh uses small models and permits prior or concurrent ML and cloud study in the final semester."
    },
    "CS 469": {
      "label": "CMU 15-411 Compiler Design",
      "url": "https://www.cs.cmu.edu/~15411/",
      "rationale": "Extends compulsory CS 320/CS 330 foundations through a small-language compiler. Advanced optimization is limited to an achievable three-credit project."
    }
  },
  "electiveLocalPrecedent": "KAU’s public CS overview includes advanced programming, intelligent systems, software engineering and information security, supporting a broad elective portfolio.",
  "healthElectiveFit": "CS 453 Health Informatics uses one of the three existing 3-credit elective slots in Semester 8. Students can apply it during Capstone II; hospital problems identified during co-op can inform the earlier project proposal. CS 230, STAT 220 and CS 350 prepare students to model clinical data, evaluate evidence and test usability.",
  "healthBenchmarks": [
    {
      "label": "University of Washington · BIME 300",
      "url": "https://www.washington.edu/students/crscat/bime.html#bime300",
      "model": "An upper-division course in the undergraduate Informatics health option. Students explore electronic health records, analysis of EHR data, and translational bioinformatics through readings and team projects.",
      "adopted": "Teach EHR concepts and data quality through a team project that applies a computing technique to a health workflow.",
      "difference": "Focus the single Fakeeh elective on hospital workflows, interoperability, and evaluation. This gives CS students time to build and test an application in one semester."
    },
    {
      "label": "Georgia Tech · CS 6440",
      "url": "https://omscs.gatech.edu/cs-6440-intro-health-informatics",
      "model": "A graduate CS course with labs and a team practicum. The syllabus covers clinical terminology, FHIR data exchange, the OMOP research data model, and secure application development.",
      "adopted": "Use FHIR labs and a working prototype with validation tests and a privacy and safety review.",
      "difference": "Scope the undergraduate project to one workflow, a small set of resources, and synthetic records. This fits the prerequisites and the 3-credit workload."
    }
  ],
  "healthSaudi": {
    "context": "Invite Fakeeh Hospital's clinical informatics team to propose a workflow and review the prototype. For Saudi context, use the NPHIES eligibility exchange as a worked example of FHIR. Laboratories and projects use synthetic records in a teaching environment.",
    "label": "Saudi NPHIES FHIR implementation guide",
    "url": "https://portal.nphies.sa/ig/"
  },
  "benchmarks": [
    {
      "name": "Massachusetts Institute of Technology",
      "program": "Computer Science and Engineering · Course 6-3",
      "region": "International",
      "model": "Course 6-3 connects software construction and computer organization with algorithms, systems, theory, and communication-intensive subjects. Students also choose advanced subjects.",
      "adopted": "CS 210 and CS 240 connect computer organization to systems programming. CS 250 requires tested team software, and both capstone courses assess technical writing and oral defense.",
      "difference": "MIT develops advanced depth through a choice of upper-level subjects. Fakeeh reserves a full-time co-op and two capstone courses so every student produces assessed workplace and project evidence.",
      "url": "https://catalog.mit.edu/degree-charts/computer-science-engineering-course-6-3/"
    },
    {
      "name": "Carnegie Mellon University",
      "program": "B.S. in Computer Science",
      "region": "International",
      "model": "The core includes functional programming, computer systems, theory, and sequential and parallel algorithms. Students complete a concentration within the School of Computer Science or a minor outside it.",
      "adopted": "Fakeeh requires CS 320 Programming Language Concepts, CS 330 Theory of Computation, and CS 401 Parallel and Distributed Computing alongside the programming and algorithms sequence.",
      "difference": "Fakeeh students choose three technical electives within one CS degree. This gives students flexibility to pursue depth while reserving credits for the required co-op and two capstone courses within the 130-credit plan.",
      "url": "https://coursecatalog.web.cmu.edu/schools-colleges/schoolofcomputerscience/undergraduatecomputerscience/computer-science-bs/"
    },
    {
      "name": "National University of Singapore",
      "program": "BComp in Computer Science · 2026/27 cohort",
      "region": "International",
      "model": "A common CS foundation leads to at least one designated CS focus area. Industry experience can take several forms, including three- or six-month placements. Eligible students may choose a dissertation route.",
      "adopted": "Fakeeh builds common computing foundations before technical electives and requires assessed industry experience after students have completed the preparatory courses.",
      "difference": "Fakeeh schedules a single 24-week co-op across Semester 6 and the following summer and asks students to choose three technical electives. A common placement window helps the college plan supervision and assess readiness for Capstone I.",
      "url": "https://www.comp.nus.edu.sg/cug/per-cohort/cs/cs-26-27/"
    },
    {
      "name": "King Abdulaziz University",
      "program": "B.Sc. in Computer Science · FCIT",
      "region": "Saudi Arabia",
      "model": "The published Jeddah FCIT plan includes CS 203 Advanced Programming Techniques, CS 396 Web Application Development, CS 490 Mobile Application Development, CS 222 Discrete Structures, CIS 291 Computing Issues and Ethics, and CIS 393 Workplace Skills for Technology Specialists.",
      "adopted": "Fakeeh combines web and mobile implementation in CS 370, reinforces advanced construction across CS 102, CS 240, CS 250 and CS 320, and makes discrete foundations explicit in CS 103. Workplace and ethics outcomes are assessed across required courses, co-op and capstone.",
      "difference": "KAU assigns separate courses to web and mobile development and to workplace skills and computing ethics. Fakeeh uses one focused application course and integrated professional practice to preserve the 130-credit limit, with individual practical evidence and a full-time co-op.",
      "url": "https://kau.edu.sa/en/programs/bachelor-of-science-in-computer-science-280",
      "note": "Source: KAU Jeddah FCIT public Faculty Requirements, Program Requirements and Course Descriptions tabs, reviewed 19 November 2026. The comparison uses the Jeddah program."
    },
    {
      "name": "King Fahd University of Petroleum & Minerals",
      "program": "B.S. in Computer Science",
      "region": "Saudi Arabia",
      "model": "The published BS page reports 128 semester credits and describes two industry options, eight weeks of summer training or a 15-week internship.",
      "adopted": "Fakeeh gives students structured industry experience in CS 390 so they can apply computing knowledge in a professional setting.",
      "difference": "Fakeeh requires one 24-week placement spanning Semester 6 and summer. This gives students time to complete a substantial assignment and use midpoint feedback before their final appraisal.",
      "url": "https://ics.kfupm.edu.sa/academics/undergraduate-programs/b.s.-in-computer-science"
    },
    {
      "name": "Effat University",
      "program": "BSc in Computer Science",
      "region": "Saudi Arabia · Private",
      "model": "The published 136-credit plan includes two co-op courses across a summer and Semester 7, plus two senior project courses. The first project course precedes co-op in the published sequence.",
      "adopted": "Fakeeh combines substantial supervised workplace experience with a staged senior project and faculty assessment of both.",
      "difference": "Fakeeh records co-op in one 9-credit course in Semester 6 and the following summer. Both capstone courses follow the placement so students can apply their workplace experience when defining the project.",
      "url": "https://www.effatuniversity.edu.sa/English/academics/Undergraduate/CoE/Pages/cs.aspx"
    },
    {
      "name": "Alfaisal University",
      "program": "Bachelor of Software Engineering · Related computing comparator",
      "region": "Saudi Arabia · Private · Riyadh",
      "model": "The published 130-credit Software Engineering degree combines university writing, technical writing, software design, testing, electives, and an internship. The catalogue also offers undergraduate research and special topics electives.",
      "adopted": "CS 250 and CS 370 develop software construction and delivery. CS 360 makes research preparation explicit, and CS 465 provides a controlled route for emerging topics.",
      "difference": "The proposed CS degree requires algorithms, computation theory, programming languages, and parallel computing, followed by a 24-week co-op and two capstone courses. These choices support the broader CS award and the hospital partnership.",
      "url": "https://catalog.alfaisal.edu/college-of-engineering-and-advanced-computing/bachelor-major-minor-track/bachelor-of-software"
    },
    {
      "name": "University of Business and Technology",
      "program": "BSc Software Engineering · Related computing comparator",
      "region": "Saudi Arabia · Private · Jeddah",
      "model": "UBT's engineering offering includes Software Engineering. Its published catalogue combines programming, software processes, requirements, data, networks, and security with a three-credit Technical English course.",
      "adopted": "ENG 101 follows the subject-specific English model with computing reading, listening, vocabulary, and explanations. CS 250 develops assessed software teamwork and quality practices.",
      "difference": "The CS plan adds explicit research preparation and a required theory and systems sequence. Health applications appear through CS 453 and hospital-informed projects within a 130-credit plan.",
      "url": "https://www.ubt.edu.sa/college/ubtce",
      "note": "The software and English course descriptions are published in UBT's OPERA course catalogue."
    },
    {
      "name": "Prince Sultan University",
      "program": "BSc Computer Science",
      "region": "Saudi Arabia · Private · Riyadh",
      "model": "The published CS structure totals 134 credits and includes English writing, research writing, probability and statistics, computing ethics, and a ten-credit co-op.",
      "adopted": "ENG 101 and COMM 101 provide staged language and communication development. STAT 220 uses the statistics discipline code, and CS 360 assesses computing research methods.",
      "difference": "The degree totals 130 credits with one Arabic and one Islamic culture course, a nine-credit placement across Semester 6 and summer, and two final-year capstone courses. A dedicated research methods course prepares students before placement.",
      "url": "https://psu.edu.sa/en/CCIS/cs-program-structure"
    }
  ],
  "benchmarkSections": [
    [
      "model",
      "Their model"
    ],
    [
      "adopted",
      "What we adopted from them"
    ],
    [
      "difference",
      "Where we differ and why"
    ]
  ],
  "benchmarkCourses": {
    "CIS 393": {
      "title": "Workplace Skills for Technology Specialists",
      "summary": "A dedicated compulsory faculty requirement in the published KAU Jeddah CS plan.",
      "facts": [
        [
          "University",
          "King Abdulaziz University · Jeddah FCIT"
        ],
        [
          "Status",
          "Compulsory"
        ],
        [
          "Credit hours",
          "3"
        ],
        [
          "Published prerequisite",
          "None listed"
        ]
      ],
      "detail": "Fakeeh assesses workplace capabilities in communication, software and application projects, co-op and capstone.",
      "detailHeading": "Coverage and comparison",
      "source": "KAU Jeddah public Faculty Requirements, Program Requirements and Course Descriptions tabs, reviewed 19 November 2026. This is a course glance rather than the complete approved specification.",
      "url": "https://kau.edu.sa/en/programs/bachelor-of-science-in-computer-science-280"
    },
    "CS 203": {
      "title": "Advanced Programming Techniques",
      "summary": "KAU describes advanced abstraction, modularity, memory management and efficient construction of larger systems.",
      "facts": [
        [
          "University",
          "King Abdulaziz University · Jeddah FCIT"
        ],
        [
          "Status",
          "Compulsory"
        ],
        [
          "Credit hours",
          "4"
        ],
        [
          "Published prerequisite",
          "CS 202"
        ]
      ],
      "detail": "Fakeeh distributes this depth across CS 102, CS 240, CS 250 and CS 320, with application practice in CS 370.",
      "detailHeading": "Coverage and comparison",
      "source": "KAU Jeddah public Faculty Requirements, Program Requirements and Course Descriptions tabs, reviewed 19 November 2026. This is a course glance rather than the complete approved specification.",
      "url": "https://kau.edu.sa/en/programs/bachelor-of-science-in-computer-science-280"
    },
    "CS 396": {
      "title": "Web Application Development",
      "summary": "KAU describes dynamic web application development, client-server architecture and database integration.",
      "facts": [
        [
          "University",
          "King Abdulaziz University · Jeddah FCIT"
        ],
        [
          "Status",
          "Compulsory"
        ],
        [
          "Credit hours",
          "3"
        ],
        [
          "Published prerequisite",
          "CS 341"
        ]
      ],
      "detail": "Fakeeh combines web implementation with cross-platform mobile development in CS 370.",
      "detailHeading": "Coverage and comparison",
      "source": "KAU Jeddah public Faculty Requirements, Program Requirements and Course Descriptions tabs, reviewed 19 November 2026. This is a course glance rather than the complete approved specification.",
      "url": "https://kau.edu.sa/en/programs/bachelor-of-science-in-computer-science-280"
    },
    "CS 490": {
      "title": "Mobile Application Development",
      "summary": "KAU describes mobile application design and development, interfaces, frameworks and deployment.",
      "facts": [
        [
          "University",
          "King Abdulaziz University · Jeddah FCIT"
        ],
        [
          "Status",
          "Compulsory"
        ],
        [
          "Credit hours",
          "3"
        ],
        [
          "Published prerequisite",
          "CS 381"
        ]
      ],
      "detail": "Fakeeh guarantees a bounded mobile implementation in CS 370; advanced native development can be a specialist elective.",
      "detailHeading": "Coverage and comparison",
      "source": "KAU Jeddah public Faculty Requirements, Program Requirements and Course Descriptions tabs, reviewed 19 November 2026. This is a course glance rather than the complete approved specification.",
      "url": "https://kau.edu.sa/en/programs/bachelor-of-science-in-computer-science-280"
    },
    "CS 222": {
      "title": "Discrete Structures",
      "summary": "A compulsory faculty requirement in the published KAU Jeddah CS plan.",
      "facts": [
        [
          "University",
          "King Abdulaziz University · Jeddah FCIT"
        ],
        [
          "Status",
          "Compulsory"
        ],
        [
          "Credit hours",
          "3"
        ],
        [
          "Published prerequisite",
          "None listed"
        ]
      ],
      "detail": "Fakeeh CS 103 covers discrete reasoning in Semester 1. A matching title does not establish complete syllabus equivalence.",
      "detailHeading": "Coverage and comparison",
      "source": "KAU Jeddah public Faculty Requirements, Program Requirements and Course Descriptions tabs, reviewed 19 November 2026. This is a course glance rather than the complete approved specification.",
      "url": "https://kau.edu.sa/en/programs/bachelor-of-science-in-computer-science-280"
    },
    "CIS 291": {
      "title": "Computing Issues and Ethics",
      "summary": "A compulsory faculty requirement in the published KAU Jeddah CS plan.",
      "facts": [
        [
          "University",
          "King Abdulaziz University · Jeddah FCIT"
        ],
        [
          "Status",
          "Compulsory"
        ],
        [
          "Credit hours",
          "3"
        ],
        [
          "Published prerequisite",
          "None listed"
        ]
      ],
      "detail": "Fakeeh integrates computing ethics into ISLM 101, software engineering, research methods, security, AI/ML, co-op and capstone.",
      "detailHeading": "Coverage and comparison",
      "source": "KAU Jeddah public Faculty Requirements, Program Requirements and Course Descriptions tabs, reviewed 19 November 2026. This is a course glance rather than the complete approved specification.",
      "url": "https://kau.edu.sa/en/programs/bachelor-of-science-in-computer-science-280"
    }
  },
  "workplaceSkills": [
    [
      [
        "ENG 101",
        "COMM 101"
      ],
      "Read and explain computing instructions in English, listen for technical meaning, and communicate evidence and questions.",
      "Technical reading and listening tasks, short computing explanations, a professional report, and a presentation."
    ],
    [
      [
        "COMM 101",
        "ARAB 101"
      ],
      "Professional communication in English and Arabic through status updates, workplace correspondence, reports, and briefings.",
      "Written work and oral briefings assessed for clarity, evidence, and fit for the intended audience."
    ],
    [
      [
        "CS 102",
        "CS 250"
      ],
      "Working in a technical team, taking responsibility for tasks, giving constructive feedback, and resolving disagreements.",
      "Peer code reviews, a tested team software increment, and a record of individual contributions."
    ],
    [
      [
        "CS 350"
      ],
      "Listening to users, interviewing stakeholders, and explaining design choices to technical and nontechnical audiences.",
      "Usability findings and a stakeholder briefing that explains design trade-offs."
    ],
    [
      [
        "CS 390"
      ],
      "Communicating progress, working reliably with colleagues, managing time and priorities, responding to feedback, and respecting confidentiality.",
      "Workplace supervisor appraisal (35% of the course grade), progress logs, and the college presentation."
    ],
    [
      [
        "BUS 401"
      ],
      "Prioritizing work, estimating effort, managing risk, and explaining project trade-offs to stakeholders.",
      "A costed project proposal with a schedule, risk analysis, and stakeholder briefing."
    ],
    [
      [
        "CS 410",
        "CS 411"
      ],
      "Coordinating team responsibilities, responding to stakeholder feedback, defending decisions, and handing over a solution.",
      "Milestone reviews, individual contribution records, technical reports, and panel defenses."
    ],
    [
      [
        "CS 360"
      ],
      "Search critically, manage a small investigation, document uncertainty, and defend methodological choices.",
      "Literature synthesis, pilot artifacts, research report, and individual defense."
    ],
    [
      [
        "CS 370"
      ],
      "Coordinate a client-server application project, review code, respond to user feedback and explain individual contributions.",
      "Individual coding tasks, peer review, a tested web/mobile application and individual demonstration and defense."
    ],
    [
      [
        "CS 451",
        "CS 455"
      ],
      "Defend data and infrastructure choices, coordinate releases, communicate incidents, document operations and hand over a working service.",
      "Individual defenses, release and incident exercises, runbooks, contribution records and reproducible evaluation reports."
    ]
  ],
  "aiEthics": [
    [
      [
        "ISLM 101"
      ],
      "Ethical judgment about fairness, privacy, accountability, intellectual property, and verification and disclosure of AI-assisted work.",
      "A written AI use case evaluated using Islamic ethical principles and computing professional codes."
    ],
    [
      [
        "CS 340"
      ],
      "Required ML and AI teaching covers data and evaluation bias, subgroup performance, privacy, model limitations, affected users and human oversight.",
      "A simple classifier evaluation, model card and justified ethical safeguards; these assessments apply to every student."
    ],
    [
      [
        "CS 451",
        "CS 455"
      ],
      "Data provenance and access controls, responsible cloud operation, secure delivery and limits of automated decisions.",
      "A pipeline governance case and a cloud security, cost and recovery review."
    ],
    [
      [
        "CS 410",
        "CS 411"
      ],
      "For projects with an AI component, documenting intended use, data provenance, foreseeable harms, limitations, and human oversight.",
      "An AI risk review in the proposal and evidence of tested safeguards in the final report and defense."
    ]
  ],
  "evidence": [
    {
      "label": "Saudi digital economy",
      "metric": "16.0%",
      "finding": "GASTAT measured the digital economy at 16.0% of Saudi GDP in 2024, up from 15.6% in 2023.",
      "decision": "Require software engineering, databases, networks, security, and deployment so graduates can contribute across digital sectors.",
      "source": "GASTAT Digital Economy Statistics 2024",
      "url": "https://stats.gov.sa/en/w/news/150"
    },
    {
      "label": "Saudi communications and technology",
      "metric": "SAR 180bn",
      "finding": "CST reported a SAR 180 billion communications and technology market in 2024.",
      "decision": "Build networked and distributed systems into the required core and assess applied skills during a full-time placement.",
      "source": "CST 2024 market release",
      "url": "https://www.cst.gov.sa/en/media-center/news/CST-180B-SAR-is-the-Size-of-the-Communications-and-Technology-Market-in-2024"
    },
    {
      "label": "Global employer outlook",
      "metric": "2025–2030",
      "finding": "The World Economic Forum survey identifies software and applications developers among the fastest-growing roles and AI, big data, networks, and cybersecurity among the fastest-growing skill areas.",
      "decision": "Keep programming and software development central. Require AI with assessed ML foundations, cybersecurity, data engineering and cloud delivery; use Machine Learning and other electives for specialist depth.",
      "source": "World Economic Forum Future of Jobs Report 2025",
      "url": "https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf"
    },
    {
      "label": "Fakeeh planning evidence",
      "metric": "25,403 → 74,899",
      "finding": "The FCMS planning whitepaper places Computer Science on its shortlist and projects this increase in its BSc Computer Science demand measure from 2024 to 2040. The figures are an internal planning scenario.",
      "decision": "Launch a broad CS degree with optional digital product and health informatics applications. Validate cohort size separately through enrollment and placement planning.",
      "source": "Colliers FCMS Strategic Whitepaper, 2025, pp. 4 and 38–40",
      "url": null
    },
    {
      "label": "Saudi technology investment priorities",
      "metric": "2026 survey",
      "finding": "KPMG’s Saudi Arabia Tech Report 2026 reports surveyed organizations prioritizing modern delivery (91%), data and analytics (84%) and cloud platforms (77%). These are investment priorities, not counts of graduate vacancies.",
      "decision": "Require Data Engineering and Cloud Computing & DevOps with implemented, individually assessed projects.",
      "source": "KPMG Saudi Arabia Tech Report 2026, p. 15",
      "url": "https://assets.kpmg.com/content/dam/kpmgsites/sa/pdf/2026/kpmg-saudi-arabia-tech-report-2026.pdf"
    }
  ],
  "cs2023": [
    [
      "AI",
      "Artificial Intelligence",
      12,
      [
        [
          "CS 340",
          12
        ]
      ],
      "Required CS 340 includes all 12 AI core hours, including four ML instructional hours: simple learning methods, evaluation, neural/generative concepts and societal impacts. Assess a held-out classifier experiment and model card."
    ],
    [
      "AL",
      "Algorithmic Foundations",
      32,
      [
        [
          "CS 201",
          10
        ],
        [
          "CS 220",
          16
        ],
        [
          "CS 330",
          6
        ]
      ],
      "Structures, search and sorting, correctness, algorithm strategies, complexity, and formal models. Analyze algorithms and classify problems by reduction."
    ],
    [
      "AR",
      "Architecture and Organization",
      9,
      [
        [
          "CS 210",
          9
        ]
      ],
      "Logic gates and Boolean simplification, circuit and processor construction, representation, assembly, processors, memory and I/O. Verify hardware behavior through simulation."
    ],
    [
      "DM",
      "Data Management",
      10,
      [
        [
          "CS 230",
          10
        ]
      ],
      "Data lifecycle, architecture, models, integrity, querying, and stewardship. Build a relational database and compare with a semi-structured storage example."
    ],
    [
      "FPL",
      "Foundations of Programming Languages",
      21,
      [
        [
          "CS 102",
          5
        ],
        [
          "CS 240",
          3
        ],
        [
          "CS 320",
          13
        ]
      ],
      "Object-oriented, functional, reactive, and concurrent models, types, translation, and execution. Implement a small interpreter and explain execution trade-offs."
    ],
    [
      "GIT",
      "Graphics and Interactive Techniques",
      4,
      [
        [
          "CS 350",
          4
        ]
      ],
      "Required HCI graphics strand: visual representation, digitization, color, spatial transformations, rendering and accessible interactive graphics. Assess an individual graphic and concepts examination."
    ],
    [
      "HCI",
      "Human–Computer Interaction",
      8,
      [
        [
          "CS 350",
          8
        ]
      ],
      "User research, design accountability, accessibility, prototyping, and evaluation. Test a prototype with an appropriate evaluation protocol."
    ],
    [
      "MSF",
      "Mathematical and Statistical Foundations",
      55,
      [
        [
          "CS 103",
          29
        ],
        [
          "STAT 220",
          21
        ],
        [
          "MATH 120",
          5
        ]
      ],
      "Discrete mathematics 29, probability 11, statistics 10, and linear algebra 5. Assess proofs, probability models, inference, and vector and matrix operations. CS 103 has a CS prefix but retains mathematical rigor and its mathematics/statistics classification."
    ],
    [
      "NC",
      "Networking and Communication",
      7,
      [
        [
          "CS 260",
          7
        ]
      ],
      "Layering, addressing, routing, transport, and networked applications. Test a socket application and interpret network measurements."
    ],
    [
      "OS",
      "Operating Systems",
      8,
      [
        [
          "CS 310",
          8
        ]
      ],
      "Processes, threads, scheduling, memory, files, and protection. Implement and analyze a concurrent program."
    ],
    [
      "PDC",
      "Parallel and Distributed Computing",
      9,
      [
        [
          "CS 401",
          9
        ]
      ],
      "Parallel decomposition, communication, memory, coordination, and safety and liveness. Measure scalability of a parallel or distributed program."
    ],
    [
      "SDF",
      "Software Development Fundamentals",
      43,
      [
        [
          "CS 101",
          23
        ],
        [
          "CS 102",
          12
        ],
        [
          "CS 201",
          8
        ]
      ],
      "Programming, algorithms, abstraction, recursion, data types, tooling, and testing. Build, review, and benchmark readable programs."
    ],
    [
      "SE",
      "Software Engineering",
      6,
      [
        [
          "CS 250",
          6
        ]
      ],
      "Team roles and conflict resolution, versioning, design, testing, verification, and validation. Deliver a tested team software increment."
    ],
    [
      "SEC",
      "Security",
      6,
      [
        [
          "CS 402",
          6
        ]
      ],
      "Risk, controls, privacy, secure coding and design, and cryptographic concepts. Defend a threat model and test defensive controls."
    ],
    [
      "SEP",
      "Society, Ethics, and the Profession",
      18,
      [
        [
          "ISLM 101",
          2
        ],
        [
          "COMM 101",
          2
        ],
        [
          "CS 210",
          1
        ],
        [
          "CS 250",
          3
        ],
        [
          "CS 350",
          2
        ],
        [
          "CS 402",
          4
        ],
        [
          "CS 370",
          1
        ],
        [
          "CS 340",
          3
        ]
      ],
      "Ethical reasoning, computing history, professional codes, licensing, stakeholder communication, privacy, social impacts, accessibility, and sustainability. Assess cases, reports, and design decisions. The three hours formerly assigned to Machine Learning are compulsory in CS 340: bias, privacy, model limitations and human oversight."
    ],
    [
      "SF",
      "Systems Fundamentals",
      18,
      [
        [
          "CS 210",
          5
        ],
        [
          "CS 240",
          8
        ],
        [
          "CS 310",
          3
        ],
        [
          "CS 402",
          2
        ]
      ],
      "State machines, system layers, machine and resource models, performance, interfaces, failures and security. Trace execution, verify components and measure resource behavior."
    ],
    [
      "SPD",
      "Specialized Platform Development",
      4,
      [
        [
          "CS 370",
          4
        ]
      ],
      "Implement web and cross-platform mobile clients using shared APIs and services. Evaluate platform state, resource constraints, security and deployment trade-offs."
    ]
  ],
  "etec": [
    [
      "Algorithms, computability, and complexity",
      "16%",
      [
        "CS 201",
        "CS 220",
        "CS 330"
      ],
      "Algorithmic methods, data structures, automata, computability, and complexity."
    ],
    [
      "Architecture and organization",
      "9%",
      [
        "CS 210",
        "CS 240"
      ],
      "Digital circuit design and processor prototyping, machine representation, assembly, memory and interconnection."
    ],
    [
      "Discrete structures",
      "17%",
      [
        "CS 103",
        "STAT 220",
        "CS 201",
        "CS 220"
      ],
      "Logic, sets, proofs, counting, graphs, trees, and discrete probability."
    ],
    [
      "Information management",
      "8%",
      [
        "CS 230"
      ],
      "Data modeling, databases, queries, and transactions."
    ],
    [
      "Networking",
      "7%",
      [
        "CS 260",
        "CS 401"
      ],
      "Networking fundamentals and networked applications."
    ],
    [
      "Operating systems",
      "9%",
      [
        "CS 240",
        "CS 310"
      ],
      "System services, concurrency, scheduling, memory, and protection."
    ],
    [
      "Programming languages",
      "18%",
      [
        "CS 101",
        "CS 102",
        "CS 240",
        "CS 320"
      ],
      "Object-oriented and functional programming, representation, translation, and execution."
    ],
    [
      "Software engineering",
      "16%",
      [
        "CS 250",
        "CS 410",
        "CS 411",
        "CS 370"
      ],
      "Requirements, process, management, modular design, web and mobile construction, testing, verification, validation and release."
    ]
  ],
  "etecOutcomes": [
    [
      "1",
      "Computing foundations and specialist knowledge",
      [
        "K1",
        "K2",
        "K3"
      ],
      [
        "CS 103",
        "MATH 120",
        "PHYS 101",
        "CS 201",
        "CS 310",
        "CS 340",
        "CS 451"
      ],
      [
        [
          "CS 220",
          "Algorithm correctness and complexity exam."
        ],
        [
          "CS 451",
          "Data-system architecture examination and defended workload design."
        ]
      ]
    ],
    [
      "2",
      "Problem analysis and investigation",
      [
        "S1",
        "S4"
      ],
      [
        "STAT 220",
        "CS 220",
        "CS 410",
        "CS 360"
      ],
      [
        [
          "CS 360",
          "Pilot study with literature synthesis, baselines, validity analysis, and reproducible evidence."
        ],
        [
          "CS 411",
          "Reproducible evaluation and interpretation of results and uncertainty."
        ]
      ]
    ],
    [
      "3",
      "Solution design and development",
      [
        "S2",
        "V1"
      ],
      [
        "CS 350",
        "CS 402",
        "BUS 401",
        "CS 410",
        "CS 370"
      ],
      [
        [
          "CS 250",
          "Tested software increment against stakeholder requirements."
        ],
        [
          "CS 411",
          "Integrated solution evaluated against requirements, with design and risk decisions defended."
        ]
      ]
    ],
    [
      "4",
      "Modern computing tools",
      [
        "S2",
        "S4"
      ],
      [
        "CS 210",
        "CS 240",
        "CS 401",
        "CS 451",
        "CS 455"
      ],
      [
        [
          "CS 370",
          "Individual practical and team web/mobile application with API tests, release automation and operational evaluation."
        ],
        [
          "CS 455",
          "Reproducible cloud load, reliability and recovery experiment."
        ]
      ]
    ],
    [
      "5",
      "Individual and team contributions",
      [
        "V2"
      ],
      [
        "CS 102",
        "CS 250",
        "CS 411"
      ],
      [
        [
          "CS 390",
          "Host appraisal of collaboration, reliability, and response to feedback."
        ],
        [
          "CS 410",
          "Review of team roles and individual contributions."
        ]
      ]
    ],
    [
      "6",
      "Project management and finance",
      [
        "V3"
      ],
      [
        "CS 250",
        "CS 410",
        "CS 455"
      ],
      [
        [
          "BUS 401",
          "Costed project plan and risk register justified against market and stakeholder needs."
        ],
        [
          "CS 411",
          "Project closeout reviewing costs and project decisions."
        ]
      ]
    ],
    [
      "7",
      "Communication",
      [
        "S3"
      ],
      [
        "COMM 101",
        "ARAB 101",
        "CS 350",
        "CS 390"
      ],
      [
        [
          "CS 410",
          "Design report and proposal defense."
        ],
        [
          "CS 411",
          "Final technical report and defense explaining results and limitations."
        ]
      ]
    ],
    [
      "8",
      "Professional practice and societal impact",
      [
        "V1",
        "V3"
      ],
      [
        "ISLM 101",
        "CS 340",
        "BUS 401",
        "CS 370"
      ],
      [
        [
          "CS 402",
          "Security and privacy decision case."
        ],
        [
          "CS 411",
          "Project impact review addressing relevant accessibility, sustainability, and professional risks."
        ]
      ]
    ],
    [
      "9",
      "Ethical judgment and responsibility",
      [
        "V1"
      ],
      [
        "ISLM 101",
        "CS 350",
        "CS 390"
      ],
      [
        [
          "CS 402",
          "Justification of security and privacy choices using professional obligations."
        ],
        [
          "CS 411",
          "Ethical rationale and safeguards documented in the project report and defense."
        ]
      ]
    ],
    [
      "10",
      "Independent and lifelong learning",
      [
        "V3"
      ],
      [
        "CS 390"
      ],
      [
        [
          "CS 411",
          "Learning reflection identifying knowledge gaps and priorities for independent development."
        ]
      ]
    ]
  ],
  "abet": [
    [
      "1",
      "Analyze complex computing problems",
      [
        "K1",
        "S1",
        "S4"
      ],
      "Use computing and related disciplines to analyze a complex problem, compare approaches, and justify a solution.",
      [
        [
          "CS 220",
          "Constrained algorithm design problem (S1)"
        ],
        [
          "CS 401",
          "Scalability experiment (S4)"
        ]
      ]
    ],
    [
      "2",
      "Design, implement, and evaluate computing solutions",
      [
        "S2",
        "S4"
      ],
      "Turn requirements into a design, implement it, and use evaluation results to judge how well it meets those requirements.",
      [
        [
          "CS 250",
          "Tested software increment (S2)"
        ],
        [
          "CS 411",
          "Evaluated capstone solution (S2)"
        ]
      ]
    ],
    [
      "3",
      "Communicate effectively in professional contexts",
      [
        "S3"
      ],
      "Explain technical work and decisions in reports and presentations suited to different professional audiences.",
      [
        [
          "CS 410",
          "Design report and panel defense (S3)"
        ],
        [
          "CS 411",
          "Final report and panel defense (S3)"
        ]
      ]
    ],
    [
      "4",
      "Make informed legal, ethical, and professional judgments",
      [
        "V1"
      ],
      "Recognize professional responsibilities and use legal and ethical principles to justify a computing decision.",
      [
        [
          "CS 402",
          "Security and privacy decision case (V1)"
        ],
        [
          "CS 411",
          "Project impact and ethics review (V1)"
        ]
      ]
    ],
    [
      "5",
      "Work effectively in a team as a member or leader",
      [
        "V2"
      ],
      "Fulfill agreed responsibilities and contribute to decisions as a member or leader of a computing team.",
      [
        [
          "CS 390",
          "Host appraisal and contribution evidence (V2)"
        ],
        [
          "CS 410",
          "Team role and individual contribution review (V2)"
        ]
      ]
    ],
    [
      "6",
      "Apply Computer Science theory and software development fundamentals",
      [
        "K1",
        "K2",
        "K3",
        "S2"
      ],
      "Use computer science theory to select a solution approach and software development fundamentals to build and test it.",
      [
        [
          "CS 220",
          "Algorithm analysis and correctness exam (K1)"
        ],
        [
          "CS 411",
          "Evaluated capstone solution (S2)"
        ]
      ]
    ]
  ],
  "abetOutcomeScope": "ABET’s general criteria define outcomes 1–5. The Computer Science criteria add outcome 6. Each row maps an ABET outcome to the program’s learning outcomes (PLOs) and shows examples of planned direct assessments. The code in parentheses identifies the PLO assessed by each task.",
  "abetCurriculum": [
    [
      "General Criterion 5",
      "The required CS core provides 61 credits of fundamental and advanced computing. CS 250 and CS 370 assess software construction, tools and testing; CS 451 adds reliable data pipelines and CS 455 automated deployment, monitoring and recovery. CS 402 covers security and privacy. ISLM 101, CS 340 and CS 411 assess ethics and societal impacts. Required coverage and assessment do not depend on elective choices."
    ],
    [
      "CS coursework · 40-credit minimum",
      "The required CS core provides 61 credits, including three in Research Methods in Computing. It provides 58 computing credits without research methods, capstones, co-op or electives. CS 103 remains within the separate mathematics/statistics allocation."
    ],
    [
      "Depth in algorithms, theory, language concepts, and software development",
      "CS 201 and CS 220 assess data structures, algorithm correctness, and complexity. CS 330 assesses formal computation and reductions. CS 320 covers language semantics and paradigms through an interpreter project. CS 101, CS 102, and CS 250 assess software construction, testing, and team development. CS 370 adds an integrated web and mobile application project."
    ],
    [
      "Depth in a general-purpose language",
      "CS 101 and CS 102 provide seven credits of sustained Python practice. Students design and test modular and object-oriented programs in supervised labs and applied assessments. CS 240 adds systems programming in C."
    ],
    [
      "Exposure to the required systems topics",
      "CS 210 covers architecture and organization, CS 230 covers information management, CS 260 covers networking and communication, CS 310 covers operating systems, and CS 401 covers parallel and distributed computing."
    ],
    [
      "Computing systems at multiple abstraction levels",
      "Students progress from digital circuits, processor construction and instruction execution in CS 210 to system calls and resource management in CS 240 and CS 310, then to network protocols in CS 260 and distributed services in CS 401. Lab work connects choices at each level to program behavior. CS 370 connects application interfaces and APIs to shared backend services. CS 451 and CS 455 connect data pipelines, containers, infrastructure and operational services to these abstraction levels."
    ],
    [
      "Major project integrating earlier coursework",
      "CS 410 and CS 411 form a six-credit project. The design review identifies techniques from earlier courses. The final assessment uses a working solution, integration tests, evaluation results, and an individual defense to show how students applied those techniques."
    ],
    [
      "Mathematics and statistics · 15-credit minimum",
      "The plan requires 20 credits. MATH 101 (4), CS 103 (3), MATH 120 (3), STAT 220 (4), MATH 230 (3), and MATH 340 (3) cover discrete mathematics, probability, statistics, linear algebra, calculus, optimization, and numerical analysis. CS 103 Discrete Structures remains a mathematics course for this allocation and is excluded from the 61-credit CS core total."
    ],
    [
      "Scientific method in non-computing coursework",
      "PHYS 101, PHYS 102, and BIO 101 provide 10 credits of non-computing laboratory science. Students formulate hypotheses, control variables, analyze measurements and uncertainty, and report conclusions."
    ]
  ],
  "abetCurriculumScope": "The Computer Science program criteria apply alongside General Criterion 5. The topic and credit requirements below are the same in the 2025–2026 and 2026–2027 CAC editions. The college selects the courses that deliver this coverage.",
  "outcomes": {
    "K1": [
      "Knowledge and understanding",
      "Explain the mathematical, algorithmic, and theoretical foundations of computing."
    ],
    "K2": [
      "Knowledge and understanding",
      "Explain the organization, operation, and interaction of computer systems at multiple levels of abstraction."
    ],
    "K3": [
      "Knowledge and understanding",
      "Explain the principles of software development, data management, and intelligent computing."
    ],
    "S1": [
      "Skills",
      "Analyze complex computing problems and justify suitable models, algorithms, and performance trade-offs."
    ],
    "S2": [
      "Skills",
      "Design, implement, and evaluate computing solutions using computer science theory and software engineering practices."
    ],
    "S3": [
      "Skills",
      "Communicate technical decisions and results effectively to specialist and non-specialist audiences."
    ],
    "S4": [
      "Skills",
      "Plan and conduct investigations using appropriate tools and interpret the evidence and its limitations."
    ],
    "V1": [
      "Values, autonomy, and responsibility",
      "Make and justify professional decisions using ethical, legal, security, privacy, and sustainability considerations."
    ],
    "V2": [
      "Values, autonomy, and responsibility",
      "Contribute effectively as a member and leader of diverse teams, demonstrating accountability for agreed work."
    ],
    "V3": [
      "Values, autonomy, and responsibility",
      "Manage computing work with attention to scope, cost, and risk, and identify and address gaps in professional knowledge."
    ]
  },
  "assessmentPlan": {
    "K1": [
      "CS 220",
      "Algorithm analysis and correctness exam",
      "CS 330",
      "Computability and complexity proof"
    ],
    "K2": [
      "CS 310",
      "OS design and performance analysis",
      "CS 401",
      "Distributed systems design review"
    ],
    "K3": [
      "CS 340",
      "AI methods comparison and ML foundations examination",
      "CS 451",
      "Data-system architecture examination and defended design"
    ],
    "S1": [
      "CS 220",
      "Constrained algorithm design problem",
      "CS 401",
      "Performance and consistency analysis"
    ],
    "S2": [
      "CS 250",
      "Tested software increment",
      "CS 411",
      "Evaluated capstone solution"
    ],
    "S3": [
      "CS 410",
      "Design report and panel defense",
      "CS 411",
      "Final report and panel defense"
    ],
    "S4": [
      "CS 360",
      "Reproducible pilot study and validity analysis",
      "CS 451",
      "Reproducible pipeline quality, performance and recovery investigation"
    ],
    "V1": [
      "CS 402",
      "Security and privacy decision case",
      "CS 411",
      "Project impact and ethics review"
    ],
    "V2": [
      "CS 390",
      "Host appraisal and contribution evidence",
      "CS 410",
      "Team role and individual contribution review"
    ],
    "V3": [
      "BUS 401",
      "Costed project plan and risk register",
      "CS 411",
      "Project closeout and learning reflection"
    ]
  },
  "mission": "Prepare graduates to apply the theory and practice of computer science to develop reliable, secure, and useful digital systems. The program integrates scientific inquiry, professional responsibility, and supervised workplace experience, with opportunities to address business, healthcare, and community needs in Saudi Arabia.",
  "coopDescription": "CS 390 is the sole Semester 6 registration. The 9-credit placement begins in Semester 6 and continues through the following summer under the same registration. The proposed 24-week calendar allocates sixteen regular-semester weeks followed by eight summer weeks, including final assessment. The college posts the final grade before Semester 7 to confirm eligibility for Capstone Project I.",
  "courseDecisions": [
    {
      "course": "ENG 101",
      "title": "Technical English for Computing",
      "decision": "Semester 1 develops the language needed for introductory CS study. Students read instructions and documentation, listen and take notes, explain processes, and use computing vocabulary. COMM 101 follows in Semester 2 with professional reporting and presentations.",
      "sources": [
        {
          "label": "UBT ESP 101 Technical English",
          "url": "https://opera.ubt.edu.sa/sub/catalogue/"
        },
        {
          "label": "Almaarefa University English for Computing",
          "url": "https://www.um.edu.sa/engineering/en/"
        }
      ]
    },
    {
      "course": "CS 360",
      "title": "Research Methods in Computing",
      "decision": "Semester 5 combines literature appraisal, research questions, experimental and design methods, validity, ethics, and a small reproducible pilot. The undergraduate scope culminates in a proposal, evidence repository, and individual defense. The co-op and capstone provide later opportunities to apply the methods.",
      "sources": [
        {
          "label": "Carnegie Mellon 07-300 Research and Innovation in Computer Science",
          "url": "https://coursecatalog.web.cmu.edu/schools-colleges/schoolofcomputerscience/courses/"
        },
        {
          "label": "NUS CS2309 CS Research Methodology in the Turing programme",
          "url": "https://www.comp.nus.edu.sg/cug/per-cohort/cs/tp-26-27/"
        }
      ]
    },
    {
      "course": "BIO 101",
      "title": "Science choice for the hospital context",
      "decision": "Chemistry is not named as a compulsory course by the current ETEC or ABET CS criteria. ETEC 2025 version 2.1 specifies 30 credits in mathematics, statistics and basic sciences. The proposed four-credit biology course retains non-computing science and controlled laboratory investigation while supporting later understanding of health workflows and biological measurements. Delivery requires a supervised biology laboratory.",
      "sources": [
        {
          "label": "ETEC CS standards version 2.1, pp. 5–6",
          "url": "https://f.etec.gov.sa/j/Computer_Science.pdf"
        },
        {
          "label": "ABET CAC scientific method requirement",
          "url": "https://www.abet.org/accreditation/accreditation-criteria/criteria-for-accrediting-computing-programs-2026-2027/"
        }
      ]
    },
    {
      "course": "MATH 340",
      "title": "Academic purpose and Semester 7 placement",
      "decision": "Numerical Methods develops reliable approximation, numerical error analysis, and scientific computation, with course-content benchmarks at MIT (18.330) and Carnegie Mellon (15-369). Semester 7 follows the mathematics foundations and supports final-year data/AI electives and Capstone II. Its three credits bring mathematics and statistics to 20 and basic sciences to 10, meeting ETEC's 30-credit essential allocation. Computing Project Management and Finance remains a separate three-credit allocation.",
      "sources": [
        {
          "label": "ETEC CS standards version 2.1",
          "url": "https://f.etec.gov.sa/j/Computer_Science.pdf"
        },
        {
          "label": "MIT 18.330 numerical analysis benchmark",
          "url": "https://student.mit.edu/catalog/m18a.html"
        },
        {
          "label": "Carnegie Mellon 15-369 numerical computing benchmark",
          "url": "https://www.csd.cs.cmu.edu/academics/fall-courses"
        }
      ]
    },
    {
      "course": "CS 465",
      "title": "Selected Topics",
      "decision": "This three-credit option uses an existing technical elective slot. Each offering has an announced topic, suitable additional prerequisites, a current primary textbook, and assessed technical work. An illustrative first offering covers agentic computing and evaluation using AI Engineering.",
      "sources": [
        {
          "label": "Alfaisal special topics elective precedent",
          "url": "https://catalog.alfaisal.edu/college-of-engineering-and-advanced-computing/bachelor-major-minor-track/bachelor-of-software"
        }
      ]
    },
    {
      "course": "CS 103",
      "title": "Discrete Structures and content-based credit classification",
      "decision": "The plural title describes logic, sets, relations, proof, counting, graphs and trees, follows ETEC terminology, and has a national benchmark in KFUPM ICS 253. The CS code identifies the teaching discipline. The three credits remain in mathematics/statistics and the Department Requirements, with no double counting in the CS core.",
      "sources": [
        {
          "label": "ETEC GKU 3 Discrete Structures",
          "url": "https://f.etec.gov.sa/j/Computer_Science.pdf"
        },
        {
          "label": "KFUPM ICS 253 Discrete Structures",
          "url": "https://bulletin.kfupm.edu.sa/course-detail?course_code=ICS253"
        }
      ]
    },
    {
      "course": "CS 101",
      "title": "Early computing foundations",
      "decision": "A defined introductory unit explains computing, abstraction, data, hardware/software layers, networks, databases, AI and emerging technologies. Programming I retains four credits and substantial supervised programming. Later required courses develop the specialist depth, avoiding a separate introductory survey course.",
      "sources": [
        {
          "label": "ACM/IEEE CS Curricula final report",
          "url": "https://csed.acm.org/wp-content/uploads/2025/11/CS2023-Report.htm"
        }
      ]
    },
    {
      "course": "CS 210",
      "title": "Digital logic and computer organization with practical evidence",
      "decision": "The three-credit course includes a laboratory sequence from gates and Boolean expressions through combinational and sequential circuits to a small simulated processor. Explicit CLOs assess circuit design, component construction, correctness and performance. Prince Sultan CS 175 benchmarks the combined title and credit size; ETEC SKU 2.1 supplies the required outcomes.",
      "sources": [
        {
          "label": "Prince Sultan CS 175 course description",
          "url": "https://psu.edu.sa/en/CCIS/cs-cd"
        },
        {
          "label": "ETEC architecture and organization outcomes",
          "url": "https://f.etec.gov.sa/j/Computer_Science.pdf"
        },
        {
          "label": "MIT 6.1910 Computation Structures",
          "url": "https://student.mit.edu/catalog/m6a.html"
        }
      ]
    },
    {
      "course": "CS 370",
      "title": "One compulsory web and mobile application course before co-op",
      "decision": "A focused three-credit course replaces Software Deployment and Operations. Students build web and cross-platform mobile clients with a shared API and database-backed service, with individual coding and defense. MIT 6.1040 benchmarks application design and web implementation; NUS CS3216/CS3217 benchmark platform projects as elective opportunities, not universal CS requirements. KAU has separate compulsory web and mobile courses. Basic releases remain here; reliability, monitoring and recovery are reinforced in CS 401 and CS 411. CS 350 is concurrent. CS 330 moves to Semester 7 and Elective I moves to Semester 8; the required pre-co-op application sequence is retained in the current 130-credit plan.",
      "sources": [
        {
          "label": "MIT 6.1040 Software Design",
          "url": "https://student.mit.edu/catalog/m6a.html"
        },
        {
          "label": "NUS software engineering focus and platform projects",
          "url": "https://www.comp.nus.edu.sg/programmes/ug/focus/software/"
        },
        {
          "label": "KAU Jeddah compulsory course requirements",
          "url": "https://kau.edu.sa/en/programs/bachelor-of-science-in-computer-science-280"
        }
      ]
    },
    {
      "course": "CS 102",
      "title": "Advanced programming through the compulsory sequence",
      "decision": "CS 102 strengthens reusable interfaces, typed collections, functional patterns and unit tests. CS 240 adds C memory safety, test harnesses and profiling; CS 250 adds design patterns, refactoring and automated integration; CS 320 compares typed generic abstractions across languages. CS 370 applies these capabilities before co-op. This avoids adding another overlapping course.",
      "sources": [
        {
          "label": "MIT 6.1020 Software Construction",
          "url": "https://catalog.mit.edu/subjects/6/"
        },
        {
          "label": "ETEC programming languages outcomes",
          "url": "https://f.etec.gov.sa/j/Computer_Science.pdf"
        }
      ]
    },
    {
      "course": "CS 201",
      "title": "Three-credit Data Structures with preserved outcomes",
      "decision": "The three-credit design retains two supervised practical hours each week. CS 103 teaches graph isomorphism and mathematical spanning-tree reasoning; CS 220 develops greedy spanning-tree and shortest-path algorithms, proofs and complexity. CS 201 retains individual data-structure, search, sort, string and graph implementation assessments.",
      "sources": [
        {
          "label": "PSU CS 210 three-credit benchmark",
          "url": "https://psu.edu.sa/en/CCIS/cs-program-structure"
        },
        {
          "label": "ETEC required outcomes",
          "url": "https://f.etec.gov.sa/j/Computer_Science.pdf"
        }
      ]
    },
    {
      "course": "CS 451",
      "title": "Required Data Engineering",
      "decision": "Promote the existing three-credit elective to Semester 8. The course extends CS 230 database foundations into tested, reproducible data pipelines, quality, lineage, streaming and failure recovery. It also supplies required K3 and S4 program-assessment evidence.",
      "sources": [
        {
          "label": "KPMG Saudi Arabia Tech Report 2026",
          "url": "https://assets.kpmg.com/content/dam/kpmgsites/sa/pdf/2026/kpmg-saudi-arabia-tech-report-2026.pdf"
        },
        {
          "label": "CMU cloud data-processing benchmark",
          "url": "https://www.cs.cmu.edu/~msakr/15619-f26/index.html"
        }
      ]
    },
    {
      "course": "CS 455",
      "title": "Required Cloud Computing and DevOps",
      "decision": "Promote and refine the existing three-credit Cloud and Distributed Applications elective in Semester 8. CS 401 retains parallel/distributed theory; CS 455 assesses provisioning, CI/CD, container orchestration, operational security, observability, cloud cost and recovery.",
      "sources": [
        {
          "label": "CMU 15-319 Cloud Computing",
          "url": "https://www.cs.cmu.edu/~msakr/15619-f26/index.html"
        }
      ]
    },
    {
      "course": "CS 350",
      "title": "Required HCI with graphics foundations",
      "decision": "The 60 contact hours include an 18-hour graphics and interactive-visualization strand, with at least four lecture hours allocated to ACM/IEEE Graphics and Interactive Techniques CS Core topics and an individual graphics practical. Eight HCI CS Core hours and two Society, Ethics and the Profession hours remain separately allocated. CS 403 becomes a three-credit depth elective rather than the sole owner of required graphics coverage.",
      "sources": [
        {
          "label": "ACM/IEEE CS Curricula body of knowledge",
          "url": "https://csed.acm.org/wp-content/uploads/2024/04/3.1-Body-of-Knowledge-1.pdf"
        }
      ]
    },
    {
      "course": "CS 340",
      "title": "Required ML foundations and AI ethics",
      "decision": "Required teaching reserves the 12 AI CS Core instructional hours, including four for Machine Learning, and three additional Society, Ethics and the Profession hours transferred from the former compulsory Machine Learning course. The 3-credit Machine Learning elective adds depth; baseline assessed learning and AI ethics do not depend on choosing it.",
      "sources": [
        {
          "label": "ACM/IEEE CS Curricula AI knowledge area",
          "url": "https://csed.acm.org/wp-content/uploads/2024/04/3.1-Body-of-Knowledge-1.pdf"
        }
      ]
    },
    {
      "course": "CS 466",
      "title": "Bioinformatics as computing depth",
      "decision": "An elective connects biological questions to algorithms, sequence analysis and reproducible evidence. CMU 02-251 supplies the international model and PSU CS 455 the local three-credit precedent. BIO 101, CS 220 and STAT 220 provide preparation. Hospital informatics remains a separate elective focused on clinical systems.",
      "sources": [
        {
          "label": "CMU 02-251",
          "url": "https://www.cmu.edu/cbd/education/courses-offered/02-251-great-ideas-in-comp-bio.html"
        },
        {
          "label": "PSU CS 455",
          "url": "https://psu.edu.sa/en/CCIS/cs-cd"
        }
      ]
    },
    {
      "course": "CS 468",
      "title": "Reachable final-semester MLOps elective",
      "decision": "CS 430 Machine Learning and CS 455 Cloud Computing & DevOps must be completed before or taken concurrently. Students choosing CS 468 in Semester 8 normally use a second elective slot for CS 430; the taught sequence schedules model preparation before service deployment.",
      "sources": [
        {
          "label": "CMU 17-445 Machine Learning in Production",
          "url": "https://mlip-cmu.github.io/f2026/"
        }
      ]
    }
  ],
  "revision": {
    "date": "24 November 2026",
    "college": "College of Business, Technology & Innovation",
    "university": "Soliman Fakeeh University",
    "collegeArabic": "كلية الأعمال والتقنية والابتكار",
    "universityArabic": "جامعة سليمان فقيه",
    "mathStatisticsCredits": 20,
    "basicScienceCredits": 10,
    "etecEssentialCredits": 30,
    "etecVersion": "2.1",
    "reducedCourses": [
      "CS 102",
      "CS 210",
      "CS 240",
      "CS 250",
      "CS 310",
      "CS 340",
      "CS 401",
      "CS 370",
      "CS 430",
      "CS 201"
    ],
    "scienceReplacement": [
      "CHEM 101",
      "BIO 101"
    ],
    "etecMappedCsCredits": 43,
    "approvedReview": "Data Engineering and Cloud Computing & DevOps required; Machine Learning and Graphics elective; 19-course elective pool; required ETEC/ACM/ABET evidence refreshed.",
    "creditClassificationNote": "CS 103 Discrete Structures contributes three credits to mathematics/statistics and is excluded from the 61-credit required CS core.",
    "etecReview": "2026-11-24",
    "releasedCompulsoryCredits": 6,
    "semesterCredits": [
      17,
      16,
      16,
      18,
      18,
      9,
      18,
      18
    ]
  },
  "etecStandard": {
    "title": "Academic Standards for Computer Science Programs",
    "year": 2025,
    "version": "2.1",
    "url": "https://f.etec.gov.sa/j/Computer_Science.pdf",
    "units": [
      {
        "id": "EKU.1",
        "title": "Essential Knowledge Unit (EKU.1): Mathematics and Statistics",
        "page": 9,
        "topics": [
          {
            "id": "EKU.1-T1",
            "text": "Discrete Mathematics",
            "courses": [
              "CS 103"
            ]
          },
          {
            "id": "EKU.1-T2",
            "text": "Calculus",
            "courses": [
              "MATH 101",
              "MATH 230"
            ]
          },
          {
            "id": "EKU.1-T3",
            "text": "Linear Algebra",
            "courses": [
              "MATH 120"
            ]
          },
          {
            "id": "EKU.1-T4",
            "text": "Probability Theory",
            "courses": [
              "STAT 220"
            ]
          },
          {
            "id": "EKU.1-T5",
            "text": "Statistical Inference and Modeling",
            "courses": [
              "STAT 220"
            ]
          }
        ],
        "slos": [
          {
            "id": "EKU.1-SLO1",
            "number": 1,
            "text": "Analyze discrete mathematical structures to solve computing-related problems.",
            "coverage": [
              {
                "course": "CS 103",
                "clo": "CLO 1",
                "evidence": "Set and relation modeling problems"
              }
            ]
          },
          {
            "id": "EKU.1-SLO2",
            "number": 2,
            "text": "Apply logic and proof techniques to validate the correctness of algorithms",
            "coverage": [
              {
                "course": "CS 103",
                "clo": "CLO 4",
                "evidence": "Proof portfolio and algorithm-correctness proof"
              }
            ]
          },
          {
            "id": "EKU.1-SLO3",
            "number": 3,
            "text": "Analyze the properties of infinite series expansions related to function approximation.",
            "coverage": [
              {
                "course": "MATH 101",
                "clo": "CLO 5",
                "evidence": "Series convergence and approximation assignment"
              }
            ]
          },
          {
            "id": "EKU.1-SLO4",
            "number": 4,
            "text": "Calculate partial derivatives and use optimization methods for gradient- based learning.",
            "coverage": [
              {
                "course": "MATH 230",
                "clo": "CLO 5",
                "evidence": "Gradient-descent notebook and derivative check"
              }
            ]
          },
          {
            "id": "EKU.1-SLO5",
            "number": 5,
            "text": "Perform matrix operations and solve systems of linear equations.",
            "coverage": [
              {
                "course": "MATH 120",
                "clo": "CLO 2",
                "evidence": "Matrix and linear-system examination"
              }
            ]
          },
          {
            "id": "EKU.1-SLO6",
            "number": 6,
            "text": "Apply counting techniques to compute probabilities for discrete scenarios.",
            "coverage": [
              {
                "course": "STAT 220",
                "clo": "CLO 2",
                "evidence": "Combinatorial probability problems"
              }
            ]
          },
          {
            "id": "EKU.1-SLO7",
            "number": 7,
            "text": "Formulate probabilistic models for solving problems involving uncertainty and dependence.",
            "coverage": [
              {
                "course": "STAT 220",
                "clo": "CLO 5",
                "evidence": "Graph and dependency modeling investigation"
              }
            ]
          },
          {
            "id": "EKU.1-SLO8",
            "number": 8,
            "text": "Apply hypothesis testing and confidence intervals to draw rigorous inferences about data populations.",
            "coverage": [
              {
                "course": "STAT 220",
                "clo": "CLO 6",
                "evidence": "Individual inference report"
              }
            ]
          }
        ]
      },
      {
        "id": "SKU1.1",
        "title": "Specific Knowledge Unit (SKU) 1.1: Basic analysis and algorithmic methods",
        "page": 11,
        "topics": [
          {
            "id": "SKU1.1-T1",
            "text": "Algorithm performance and complexity analysis.",
            "courses": [
              "CS 220"
            ]
          },
          {
            "id": "SKU1.1-T2",
            "text": "Algorithm design techniques.",
            "courses": [
              "CS 220"
            ]
          }
        ],
        "slos": [
          {
            "id": "SKU1.1-SLO1",
            "number": 1,
            "text": "Explain the case behaviors of an algorithm.",
            "coverage": [
              {
                "course": "CS 220",
                "clo": "CLO 1",
                "evidence": "Algorithm analysis examination"
              }
            ]
          },
          {
            "id": "SKU1.1-SLO2",
            "number": 2,
            "text": "Use big O notation to determine the complexity of algorithms.",
            "coverage": [
              {
                "course": "CS 220",
                "clo": "CLO 1",
                "evidence": "Algorithm analysis examination"
              }
            ]
          },
          {
            "id": "SKU1.1-SLO3",
            "number": 3,
            "text": "Contrast standard complexity classes.",
            "coverage": [
              {
                "course": "CS 220",
                "clo": "CLO 2",
                "evidence": "Complexity and selection argument"
              }
            ]
          },
          {
            "id": "SKU1.1-SLO4",
            "number": 4,
            "text": "Perform empirical studies to validate hypotheses about runtime and test algorithms with different input sizes to compare performance.",
            "coverage": [
              {
                "course": "CS 220",
                "clo": "CLO 7",
                "evidence": "Reproducible benchmark report"
              }
            ]
          },
          {
            "id": "SKU1.1-SLO5",
            "number": 5,
            "text": "Use an algorithmic method (greedy, divide-and-conquer, recursive backtracking, dynamic programming, and heuristic approach) to solve an appropriate problem.",
            "coverage": [
              {
                "course": "CS 220",
                "clo": "CLO 5",
                "evidence": "Comparative algorithm assignments"
              }
            ]
          },
          {
            "id": "SKU1.1-SLO6",
            "number": 6,
            "text": "Determine the appropriate algorithmic method to solve a problem.",
            "coverage": [
              {
                "course": "CS 220",
                "clo": "CLO 6",
                "evidence": "Individual problem-solving defense"
              }
            ]
          },
          {
            "id": "SKU1.1-SLO7",
            "number": 7,
            "text": "Implement a divide-and-conquer algorithm for solving a problem.",
            "coverage": [
              {
                "course": "CS 220",
                "clo": "CLO 4",
                "evidence": "Divide-and-conquer practical"
              }
            ]
          }
        ]
      },
      {
        "id": "SKU1.2",
        "title": "Specific Knowledge Unit (SKU) 1.2: Data structures, automata, and computability",
        "page": 13,
        "topics": [
          {
            "id": "SKU1.2-T1",
            "text": "Algorithm design and efficiency.",
            "courses": [
              "CS 201",
              "CS 220"
            ]
          },
          {
            "id": "SKU1.2-T2",
            "text": "Data structure implementation.",
            "courses": [
              "CS 201"
            ]
          },
          {
            "id": "SKU1.2-T3",
            "text": "Automata theory and formal languages.",
            "courses": [
              "CS 330"
            ]
          },
          {
            "id": "SKU1.2-T4",
            "text": "Computational complexity.",
            "courses": [
              "CS 220",
              "CS 330"
            ]
          }
        ],
        "slos": [
          {
            "id": "SKU1.2-SLO1",
            "number": 1,
            "text": "Implement basic numerical, search, and sorting algorithms.",
            "coverage": [
              {
                "course": "CS 201",
                "clo": "CLO 3",
                "evidence": "Individual algorithm laboratory"
              }
            ]
          },
          {
            "id": "SKU1.2-SLO2",
            "number": 2,
            "text": "Discuss the runtime and memory efficiency of principal algorithms.",
            "coverage": [
              {
                "course": "CS 201",
                "clo": "CLO 2",
                "evidence": "Justified workload analysis"
              }
            ]
          },
          {
            "id": "SKU1.2-SLO3",
            "number": 3,
            "text": "Describe the implementation of hash tables.",
            "coverage": [
              {
                "course": "CS 201",
                "clo": "CLO 1",
                "evidence": "Data-structure trace and hash-table explanation"
              }
            ]
          },
          {
            "id": "SKU1.2-SLO4",
            "number": 4,
            "text": "Solve problems using fundamental graph algorithms.",
            "coverage": [
              {
                "course": "CS 201",
                "clo": "CLO 6",
                "evidence": "Individual graph implementation and correctness tests"
              }
            ]
          },
          {
            "id": "SKU1.2-SLO5",
            "number": 5,
            "text": "Evaluate an algorithm, justify the selection, and apply the algorithm to a certain problem.",
            "coverage": [
              {
                "course": "CS 220",
                "clo": "CLO 2",
                "evidence": "Complexity and selection argument"
              }
            ]
          },
          {
            "id": "SKU1.2-SLO6",
            "number": 6,
            "text": "Choose the appropriate data structure for modeling a given problem.",
            "coverage": [
              {
                "course": "CS 201",
                "clo": "CLO 2",
                "evidence": "Justified workload analysis"
              }
            ]
          },
          {
            "id": "SKU1.2-SLO7",
            "number": 7,
            "text": "Implement a string-matching algorithm.",
            "coverage": [
              {
                "course": "CS 201",
                "clo": "CLO 4",
                "evidence": "String-matching practical"
              }
            ]
          },
          {
            "id": "SKU1.2-SLO8",
            "number": 8,
            "text": "Design a deterministic finite state automaton to accept a specified language.",
            "coverage": [
              {
                "course": "CS 330",
                "clo": "CLO 2",
                "evidence": "DFA construction and acceptance tests"
              }
            ]
          }
        ]
      },
      {
        "id": "SKU2.1",
        "title": "Specific Knowledge Unit (SKU) 2.1: Digital logic and machine-level data representation",
        "page": 14,
        "topics": [
          {
            "id": "SKU2.1-T1",
            "text": "Evolution and architecture of computing systems.",
            "courses": [
              "CS 101",
              "CS 210",
              "CS 401"
            ]
          },
          {
            "id": "SKU2.1-T2",
            "text": "Logical and functional representations.",
            "courses": [
              "CS 210"
            ]
          },
          {
            "id": "SKU2.1-T3",
            "text": "Data representation and manipulation.",
            "courses": [
              "CS 101",
              "CS 201",
              "CS 210"
            ]
          }
        ],
        "slos": [
          {
            "id": "SKU2.1-SLO1",
            "number": 1,
            "text": "Analyze the advancements across the five generations of computers and evaluate their impact on modern computing.",
            "coverage": [
              {
                "course": "CS 101",
                "clo": "CLO 1",
                "evidence": "Individual computing-systems explanation"
              }
            ]
          },
          {
            "id": "SKU2.1-SLO2",
            "number": 2,
            "text": "Compare multi-core and single-core architectures and justify the benefits of multi-core systems for performance and scalability.",
            "coverage": [
              {
                "course": "CS 401",
                "clo": "CLO 1",
                "evidence": "Architecture and scalability analysis"
              }
            ]
          },
          {
            "id": "SKU2.1-SLO3",
            "number": 3,
            "text": "Design logical circuits using expressions and gates for optimized performance.",
            "coverage": [
              {
                "course": "CS 210",
                "clo": "CLO 3",
                "evidence": "Gate-level circuit design and tests"
              }
            ]
          },
          {
            "id": "SKU2.1-SLO4",
            "number": 4,
            "text": "Design and prototype the basic building blocks of a computer: arithmetic-logic unit, registers, central processing unit, and memory.",
            "coverage": [
              {
                "course": "CS 210",
                "clo": "CLO 4",
                "evidence": "Processor construction and verification dossier"
              }
            ]
          },
          {
            "id": "SKU2.1-SLO5",
            "number": 5,
            "text": "Evaluate the correctness and efficiency of a simple processor implemented at the logic circuit level.",
            "coverage": [
              {
                "course": "CS 210",
                "clo": "CLO 4",
                "evidence": "Processor construction and verification dossier"
              }
            ]
          },
          {
            "id": "SKU2.1-SLO6",
            "number": 6,
            "text": "Convert and verify numerical data transformations across formats in practical scenarios.",
            "coverage": [
              {
                "course": "CS 210",
                "clo": "CLO 2",
                "evidence": "Data-representation practical"
              }
            ]
          },
          {
            "id": "SKU2.1-SLO7",
            "number": 7,
            "text": "Develop algorithms to manipulate non-numeric data representations.",
            "coverage": [
              {
                "course": "CS 101",
                "clo": "CLO 4",
                "evidence": "String and encoding implementation"
              }
            ]
          },
          {
            "id": "SKU2.1-SLO8",
            "number": 8,
            "text": "Evaluate records and arrays for efficient storage and retrieval.",
            "coverage": [
              {
                "course": "CS 201",
                "clo": "CLO 7",
                "evidence": "Layout and retrieval benchmark"
              }
            ]
          }
        ]
      },
      {
        "id": "SKU2.2",
        "title": "Specific Knowledge Unit (SKU) 2.2: Machine organization at the assembly level",
        "page": 16,
        "topics": [
          {
            "id": "SKU2.2-T1",
            "text": "Structure and functionality of computing systems.",
            "courses": [
              "CS 210"
            ]
          },
          {
            "id": "SKU2.2-T2",
            "text": "Instruction representation and execution.",
            "courses": [
              "CS 210",
              "CS 240",
              "CS 401"
            ]
          },
          {
            "id": "SKU2.2-T3",
            "text": "Interrupts, subroutines, and I/O management.",
            "courses": [
              "CS 210",
              "CS 240"
            ]
          }
        ],
        "slos": [
          {
            "id": "SKU2.2-SLO1",
            "number": 1,
            "text": "Explain the organization and functionality of the von Neumann machine.",
            "coverage": [
              {
                "course": "CS 210",
                "clo": "CLO 1",
                "evidence": "System organization examination"
              }
            ]
          },
          {
            "id": "SKU2.2-SLO2",
            "number": 2,
            "text": "Analyze the use of instruction-level parallelism and evaluate its impact on program execution efficiency.",
            "coverage": [
              {
                "course": "CS 401",
                "clo": "CLO 2",
                "evidence": "Instruction scheduling and timing exercise"
              }
            ]
          },
          {
            "id": "SKU2.2-SLO3",
            "number": 3,
            "text": "Design machine and assembly-level instruction sequences to solve a given computational problem.",
            "coverage": [
              {
                "course": "CS 210",
                "clo": "CLO 5",
                "evidence": "Individual assembly practical"
              }
            ]
          },
          {
            "id": "SKU2.2-SLO4",
            "number": 4,
            "text": "Evaluate the role of interrupts and I/O operations in ensuring efficient communication between hardware and software.",
            "coverage": [
              {
                "course": "CS 210",
                "clo": "CLO 7",
                "evidence": "Bus comparison and interrupt simulation"
              }
            ]
          },
          {
            "id": "SKU2.2-SLO5",
            "number": 5,
            "text": "Write simple assembly language program segments with subroutine calls.",
            "coverage": [
              {
                "course": "CS 210",
                "clo": "CLO 5",
                "evidence": "Individual assembly practical"
              }
            ]
          },
          {
            "id": "SKU2.2-SLO6",
            "number": 6,
            "text": "Show how high-level programs are implemented at the machine- language level.",
            "coverage": [
              {
                "course": "CS 240",
                "clo": "CLO 3",
                "evidence": "Source-to-machine trace"
              }
            ]
          }
        ]
      },
      {
        "id": "SKU2.3",
        "title": "Specific Knowledge Unit (SKU) 2.3: Architecture of memory systems, interfacing, and communication",
        "page": 17,
        "topics": [
          {
            "id": "SKU2.3-T1",
            "text": "Memory technologies, management, and performance.",
            "courses": [
              "CS 210",
              "CS 310"
            ]
          },
          {
            "id": "SKU2.3-T2",
            "text": "Virtual memory and system functionality.",
            "courses": [
              "CS 310"
            ]
          },
          {
            "id": "SKU2.3-T3",
            "text": "Data transfers, buses, and storage devices.",
            "courses": [
              "CS 210",
              "CS 310"
            ]
          }
        ],
        "slos": [
          {
            "id": "SKU2.3-SLO1",
            "number": 1,
            "text": "Evaluate memory technologies and management principles.",
            "coverage": [
              {
                "course": "CS 210",
                "clo": "CLO 6",
                "evidence": "Cache and memory design investigation"
              }
            ]
          },
          {
            "id": "SKU2.3-SLO2",
            "number": 2,
            "text": "Analyze memory delay and propose strategies to improve runtime performance.",
            "coverage": [
              {
                "course": "CS 210",
                "clo": "CLO 6",
                "evidence": "Cache and memory design investigation"
              }
            ]
          },
          {
            "id": "SKU2.3-SLO3",
            "number": 3,
            "text": "Design memory configurations to optimize average access time.",
            "coverage": [
              {
                "course": "CS 210",
                "clo": "CLO 6",
                "evidence": "Cache and memory design investigation"
              }
            ]
          },
          {
            "id": "SKU2.3-SLO4",
            "number": 4,
            "text": "Simulate the functionality of a system using virtual memory management.",
            "coverage": [
              {
                "course": "CS 310",
                "clo": "CLO 6",
                "evidence": "Memory-management simulator and report"
              }
            ]
          },
          {
            "id": "SKU2.3-SLO5",
            "number": 5,
            "text": "Implement data transfers and I/O control using interrupts in a simulation.",
            "coverage": [
              {
                "course": "CS 210",
                "clo": "CLO 7",
                "evidence": "Bus comparison and interrupt simulation"
              }
            ]
          },
          {
            "id": "SKU2.3-SLO6",
            "number": 6,
            "text": "Justify the use of different bus types based on performance requirements.",
            "coverage": [
              {
                "course": "CS 210",
                "clo": "CLO 7",
                "evidence": "Bus comparison and interrupt simulation"
              }
            ]
          },
          {
            "id": "SKU2.3-SLO7",
            "number": 7,
            "text": "Evaluate the use of magnetic disk drives for efficient data access.",
            "coverage": [
              {
                "course": "CS 310",
                "clo": "CLO 7",
                "evidence": "Storage-access experiment"
              }
            ]
          }
        ]
      },
      {
        "id": "SKU3.1",
        "title": "Specific Knowledge Unit (SKU) 3.1: Introductory logic, sets, relations, and functions",
        "page": 18,
        "topics": [
          {
            "id": "SKU3.1-T1",
            "text": "Basics of sets, functions, relations, and their operations.",
            "courses": [
              "CS 103"
            ]
          },
          {
            "id": "SKU3.1-T2",
            "text": "Propositional and predicate logic, conversion of informal statements, and symbolic methods.",
            "courses": [
              "CS 103"
            ]
          },
          {
            "id": "SKU3.1-T3",
            "text": "Using inference rules for proofs in propositional and predicate logic.",
            "courses": [
              "CS 103"
            ]
          }
        ],
        "slos": [
          {
            "id": "SKU3.1-SLO1",
            "number": 1,
            "text": "Illustrate functions, relations, and sets with appropriate examples.",
            "coverage": [
              {
                "course": "CS 103",
                "clo": "CLO 1",
                "evidence": "Set and relation modeling problems"
              }
            ]
          },
          {
            "id": "SKU3.1-SLO2",
            "number": 2,
            "text": "Apply the operations of sets, functions, and relations to solve problems.",
            "coverage": [
              {
                "course": "CS 103",
                "clo": "CLO 1",
                "evidence": "Set and relation modeling problems"
              }
            ]
          },
          {
            "id": "SKU3.1-SLO3",
            "number": 3,
            "text": "Explain propositional and predicate logic concepts.",
            "coverage": [
              {
                "course": "CS 103",
                "clo": "CLO 2",
                "evidence": "Logic translation examination"
              }
            ]
          },
          {
            "id": "SKU3.1-SLO4",
            "number": 4,
            "text": "Translate informal logical statements into predicate logic expressions.",
            "coverage": [
              {
                "course": "CS 103",
                "clo": "CLO 2",
                "evidence": "Logic translation examination"
              }
            ]
          },
          {
            "id": "SKU3.1-SLO5",
            "number": 5,
            "text": "Employ methods of symbolic propositional and predicate logic to solve logical problems.",
            "coverage": [
              {
                "course": "CS 103",
                "clo": "CLO 3",
                "evidence": "Formal derivation and scenario model"
              }
            ]
          },
          {
            "id": "SKU3.1-SLO6",
            "number": 6,
            "text": "Construct valid proofs in propositional and predicate logic using appropriate inference rules.",
            "coverage": [
              {
                "course": "CS 103",
                "clo": "CLO 3",
                "evidence": "Formal derivation and scenario model"
              }
            ]
          },
          {
            "id": "SKU3.1-SLO7",
            "number": 7,
            "text": "Model real-life situations using symbolic logic to represent and analyze scenarios.",
            "coverage": [
              {
                "course": "CS 103",
                "clo": "CLO 3",
                "evidence": "Formal derivation and scenario model"
              }
            ]
          }
        ]
      },
      {
        "id": "SKU3.2",
        "title": "Specific Knowledge Unit (SKU) 3.2: Proof techniques and basics of counting",
        "page": 20,
        "topics": [
          {
            "id": "SKU3.2-T1",
            "text": "Proof techniques and induction.",
            "courses": [
              "CS 103",
              "CS 220"
            ]
          },
          {
            "id": "SKU3.2-T2",
            "text": "Counting and combinatorics.",
            "courses": [
              "CS 103"
            ]
          },
          {
            "id": "SKU3.2-T3",
            "text": "Recurrence relations and modular arithmetic.",
            "courses": [
              "CS 103",
              "CS 220"
            ]
          }
        ],
        "slos": [
          {
            "id": "SKU3.2-SLO1",
            "number": 1,
            "text": "Identify the proof technique used in a given proof (direct proof, proof by contradiction, and induction).",
            "coverage": [
              {
                "course": "CS 103",
                "clo": "CLO 4",
                "evidence": "Proof portfolio and algorithm-correctness proof"
              }
            ]
          },
          {
            "id": "SKU3.2-SLO2",
            "number": 2,
            "text": "Explain the relationship between weak and robust induction, and the well-ordering principle.",
            "coverage": [
              {
                "course": "CS 103",
                "clo": "CLO 4",
                "evidence": "Proof portfolio and algorithm-correctness proof"
              }
            ]
          },
          {
            "id": "SKU3.2-SLO3",
            "number": 3,
            "text": "Apply counting arguments, including sum and product rules, inclusion- exclusion principle, and arithmetic/geometric progressions.",
            "coverage": [
              {
                "course": "CS 103",
                "clo": "CLO 5",
                "evidence": "Counting problem set"
              }
            ]
          },
          {
            "id": "SKU3.2-SLO4",
            "number": 4,
            "text": "Use the pigeonhole principle effectively in formal proofs in discrete mathematics.",
            "coverage": [
              {
                "course": "CS 103",
                "clo": "CLO 6",
                "evidence": "Pigeonhole proof and modular arithmetic test"
              }
            ]
          },
          {
            "id": "SKU3.2-SLO5",
            "number": 5,
            "text": "Compute permutations and combinations of a set.",
            "coverage": [
              {
                "course": "CS 103",
                "clo": "CLO 5",
                "evidence": "Counting problem set"
              }
            ]
          },
          {
            "id": "SKU3.2-SLO6",
            "number": 6,
            "text": "Solve different fundamental recurrence relations.",
            "coverage": [
              {
                "course": "CS 103",
                "clo": "CLO 7",
                "evidence": "Recurrence derivation"
              }
            ]
          },
          {
            "id": "SKU3.2-SLO7",
            "number": 7,
            "text": "Perform modular arithmetic-based computations.",
            "coverage": [
              {
                "course": "CS 103",
                "clo": "CLO 6",
                "evidence": "Pigeonhole proof and modular arithmetic test"
              }
            ]
          }
        ]
      },
      {
        "id": "SKU3.3",
        "title": "Specific Knowledge Unit (SKU) 3.3: Graphs, trees, and discrete probability",
        "page": 22,
        "topics": [
          {
            "id": "SKU3.3-T1",
            "text": "Graph theory and tree concepts.",
            "courses": [
              "CS 103",
              "CS 201"
            ]
          },
          {
            "id": "SKU3.3-T2",
            "text": "Probability and probability distributions.",
            "courses": [
              "STAT 220"
            ]
          },
          {
            "id": "SKU3.3-T3",
            "text": "Bayesian probability.",
            "courses": [
              "STAT 220"
            ]
          }
        ],
        "slos": [
          {
            "id": "SKU3.3-SLO1",
            "number": 1,
            "text": "Recognize graph theory concepts, including types of graphs and trees, and traversal methods for trees and graphs.",
            "coverage": [
              {
                "course": "CS 201",
                "clo": "CLO 5",
                "evidence": "Graph and tree examination"
              }
            ]
          },
          {
            "id": "SKU3.3-SLO2",
            "number": 2,
            "text": "Apply graph and tree structures to solve real-world computer science problems, including constructing spanning trees and identifying graph isomorphisms.",
            "coverage": [
              {
                "course": "CS 103",
                "clo": "CLO 8",
                "evidence": "Individual graph-model, spanning-tree and isomorphism worksheet"
              }
            ]
          },
          {
            "id": "SKU3.3-SLO3",
            "number": 3,
            "text": "Compute probabilities for basic events and apply Bayes' theorem to calculate conditional probabilities in relevant problems.",
            "coverage": [
              {
                "course": "STAT 220",
                "clo": "CLO 3",
                "evidence": "Conditional-probability examination"
              }
            ]
          },
          {
            "id": "SKU3.3-SLO4",
            "number": 4,
            "text": "Distinguish between dependent and independent events, providing real- world examples to illustrate the differences.",
            "coverage": [
              {
                "course": "STAT 220",
                "clo": "CLO 3",
                "evidence": "Conditional-probability examination"
              }
            ]
          },
          {
            "id": "SKU3.3-SLO5",
            "number": 5,
            "text": "Compute probabilities using binomial distributions, including calculating variance and its applications.",
            "coverage": [
              {
                "course": "STAT 220",
                "clo": "CLO 4",
                "evidence": "Distribution modeling assignment"
              }
            ]
          },
          {
            "id": "SKU3.3-SLO6",
            "number": 6,
            "text": "Use probability tools and techniques to solve problems in a variety of contexts.",
            "coverage": [
              {
                "course": "STAT 220",
                "clo": "CLO 4",
                "evidence": "Distribution modeling assignment"
              }
            ]
          },
          {
            "id": "SKU3.3-SLO7",
            "number": 7,
            "text": "Evaluate real-world problems involving event dependencies and graph structures using graph theory and probability.",
            "coverage": [
              {
                "course": "STAT 220",
                "clo": "CLO 5",
                "evidence": "Graph and dependency modeling investigation"
              }
            ]
          }
        ]
      },
      {
        "id": "SKU4.1",
        "title": "Specific Knowledge Unit (SKU) 4.1: Database systems and data modeling",
        "page": 24,
        "topics": [
          {
            "id": "SKU4.1-T1",
            "text": "Database system components and functions.",
            "courses": [
              "CS 230"
            ]
          },
          {
            "id": "SKU4.1-T2",
            "text": "Database models and data modeling techniques.",
            "courses": [
              "CS 230"
            ]
          },
          {
            "id": "SKU4.1-T3",
            "text": "Relational data models and query languages for object-oriented database modeling.",
            "courses": [
              "CS 230"
            ]
          }
        ],
        "slos": [
          {
            "id": "SKU4.1-SLO1",
            "number": 1,
            "text": "Identify the core components of a database system, including the query optimizer, query executor, storage manager, access methods, and transaction processor, and their roles within the system.",
            "coverage": [
              {
                "course": "CS 230",
                "clo": "CLO 1",
                "evidence": "DBMS component analysis"
              }
            ]
          },
          {
            "id": "SKU4.1-SLO2",
            "number": 2,
            "text": "Discuss the functions and responsibilities of key DBMS components, such as data storage, query processing, and transaction management.",
            "coverage": [
              {
                "course": "CS 230",
                "clo": "CLO 1",
                "evidence": "DBMS component analysis"
              }
            ]
          },
          {
            "id": "SKU4.1-SLO3",
            "number": 3,
            "text": "Explain the principles of the relational data model, including basic concepts and the use of relational databases.",
            "coverage": [
              {
                "course": "CS 230",
                "clo": "CLO 2",
                "evidence": "Relational-model examination"
              }
            ]
          },
          {
            "id": "SKU4.1-SLO4",
            "number": 4,
            "text": "Apply a declarative query language (e.g., SQL) to retrieve and manipulate data from a database, demonstrating an understanding of query formulation and execution.",
            "coverage": [
              {
                "course": "CS 230",
                "clo": "CLO 3",
                "evidence": "Individual SQL practical"
              }
            ]
          },
          {
            "id": "SKU4.1-SLO5",
            "number": 5,
            "text": "Compare different data models (e.g., relational, object-oriented) and their internal structures, including their application to various data types.",
            "coverage": [
              {
                "course": "CS 230",
                "clo": "CLO 4",
                "evidence": "Data-model comparison"
              }
            ]
          },
          {
            "id": "SKU4.1-SLO6",
            "number": 6,
            "text": "Apply appropriate modeling notations, such as ERDs or UML, to design and describe database structures and relationships.",
            "coverage": [
              {
                "course": "CS 230",
                "clo": "CLO 5",
                "evidence": "ER and UML design dossier"
              }
            ]
          },
          {
            "id": "SKU4.1-SLO7",
            "number": 7,
            "text": "Apply the main concepts and principles of the object-oriented data model to design and implement database.",
            "coverage": [
              {
                "course": "CS 230",
                "clo": "CLO 6",
                "evidence": "Persistent-object database mini-lab"
              }
            ]
          }
        ]
      },
      {
        "id": "SKU5.1",
        "title": "Specific Knowledge Unit (SKU) 5.1: Networking fundamentals and networked applications",
        "page": 26,
        "topics": [
          {
            "id": "SKU5.1-T1",
            "text": "Organization and structure of networks.",
            "courses": [
              "CS 260"
            ]
          },
          {
            "id": "SKU5.1-T2",
            "text": "Switching techniques and layering principles.",
            "courses": [
              "CS 260"
            ]
          },
          {
            "id": "SKU5.1-T3",
            "text": "Physical components of networking.",
            "courses": [
              "CS 260"
            ]
          },
          {
            "id": "SKU5.1-T4",
            "text": "Naming, addressing, resource location and flow control.",
            "courses": [
              "CS 260"
            ]
          },
          {
            "id": "SKU5.1-T5",
            "text": "Distributed applications and communication interfaces.",
            "courses": [
              "CS 260"
            ]
          }
        ],
        "slos": [
          {
            "id": "SKU5.1-SLO1",
            "number": 1,
            "text": "Describe the organization and structure of the internet.",
            "coverage": [
              {
                "course": "CS 260",
                "clo": "CLO 1",
                "evidence": "Network architecture examination"
              }
            ]
          },
          {
            "id": "SKU5.1-SLO2",
            "number": 2,
            "text": "List and define the appropriate network terminology.",
            "coverage": [
              {
                "course": "CS 260",
                "clo": "CLO 1",
                "evidence": "Network architecture examination"
              }
            ]
          },
          {
            "id": "SKU5.1-SLO3",
            "number": 3,
            "text": "Assess different types of network complexity (e.g., edge, core).",
            "coverage": [
              {
                "course": "CS 260",
                "clo": "CLO 1",
                "evidence": "Network architecture examination"
              }
            ]
          },
          {
            "id": "SKU5.1-SLO4",
            "number": 4,
            "text": "Explain the principles and roles of network layering.",
            "coverage": [
              {
                "course": "CS 260",
                "clo": "CLO 2",
                "evidence": "Protocol-layer and switching analysis"
              }
            ]
          },
          {
            "id": "SKU5.1-SLO5",
            "number": 5,
            "text": "Explain the basics of naming schemes and resource location.",
            "coverage": [
              {
                "course": "CS 260",
                "clo": "CLO 3",
                "evidence": "Addressing and DNS practical"
              }
            ]
          },
          {
            "id": "SKU5.1-SLO6",
            "number": 6,
            "text": "Design and implement a client-server socket-based application to meet specific requirements.",
            "coverage": [
              {
                "course": "CS 260",
                "clo": "CLO 4",
                "evidence": "Individual socket application"
              }
            ]
          },
          {
            "id": "SKU5.1-SLO7",
            "number": 7,
            "text": "Develop and optimize a reliable protocol for efficient data delivery.",
            "coverage": [
              {
                "course": "CS 260",
                "clo": "CLO 5",
                "evidence": "Reliable-protocol simulator and tests"
              }
            ]
          }
        ]
      },
      {
        "id": "SKU6.1",
        "title": "Specific Knowledge Unit (SKU) 6.1: Principles of operating systems",
        "page": 28,
        "topics": [
          {
            "id": "SKU6.1-T1",
            "text": "Objectives, functions, and types of operating systems.",
            "courses": [
              "CS 310",
              "CS 401"
            ]
          },
          {
            "id": "SKU6.1-T2",
            "text": "Logical layers, APIs, and middleware.",
            "courses": [
              "CS 240",
              "CS 310"
            ]
          },
          {
            "id": "SKU6.1-T3",
            "text": "Resource and process management.",
            "courses": [
              "CS 240",
              "CS 310"
            ]
          },
          {
            "id": "SKU6.1-T4",
            "text": "Device and interrupt handling.",
            "courses": [
              "CS 310"
            ]
          }
        ],
        "slos": [
          {
            "id": "SKU6.1-SLO1",
            "number": 1,
            "text": "Explain the objectives and functions of modern operating systems.",
            "coverage": [
              {
                "course": "CS 310",
                "clo": "CLO 1",
                "evidence": "OS architecture examination"
              }
            ]
          },
          {
            "id": "SKU6.1-SLO2",
            "number": 2,
            "text": "Analyze client-server, distributed, and single-user operating systems and compare their advantages and limitations.",
            "coverage": [
              {
                "course": "CS 401",
                "clo": "CLO 3",
                "evidence": "Distributed-system design comparison"
              }
            ]
          },
          {
            "id": "SKU6.1-SLO3",
            "number": 3,
            "text": "Explain the concept of a logical layer in system-level design.",
            "coverage": [
              {
                "course": "CS 240",
                "clo": "CLO 1",
                "evidence": "System-interface design explanation"
              }
            ]
          },
          {
            "id": "SKU6.1-SLO4",
            "number": 4,
            "text": "Describe the role of APIs and middleware in system development.",
            "coverage": [
              {
                "course": "CS 240",
                "clo": "CLO 1",
                "evidence": "System-interface design explanation"
              }
            ]
          },
          {
            "id": "SKU6.1-SLO5",
            "number": 5,
            "text": "Assess resource utilization by application software and propose strategies to optimize system software.",
            "coverage": [
              {
                "course": "CS 240",
                "clo": "CLO 7",
                "evidence": "Profile and before-after experiment"
              }
            ]
          },
          {
            "id": "SKU6.1-SLO6",
            "number": 6,
            "text": "Compare and evaluate kernel and user modes in operating systems for secure and efficient execution.",
            "coverage": [
              {
                "course": "CS 310",
                "clo": "CLO 1",
                "evidence": "OS architecture examination"
              }
            ]
          },
          {
            "id": "SKU6.1-SLO7",
            "number": 7,
            "text": "Analyze interrupt processing mechanisms for improved system performance.",
            "coverage": [
              {
                "course": "CS 310",
                "clo": "CLO 2",
                "evidence": "Interrupt and device-management investigation"
              }
            ]
          },
          {
            "id": "SKU6.1-SLO8",
            "number": 8,
            "text": "Evaluate device management strategies, including device lists and driver I/O queues.",
            "coverage": [
              {
                "course": "CS 310",
                "clo": "CLO 2",
                "evidence": "Interrupt and device-management investigation"
              }
            ]
          }
        ]
      },
      {
        "id": "SKU6.2",
        "title": "Specific Knowledge Unit (SKU) 6.2: Concurrency, scheduling, memory management, and OS protection",
        "page": 30,
        "topics": [
          {
            "id": "SKU6.2-T1",
            "text": "Concurrency and synchronization.",
            "courses": [
              "CS 310"
            ]
          },
          {
            "id": "SKU6.2-T2",
            "text": "Task and process management.",
            "courses": [
              "CS 310"
            ]
          },
          {
            "id": "SKU6.2-T3",
            "text": "Memory management and optimization.",
            "courses": [
              "CS 210",
              "CS 310"
            ]
          },
          {
            "id": "SKU6.2-T4",
            "text": "Operating system security.",
            "courses": [
              "CS 310",
              "CS 402"
            ]
          }
        ],
        "slos": [
          {
            "id": "SKU6.2-SLO1",
            "number": 1,
            "text": "Analyze the concurrent operation of multiple tasks and evaluate the associated runtime problems.",
            "coverage": [
              {
                "course": "CS 310",
                "clo": "CLO 3",
                "evidence": "Task-state model and concurrency diagnosis"
              }
            ]
          },
          {
            "id": "SKU6.2-SLO2",
            "number": 2,
            "text": "Assess the states of a task during the management of multiple tasks.",
            "coverage": [
              {
                "course": "CS 310",
                "clo": "CLO 3",
                "evidence": "Task-state model and concurrency diagnosis"
              }
            ]
          },
          {
            "id": "SKU6.2-SLO3",
            "number": 3,
            "text": "Evaluate techniques for achieving synchronization in an operating system.",
            "coverage": [
              {
                "course": "CS 310",
                "clo": "CLO 4",
                "evidence": "Concurrent-programming practical"
              }
            ]
          },
          {
            "id": "SKU6.2-SLO4",
            "number": 4,
            "text": "Design state and transition diagrams for specific problem domains, such as task scheduling.",
            "coverage": [
              {
                "course": "CS 310",
                "clo": "CLO 3",
                "evidence": "Task-state model and concurrency diagnosis"
              }
            ]
          },
          {
            "id": "SKU6.2-SLO5",
            "number": 5,
            "text": "Compare and assess processes, threads, and scheduling algorithms in operating systems for different application domains.",
            "coverage": [
              {
                "course": "CS 310",
                "clo": "CLO 5",
                "evidence": "Scheduling simulation and workload analysis"
              }
            ]
          },
          {
            "id": "SKU6.2-SLO6",
            "number": 6,
            "text": "Analyze memory hierarchy, virtual memory, cache memory, thrashing, and cost-performance tradeoffs.",
            "coverage": [
              {
                "course": "CS 310",
                "clo": "CLO 6",
                "evidence": "Memory-management simulator and report"
              }
            ]
          },
          {
            "id": "SKU6.2-SLO7",
            "number": 7,
            "text": "Evaluate various methods for allocating memory to tasks.",
            "coverage": [
              {
                "course": "CS 310",
                "clo": "CLO 6",
                "evidence": "Memory-management simulator and report"
              }
            ]
          },
          {
            "id": "SKU6.2-SLO8",
            "number": 8,
            "text": "Analyze mechanisms in an OS to control access to resources and propose resource optimization enhancements.",
            "coverage": [
              {
                "course": "CS 310",
                "clo": "CLO 8",
                "evidence": "Access-control and resource experiment"
              }
            ]
          },
          {
            "id": "SKU6.2-SLO9",
            "number": 9,
            "text": "Assess the importance, features, and limitations of an OS for protection and security.",
            "coverage": [
              {
                "course": "CS 402",
                "clo": "CLO 4",
                "evidence": "OS protection evaluation"
              }
            ]
          }
        ]
      },
      {
        "id": "SKU7.1",
        "title": "Specific Knowledge Unit (SKU) 7.1: Object-oriented programming and functional programming",
        "page": 32,
        "topics": [
          {
            "id": "SKU7.1-T1",
            "text": "Object-oriented concepts.",
            "courses": [
              "CS 102",
              "CS 320"
            ]
          },
          {
            "id": "SKU7.1-T2",
            "text": "Functional programming concepts.",
            "courses": [
              "CS 102",
              "CS 320"
            ]
          },
          {
            "id": "SKU7.1-T3",
            "text": "Comparing paradigms.",
            "courses": [
              "CS 320"
            ]
          },
          {
            "id": "SKU7.1-T4",
            "text": "Operations on aggregates.",
            "courses": [
              "CS 102",
              "CS 320"
            ]
          },
          {
            "id": "SKU7.1-T5",
            "text": "Type systems.",
            "courses": [
              "CS 102",
              "CS 320"
            ]
          }
        ],
        "slos": [
          {
            "id": "SKU7.1-SLO1",
            "number": 1,
            "text": "Design a class hierarchy that enables reusability through inheritance, subtyping, and encapsulation.",
            "coverage": [
              {
                "course": "CS 102",
                "clo": "CLO 2",
                "evidence": "Class hierarchy and tested implementation"
              }
            ]
          },
          {
            "id": "SKU7.1-SLO2",
            "number": 2,
            "text": "Compare the relationship between object-oriented inheritance, subtyping, and functional programming approaches.",
            "coverage": [
              {
                "course": "CS 320",
                "clo": "CLO 1",
                "evidence": "Cross-paradigm comparison"
              }
            ]
          },
          {
            "id": "SKU7.1-SLO3",
            "number": 3,
            "text": "Apply object-oriented encapsulation mechanisms and functional encapsulation techniques in writing simple programs.",
            "coverage": [
              {
                "course": "CS 102",
                "clo": "CLO 3",
                "evidence": "Paired implementation with individual defense"
              }
            ]
          },
          {
            "id": "SKU7.1-SLO4",
            "number": 4,
            "text": "Utilize iterators and aggregation operations in multiple programming languages to handle collections.",
            "coverage": [
              {
                "course": "CS 320",
                "clo": "CLO 2",
                "evidence": "Two-language collection practical"
              }
            ]
          },
          {
            "id": "SKU7.1-SLO5",
            "number": 5,
            "text": "Construct algorithms that avoid mutable state assignment, focusing on immutability and functional approaches.",
            "coverage": [
              {
                "course": "CS 320",
                "clo": "CLO 3",
                "evidence": "Functional-programming implementation"
              }
            ]
          },
          {
            "id": "SKU7.1-SLO6",
            "number": 6,
            "text": "Develop higher-order functions that accept and return other functions to enhance program flexibility.",
            "coverage": [
              {
                "course": "CS 320",
                "clo": "CLO 3",
                "evidence": "Functional-programming implementation"
              }
            ]
          },
          {
            "id": "SKU7.1-SLO7",
            "number": 7,
            "text": "Apply knowledge of types, error handling, and generics to write well- structured, type-safe programs.",
            "coverage": [
              {
                "course": "CS 102",
                "clo": "CLO 4",
                "evidence": "Typed collection and exception practical"
              }
            ]
          },
          {
            "id": "SKU7.1-SLO8",
            "number": 8,
            "text": "Apply various strategies to test and debug simple programs.",
            "coverage": [
              {
                "course": "CS 101",
                "clo": "CLO 5",
                "evidence": "Debugging practical and test record"
              },
              {
                "course": "CS 102",
                "clo": "CLO 6",
                "evidence": "Individual inspection and debugging record"
              }
            ]
          },
          {
            "id": "SKU7.1-SLO9",
            "number": 9,
            "text": "Apply the documentation and program style standards for software readability and maintainability.",
            "coverage": [
              {
                "course": "CS 102",
                "clo": "CLO 7",
                "evidence": "Documentation and style review"
              }
            ]
          }
        ]
      },
      {
        "id": "SKU7.2",
        "title": "Specific Knowledge Unit (SKU) 7.2: Program representation, language translation, and execution",
        "page": 34,
        "topics": [
          {
            "id": "SKU7.2-T1",
            "text": "Program input and representation.",
            "courses": [
              "CS 320"
            ]
          },
          {
            "id": "SKU7.2-T2",
            "text": "Language processing concepts.",
            "courses": [
              "CS 320"
            ]
          },
          {
            "id": "SKU7.2-T3",
            "text": "Memory organization and management.",
            "courses": [
              "CS 240",
              "CS 320"
            ]
          },
          {
            "id": "SKU7.2-T4",
            "text": "Garbage collection.",
            "courses": [
              "CS 320"
            ]
          }
        ],
        "slos": [
          {
            "id": "SKU7.2-SLO1",
            "number": 1,
            "text": "Examine programs that use other programs as input data and interpret their representations.",
            "coverage": [
              {
                "course": "CS 320",
                "clo": "CLO 5",
                "evidence": "AST and program-representation analysis"
              }
            ]
          },
          {
            "id": "SKU7.2-SLO2",
            "number": 2,
            "text": "Evaluate the structure and function of an abstract syntax tree for a given language.",
            "coverage": [
              {
                "course": "CS 320",
                "clo": "CLO 5",
                "evidence": "AST and program-representation analysis"
              }
            ]
          },
          {
            "id": "SKU7.2-SLO3",
            "number": 3,
            "text": "Design a program to process and optimize code, such as an interpreter, expression optimizer, or documentation generator.",
            "coverage": [
              {
                "course": "CS 320",
                "clo": "CLO 6",
                "evidence": "Individual language-processing project"
              }
            ]
          },
          {
            "id": "SKU7.2-SLO4",
            "number": 4,
            "text": "Differentiate between syntax, parsing, semantics, and evaluation in programming languages.",
            "coverage": [
              {
                "course": "CS 320",
                "clo": "CLO 4",
                "evidence": "Language-concept examination"
              }
            ]
          },
          {
            "id": "SKU7.2-SLO5",
            "number": 5,
            "text": "Construct the low-level runtime representation of core language constructs.",
            "coverage": [
              {
                "course": "CS 320",
                "clo": "CLO 7",
                "evidence": "Runtime representation and execution trace"
              }
            ]
          },
          {
            "id": "SKU7.2-SLO6",
            "number": 6,
            "text": "Assess programming language implementations that organize memory into global data, text, heap, and stack sections.",
            "coverage": [
              {
                "course": "CS 240",
                "clo": "CLO 4",
                "evidence": "Executable and debugger investigation"
              }
            ]
          },
          {
            "id": "SKU7.2-SLO7",
            "number": 7,
            "text": "Resolve issues related to memory leaks and dangling pointer dereferences.",
            "coverage": [
              {
                "course": "CS 240",
                "clo": "CLO 5",
                "evidence": "Memory-safety repair practical"
              }
            ]
          }
        ]
      },
      {
        "id": "SKU8.1",
        "title": "Specific Knowledge Unit (SKU) 8.1: Software processes, software management, and requirements engineering",
        "page": 36,
        "topics": [
          {
            "id": "SKU8.1-T1",
            "text": "Software development processes and lifecycle.",
            "courses": [
              "CS 250"
            ]
          },
          {
            "id": "SKU8.1-T2",
            "text": "Software system interaction and data modeling.",
            "courses": [
              "CS 250",
              "CS 230"
            ]
          },
          {
            "id": "SKU8.1-T3",
            "text": "Software engineering foundations and requirements.",
            "courses": [
              "CS 250"
            ]
          }
        ],
        "slos": [
          {
            "id": "SKU8.1-SLO1",
            "number": 1,
            "text": "Describe how software can interact with various systems, including information management, embedded, process control, and communications systems.",
            "coverage": [
              {
                "course": "CS 250",
                "clo": "CLO 1",
                "evidence": "System context comparison"
              }
            ]
          },
          {
            "id": "SKU8.1-SLO2",
            "number": 2,
            "text": "Illustrate the different process models (e.g., waterfall, iterative, and agile).",
            "coverage": [
              {
                "course": "CS 250",
                "clo": "CLO 2",
                "evidence": "Lifecycle and process portfolio"
              }
            ]
          },
          {
            "id": "SKU8.1-SLO3",
            "number": 3,
            "text": "Illustrate the phases of a software lifecycle and its deliverables through an example.",
            "coverage": [
              {
                "course": "CS 250",
                "clo": "CLO 2",
                "evidence": "Lifecycle and process portfolio"
              }
            ]
          },
          {
            "id": "SKU8.1-SLO4",
            "number": 4,
            "text": "Analyze several examples of software risks.",
            "coverage": [
              {
                "course": "BUS 401",
                "clo": "CLO 3",
                "evidence": "Software risk register"
              }
            ]
          },
          {
            "id": "SKU8.1-SLO5",
            "number": 5,
            "text": "Define the key components of a use case.",
            "coverage": [
              {
                "course": "CS 250",
                "clo": "CLO 3",
                "evidence": "Requirements specification and critique"
              }
            ]
          },
          {
            "id": "SKU8.1-SLO6",
            "number": 6,
            "text": "Analyze a given requirements model for a simple software system.",
            "coverage": [
              {
                "course": "CS 250",
                "clo": "CLO 3",
                "evidence": "Requirements specification and critique"
              }
            ]
          },
          {
            "id": "SKU8.1-SLO7",
            "number": 7,
            "text": "Describe the common techniques and fundamental challenges for requirements elicitation.",
            "coverage": [
              {
                "course": "CS 250",
                "clo": "CLO 4",
                "evidence": "Interview plan and elicitation reflection"
              }
            ]
          },
          {
            "id": "SKU8.1-SLO8",
            "number": 8,
            "text": "Explain the key components of a data model (e.g., class diagrams or ER diagrams).",
            "coverage": [
              {
                "course": "CS 230",
                "clo": "CLO 5",
                "evidence": "ER and UML design dossier"
              }
            ]
          },
          {
            "id": "SKU8.1-SLO9",
            "number": 9,
            "text": "Write functional and non-functional requirements for a software system.",
            "coverage": [
              {
                "course": "CS 250",
                "clo": "CLO 3",
                "evidence": "Requirements specification and critique"
              }
            ]
          }
        ]
      },
      {
        "id": "SKU8.2",
        "title": "Specific Knowledge Unit (SKU) 8.2: Software design, construction, verification, and validation",
        "page": 38,
        "topics": [
          {
            "id": "SKU8.2-T1",
            "text": "Software design principles and architecture.",
            "courses": [
              "CS 250"
            ]
          },
          {
            "id": "SKU8.2-T2",
            "text": "Software integration strategies and testing methods.",
            "courses": [
              "CS 370"
            ]
          },
          {
            "id": "SKU8.2-T3",
            "text": "Software analysis and code quality assurance.",
            "courses": [
              "CS 102",
              "CS 250",
              "CS 370"
            ]
          }
        ],
        "slos": [
          {
            "id": "SKU8.2-SLO1",
            "number": 1,
            "text": "Explain design principles such as coupling, cohesion, and encapsulation.",
            "coverage": [
              {
                "course": "CS 250",
                "clo": "CLO 5",
                "evidence": "Architecture and design-model review"
              }
            ]
          },
          {
            "id": "SKU8.2-SLO2",
            "number": 2,
            "text": "Use a design paradigm to design a simple software system.",
            "coverage": [
              {
                "course": "CS 250",
                "clo": "CLO 5",
                "evidence": "Architecture and design-model review"
              }
            ]
          },
          {
            "id": "SKU8.2-SLO3",
            "number": 3,
            "text": "Construct models of the design of a simple software system.",
            "coverage": [
              {
                "course": "CS 250",
                "clo": "CLO 5",
                "evidence": "Architecture and design-model review"
              }
            ]
          },
          {
            "id": "SKU8.2-SLO4",
            "number": 4,
            "text": "Describe the software architecture design of a simple software system.",
            "coverage": [
              {
                "course": "CS 250",
                "clo": "CLO 5",
                "evidence": "Architecture and design-model review"
              }
            ]
          },
          {
            "id": "SKU8.2-SLO5",
            "number": 5,
            "text": "Describe mechanisms for implementing designs to achieve desired properties such as reliability, efficiency, and robustness.",
            "coverage": [
              {
                "course": "CS 250",
                "clo": "CLO 6",
                "evidence": "Implemented design and quality evidence"
              }
            ]
          },
          {
            "id": "SKU8.2-SLO6",
            "number": 6,
            "text": "Describe integration strategies, including top-down, bottom-up, and sandwich integration.",
            "coverage": [
              {
                "course": "CS 370",
                "clo": "CLO 4",
                "evidence": "Integration strategy and test sequence"
              }
            ]
          },
          {
            "id": "SKU8.2-SLO7",
            "number": 7,
            "text": "Distinguish between program validation and verification.",
            "coverage": [
              {
                "course": "CS 250",
                "clo": "CLO 7",
                "evidence": "Verification and validation plan"
              }
            ]
          },
          {
            "id": "SKU8.2-SLO8",
            "number": 8,
            "text": "Perform an inspection of a medium-sized code segment.",
            "coverage": [
              {
                "course": "CS 102",
                "clo": "CLO 6",
                "evidence": "Individual inspection and debugging record"
              }
            ]
          },
          {
            "id": "SKU8.2-SLO9",
            "number": 9,
            "text": "Create and document a set of tests for a medium-sized code segment.",
            "coverage": [
              {
                "course": "CS 370",
                "clo": "CLO 5",
                "evidence": "Test design, code and results"
              }
            ]
          },
          {
            "id": "SKU8.2-SLO10",
            "number": 10,
            "text": "Use a defect-tracking tool in a small software project.",
            "coverage": [
              {
                "course": "CS 250",
                "clo": "CLO 8",
                "evidence": "Issue history and individual contribution defense"
              }
            ]
          }
        ]
      }
    ]
  },
  "facilitiesPolicy": "Facilities and software are planned course-delivery requirements. The college confirms capacity, accessibility, supported releases, software access and technical support before each offering. Computational workshops within lecture-led courses do not add registered lab credits or contact hours.",
  "supplementaryUpdates": {
    "CS 350": [
      {
        "title": "Fundamentals of Computer Graphics",
        "citation": "Steve Marschner and Peter Shirley (eds.) · CRC Press · 5th ed. · © 2021",
        "url": "https://www.routledge.com/Fundamentals-of-Computer-Graphics/Marschner-Shirley/p/book/9780367505035",
        "fit": "Selected representation, color, transformation and rendering chapters support the required graphics strand and individual interactive-graphics practical."
      }
    ],
    "CS 455": [
      {
        "title": "The DevOps Handbook",
        "citation": "Gene Kim, Jez Humble, Patrick Debois and John Willis · IT Revolution · 2nd ed. · 2021",
        "url": "https://itrevolution.com/product/the-devops-handbook-second-edition/",
        "fit": "Use the delivery pipeline, feedback, reliability and integrated-security chapters for CLOs 3–8; current official tool documentation supports the practical work."
      }
    ],
    "CS 466": [
      {
        "title": "Biopython Tutorial and Cookbook",
        "citation": "Biopython project · current official documentation",
        "url": "https://biopython.org/docs/latest/Tutorial/",
        "fit": "Sequence parsing, database access and reproducible Python exercises support CLOs 2–6."
      }
    ],
    "CS 467": [
      {
        "title": "Introduction to Information Retrieval",
        "citation": "Christopher D. Manning, Prabhakar Raghavan and Hinrich Schütze · Cambridge University Press · 2008",
        "url": "https://nlp.stanford.edu/IR-book/",
        "fit": "Foundational indexing, lexical ranking and evaluation chapters support CLOs 1–3 and 5. The primary NLP text supplies current neural methods."
      }
    ],
    "CS 468": [
      {
        "title": "AI Engineering: Building Applications with Foundation Models",
        "citation": "Chip Huyen · O’Reilly · 1st ed. · 2025",
        "url": "https://www.oreilly.com/library/view/ai-engineering/9781098166298/",
        "fit": "Selected production evaluation and foundation-model application chapters extend the model lifecycle and assurance outcomes. The primary text remains Designing Machine Learning Systems."
      }
    ],
    "CS 469": [
      {
        "title": "LLVM Language Reference and Tutorial",
        "citation": "LLVM project · current official documentation",
        "url": "https://llvm.org/docs/tutorial/",
        "fit": "A constrained target-language tutorial supports intermediate representation, code generation and testing; the primary textbook supplies theory."
      }
    ]
  },
  "complianceChecks": [
    [
      "Degree structure",
      "130 credits over four years and eight regular semesters",
      "Semester totals: 17, 16, 16, 18, 18, 9, 18, 18; co-op continues into summer."
    ],
    [
      "College and department",
      "9 college + 36 department credits",
      "ARAB 101, COMM 101 and ISLM 101 remain shared college courses; one Arabic and one Islamic course."
    ],
    [
      "Computing core",
      "61 required credits; 58 excluding Research Methods",
      "Capstones, co-op and electives are not needed to reach the ETEC/ABET 40-credit computing minimum."
    ],
    [
      "ETEC essential allocation",
      "30 credits",
      "20 mathematics/statistics + 10 laboratory sciences; CS 103 counted only as mathematics."
    ],
    [
      "ABET mathematics/statistics",
      "20 credits against a 15-credit minimum",
      "Discrete structures, probability, statistics and calculus-level rigor retained."
    ],
    [
      "ABET non-computing science",
      "10 laboratory-science credits",
      "PHYS 101, PHYS 102 and BIO 101 retain scientific-method investigations."
    ],
    [
      "ETEC specific outcomes",
      "131 of 131 mapped to required courses",
      "All 60 source topics retained; graph isomorphism/spanning-tree reasoning moves to CS 103 CLO 8."
    ],
    [
      "ACM/IEEE CS Curricula",
      "270 instructional hours across 17 CS Core areas",
      "All allocations use required courses; four graphics hours in CS 350; four ML hours within CS 340; three ethics hours move from CS 430 to CS 340."
    ],
    [
      "Program assessment",
      "Two required-course points for every PLO",
      "K3 and S4 second assessment points move from elective CS 430 to required CS 451."
    ],
    [
      "ABET outcomes",
      "All six outcome mappings retained",
      "General Criterion 5 and CS-specific algorithms, theory, languages, software, systems and major-project coverage remain explicit."
    ],
    [
      "Cooperative training",
      "9 credits, 24 weeks, Semester 6 and summer",
      "Sole Semester 6 registration; entry requires all 85 credits from Semesters 1–5; grade posted before Semester 7."
    ],
    [
      "Capstone sequence",
      "CS 410 + CS 411, 6 credits",
      "Semester 7 proposal/prototype and Semester 8 integration/evaluation; prerequisites remain reachable."
    ],
    [
      "Elective progression",
      "19 options; choose three at 3 credits each",
      "CS 468 requires prior or concurrent CS 430 and CS 455. No compulsory course or mandatory outcome requires an elective."
    ],
    [
      "Course specifications",
      "56 specifications, each with 6–8 CLOs",
      "Topics, assessment activities, PLO mapping, textbook fit and course-specific labs/software are specified."
    ],
    [
      "Resource and approval evidence",
      "Planned provision retained and updated",
      "Institutional approval, qualified staff, lab/cloud capacity, moderated assessments and delivered attainment must be evidenced before/across delivery."
    ]
  ]
};
