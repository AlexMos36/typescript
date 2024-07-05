import { IPartecipant, ICourse, ICompany } from "./interfaces";

class Partecipant implements IPartecipant {
    constructor(
        public firstName: string,
        public lastName: string,
        public countryOfOrigin:string,
        public levelOfEducation:string,
        public levelOfLanguage:string[],
        public trainingScopeOfInterest:string,
    ){}

    enrollCourse(course: ICourse): void {
        course.addPartecipant(this)
    }
}

class Course implements ICourse {
    public listOfRegistered: IPartecipant[] = [];

   constructor(
    public title: string,
    public description:string,
    public professionalServices:string,
    public duration:number,
   ){}
   addPartecipant(partecipant: IPartecipant): void {
       this.listOfRegistered.push(partecipant)
   }
}

class Company implements ICompany {
    constructor(
    public companyName: string,
    public fieldOfActivity:string,
    public description:string,
    public openPositions:string[]
    ){}
    offerPosition(partecipant: IPartecipant, position: string): void {
        if(this.openPositions.includes(position)){
            console.log(`New job : ${position} offered at ${partecipant.firstName} ${partecipant.lastName}`);
            
        }else {
            console.log(`Position ${position} expired`);
            
        }
    }
}

export {Partecipant, Course, Company}