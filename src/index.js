"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./classes");
//Create Participants
const partecipant1 = new classes_1.Partecipant("Luka", "Grodoviç", "Slovenia", "Upper Secondary Education", ["Slovenian", "Spanish", "English"], "Waiter");
const partecipant2 = new classes_1.Partecipant("Shaunagh", "Young", "Irish", "Bachelor", ["English", "Italian"], "Administrative Employee");
//Create courses
const course1 = new classes_1.Course("Training and supervising waiters/waitresses", "Supervising, coordinating, and training food and beverage staff", "Supervisor", 4);
const course2 = new classes_1.Course("Administrative Manager", "Supervising and training administrative staff", "Manager", 8);
//Partecipants enroll in courses
partecipant1.enrollCourse(course1);
partecipant2.enrollCourse(course2);
//Create a company
const company1 = new classes_1.Company("Lidl", "Supervisor", "Overseeing and coordinating everyday warehouse activities such as collecting and storing items, controlling stock levels, assuring timely transport of products, managing employees, and safeguarding the warehouse", ["Supervisor", "Manager"]);
//Company offers job positions
company1.offerPosition(partecipant1, "Supervisor");
company1.offerPosition(partecipant2, "Manager");
