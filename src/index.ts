import { Partecipant,Course,Company } from "./classes";

//Create Participants

const partecipant1 = new Partecipant("Luka" ,"Grodoviç", "Slovenia", "Upper Secondary Education", ["Slovenian", "Spanish", "English"], "Woodworker" )
const partecipant2 = new Partecipant("Shaunagh" ,"Young", "Irish","Degree", ["English", "Italian"], "Art conservator" )

//Create courses

const course1 = new Course("Woodworker", "Advanced Woodworker", "Manual and precision work", 4)
const course2 = new Course("Art conservator", "Art history", "Determining whether objects require repair", 8)

//Partecipants enroll in courses

partecipant1.enrollCourse(course1)
partecipant2.enrollCourse(course2)

//Create a company

const company1 = new Company("IncluDO", "Restoration", "Ancient tools", ["Woodworker", "Art conservator"])

//Company offers job positions

company1.offerPosition(partecipant1, "Woodworker")
company1.offerPosition(partecipant2, "Art conservator")
