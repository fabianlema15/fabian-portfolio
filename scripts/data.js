'use strict'

const data = (function () {
	const projects = [
		{
			id: 1,
			title: "Liquor Store",
			thumbnail: "images/sm5.png",
			image: "images/bg5.png",
			desc: "This can be the first version to be implemented in a restaurant or bar and can be used by a server or bartender. This app has some data as clients, products, promotions or combos, users with different roles, and the most important part is that we can take orders using this app on a smartphone. Also, we can get reports of sales by any period of time.",
			tech: ["HTML", "Javascript", "CSS", "RESTful", "ReactJS", "NodeJS", "Postgres", "AWS", "SendGrid"],
			link: [{ name: "Demo", link: "https://fabian-liquor-app.now.sh" }],
			repo: [{ name: "Repo Client", link: "https://github.com/fabianlema15/liquor-store-client.git" },
			{ name: "Repo Server", link: "https://github.com/fabianlema15/liquor-store-server.git" }]

		},
		{
			id: 2,
			title: "Good Meal",
			thumbnail: "images/sm9.png",
			image: "images/bg9.png",
			desc: "Good Meal is your digital recipe card index file, where users can create and share private and public recipes, store shopping lists, lists of items already in their pantry and create shopping lists from the recipes they have.",
			tech: ["HTML", "Javascript", "CSS", "RESTful", "ReactJS", "NodeJS", "Postgres", "AWS", "Firebase"],
			link: [{ name: "Demo", link: "https://good-meal.now.sh" }],
			repo: [{ name: "Repo Client", link: "https://github.com/thinkful-ei-firefly/recipe-client.git" },
			{ name: "Repo Server", link: "https://github.com/thinkful-ei-firefly/recipe-server.git" }]

		},
		{
			id: 3,
			title: "Easy Italian",
			thumbnail: "images/sm8.png",
			image: "images/bg8.png",
			desc: "This app helps people memorize the Italian language. The app will display words in Italian, and ask you to recall the corresponding word in English.",
			tech: ["HTML", "Javascript", "CSS", "RESTful", "ReactJS", "NodeJS", "Postgres"],
			link: [{ name: "Demo", link: "https://easy-italian-app.now.sh" }],
			repo: [{ name: "Repo Client", link: "https://github.com/fabianlema15/easy-italian-client.git" },
			{ name: "Repo Server", link: "https://github.com/fabianlema15/easy-italian-server.git" }]

		},
		{
			id: 4,
			title: "FastApp",
			thumbnail: "images/sm4.png",
			image: "images/bg3.png",
			desc: "This is an app similar to Uber. You can request transportation selecting an origin and destination point, the app should calculate the value to pay and look for the closest driver. You could track the driver and see information about it. Also, the driver can see the necessary information about the rider. At this point, the app for drivers is available just for smartphones with Android.",
			tech: ["HTML", "CSS", "RESTful", "NodeJS", "Angular", "Firebase", "Maps"],
			link: [{ name: "Demo", link: "https://app.fastapp.com.ec/" }],
			repo: [{ name: "Repo Server-Client", link: "https://bitbucket.org/fabianlema/fastapp" },
			{ name: "Repo Driver (Android)", link: "https://bitbucket.org/fabianlema/fastappdriver" }]

		},
		{
			id: 5,
			title: "My Bookmarks",
			thumbnail: "images/sm2.png",
			image: "images/bg2.png",
			desc: "This application allows a user to list, add, edit, and delete their favorite bookmarks. Each bookmark has its description, web site information, and the corresponding rating. Users can also navigate to the bookmarked website and filter the data by the bookmark's rating.",
			tech: ["HTML", "Javascript", "CSS", "Jquery", "RESTful"],
			link: [{ name: "Demo", link: "https://fabianlema15.github.io/fabian-bookmarks-app/" }],
			repo: [{ name: "Repo", link: "https://github.com/fabianlema15/fabian-bookmarks-app" }]

		},
		{
			id: 6,
			title: "Multipagos",
			thumbnail: "images/sm3.png",
			image: "images/bg4.png",
			desc: "App developed using Xamarin for front-end and NodeJs for the back-end. Using this app you can search different bills to pay like water, phone, electric energy, cable, and other services, you could select many bills, add to the shopping cart, and finally pay using a credit card. This app uses two third-party APIs, one to get a list and information about different services and another one to pay using a credit card.",
			tech: ["HTML", "NodeJS", "RESTful", "MongoDB", "CShar", "Xamarin", "Firebase", "Android", "Apple"],
			link: [],
			repo: [{ name: "Repo Server (NodeJS)", link: "https://bitbucket.org/fabianlema/multipagosnode" },
			{ name: "Repo Client (Xamarin)", link: "https://bitbucket.org/fabianlema/multipagosapp" }]

		},
		{
			id: 7,
			title: "Bellsaria",
			thumbnail: "images/sm6.png",
			image: "images/bg6.png",
			desc: 'Application used by call centers. Stores basic information about each call that the agent receives. The app checks for incoming emails to the help desk, then shows them to the agent. If messages come in via social networks like Facebook or Twitter, the app will also receive these messages and notify the agent. The app also has the ability to send bulk text messages. Finally, this app has a "Click to call" button that can be used to call any person. The app utilizes Cisco UCCX, Cisco Social Miner, Gateway 2N, and runs in Cisco Agent Desktop.',
			tech: ["HTML", "Jquery", "Java", "Hibernate", "SQLServer", "Cisco", "Python", "Django"],
			link: [],
			repo: [{ name: "Repo Java", link: "https://bitbucket.org/fabianlema/bellsaria/" },
			{ name: "Repo Python", link: "https://bitbucket.org/fabianlema/bellsaria-python" }]
		}];

	return {
		projects,
	}
}());
