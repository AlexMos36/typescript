import express from 'express';
import { Partecipant, Course, Company } from './classes';

// Create participants
const partecipant1 = new Partecipant("Luka", "Grodoviç", "Slovenia", "Upper Secondary Education", ["Slovenian", "Spanish", "English"], "Woodworker");
const partecipant2 = new Partecipant("Shaunagh", "Young", "Irish", "Degree", ["English", "Italian"], "Art conservator");

// Create courses
const course1 = new Course("Woodworker", "Advanced Cobbler", "Manual and precision work", 4);
const course2 = new Course("Art conservator", "Art history", "Determining whether objects require repair", 8);

// Participants enroll in courses
partecipant1.enrollCourse(course1);
partecipant2.enrollCourse(course2);

// Create a company
const company1 = new Company("IncluDO", "Restoration", "Ancient tools", ["Woodworker", "Art conservator"]);
// Company offers job positions
company1.offerPosition(partecipant1, "Woodworker");
company1.offerPosition(partecipant2, "Art conservator");

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
        <h1>IncluDO</h1>
        <h2>Corsi</h2>
        <h3>${course1.title}</h3>
        <ul>
            ${course1.listOfRegistered.map(partecipant => `<li>${partecipant.firstName} ${partecipant.lastName}</li>`).join('')}
        </ul>
        <h3>${course2.title}</h3>
        <ul>
            ${course2.listOfRegistered.map(partecipant => `<li>${partecipant.firstName} ${partecipant.lastName}</li>`).join('')}
        </ul>
        <h2>Azienda</h2>
        <h3>${company1.companyName}</h3>
        <ul>
            ${company1.openPositions.map(position => `<li>${position}</li>`).join('')}
        </ul>
    `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
