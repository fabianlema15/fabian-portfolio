'use strict'

const data = (function(){
	const projects = [
	{
		id: 1,
		title: "Liquor Store",
		thumbnail: "images/sm5.png",
		image: "images/bg5.png",
		desc: "This can be the first version to be implemented in a restaurant or bar and can be used by a server or bartender. This app has some data as clients, products, promotions or combos, users with different roles, and the most important part is that we can take orders using this app on a smartphone. Also, we can get reports of sales by any period of time.",
		tech: ["HTML", "Javascript", "CSS", "RESTful", "ReactJS", "NodeJS", "Postgres", "AWS", "SendGrid"],
		link: [{name:"Demo", link:"https://fabian-liquor-app.now.sh"}],
		repo: [{name:"Repo Client", link:"https://github.com/fabianlema15/liquor-store-client.git"},
					{name:"Repo Server", link:"https://github.com/fabianlema15/liquor-store-server.git"}]

	},
	{
		id: 2,
		title: "Easy Italian",
		thumbnail: "images/sm8.png",
		image: "images/bg8.png",
		desc: "This app helps people memorize the Italian language. The app will display words in Italian, and ask you to recall the corresponding word in English.",
		tech: ["HTML", "Javascript", "CSS", "RESTful", "ReactJS", "NodeJS", "Postgres"],
		link: [{name:"Demo", link:"https://easy-italian-app.now.sh"}],
		repo: [{name:"Repo Client", link:"https://github.com/fabianlema15/easy-italian-client.git"},
					{name:"Repo Server", link:"https://github.com/fabianlema15/easy-italian-server.git"}]

	},
	{
		id: 3,
		title: "FastApp",
		thumbnail: "images/sm4.png",
		image: "images/bg3.png",
		desc: "This is an app similar to Uber. You can request transportation selecting an origin and destination point, the app should calculate the value to pay and look for the closest driver. You could track the driver and see information about it. Also, the driver can see the necessary information about the rider. At this point, the app for drivers is available just for smartphones with Android.",
		tech: ["HTML", "CSS", "RESTful", "NodeJS", "Angular", "Firebase", "Maps"],
		link: [{name:"Demo", link:"https://fabianlema.github.io/fabian-bookmarks-app/"}],
		repo: [{name:"Repo Server-Client", link:"https://bitbucket.org/fabianlema/fastapp"},
					{name:"Repo Driver (Android)", link:"https://bitbucket.org/fabianlema/fastappdriver"}]

	},
	{
		id: 4,
		title: "My Bookmarks",
		thumbnail: "images/sm2.png",
		image: "images/bg2.png",
		desc: "This application allows a user to list, add, edit, and delete their favorite bookmarks. Each bookmark has its description, web site information, and the corresponding rating. If you like navigate to its web site you will be able to do it. Also, you will be able to filter all data depending rating of the bookmark.",
		tech: ["HTML", "Javascript", "CSS", "Jquery", "RESTful"],
		link: [{name:"Demo", link:"https://fabianlema15.github.io/fabian-bookmarks-app/"}],
		repo: [{name:"Repo", link:"https://github.com/fabianlema15/fabian-bookmarks-app"}]

	},
	{
		id: 5,
		title: "Multipagos",
		thumbnail: "images/sm3.png",
		image: "images/bg4.png",
		desc: "App developed using Xamarin for front-end and NodeJs for the back-end. Using this app you can search different bills to pay like water, phone, electric energy, cable, and other services, you could select many bills, add to the shopping cart, and finally pay using a credit card. This app uses two third-party APIs, one to get a list and information about different services and another one to pay using a credit card.",
		tech: ["HTML", "NodeJS", "RESTful", "MongoDB", "CShar", "Xamarin", "Firebase", "Android", "Apple"],
		link: [],
		repo: [{name:"Repo Server (NodeJS)", link:"https://bitbucket.org/fabianlema/multipagosnode"},
					{name:"Repo Client (Xamarin)", link:"https://bitbucket.org/fabianlema/multipagosapp"}]

	},
	{
		id: 6,
		title: "Bellsaria",
		thumbnail: "images/sm6.png",
		image: "images/bg6.png",
		desc: "Java application developer to a contact center, stores basic information about each call that the agent receives. The app is always looking for emails that get to help desk and show to the agent to answer it. If some message gets to a social network like Facebook or Twitter, the app should be know about it and get to the agent the option to answer it. If you want to send massive text message you can use this app to do it. Finally, this app has implemented a button 'Click to call' to call any person. To run all functionalities this app needs to be connected to Cisco UCCX, Cisco Social Miner, Gateway 2N, and should be loaded in Cisco Agent Desktop.",
		tech: ["HTML", "Jquery", "Java", "Hibernate", "SQLServer", "Cisco"],
		link: [],
		repo: [{name:"Repo", link:"https://bitbucket.org/fabianlema/bellsaria/"}]
	},
	{
		id: 7,
		title: "Bellsaria",
		thumbnail: "images/sm7.png",
		image: "images/bg7.png",
		desc: "Python application developer to a contact center, stores basic information about each call that the agent receives. The app is always looking for emails that get to help desk and show to the agent to answer it. If some message gets to a social network like Facebook or Twitter, the app should be know about it and get to the agent the option to answer it. If you want to send massive text message you can use this app to do it. Finally, this app has implemented a button 'Click to call' to call any person. To run all functionalities this app needs to be connected to Cisco UCCX, Cisco Social Miner, Gateway 2N, and should be loaded in Cisco Agent Desktop.",
		tech: ["HTML", "Jquery", "Python", "Django", "SQLServer", "Cisco"],
		link: [],
		repo: [{name:"Repo", link:"https://bitbucket.org/fabianlema/bellsaria-python"}]
	}];

	return {
		projects,
	}
}());
