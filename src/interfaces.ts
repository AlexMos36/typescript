export interface IPartecipant {
    firstName: string;
    lastName: string;
    countryOfOrigin:string;
    levelOfEducation:string;
    levelOfLanguage:string[];
    trainingScopeOfInterest:string;
    enrollCourse(course: ICourse): void
}

export interface ICourse {
    title: string;
    description:string;
    professionalServices:string;
    duration:number;
    listOfRegistered:IPartecipant[]
    addPartecipant(partecipant: IPartecipant): void;
}

export interface ICompany {
    companyName: string;
    fieldOfActivity:string;
    description:string;
    openPositions:string[]
    offerPosition(partecipant: IPartecipant, position:string):void
}