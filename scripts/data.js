'use strict'

const data = (function(){
	const projects = [
	{
		title: "Quiz App",
		thumbnail: "images/sm1.png",
		image: "images/bg1.png",
		desc: "This is a quiz to check and score your level of knowledge of different subjects. There are 10 question and multiple options to answer. You could get feedback about what you responded to. During the quiz and at the end, you will see the progress and the score.",
		tech: ["HTML", "Javascript", "CSS", "Jquery"],
		link: "https://thinkful-ei-firefly.github.io/quiz-app-mike-fabian/",
		repo: "https://github.com/thinkful-ei-firefly/quiz-app-mike-fabian"
	},
	{
		title: "My Bookmarks",
		thumbnail: "images/sm2.png",
		image: "images/bg2.png",
		desc: "This application allows a user to list, add, edit, and delete their favorite bookmarks. Each bookmark has its description, web site information, and the corresponding rating. If you like navigate to its web site you will be able to do it. Also, you will be able to filter all data depending rating of the bookmark.",
		tech: ["HTML", "Javascript", "CSS", "Jquery", "RESTful"],
		link: "https://thinkful-ei-firefly.github.io/fabian-bookmarks-app/",
		repo: "https://github.com/thinkful-ei-firefly/fabian-bookmarks-app"
		
	}];

	return {
		projects,
	}
}());


