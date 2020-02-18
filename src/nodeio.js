"use strict"

class Visitor {
    constructor(fullName, age, dateOfVisit, timeOfVisit, comments, nameOfThePersonWhoAssistedTheVisitor) {
        this.fullName = fullName,
        this.age = age,
        this.dateOfVisit = dateOfVisit,
        this.timeOfVisit = timeOfVisit,
        this.comments = comments,
        this.nameOfThePersonWhoAssistedTheVisitor = nameOfThePersonWhoAssistedTheVisitor;
    }

    save() {
        if(fs.readFile(visitor_$their_full_name$.json)){
            return fileExists
        }

        else(fs.writeFile(visitor_$their_full_name$.json), function(err){
            if (err) throw(err)
        })
    }
}