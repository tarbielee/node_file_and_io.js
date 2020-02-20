"use strict"

let fs = require('fs')

class Visitor {
    constructor(fullName, age, dateOfVisit, timeOfVisit, comments, assistor) {
        this.fullName = fullName,
        this.age = age,
        this.dateOfVisit = dateOfVisit,
        this.timeOfVisit = timeOfVisit,
        this.comments = comments,
        this.assistor = assistor;
    }

    save() {
        fs.writeFile(`visitor_${this.fullName}.json`, JSON.stringify(this, null, 4),
        (err) => {
            if (err) throw err;
            console.log('File saved');
          });
    }

    load() {
        fs.readFile(`visitor_${this.fullName}.json`, "utf8",
        (err, info) => {
            if (err) { 
                throw err;}
              else
                console.log(info)
              
              
          });
    }
}
let alice = new Visitor("alice", 19, "05/07/19", "9Oclock", "jolly", "John Greek" );
let bob = new Visitor("bob", 15, "10/08/19", "11Oclock", "fantastic", "Mmabatho Betha" );
let charlie = new Visitor("charlie", 26, "18/11/19", "7Oclock", "was great", "Lion Berwanger" );


console.log(alice.save())
console.log(bob.save())
console.log(charlie.save())
console.log(alice.load())
console.log(bob.load())

module.exports = Visitor;
