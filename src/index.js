const messages = [
    "jordi",
    "Carolina",
    "Paula",
    "Anna",
    "Nicolau",
    "Yesica",
    "Laura"
];

const randomMsg = () =>{
    const message = messages[ Math.floor(Math.random() * messages.length) ];
    console.log( message );
}

module.exports = { randomMsg };