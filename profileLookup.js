var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
    var matchIndex = -1

    for (var i = 0; i < contacts.length; i++) {
        if (name == contacts[i].firstName) 
            matchIndex = i
    }

    if (matchIndex == -1) {
        return "No such contact"
    } else {
        if (!contacts[matchIndex].hasOwnProperty(prop)) {
            return "No such property"
        }
        if (contacts[matchIndex].hasOwnProperty(prop)) {
            return contacts[matchIndex][prop]
        }
    }
}

console.log(lookUpProfile("Akira", "likes"))
console.log(lookUpProfile("Kristian", "likes"))