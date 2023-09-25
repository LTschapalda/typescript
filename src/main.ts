//VARIABLEN

let
    age : number = 13,
    score : number = 0,
    username : string = "",
    isAdmin : boolean = false;

//SCHLEIFEN

for (let i : number = 0; i < age; i++) {
   console.log(i)
}

if (age >= 18) {
    console.log("is over 18")
}
else {
    console.log("not old enough")
}

if (score !== 0) {
    console.log("Score ist verfügbar: " + score)
} else {
    console.log("dein Score ist 0")
}

if(score) {
    console.log(score)
}

if (username !== "") {
    console.log("Username ist verfügbar.")
} else {
    console.log("Kein Wert vergeben")
}

if (username) {
    console.log(username)
} else {
    console.log("Username wird als falsy ausgewertet.")
}

if (isAdmin) {
    console.log("isAdmin wird als truthy ausgewertet.")
} else {
    console.log("isAdmin wird als falsy ausgewertet.")
}

if (isAdmin !== false) {
    console.log("isAdmin ist true.")
} else {
    console.log("isAdmin ist false.")
}