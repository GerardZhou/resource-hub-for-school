// Existing course names remain the routing keys to preserve shared resource URLs.
export const courses = [
  {
    "name": "AP Art History",
    "subject": "Arts",
    "aliases": []
  },
  {
    "name": "AP Biology",
    "subject": "Sciences",
    "aliases": [
      "AP Bio"
    ]
  },
  {
    "name": "AP Calculus AB",
    "subject": "Math & computer science",
    "aliases": [
      "AP Calc AB"
    ]
  },
  {
    "name": "AP Calculus BC",
    "subject": "Math & computer science",
    "aliases": [
      "AP Calc BC"
    ]
  },
  {
    "name": "AP Chemistry",
    "subject": "Sciences",
    "aliases": [
      "AP Chem"
    ]
  },
  {
    "name": "AP Chinese Language and Culture",
    "subject": "World languages",
    "aliases": []
  },
  {
    "name": "AP Comparative Government and Politics",
    "subject": "History & social sciences",
    "aliases": [
      "AP Comp Gov"
    ]
  },
  {
    "name": "AP Computer Science A",
    "subject": "Math & computer science",
    "aliases": [
      "APCSA",
      "AP CSA",
      "Java"
    ]
  },
  {
    "name": "AP Computer Science Principles",
    "subject": "Math & computer science",
    "aliases": [
      "APCSP",
      "AP CSP"
    ]
  },
  {
    "name": "AP English Language and Composition",
    "subject": "English",
    "aliases": [
      "AP Lang"
    ]
  },
  {
    "name": "AP English Literature and Composition",
    "subject": "English",
    "aliases": [
      "AP Lit"
    ]
  },
  {
    "name": "AP Environmental Science",
    "subject": "Sciences",
    "aliases": [
      "APES"
    ]
  },
  {
    "name": "AP European History",
    "subject": "History & social sciences",
    "aliases": [
      "AP Euro"
    ]
  },
  {
    "name": "AP French Language and Culture",
    "subject": "World languages",
    "aliases": []
  },
  {
    "name": "AP German Language and Culture",
    "subject": "World languages",
    "aliases": []
  },
  {
    "name": "AP Human Geography",
    "subject": "History & social sciences",
    "aliases": [
      "AP HUG",
      "APHG"
    ]
  },
  {
    "name": "AP Italian Language and Culture",
    "subject": "World languages",
    "aliases": []
  },
  {
    "name": "AP Japanese Language and Culture",
    "subject": "World languages",
    "aliases": []
  },
  {
    "name": "AP Latin",
    "subject": "World languages",
    "aliases": []
  },
  {
    "name": "AP Macroeconomics",
    "subject": "History & social sciences",
    "aliases": [
      "AP Macro"
    ]
  },
  {
    "name": "AP Microeconomics",
    "subject": "History & social sciences",
    "aliases": [
      "AP Micro"
    ]
  },
  {
    "name": "AP Music Theory",
    "subject": "Arts",
    "aliases": []
  },
  {
    "name": "AP Physics 1",
    "subject": "Sciences",
    "aliases": []
  },
  {
    "name": "AP Physics 2",
    "subject": "Sciences",
    "aliases": []
  },
  {
    "name": "AP Physics C: Electricity and Magnetism",
    "subject": "Sciences",
    "aliases": [
      "AP Physics C E&M",
      "AP Physics C EM"
    ]
  },
  {
    "name": "AP Physics C: Mechanics",
    "subject": "Sciences",
    "aliases": []
  },
  {
    "name": "AP Psychology",
    "subject": "History & social sciences",
    "aliases": [
      "AP Psych"
    ]
  },
  {
    "name": "AP Research",
    "subject": "Capstone",
    "aliases": []
  },
  {
    "name": "AP Seminar",
    "subject": "Capstone",
    "aliases": []
  },
  {
    "name": "AP Spanish Language and Culture",
    "subject": "World languages",
    "aliases": []
  },
  {
    "name": "AP Spanish Literature and Culture",
    "subject": "World languages",
    "aliases": []
  },
  {
    "name": "AP Statistics",
    "subject": "Math & computer science",
    "aliases": [
      "AP Stats"
    ]
  },
  {
    "name": "AP Studio Art: 2-D Design",
    "subject": "Arts",
    "aliases": []
  },
  {
    "name": "AP Studio Art: 3-D Design",
    "subject": "Arts",
    "aliases": []
  },
  {
    "name": "AP Studio Art: Drawing",
    "subject": "Arts",
    "aliases": []
  },
  {
    "name": "AP United States Government and Politics",
    "subject": "History & social sciences",
    "aliases": [
      "AP Gov",
      "US Gov"
    ]
  },
  {
    "name": "AP United States History",
    "subject": "History & social sciences",
    "aliases": [
      "APUSH",
      "US History"
    ]
  },
  {
    "name": "AP World History",
    "subject": "History & social sciences",
    "aliases": [
      "APWH",
      "WHAP",
      "World History Modern"
    ]
  }
];

export const subjects = [...new Set(courses.map((course) => course.subject))].sort();

function normalize(value) {
  return value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    .replace(/[^a-z0-9]+/g, " ").trim();
}

// At 38 courses, a local scan is simpler than a search service or index.
export function filterCourses(items, query = "", subject = "") {
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  return items.filter((course) => {
    const text = normalize([course.name, ...course.aliases].join(" "));
    return (!subject || course.subject === subject) && terms.every((term) => text.includes(term));
  });
}
