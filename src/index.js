"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./classes");
//Create Participants
const partecipant1 = new classes_1.Partecipant(
  "Luka",
  "Grodoviç",
  "Slovenia",
  "Upper Secondary Education",
  ["Slovenian", "Spanish", "English"],
  "Woodworker"
);
const partecipant2 = new classes_1.Partecipant(
  "Shaunagh",
  "Young",
  "Irish",
  "Bachelor",
  ["English", "Italian"],
  "Art conservator"
);
//Create courses
const course1 = new classes_1.Course(
  "Woodworker",
  "Advanced Woodworker",
  "Manual and precision work",
  4
);
const course2 = new classes_1.Course(
  "Art conservator",
  "Art history",
  "Determining whether objects require repair",
  8
);
//Partecipants enroll in courses
partecipant1.enrollCourse(course1);
partecipant2.enrollCourse(course2);
//Create a company
const company1 = new classes_1.Company(
  "IncluDO",
  "Restoration",
  "Ancient tools",
  ["Woodworker", "Art conservator"]
);
//Company offers job positions
company1.offerPosition(partecipant1, "Woodworker");
company1.offerPosition(partecipant2, "Art conservator");
