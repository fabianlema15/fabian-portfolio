'use strict';

const initial = (function(){
	function loadHeader(){
		$('header').html(`<div class="main-img">
                <div class="logo-img">
                    <img src="images/logo.png">
                </div>
            </div>
            <div class="menu-bar">
                <li><button class="js-about blue selected">About me</button></li>
                <li><button class="js-projets blue">Projects</button></li>
                <li><button class="js-contact blue">Contact</button></li>
            </div>`);
	}

    function loadFooter(){
        $('footer').html(`<div class="footer-links">
            <a href="https://www.linkedin.com/in/fabian-lema-79539250" target="_blank"><img class="icon" src="images/linkedin.png"></a>
            <a href="mailto: fabianlemac@gmail.com"><img class="icon" src="images/email.png"></a>
            <a href="https://github.com/fabianlema15" target="_blank"><img class="icon" src="images/github.png"></a>
						<a href="https://bitbucket.org/fabianlema" target="_blank"><img class="icon" src="images/bitbucket.png"></a>
        </div>`);
    }

	function loadAboutMe(){
		$('.js-about').addClass('selected');
		$('.js-projets').removeClass('selected');
		$('.js-contact').removeClass('selected');
		$('.content').html(`<hr>
            <div class="panel about-me">
            	<h1>I'm Fabian</h1>
                <p><span>{</span> I'm a web developer who knows how to make reality all your dreams <span class="clarify">(talking about creating web sites)</span>.<span>}</span></p>
                <p><span>{</span>I can develop your projects in different technologies like Javascript and Java. If you were thinking about other technology like C# or Python, don't worry, I can do it too.<span>}</span></p>
                <p><span>{</span>I love challenges and never give up. If some difficulty is in front of me, I always look for different ways to solve it.<span>}</span></p>
                <p><span>{</span>In my free time, I like to dance folkloric music, play soccer, fishing, ride on the bike, and other activities to enjoy with family and friends.<span>}</span></p>

            </div>
            <hr>`);
	}

	function loadProjects(){
		$('.js-about').removeClass('selected');
		$('.js-projets').addClass('selected');
		$('.js-contact').removeClass('selected');
		$('.content').html(`<hr>
			<div class="project-thumbnail">
            </div>
            <hr>
            <div class="panel project">
            </div>
            <hr>`);
		let buttonsHtml = data.projects.reduce((acc, obj) => {
			return acc + `<button class="bt-thumbnail" data-project="${obj.id}">${obj.title}<img class="thumbnail" src="${obj.thumbnail}"></button>`;
		},"");
		$('.project-thumbnail').html(`<h1>My projects</h1>${buttonsHtml}`);
	}

	function loadProjectDetail(project){
		const icons = project.tech.reduce((acc, obj) => acc+`<img src="images/${obj.toLowerCase()}.png">`, '');
		const links = project.link.reduce((acc, obj) => acc+`<a href="${obj.link}" target="_blank"><img class="icon" src="images/visit.png">${obj.name}</a>`, '');
		const repos = project.repo.reduce((acc, obj) => acc+`<a href="${obj.link}" target="_blank"><img class="icon" src="images/visit.png">${obj.name}</a>`, '');
		$('.project').html(`
			<div class="project-main">
                <div class="project-img">
										<a name="project"></a>
                    <h2>${project.title}</h2>
                    <img src="${project.image}">
                </div>
                <div class="project-desc">
                    <p><span>{</span>${project.desc}<span>}</span>
                    </p>
                </div>
            </div>
            <div class="project-info">
                <div class="tech-imgs">
                    ${icons}
                </div>
                <h3>Links</h3>
                <div class="project-links">
                    ${links}
                    ${repos}
                </div>
            </div>`);
	}

	function loadContact(){
		$('.js-about').removeClass('selected');
		$('.js-projets').removeClass('selected');
		$('.js-contact').addClass('selected');
		$('.content').html(`
			<hr>
			<div class="panel">
				<h1>Contacts</h1>
                <div class="contact-links">
                    <span>if (</span>you want to view my profile<span>){</span>

                    <p><a href="https://www.linkedin.com/in/fabian-lema-canar-79539250" target="_blank"><img class="icon" src="images/linkedin.png">LinkedIn Link</a></p>

                    <span>} else if (</span>you want to check my code<span>) {</span>

                    <p><a href="https://github.com/fabianlema15" target="_blank"><img class="icon" src="images/github.png">Github Link</a><br/>
										<a href="https://bitbucket.org/fabianlema" target="_blank"><img class="icon" src="images/bitbucket.png">Bitbucket Link</a></p>

                    <span>} else if (</span>you want to send me a email<span>) {</span>

                    <p><a href="mailto: fabianlemac@gmail.com"><img class="icon" src="images/email.png">Send Email</a></p>

                    <span>};</span>

                </div>
            </div>
            <hr>`);

	}

	function handleSelectProject(){
		$('.content').on('click', 'button', event => {
			const project = data.projects.find(project => project.id == $(event.currentTarget).data('project'));
			loadProjectDetail(project);
			window.location.href='#project'
		});
	}

	function handleMenuItem(){
		$('header').on('click', '.js-about', event => {
			loadAboutMe();
		});
		$('header').on('click', '.js-projets', event => {
			loadProjects();
			loadProjectDetail(data.projects[0]);
		});
		$('header').on('click', '.js-contact', event => {
			loadContact();
		});
	}

	function loadMatrix(){
		$('.matx').html(`<div class="t1" style="left:0px;">748383838383838383837377282837
            </div>
            <div class="t5" style="left:8%;">74838383583838334838383737728542837</div>
            <div class="t2" style="left:15%;">
                if (boolean=true){</br>
                    doSomething();</br>
                }else{</br>
                    doAnotheSomething();</br>
                }
            </div>
            <div class="t2" style="left:20%;">
                for (int i = 0; i < list.size(); i++){</br>
                    System.println(i);</br>
                }
            </div>
            <div class="t4" style="left:25%;">4773937457484738387475748484748488</div>
            <div class="t3" style="left:35%;">
                do{</br>
                    statements..</br>
                }</br>
                while (condition);
            </div>
            <div class="t5" style="left:39%;">72737473392728282737382828373</div>
            <div class="t3" style="left:44%;">
                if (boolean=true){</br>
                    doSomething();</br>
                }else{</br>
                    doAnotheSomething();</br>
                }</br>
            </div>
            <div class="t1" style="left:52%;">272737372727272727272727282626278</div>
            <div class="t4" style="left:59%;">do{</br>
                    statements..</br>
                }</br>
                while (condition);
            </div>
            <div class="t2" style="left:65%;">2737474859594938272628393939493939</div>
            <div class="t3" style="left:74%;">7374857462627373838393939393</div>
            <div class="t4" style="left:78%;">
                for (int i = 0; i < list.size(); i++){</br>
                    System.println(i);</br>
                }
            </div> `);
	}

	function loadFunctions(){
		loadMatrix();
		loadHeader();
        loadFooter();
		loadAboutMe();
		handleMenuItem();
		handleSelectProject();
	}

	loadFunctions();
}());
