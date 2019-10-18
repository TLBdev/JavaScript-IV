// CODE here for your Lambda Classes
class Person{
    constructor(attrib){
        this.name = attrib.name
        this.age = attrib.age
        this.location = attrib.location
    }
    speak(){console.log(`Hello my name is ${this.name}, and i am from ${this.location}`)}
}

class Instructor extends Person{
    constructor(attrib){
        super(attrib)
        this.specialty = attrib.specialty
        this.favLanguage = attrib.favLanguage
        this.catchPhrase = attrib.catchPhrase
    }
    demo(str){console.log(`Today we are learning about ${str}.`)}
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
        for (let i = 0; i < this.favSubjects.length; i++ ){
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

const britt = new Instructor({
    name: 'Britt',
    location: 'canada',
    age: 35,
    favLanguage: 'HTML5',
    specialty: 'UX',
    catchPhrase: `eh`
  })
  const britt2 = new Instructor({
    name: 'Brittany',
    location: 'canada',
    age: 34,
    favLanguage: 'HTML5',
    specialty: 'UX',
    catchPhrase: `eh`
  })
  const britt3 = new Instructor({
    name: 'Britt H.',
    location: 'canada',
    age: 33,
    favLanguage: 'HTML5',
    specialty: 'UX',
    catchPhrase: `eh`
  })


  const nickolaus = new ProjectManager({
    name: 'Nick',
    location: 'USA',
    age: 20,
    favLanguage: 'JS',
    specialty: 'UX',
    catchPhrase: `They took our jobs!`,
    gradClassName: 'WEB19',
    favInstructor: 'Britt'
  })
  const nickolaus2 = new ProjectManager({
    name: 'Nicko',
    location: 'USA',
    age: 20,
    favLanguage: 'JS',
    specialty: 'UX',
    catchPhrase: `They took our jobs!`,
    gradClassName: 'WEB19',
    favInstructor: 'Britt'
  })
  const nickolaus3 = new ProjectManager({
    name: 'Nickolaus',
    location: 'USA',
    age: 20,
    favLanguage: 'JS',
    specialty: 'UX',
    catchPhrase: `They took our jobs!`,
    gradClassName: 'WEB19',
    favInstructor: 'Britt'
  })


const me = new Student({
    name: 'Tony',
    location: 'SD, USA',
    age: 31,
    previousBackground: 'General Laborer',
    className: 'WEB25',
    favSubjects: ['Python', 'JavaScript']
    })
const me2 = new Student({
    name: 'cat',
    location: 'window, USA',
    age: 4,
    previousBackground: 'General Laborer',
    className: 'WEB25',
    favSubjects: ['Python', 'JavaScript', 'Pizza']
    })
const me3 = new Student({
    name: 'dog',
    location: 'house, USA',
    age: 7,
    previousBackground: 'General Laborer',
    className: 'WEB25',
    favSubjects: ['Python', 'JavaScript', 'Pizza', 'Beer']
    })
S
britt.demo('dogs')
nickolaus.demo('gains')
nickolaus.debugsCode(me, 'Nothing... ever')
me.listsSubjects()
me.speak()
me.demo('beer') //intended to fail