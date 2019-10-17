// CODE here for your Lambda Classes
class Person{
    constructor(attrib){
        this.name = attrib.name
        this.age = attrib.age
        this.location = attrib.location
    }
    speak(){return `Hello my name is ${this.name}, and i am from ${this.location}`}
}

class Instructor extends Person{
    constructor(attrib){
        super(attrib)
        this.specialty = attrib.specialty
        this.favLanguage = attrib.favLanguage
        this.catchPhrase = attrib.catchPhrase
    }
    demo(str){console.log(`Today we are learning about${str}`)}
    grade(student, subject){console.log(`${student.name} recieves a perfect score on ${subject}`)}
}

class Student extends Person{
    constructor(attrib){
        super(attrib)
        this.previousBackground = attrib.previousBackground
        this.className = attrib.className
        this.favSubjects = attrib.favSubjects
    }
    listsSubjects(){
        for (i in this.favSubjects){
            console.log(this.favSubjects[i])
        } 
    }
    PRAssignment(subject){
        console.log(`&{this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject){
        console.log(`${this.name} recieves a perfect score on ${subject}`)
    }
}

class ProjectManager extends Instructor{
    constructor(attrib){
        super(attrib)
        this.gradClassName = attrib.gradClassName
        this.favInstructor = attrib.favInstructor
    }
    standUp(slack){
        console.log(`${this.name} announces to ${slack}, @channel standy times!`)
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  })

 fred.demo('dogs')