//primitives vs reference types
// let name = "Ed";

// const names = ["Dumplings", "Rice", "From"];

// names[1] = "Rice Dumplings";
// names.push("Mom");

// console.log(names);

// Callbacks, Higher Order Functions

// const videos = ["Rice", "Dumplings", "Ricecooker","hi"];

// videos.forEach(function(video) {
// 	console.log("like");
// 	console.log(video);
// });

// Callback is when something is getting executed on a later time for example erst bei einem klick

// Higher Order Function ist eine Funktion, die eine Funktion als Parameter nimmt

// function repeater(fn) {
// 	fn();
// 	fn();
// 	fn();
// }

// function sayHello() {
// 	console.log("Hello There!");
// }

// repeater(sayHello);


// repeater(function() {
// 	console.log("Hello There!");
// })

const videos = ["Rice", "Dumplings", "Ricecooker","hi"];

//MAP map is always looking to return a value
const newVideos = videos.map(function(video) {
	return video.toUpperCase();
});

console.log(newVideos);