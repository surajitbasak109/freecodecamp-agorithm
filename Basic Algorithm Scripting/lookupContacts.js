
//Setup
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
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop)
{
// Only change code below this line
    var count = 0;
    while (count < contacts.length)
    {
        if (contacts[count].firstName == firstName)
        {
            if (contacts[count].hasOwnProperty(prop))
            {
                return contacts[count][prop];
            }
            else
            {
                return 'No such property';
            }
        }
        else if (contacts[count].firstName != firstName)
        {
            return 'No such contact';
        }
        count++;
    }
// Only change code above this line
}

// Change these values to test your function
console.log(lookUpProfile("Kristian", "lastName"));
