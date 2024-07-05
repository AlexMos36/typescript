"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = exports.Course = exports.Partecipant = void 0;
class Partecipant {
    constructor(firstName, lastName, countryOfOrigin, levelOfEducation, levelOfLanguage, trainingScopeOfInterest) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.countryOfOrigin = countryOfOrigin;
        this.levelOfEducation = levelOfEducation;
        this.levelOfLanguage = levelOfLanguage;
        this.trainingScopeOfInterest = trainingScopeOfInterest;
    }
    enrollCourse(course) {
        course.addPartecipant(this);
    }
}
exports.Partecipant = Partecipant;
class Course {
    constructor(title, description, professionalServices, duration) {
        this.title = title;
        this.description = description;
        this.professionalServices = professionalServices;
        this.duration = duration;
        this.listOfRegistered = [];
    }
    addPartecipant(partecipant) {
        this.listOfRegistered.push(partecipant);
    }
}
exports.Course = Course;
class Company {
    constructor(companyName, fieldOfActivity, description, openPositions) {
        this.companyName = companyName;
        this.fieldOfActivity = fieldOfActivity;
        this.description = description;
        this.openPositions = openPositions;
    }
    offerPosition(partecipant, position) {
        if (this.openPositions.includes(position)) {
            console.log(`New job : ${position} offered at ${partecipant.firstName} ${partecipant.lastName}`);
        }
        else {
            console.log(`Position ${position} expired`);
        }
    }
}
exports.Company = Company;
