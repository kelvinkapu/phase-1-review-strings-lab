const currentUser = 'Grace Hopper';

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
// // shortGreeting
// //  contains "Welcome, "

// const shortGreeting = `Welcome,${currentUser}`;
// 'Edsger Dijkstra'[0];

// 'Edsger Dijkstra'.charAt(0);
currentUser.slice(0, 1);
// const currentUser = 'Grace Hopper';


const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;


