"use strict";
const curriculum = {
  "program": {
    "totalCredits": 130,
    "creditGroups": [
      [
        "Institution requirements",
        6,
        [
          "ARAB 101",
          "ISLM 101"
        ]
      ],
      [
        "College requirements",
        33,
        [
          "MATH 101",
          "MATH 102",
          "PHYS 101",
          "COMM 101",
          "MATH 120",
          "PHYS 102",
          "CHEM 101",
          "MATH 220",
          "MATH 230",
          "BUS 401"
        ]
      ],
      [
        "Computer Science core",
        67,
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
    "creditNote": "The 130 credits include one 9-credit co-op registration across Semester 6 and the following summer.",
    "sharedCourses": [
      "ARAB 101",
      "COMM 101",
      "ISLM 101"
    ]
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
      "summary": "Learn to translate problems into programs and make evidence-based arguments with mathematics and experiment.",
      "courses": [
        "CS 101",
        "MATH 101",
        "MATH 102",
        "PHYS 101",
        "COMM 101"
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
        "CHEM 101",
        "ARAB 101"
      ],
      "credits": 17
    },
    {
      "number": 3,
      "year": 2,
      "title": "Data, architecture, and ethics",
      "summary": "Study how information is organized, how computers represent it, and what professional responsibilities arise when using it.",
      "courses": [
        "CS 201",
        "CS 210",
        "MATH 220",
        "CS 230",
        "ISLM 101"
      ],
      "credits": 18
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
        "CS 260"
      ],
      "credits": 17
    },
    {
      "number": 5,
      "year": 3,
      "title": "Theory, systems, and intelligent computing",
      "summary": "Study operating systems, language design, computation, AI, and human–computer interaction before the co-op.",
      "courses": [
        "CS 310",
        "CS 320",
        "CS 330",
        "CS 340",
        "CS 350"
      ],
      "credits": 17
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
      "title": "Advanced systems and Capstone I",
      "summary": "Study distributed systems, security, and graphics, then define and prototype a substantial computing project.",
      "courses": [
        "CS 401",
        "CS 402",
        "CS 403",
        "BUS 401",
        "CS 410",
        "EL-1"
      ],
      "credits": 18
    },
    {
      "number": 8,
      "year": 4,
      "title": "Capstone II and technical depth",
      "summary": "Complete and evaluate the capstone while developing further depth through machine learning, deployment, and electives.",
      "courses": [
        "CS 411",
        "CS 420",
        "CS 430",
        "EL-2",
        "EL-3"
      ],
      "credits": 17
    }
  ],
  "categories": {
    "institution": "Institution requirements",
    "college": "College requirements",
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
      "summary": "Learn to design, trace, test, and document programs in Python.",
      "topics": [
        "Problem decomposition and representations",
        "Types, expressions, and input/output",
        "Selection and iteration",
        "Functions, recursion, and scope",
        "Strings, collections, and file input/output",
        "Program readability, IDE debugging, test case design, and version control"
      ],
      "clos": [
        {
          "plo": "K3",
          "stage": "I",
          "statement": "Explain how control flow and data representations affect a program."
        },
        {
          "plo": "S1",
          "stage": "I",
          "statement": "Trace an algorithm and identify an error using a test case."
        },
        {
          "plo": "S2",
          "stage": "I",
          "statement": "Implement and test a modular Python program from a written specification."
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": null,
      "resource": "Python Tutorial and laboratory exercises in the college LMS.",
      "name": "Programming I",
      "placement": "Semester 1",
      "anchor": "cs-101"
    },
    "MATH 101": {
      "id": "MATH 101",
      "code": "MATH 101",
      "title": "Calculus I",
      "term": 1,
      "credits": 4,
      "category": "college",
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
        "Numerical approximation and interpretation"
      ],
      "clos": [
        {
          "plo": "K1",
          "stage": "I",
          "statement": "Explain limits, differentiation, and integration in a model."
        },
        {
          "plo": "S1",
          "stage": "I",
          "statement": "Solve and interpret a calculus-based optimization problem."
        },
        {
          "plo": "S4",
          "stage": "I",
          "statement": "Compare an analytic result with a numerical approximation."
        }
      ],
      "profile": "lecture",
      "group": null,
      "requirement": null,
      "resource": "OpenStax Calculus Volume 1 and problem sets.",
      "name": "Calculus I",
      "placement": "Semester 1",
      "anchor": "math-101"
    },
    "MATH 102": {
      "id": "MATH 102",
      "code": "MATH 102",
      "title": "Discrete Mathematics",
      "term": 1,
      "credits": 3,
      "category": "college",
      "lecture": 3,
      "practical": 0,
      "prerequisites": [],
      "summary": "Develop the discrete reasoning needed for algorithms, proofs, and data structures.",
      "topics": [
        "Sets, relations, functions, and cardinality",
        "Propositional and predicate logic, inference, and normal forms",
        "Proof by induction and contradiction, recursive definitions",
        "Counting, permutations, combinations, and pigeonhole reasoning",
        "Modular arithmetic and order notation",
        "Graph and tree basics with discrete probability examples"
      ],
      "clos": [
        {
          "plo": "K1",
          "stage": "I",
          "statement": "Explain how discrete structures represent relationships and processes."
        },
        {
          "plo": "S1",
          "stage": "I",
          "statement": "Construct a valid proof or counterexample for a discrete problem."
        },
        {
          "plo": "S4",
          "stage": "I",
          "statement": "Check a counting or graph solution against a small constructed example."
        }
      ],
      "profile": "lecture",
      "group": null,
      "requirement": null,
      "resource": "Mathematics for Computer Science, MIT OpenCourseWare, and problem sets.",
      "name": "Discrete Mathematics",
      "placement": "Semester 1",
      "anchor": "math-102"
    },
    "PHYS 101": {
      "id": "PHYS 101",
      "code": "PHYS 101",
      "title": "Physics I with Laboratory",
      "term": 1,
      "credits": 3,
      "category": "college",
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
          "statement": "Explain the physical principles behind a mechanics experiment."
        },
        {
          "plo": "S4",
          "stage": "I",
          "statement": "Test a mechanics prediction and report measurements, uncertainty, and conclusions."
        },
        {
          "plo": "V1",
          "stage": "I",
          "statement": "Apply laboratory safety and data-integrity procedures."
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": null,
      "resource": "OpenStax University Physics Volume 1 and the physics lab manual.",
      "name": "Physics I with Laboratory",
      "placement": "Semester 1",
      "anchor": "phys-101"
    },
    "COMM 101": {
      "id": "COMM 101",
      "code": "COMM 101",
      "title": "Professional Communication & Presentation",
      "term": 1,
      "credits": 3,
      "category": "college",
      "lecture": 3,
      "practical": 0,
      "prerequisites": [],
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
          "statement": "Prepare a professional report and deliver a briefing suited to their audiences."
        },
        {
          "plo": "S4",
          "stage": "I",
          "statement": "Evaluate and cite evidence used in professional communication."
        },
        {
          "plo": "V1",
          "stage": "I",
          "statement": "Apply standards of academic integrity and accessible communication."
        }
      ],
      "profile": "project",
      "group": null,
      "requirement": null,
      "resource": "Shared business and computing cases and a common report and presentation rubric.",
      "name": "Professional Communication & Presentation",
      "placement": "Semester 1",
      "anchor": "comm-101"
    },
    "CS 102": {
      "id": "CS 102",
      "code": "CS 102",
      "title": "Programming II",
      "term": 2,
      "credits": 4,
      "category": "core",
      "lecture": 3,
      "practical": 2,
      "prerequisites": [
        "CS 101"
      ],
      "summary": "Design and test object-oriented programs in Python and explore alternative programming styles.",
      "topics": [
        "Abstract data types, classes, and objects",
        "Encapsulation, interfaces, and composition",
        "Inheritance, polymorphism, and dynamic dispatch",
        "Exceptions, test design, and debugging",
        "Recursion, higher-order functions, and basic functional patterns",
        "Team development and review in a shared repository"
      ],
      "clos": [
        {
          "plo": "K3",
          "stage": "P",
          "statement": "Explain composition, dynamic dispatch, and functional abstraction."
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Build and test an object-oriented program using interfaces."
        },
        {
          "plo": "V2",
          "stage": "I",
          "statement": "Review a peer contribution and resolve documented defects."
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": null,
      "resource": "Python Tutorial and curated object-oriented programming labs.",
      "name": "Programming II",
      "placement": "Semester 2",
      "anchor": "cs-102"
    },
    "MATH 120": {
      "id": "MATH 120",
      "code": "MATH 120",
      "title": "Linear Algebra",
      "term": 2,
      "credits": 3,
      "category": "college",
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
          "stage": "P",
          "statement": "Explain linear independence and linear transformations."
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Solve a system and interpret its rank or stability."
        },
        {
          "plo": "S4",
          "stage": "I",
          "statement": "Evaluate a least-squares approximation and explain the residuals."
        }
      ],
      "profile": "lecture",
      "group": null,
      "requirement": null,
      "resource": "MIT OpenCourseWare Linear Algebra and selected computational exercises.",
      "name": "Linear Algebra",
      "placement": "Semester 2",
      "anchor": "math-120"
    },
    "PHYS 102": {
      "id": "PHYS 102",
      "code": "PHYS 102",
      "title": "Physics II with Laboratory",
      "term": 2,
      "credits": 3,
      "category": "college",
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
          "statement": "Explain the physical behavior of a basic circuit."
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Design and report an experiment testing a circuit prediction."
        },
        {
          "plo": "V1",
          "stage": "I",
          "statement": "Apply electrical safety and document anomalous measurements."
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": null,
      "resource": "OpenStax University Physics Volume 2 and the physics lab manual.",
      "name": "Physics II with Laboratory",
      "placement": "Semester 2",
      "anchor": "phys-102"
    },
    "CHEM 101": {
      "id": "CHEM 101",
      "code": "CHEM 101",
      "title": "General Chemistry with Laboratory",
      "term": 2,
      "credits": 4,
      "category": "college",
      "lecture": 3,
      "practical": 2,
      "prerequisites": [],
      "summary": "Use chemical principles and experiments to investigate materials and energy.",
      "topics": [
        "Atomic structure and bonding",
        "Chemical reactions and stoichiometry",
        "Solutions and acid–base chemistry",
        "Thermochemistry and equilibrium",
        "Electrochemistry and computing materials",
        "Lab safety, measurement, and reporting"
      ],
      "clos": [
        {
          "plo": "K2",
          "stage": "I",
          "statement": "Explain chemical properties relevant to materials and energy storage."
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Conduct a controlled chemical experiment and analyze its results."
        },
        {
          "plo": "V1",
          "stage": "I",
          "statement": "Use safe procedures and maintain accurate laboratory records."
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": null,
      "resource": "OpenStax Chemistry 2e and the chemistry lab manual.",
      "name": "General Chemistry with Laboratory",
      "placement": "Semester 2",
      "anchor": "chem-101"
    },
    "ARAB 101": {
      "id": "ARAB 101",
      "code": "ARAB 101",
      "title": "Arabic Language",
      "term": 2,
      "credits": 3,
      "category": "institution",
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
          "statement": "Write a coherent Arabic professional report."
        },
        {
          "plo": "S3",
          "stage": "P",
          "statement": "Deliver an Arabic briefing tailored to a specific audience."
        },
        {
          "plo": "V1",
          "stage": "I",
          "statement": "Attribute sources and respect professional communication conventions."
        }
      ],
      "profile": "project",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Arabic Language",
      "placement": "Semester 2",
      "anchor": "arab-101"
    },
    "CS 201": {
      "id": "CS 201",
      "code": "CS 201",
      "title": "Data Structures",
      "term": 3,
      "credits": 4,
      "category": "core",
      "lecture": 3,
      "practical": 2,
      "prerequisites": [
        "CS 102",
        "MATH 102"
      ],
      "summary": "Implement data structures and analyze trade-offs among their operations.",
      "topics": [
        "Asymptotic analysis and invariants",
        "Lists, stacks, queues, and iterators",
        "Trees and balanced search",
        "Hashing and maps",
        "Heaps, priority queues, and graphs",
        "Searching, sorting, traversal, and benchmarking"
      ],
      "clos": [
        {
          "plo": "K1",
          "stage": "P",
          "statement": "Explain invariants and growth rates for common structures."
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Compare structures for time and space under an application workload."
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Implement, test, and benchmark a data structure."
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": null,
      "resource": "Open Data Structures by Pat Morin and programming labs.",
      "name": "Data Structures",
      "placement": "Semester 3",
      "anchor": "cs-201"
    },
    "CS 210": {
      "id": "CS 210",
      "code": "CS 210",
      "title": "Computer Organization and Architecture",
      "term": 3,
      "credits": 4,
      "category": "core",
      "lecture": 3,
      "practical": 2,
      "prerequisites": [
        "CS 102"
      ],
      "summary": "Connect hardware organization and instruction execution to the behavior of software.",
      "topics": [
        "Evolution of computers and their uses",
        "Binary representation, compression, and Boolean logic",
        "Combinational and sequential circuits",
        "Stored-program architecture, instruction sets, and assembly",
        "Processors, datapaths, and performance",
        "Memory hierarchy, caching, and interconnection",
        "Input/output, interrupts, and laboratory simulation"
      ],
      "clos": [
        {
          "plo": "K2",
          "stage": "P",
          "statement": "Explain instruction execution and the memory hierarchy."
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Analyze a processor or cache performance trade-off."
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Use a simulator to test a hardware–software performance hypothesis."
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Computer Organization and Architecture",
      "placement": "Semester 3",
      "anchor": "cs-210"
    },
    "MATH 220": {
      "id": "MATH 220",
      "code": "MATH 220",
      "title": "Probability and Statistics",
      "term": 3,
      "credits": 4,
      "category": "college",
      "lecture": 3,
      "practical": 2,
      "prerequisites": [
        "MATH 101",
        "MATH 102"
      ],
      "summary": "Use probability and statistical inference to reason about uncertainty and data.",
      "topics": [
        "Probability axioms, conditioning, independence, and Bayes' rule",
        "Discrete and continuous random variables",
        "Expectation, variance, and distributions",
        "Sampling and descriptive statistics",
        "Confidence intervals and hypothesis testing",
        "Regression, experiment design, and data interpretation"
      ],
      "clos": [
        {
          "plo": "K1",
          "stage": "P",
          "statement": "Explain probability models and statistical inference assumptions."
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Select a model or test appropriate to a computing problem."
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Analyze a dataset and communicate uncertainty and limitations."
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": null,
      "resource": "OpenStax Introductory Statistics and computing-focused problem sets.",
      "name": "Probability and Statistics",
      "placement": "Semester 3",
      "anchor": "math-220"
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
        "Access control, provenance, and data governance"
      ],
      "clos": [
        {
          "plo": "K3",
          "stage": "P",
          "statement": "Explain data models and transaction properties."
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Design and test a relational database with representative queries."
        },
        {
          "plo": "V1",
          "stage": "P",
          "statement": "Justify access and handling controls for a dataset."
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": null,
      "resource": "PostgreSQL documentation and the database lab manual.",
      "name": "Database Systems",
      "placement": "Semester 3",
      "anchor": "cs-230"
    },
    "ISLM 101": {
      "id": "ISLM 101",
      "code": "ISLM 101",
      "title": "Islamic Culture and Professional Values",
      "term": 3,
      "credits": 3,
      "category": "institution",
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
          "statement": "Communicate a reasoned ethical decision to stakeholders."
        },
        {
          "plo": "V1",
          "stage": "P",
          "statement": "Compare professional actions using Islamic ethical principles and applicable professional standards."
        }
      ],
      "profile": "project",
      "group": null,
      "requirement": null,
      "resource": "Instructor-selected Islamic culture and ethics readings, discipline-specific professional codes, and case materials.",
      "name": "Islamic Culture and Professional Values",
      "placement": "Semester 3",
      "anchor": "islm-101"
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
        "Greedy methods and correctness",
        "Dynamic programming",
        "Graph algorithms and shortest paths",
        "Reductions, lower bounds, and complexity classes"
      ],
      "clos": [
        {
          "plo": "K1",
          "stage": "M",
          "statement": "Explain correctness and complexity of fundamental algorithm families."
        },
        {
          "plo": "S1",
          "stage": "M",
          "statement": "Select, analyze, and justify an algorithm for a constrained problem."
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Compare measured performance with a complexity prediction."
        }
      ],
      "profile": "lecture",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Design and Analysis of Algorithms",
      "placement": "Semester 4",
      "anchor": "cs-220"
    },
    "CS 240": {
      "id": "CS 240",
      "code": "CS 240",
      "title": "Systems Programming",
      "term": 4,
      "credits": 4,
      "category": "core",
      "lecture": 3,
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
        "Debugging, memory safety, and performance",
        "Resource measurement, system failures, and defensive design"
      ],
      "clos": [
        {
          "plo": "K2",
          "stage": "P",
          "statement": "Explain how compilation and operating interfaces support execution."
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Implement and test a program using system calls."
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Diagnose resource or memory behavior using suitable tools."
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Systems Programming",
      "placement": "Semester 4",
      "anchor": "cs-240"
    },
    "CS 250": {
      "id": "CS 250",
      "code": "CS 250",
      "title": "Software Engineering",
      "term": 4,
      "credits": 4,
      "category": "core",
      "lecture": 3,
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
        "Architecture, modular design, and version control",
        "Construction, code review, and continuous integration",
        "Verification, validation, and security by design",
        "Maintenance and accessible technical documentation",
        "Professional codes, software licensing, accountability, and escalation of concerns"
      ],
      "clos": [
        {
          "plo": "K3",
          "stage": "P",
          "statement": "Explain how engineering processes support quality and maintenance."
        },
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Deliver and evaluate a tested team software increment."
        },
        {
          "plo": "V1",
          "stage": "P",
          "statement": "Justify a software decision using professional responsibilities and licensing obligations."
        },
        {
          "plo": "V2",
          "stage": "P",
          "statement": "Coordinate team roles, give constructive feedback, and document individual contributions."
        }
      ],
      "profile": "project",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Software Engineering",
      "placement": "Semester 4",
      "anchor": "cs-250"
    },
    "MATH 230": {
      "id": "MATH 230",
      "code": "MATH 230",
      "title": "Multivariable Calculus and Optimization",
      "term": 4,
      "credits": 3,
      "category": "college",
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
          "statement": "Explain gradients and constrained optimization."
        },
        {
          "plo": "S1",
          "stage": "P",
          "statement": "Formulate and solve a multivariable optimization problem."
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Compare an analytic solution with a numerical method."
        }
      ],
      "profile": "lecture",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Multivariable Calculus and Optimization",
      "placement": "Semester 4",
      "anchor": "math-230"
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
        "Measurement, reliability, and network security foundations"
      ],
      "clos": [
        {
          "plo": "K2",
          "stage": "P",
          "statement": "Explain end-to-end delivery across protocol layers."
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Implement and test a networked application."
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Interpret measurements of delay, loss, and throughput."
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Computer Networks",
      "placement": "Semester 4",
      "anchor": "cs-260"
    },
    "CS 310": {
      "id": "CS 310",
      "code": "CS 310",
      "title": "Operating Systems",
      "term": 5,
      "credits": 4,
      "category": "core",
      "lecture": 3,
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
        "Virtualization, access controls, and resource experiments"
      ],
      "clos": [
        {
          "plo": "K2",
          "stage": "M",
          "statement": "Explain operating system mechanisms and trade-offs."
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Implement and test a concurrent program using OS primitives."
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Measure how a systems policy affects a workload."
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Operating Systems",
      "placement": "Semester 5",
      "anchor": "cs-310"
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
        "Semantics, lambda expressions, and runtime representation",
        "Functional, imperative, object-oriented, and logic paradigms",
        "Exceptions, event-driven programming, and reactive execution",
        "Parsing, compilation, interpretation, and just-in-time execution",
        "Memory management, concurrency, safety, and liveness"
      ],
      "clos": [
        {
          "plo": "K1",
          "stage": "P",
          "statement": "Explain language constructs and their semantics."
        },
        {
          "plo": "K3",
          "stage": "M",
          "statement": "Compare paradigms and language implementation strategies."
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Implement a small interpreter or semantic evaluator."
        }
      ],
      "profile": "project",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Programming Language Concepts",
      "placement": "Semester 5",
      "anchor": "cs-320"
    },
    "CS 330": {
      "id": "CS 330",
      "code": "CS 330",
      "title": "Theory of Computation",
      "term": 5,
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
          "stage": "M",
          "statement": "Explain the expressive power and limits of computational models."
        },
        {
          "plo": "S1",
          "stage": "M",
          "statement": "Use a reduction or proof to classify a problem."
        },
        {
          "plo": "S3",
          "stage": "P",
          "statement": "Present a rigorous argument with clearly stated assumptions."
        }
      ],
      "profile": "lecture",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Theory of Computation",
      "placement": "Semester 5",
      "anchor": "cs-330"
    },
    "CS 340": {
      "id": "CS 340",
      "code": "CS 340",
      "title": "Artificial Intelligence",
      "term": 5,
      "credits": 4,
      "category": "core",
      "lecture": 3,
      "practical": 2,
      "prerequisites": [
        "CS 220",
        "MATH 220",
        "MATH 120"
      ],
      "summary": "Build intelligent problem solvers and evaluate their performance and limitations.",
      "topics": [
        "Intelligent agents, the Turing test, and problem formulation",
        "Uninformed, heuristic, and adversarial search",
        "Constraints, logic, representation, and planning",
        "Reasoning under uncertainty and decision-making",
        "Supervised, unsupervised, reinforcement, and generative learning concepts",
        "AI limitations, failure modes, affected users, and human oversight"
      ],
      "clos": [
        {
          "plo": "K3",
          "stage": "M",
          "statement": "Explain when to use search, reasoning, or learning methods."
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Implement and compare AI methods on a defined task."
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Assess performance and failure modes using a repeatable evaluation."
        },
        {
          "plo": "V1",
          "stage": "P",
          "statement": "Justify a safeguard for an AI failure, taking account of affected users and human oversight."
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Artificial Intelligence",
      "placement": "Semester 5",
      "anchor": "cs-340"
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
        "Human factors and interaction models",
        "Stakeholder interviews, user research, and requirements",
        "Prototyping and interface design",
        "Accessibility, inclusive language, and diverse users and teams",
        "Usability testing and data interpretation",
        "Design accountability, participant welfare, and iteration"
      ],
      "clos": [
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Design and improve an accessible interactive prototype."
        },
        {
          "plo": "S3",
          "stage": "P",
          "statement": "Present usability findings and explain design trade-offs to stakeholders."
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Plan and conduct a usability evaluation with appropriate safeguards."
        }
      ],
      "profile": "project",
      "group": null,
      "requirement": null,
      "resource": "W3C Web Content Accessibility Guidelines and an instructor-supplied usability protocol.",
      "name": "Human–Computer Interaction",
      "placement": "Semester 5",
      "anchor": "cs-350"
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
          "statement": "Complete a substantive computing assignment and evaluate its result."
        },
        {
          "plo": "S3",
          "stage": "P",
          "statement": "Give workplace status updates and present results with appropriate disclosure."
        },
        {
          "plo": "V1",
          "stage": "P",
          "statement": "Apply workplace ethics, confidentiality, and applicable policies."
        },
        {
          "plo": "V2",
          "stage": "M",
          "statement": "Work reliably with colleagues, communicate progress, and act on feedback."
        },
        {
          "plo": "V3",
          "stage": "P",
          "statement": "Manage work priorities and use feedback to address a professional learning need."
        }
      ],
      "profile": "coop",
      "group": null,
      "requirement": "Complete all 86 credits in Semesters 1–5 and secure a college-approved placement and learning plan.",
      "resource": "College placement handbook, signed learning plan, host induction materials, and reporting templates.",
      "name": "Cooperative Training",
      "placement": "Semester 6 and the following summer",
      "anchor": "cs-390"
    },
    "CS 401": {
      "id": "CS 401",
      "code": "CS 401",
      "title": "Parallel and Distributed Computing",
      "term": 7,
      "credits": 4,
      "category": "core",
      "lecture": 3,
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
        "Scalability, energy use, and resource efficiency"
      ],
      "clos": [
        {
          "plo": "K2",
          "stage": "M",
          "statement": "Explain parallelism, synchronization, and distributed system guarantees."
        },
        {
          "plo": "S1",
          "stage": "M",
          "statement": "Analyze a performance or consistency trade-off."
        },
        {
          "plo": "S4",
          "stage": "M",
          "statement": "Evaluate scaling and resource use with controlled experiments."
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Parallel and Distributed Computing",
      "placement": "Semester 7",
      "anchor": "cs-401"
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
          "statement": "Explain how controls protect information and systems."
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Design and test defensive controls against a documented threat model."
        },
        {
          "plo": "V1",
          "stage": "M",
          "statement": "Justify security and privacy choices considering professional obligations."
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Cybersecurity Fundamentals",
      "placement": "Semester 7",
      "anchor": "cs-402"
    },
    "CS 403": {
      "id": "CS 403",
      "code": "CS 403",
      "title": "Graphics and Interactive Techniques",
      "term": 7,
      "credits": 2,
      "category": "core",
      "lecture": 1,
      "practical": 2,
      "prerequisites": [
        "CS 240",
        "MATH 120"
      ],
      "summary": "Use graphics and interaction techniques to build and evaluate a small visual application.",
      "topics": [
        "Graphic output, human vision, digitization, and image formats",
        "Coordinates, geometry, spatialization, and transformations",
        "Viewing, projection, and rendering pipeline",
        "Color models, light, and basic shading",
        "Interactive input, animation, and visualization",
        "Rendering costs, storage trade-offs, and accessible visual design"
      ],
      "clos": [
        {
          "plo": "K3",
          "stage": "P",
          "statement": "Explain transformations and the graphics pipeline."
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Implement an interactive visualization or scene."
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Evaluate rendering performance and interpretation."
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Graphics and Interactive Techniques",
      "placement": "Semester 7",
      "anchor": "cs-403"
    },
    "BUS 401": {
      "id": "BUS 401",
      "code": "BUS 401",
      "title": "Computing Project Management and Finance",
      "term": 7,
      "credits": 3,
      "category": "college",
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
          "statement": "Analyze project scope, constraints, and feasibility."
        },
        {
          "plo": "S3",
          "stage": "P",
          "statement": "Present a defensible costed project case."
        },
        {
          "plo": "V3",
          "stage": "M",
          "statement": "Manage a project plan with budget, risks, and decision criteria."
        }
      ],
      "profile": "project",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Computing Project Management and Finance",
      "placement": "Semester 7",
      "anchor": "bus-401"
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
        "CS 350"
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
          "statement": "Formulate and justify a complex project problem and requirements."
        },
        {
          "plo": "S2",
          "stage": "P",
          "statement": "Develop and verify an initial prototype against selected requirements."
        },
        {
          "plo": "S3",
          "stage": "M",
          "statement": "Defend technical decisions and the evaluation plan before a panel."
        },
        {
          "plo": "V2",
          "stage": "M",
          "statement": "Coordinate and evidence individual and collective project work."
        }
      ],
      "profile": "capstone",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Capstone Project I",
      "placement": "Semester 7",
      "anchor": "cs-410"
    },
    "EL-1": {
      "id": "EL-1",
      "code": "",
      "title": "Technical Elective I",
      "term": 7,
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
      "placement": "Semester 7",
      "anchor": "el-1"
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
        "Deployment or a demonstrable release",
        "Technical documentation and reflection",
        "Individual and team defense and handover"
      ],
      "clos": [
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Integrate skills from earlier coursework in a substantial solution and evaluate it against measurable requirements."
        },
        {
          "plo": "S3",
          "stage": "M",
          "statement": "Communicate results and limitations in a report and oral defense."
        },
        {
          "plo": "S4",
          "stage": "M",
          "statement": "Conduct a reproducible evaluation and interpret uncertainty."
        },
        {
          "plo": "V1",
          "stage": "M",
          "statement": "Justify professional decisions about impacts and risks."
        },
        {
          "plo": "V2",
          "stage": "M",
          "statement": "Demonstrate individual contributions and team accountability."
        },
        {
          "plo": "V3",
          "stage": "M",
          "statement": "Review costs, project decisions, and future learning priorities."
        }
      ],
      "profile": "capstone",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Capstone Project II",
      "placement": "Semester 8",
      "anchor": "cs-411"
    },
    "CS 420": {
      "id": "CS 420",
      "code": "CS 420",
      "title": "Software Deployment and Operations",
      "term": 8,
      "credits": 4,
      "category": "core",
      "lecture": 3,
      "practical": 2,
      "prerequisites": [
        "CS 250",
        "CS 310",
        "CS 260"
      ],
      "summary": "Package, deploy, observe, and improve computing services on general-purpose and specialized platforms.",
      "topics": [
        "Release engineering, environments, and automation",
        "Containers, deployment, and configuration",
        "Observability, reliability, and incident review",
        "Platform APIs, scripting, three-tier web architecture, and application state",
        "Mobile, embedded, game, and robotic platform constraints",
        "Privacy, security, and sustainable operation",
        "Recovery, cost, and service-level evaluation"
      ],
      "clos": [
        {
          "plo": "K2",
          "stage": "P",
          "statement": "Explain deployment and operational choices across target platforms."
        },
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Deploy and verify a service with an automated release process."
        },
        {
          "plo": "S4",
          "stage": "M",
          "statement": "Evaluate reliability, resource use, and operational trade-offs."
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Software Deployment and Operations",
      "placement": "Semester 8",
      "anchor": "cs-420"
    },
    "CS 430": {
      "id": "CS 430",
      "code": "CS 430",
      "title": "Machine Learning",
      "term": 8,
      "credits": 4,
      "category": "core",
      "lecture": 3,
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
          "statement": "Explain the assumptions and limitations of representative learning methods."
        },
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Train and compare models using a reproducible workflow."
        },
        {
          "plo": "S4",
          "stage": "M",
          "statement": "Evaluate generalization and report uncertainty and failure cases."
        },
        {
          "plo": "V1",
          "stage": "M",
          "statement": "Assess subgroup performance and privacy risks, and justify limits and safeguards for deployment."
        }
      ],
      "profile": "lab",
      "group": null,
      "requirement": null,
      "resource": null,
      "name": "Machine Learning",
      "placement": "Semester 8",
      "anchor": "cs-430"
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
      "anchor": "el-2"
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
      "anchor": "el-3"
    },
    "CS 451": {
      "id": "CS 451",
      "code": "CS 451",
      "title": "Data Engineering",
      "term": null,
      "credits": 3,
      "category": "elective",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "CS 230",
        "CS 260"
      ],
      "summary": "Design reliable pipelines for collecting, transforming, and serving data.",
      "topics": [
        "Data integration and schema design",
        "Batch processing and orchestration",
        "Streaming and event-time concepts",
        "Data quality, observability, and lineage",
        "Storage, reproducibility, and governance",
        "Pipeline testing and performance"
      ],
      "clos": [
        {
          "plo": "K3",
          "stage": "P",
          "statement": "Explain pipeline architecture and data quality controls."
        },
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Build a tested data pipeline for an applied workload."
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Evaluate pipeline reliability and throughput."
        }
      ],
      "profile": "lab",
      "group": "Data and AI",
      "requirement": null,
      "resource": null,
      "name": "Data Engineering",
      "placement": "Technical elective",
      "anchor": "cs-451"
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
        "MATH 220"
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
          "statement": "Formulate a measurable analytic question."
        },
        {
          "plo": "S4",
          "stage": "M",
          "statement": "Analyze data and explain uncertainty and possible bias."
        },
        {
          "plo": "S3",
          "stage": "M",
          "statement": "Deliver an evidence-based decision brief."
        }
      ],
      "profile": "project",
      "group": "Data and AI",
      "requirement": null,
      "resource": null,
      "name": "Applied Data Analytics",
      "placement": "Technical elective",
      "anchor": "cs-452"
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
        "MATH 220",
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
          "statement": "Explain how EHR data models and interoperability rules support a clinical workflow."
        },
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Build and test a FHIR-based prototype with a synthetic health dataset."
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Evaluate data quality and workflow usability using defined measures."
        },
        {
          "plo": "V1",
          "stage": "M",
          "statement": "Justify privacy, access, and patient-safety safeguards for the prototype."
        }
      ],
      "profile": "project",
      "group": "Business and health",
      "requirement": null,
      "resource": "HL7 FHIR specification, the Saudi NPHIES FHIR implementation guide, and synthetic health records for classroom use.",
      "name": "Health Informatics",
      "placement": "Technical elective",
      "anchor": "cs-453"
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
          "statement": "Deliver a validated prototype against user and business requirements."
        },
        {
          "plo": "S3",
          "stage": "M",
          "statement": "Defend trade-offs to technical and business audiences."
        },
        {
          "plo": "V3",
          "stage": "P",
          "statement": "Use evidence and cost to prioritize product work."
        }
      ],
      "profile": "project",
      "group": "Business and health",
      "requirement": null,
      "resource": null,
      "name": "Digital Product Engineering",
      "placement": "Technical elective",
      "anchor": "cs-454"
    },
    "CS 455": {
      "id": "CS 455",
      "code": "CS 455",
      "title": "Cloud and Distributed Applications",
      "term": null,
      "credits": 3,
      "category": "elective",
      "lecture": 2,
      "practical": 2,
      "prerequisites": [
        "CS 310",
        "CS 260"
      ],
      "summary": "Engineer an application using managed and distributed computing services.",
      "topics": [
        "Distributed application architecture",
        "Cloud services and infrastructure as code",
        "Messaging, data, and consistency",
        "Reliability, scaling, and observability",
        "Security, cost, and sustainability",
        "Resilient service design project"
      ],
      "clos": [
        {
          "plo": "K2",
          "stage": "M",
          "statement": "Explain distributed service trade-offs."
        },
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Build and test a cloud application under stated constraints."
        },
        {
          "plo": "S4",
          "stage": "M",
          "statement": "Measure resilience, cost, and performance."
        }
      ],
      "profile": "lab",
      "group": "Systems and security",
      "requirement": null,
      "resource": null,
      "name": "Cloud and Distributed Applications",
      "placement": "Technical elective",
      "anchor": "cs-455"
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
          "statement": "Build software with verifiable defensive controls."
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Evaluate control effectiveness using a safe verification plan."
        },
        {
          "plo": "V1",
          "stage": "M",
          "statement": "Justify controls in light of user, organizational, and professional obligations."
        }
      ],
      "profile": "project",
      "group": "Systems and security",
      "requirement": null,
      "resource": null,
      "name": "Secure Software Engineering",
      "placement": "Technical elective",
      "anchor": "cs-456"
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
          "statement": "Explain how distributed consensus and ledger validation work."
        },
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Build and test a contract or ledger application in a local sandbox."
        },
        {
          "plo": "V1",
          "stage": "M",
          "statement": "Justify the choice of a ledger architecture using security, privacy, and sustainability evidence."
        }
      ],
      "profile": "project",
      "group": "Systems and security",
      "requirement": null,
      "resource": "Distributed-ledger protocol documentation, a local ledger simulator, and instructor-provided contract test cases.",
      "name": "Blockchain and Cryptocurrencies",
      "placement": "Technical elective",
      "anchor": "cs-457"
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
          "statement": "Explain the interaction of sensing, planning, and control in a robot."
        },
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Integrate a navigation stack for a simulated mobile robot."
        },
        {
          "plo": "S4",
          "stage": "M",
          "statement": "Compare navigation performance across controlled scenarios."
        }
      ],
      "profile": "lab",
      "group": "Robotics and IoT",
      "requirement": null,
      "resource": "A robotics simulator, sample maps and sensor recordings, and an accessible computing laboratory.",
      "name": "Robotics and Autonomous Systems",
      "placement": "Technical elective",
      "anchor": "cs-458"
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
          "statement": "Explain how flight dynamics and sensing influence autonomous navigation."
        },
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Develop and test a simulated inspection or survey mission."
        },
        {
          "plo": "S4",
          "stage": "M",
          "statement": "Evaluate tracking, safety margins, and recovery from simulated failures."
        }
      ],
      "profile": "lab",
      "group": "Robotics and IoT",
      "requirement": null,
      "resource": "A software flight simulator, synthetic telemetry, and instructor-provided inspection and survey scenarios.",
      "name": "Aerial Robotics and Drones",
      "placement": "Technical elective",
      "anchor": "cs-459"
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
          "statement": "Select a defensible detection method and justify an evaluation metric."
        },
        {
          "plo": "S4",
          "stage": "M",
          "statement": "Evaluate alerts and false positives using controlled security datasets."
        },
        {
          "plo": "V1",
          "stage": "M",
          "statement": "Propose safeguards for an AI-assisted monitoring workflow."
        }
      ],
      "profile": "lab",
      "group": "Systems and security",
      "requirement": null,
      "resource": "Public or synthetic security logs, a supervised analysis environment, and instructor-provided AI assurance cases.",
      "name": "AI for Cybersecurity and AI Assurance",
      "placement": "Technical elective",
      "anchor": "cs-460"
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
          "statement": "Derive and justify an efficient algorithm for an unfamiliar problem."
        },
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Implement and test a solution against edge cases and performance limits."
        },
        {
          "plo": "V2",
          "stage": "P",
          "statement": "Review a teammate's solution and contribute to a timed team exercise."
        }
      ],
      "profile": "lab",
      "group": "Algorithms and quantum",
      "requirement": null,
      "resource": "An online judge or local judging system, curated public problem sets, and code review tools.",
      "name": "Competitive Programming",
      "placement": "Technical elective",
      "anchor": "cs-461"
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
          "statement": "Use linear algebra to reason about quantum states and circuits."
        },
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Implement and test a representative algorithm in a simulator."
        },
        {
          "plo": "S4",
          "stage": "P",
          "statement": "Compare classical and quantum approaches and explain the limits of the comparison."
        }
      ],
      "profile": "lab",
      "group": "Algorithms and quantum",
      "requirement": null,
      "resource": "A quantum circuit simulator, linear-algebra exercises, and reproducible circuit notebooks.",
      "name": "Quantum Computing",
      "placement": "Technical elective",
      "anchor": "cs-462"
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
          "statement": "Explain the role of device, edge, and cloud components."
        },
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Develop and test a networked sensor prototype."
        },
        {
          "plo": "S4",
          "stage": "M",
          "statement": "Evaluate latency, resource use, and reliability across deployment choices."
        }
      ],
      "profile": "project",
      "group": "Robotics and IoT",
      "requirement": null,
      "resource": "Simulated or teaching-board sensors, a local messaging broker, and an accessible computing laboratory.",
      "name": "Internet of Things and Edge Computing",
      "placement": "Technical elective",
      "anchor": "cs-463"
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
          "statement": "Explain the components and limitations of a language model."
        },
        {
          "plo": "S2",
          "stage": "M",
          "statement": "Build a retrieval-grounded application with repeatable tests."
        },
        {
          "plo": "V1",
          "stage": "M",
          "statement": "Justify safeguards and document limitations using evaluation evidence."
        }
      ],
      "profile": "project",
      "group": "Data and AI",
      "requirement": null,
      "resource": "Small language models, public or synthetic text collections, and evaluation notebooks that can run in a teaching lab.",
      "name": "Generative AI and Large Language Models",
      "placement": "Technical elective",
      "anchor": "cs-464"
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
    "MATH 102": {
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
    "CHEM 101": {
      "title": "Chemistry: The Central Science",
      "citation": "Theodore E. Brown et al. · Pearson · 15th ed. · © 2023",
      "url": "https://www.pearson.com/en-us/subject-catalog/p/chemistry-the-central-science/P200000006933/9780137542970"
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
    "MATH 220": {
      "title": "Probability and Statistics for Engineering and the Sciences",
      "citation": "Leif Ellingson and Anna Panorska · Cengage · 10th ed. · © 2027 (released 2026)",
      "url": "https://www.cengage.com/c/probability-and-statistics-for-engineering-and-the-sciences-10e-ellingson-panorska/9798214023823"
    },
    "CS 230": {
      "title": "Database Systems: Design, Implementation, & Management",
      "citation": "Carlos Coronel and Steven Morris · Cengage · 15th ed. · © 2027 (released 2026)",
      "url": "https://www.cengage.com/c/new-edition/9798214410241/"
    },
    "ISLM 101": {
      "title": "Islamic Ethics: Fundamental Aspects of Human Conduct",
      "citation": "Abdulaziz Sachedina · Oxford University Press · 1st ed. · 2022",
      "url": "https://academic.oup.com/book/43872"
    },
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
      "title": "Modern Operating Systems",
      "citation": "Andrew S. Tanenbaum and Herbert Bos · Pearson · 5th ed. · © 2023",
      "url": "https://www.pearson.com/en-us/subject-catalog/p/modern-operating-systems/P200000003295/9780137618873"
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
    "CS 420": {
      "title": "Cloud Native DevOps with Kubernetes",
      "citation": "Justin Domingus and John Arundel · O’Reilly · 2nd ed. · 2022",
      "url": "https://www.oreilly.com/library/view/cloud-native-devops/9781098116811/"
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
    }
  },
  "electiveAreas": {
    "Data and AI": [
      "CS 451",
      "CS 452",
      "CS 464"
    ],
    "Business and health": [
      "CS 453",
      "CS 454"
    ],
    "Systems and security": [
      "CS 455",
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
      "CS 462"
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
    }
  },
  "electiveLocalPrecedent": "KAU’s 2026 FCIT Computer Science Program Guide also lists robotics, generative and agentic AI, quantum computing, and Internet of Things among its elective options.",
  "healthElectiveFit": "CS 453 Health Informatics uses one of the three existing 3-credit elective slots in Semester 7 or 8. Semester 7 allows students to apply the course to a related capstone. CS 230, MATH 220, and CS 350 prepare students to model clinical data, evaluate evidence, and test usability.",
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
      "model": "The updated FCIT guide includes CIS 393 Workplace Skills for Technology Specialists, two senior project courses, and a choice of summer training or two cooperative training courses.",
      "adopted": "Fakeeh uses a two-course capstone in CS 410 and CS 411 and makes workplace preparation an explicit part of the curriculum.",
      "difference": "KAU teaches workplace skills in a dedicated course. Fakeeh practices them in COMM 101, CS 250, and other required courses, then assesses them in CS 390. Students apply the skills to technical work before receiving feedback in a workplace.",
      "url": "https://kau.edu.sa/en/programs/bachelor-of-science-in-computer-science",
      "note": "Curriculum detail from the FCIT Computer Science Program Guide, 2026, §2-15."
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
      "name": "Dar Al-Hekma University",
      "program": "BSc in Computer Science · General track",
      "region": "Saudi Arabia · Private",
      "model": "The general track uses client needs to frame Capstone I and requires implementation, validation, and demonstration in Capstone II. Its published plan includes an internship in the final semester alongside Capstone II.",
      "adopted": "Fakeeh requires teams to define stakeholder needs, verify a solution, and demonstrate the result in CS 410 and CS 411.",
      "difference": "Fakeeh gives the full-time placement a dedicated semester and summer before the capstone. This protects time for workplace responsibilities and gives teams a chance to use that experience in project design.",
      "url": "https://www.dah.edu.sa/en/academics/hsec/programs/Pages/Computer-Science.aspx"
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
      "summary": "KAU requires this college course to prepare Computer Science students for workplace training.",
      "facts": [
        [
          "Institution",
          "King Abdulaziz University"
        ],
        [
          "Credit hours",
          "3 credits"
        ],
        [
          "Placement",
          "Semester 8 in the KAU plan"
        ],
        [
          "Category",
          "Required college course"
        ]
      ],
      "detail": "The KAU plan lists it as a prerequisite for Summer Training and Cooperative Training I.",
      "source": "KAU FCIT Computer Science Program Guide, 2026, course and training tables.",
      "url": "https://kau.edu.sa/en/programs/bachelor-of-science-in-computer-science"
    }
  },
  "workplaceSkills": [
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
      "Recognizing how AI systems can fail, identifying who could be affected, and deciding when human review is needed.",
      "A failure-mode lab and a short memo justifying safeguards and human oversight."
    ],
    [
      [
        "CS 430"
      ],
      "Testing for bias, interpreting subgroup results, identifying privacy risks, and deciding where a model can be used responsibly.",
      "A model audit and model card documenting subgroup performance, limitations, and deployment safeguards."
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
      "decision": "Keep programming and software development central. Require AI, machine learning, and cybersecurity and provide further depth through electives.",
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
      "Agents, search, knowledge representation, reasoning, and learning paradigms. Compare AI approaches and document failure modes."
    ],
    [
      "AL",
      "Algorithmic Foundations",
      32,
      [
        [
          "CS 201",
          12
        ],
        [
          "CS 220",
          14
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
      "Logic, representation, stored-program architecture, assembly, processors, memory, and I/O. Explain hardware behavior through simulation."
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
          "CS 403",
          4
        ]
      ],
      "Visual representation, digitization, color, rendering, spatialization, animation, and accessibility. Develop an interactive visual example."
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
          "MATH 102",
          29
        ],
        [
          "MATH 220",
          21
        ],
        [
          "MATH 120",
          5
        ]
      ],
      "Discrete mathematics 29, probability 11, statistics 10, and linear algebra 5. Assess proofs, probability models, inference, and vector and matrix operations."
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
          "CS 420",
          1
        ],
        [
          "CS 430",
          3
        ]
      ],
      "Ethical reasoning, computing history, professional codes, licensing, stakeholder communication, privacy, social impacts, accessibility, and sustainability. Assess cases, reports, and design decisions."
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
      "Machine and resource models, performance, interfaces, system failures, and security. Trace execution and measure resource behavior."
    ],
    [
      "SPD",
      "Specialized Platform Development",
      4,
      [
        [
          "CS 420",
          4
        ]
      ],
      "Web architecture and state, platform APIs and scripting, and mobile, embedded, and other resource constraints. Explain deployment trade-offs across platforms."
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
      "Logic, machine representation, assembly, memory, and interconnection."
    ],
    [
      "Discrete structures",
      "17%",
      [
        "MATH 102",
        "MATH 220",
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
        "CS 420"
      ],
      "Requirements, process, management, design, construction, verification, and validation."
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
        "MATH 102",
        "MATH 120",
        "PHYS 101",
        "CS 201",
        "CS 310",
        "CS 340"
      ],
      [
        [
          "CS 220",
          "Algorithm correctness and complexity exam."
        ],
        [
          "CS 430",
          "Model selection and interpretation for an applied problem."
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
        "MATH 220",
        "CS 220",
        "CS 410"
      ],
      [
        [
          "CS 401",
          "Controlled scalability experiment and analysis."
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
        "CS 410"
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
        "CS 401"
      ],
      [
        [
          "CS 420",
          "Automated release and evaluation of operational trade-offs."
        ],
        [
          "CS 430",
          "Reproducible model comparison documenting uncertainty and failure cases."
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
        "CS 410"
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
        "CS 420"
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
      "The required CS core provides 67 credits of fundamental and advanced computing. CS 250 and CS 420 assess professional tools and development practices. CS 402 covers security and privacy. ISLM 101, CS 430, and CS 411 assess ethical reasoning, the effects of computing, and professional judgment. The capstone integrates prior technical work and professional practice."
    ],
    [
      "CS coursework · 40-credit minimum",
      "The required CS core alone provides 67 semester credit hours."
    ],
    [
      "Depth in algorithms, theory, language concepts, and software development",
      "CS 201 and CS 220 assess data structures, algorithm correctness, and complexity. CS 330 assesses formal computation and reductions. CS 320 covers language semantics and paradigms through an interpreter project. CS 101, CS 102, and CS 250 assess software construction, testing, and team development."
    ],
    [
      "Depth in a general-purpose language",
      "CS 101 and CS 102 provide eight credits of sustained Python practice. Students design and test modular and object-oriented programs in supervised labs and applied assessments. CS 240 adds systems programming in C."
    ],
    [
      "Exposure to the required systems topics",
      "CS 210 covers architecture and organization, CS 230 covers information management, CS 260 covers networking and communication, CS 310 covers operating systems, and CS 401 covers parallel and distributed computing."
    ],
    [
      "Computing systems at multiple abstraction levels",
      "Students progress from hardware and instruction execution in CS 210 to system calls and resource management in CS 240 and CS 310, then to network protocols in CS 260 and distributed services in CS 401. Lab work connects choices at each level to program behavior."
    ],
    [
      "Major project integrating earlier coursework",
      "CS 410 and CS 411 form a six-credit project. The design review identifies techniques from earlier courses. The final assessment uses a working solution, integration tests, evaluation results, and an individual defense to show how students applied those techniques."
    ],
    [
      "Mathematics and statistics · 15-credit minimum",
      "The plan requires 17 credits. MATH 101 Calculus I (4), MATH 102 Discrete Mathematics (3), MATH 120 Linear Algebra (3), MATH 220 Probability and Statistics (4), MATH 230 Multivariable Calculus and Optimization (3) cover the required topics and reach beyond introductory calculus."
    ],
    [
      "Scientific method in non-computing coursework",
      "PHYS 101, PHYS 102, and CHEM 101 provide 10 credits in laboratory science. Students test predictions in mechanics and circuits and conduct controlled chemical experiments. Laboratory reports assess experimental design, measurements, analysis, and conclusions."
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
      "AI methods comparison",
      "CS 430",
      "Model selection and interpretation"
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
      "CS 401",
      "Scalability experiment",
      "CS 430",
      "Reproducible model evaluation"
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
  "coopDescription": "CS 390 is the sole Semester 6 registration. The 9-credit placement begins in Semester 6 and continues through the following summer under the same registration. The proposed 24-week calendar allocates sixteen regular-semester weeks followed by eight summer weeks, including final assessment. The college posts the final grade before Semester 7 to confirm eligibility for Capstone Project I."
};
