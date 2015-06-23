var bio = {
	name: 'Ana Isabel Feliu',
	contacts: {
		email: 'ana.feliu14@gmail.com',
		twitter: '@AnaFelier',
		github: 'AnaFeliu',
		mobile: '65236159',
		location: 'Panama City, Panama'
	},
	role: 'Front-End Web Developer',
	pic: 'images/profile.jpg',
	skills: [
		'Professional day-dreamer',
		'Part-time world-saver',
		'Compulsive list-maker',
		'French-rock enthusiast',
		'Lover of overly-hyphenated phrases'
	],
	skillsIcons: [
		'fontawesome-cloud',
		'fontawesome-globe',
		'fontawesome-list-ol',
		'fontawesome-music',
		'fontawesome-minus'],
	contactsIcons: {
		email: 'fontawesome-envelope',
		twitter: 'fontawesome-twitter',
		github: 'fontawesome-github-alt',
		mobile: 'fontawesome-phone',
		location: 'fontawesome-pushpin'
	},
	contactsURL: {
		email: 'mailto://ana.feliu14@gmail.com',
		twitter: 'https://twitter.com/AnaFelier',
		github: 'https://github.com/AnaFeliu',
		location: 'https://www.google.com/maps/place/Panama/@9.0832253,-79.' +
			'4523794,11z/data=!3m1!4b1!4m2!3m1!1s0x8faca8f1dbe80363:0xaba25' +
			'df1f042c10e'
	},
	welcomeMessage: 'Hello, there! Welcome to my interactive online resumee. ' +
		'Feel free to click around, admire my infinite knowledge, and send me' +
		' a message. Enjoy!',
	displayHeader: function() {
		var formattedName = HTMLheaderName.replace('%data%', bio.name);
		var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
		var formattedPic = HTMLbioPic.replace('%data%', bio.pic);
		$('#header').prepend(formattedName, formattedRole, formattedPic);
		$('#main').append(internationalizeButton);
		var formattedMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
		$('.welcome-message').append(formattedMessage);
	},
	displaySkills: function() {
		$('#header').append(HTMLskillsStart);
		for (var i = 0; i < bio.skills.length; i++) {
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
			formattedSkill = formattedSkill.replace('%icon%', bio.skillsIcons[i]);
			$('#skills').append(formattedSkill);
		};
	},
	displayContacts: function() {
		var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
		formattedEmail = formattedEmail.replace('#', bio.contactsURL.email);
		var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
		formattedTwitter = formattedTwitter.replace('#', bio.contactsURL.twitter);
		var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
		formattedGithub = formattedGithub.replace('#', bio.contactsURL.github);
		var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
		var formattedLocation = HTMLlocation.replace('%data%',
			bio.contacts.location);
		formattedLocation = formattedLocation.replace('#',
			bio.contactsURL.location);
		var formattedContacts = formattedEmail + formattedTwitter +
			formattedGithub + formattedMobile + formattedLocation;
		$('#topContacts').append(formattedContacts);

		$('#footerContacts').append(HTMLfooterStart);
		formattedEmail = HTMLfooterEmail.replace('%data%', bio.contacts.email);
		formattedEmail = formattedEmail.replace('%icon%', bio.contactsIcons.email);
		formattedTwitter = HTMLfooterTwitter.replace('%data%',
			bio.contacts.twitter);
		formattedTwitter = formattedTwitter.replace('%icon%',
			bio.contactsIcons.twitter);
		formattedTwitter = formattedTwitter.replace('#', bio.contactsURL.twitter);
		formattedGithub = HTMLfooterGithub.replace('%data%', bio.contacts.github);
		formattedGithub = formattedGithub.replace('%icon%',
			bio.contactsIcons.github);
		formattedGithub = formattedGithub.replace('#', bio.contactsURL.github);
		formattedMobile = HTMLfooterMobile.replace('%data%', bio.contacts.mobile);
		formattedMobile = formattedMobile.replace('%icon%',
			bio.contactsIcons.mobile);
		formattedLocation = HTMLfooterLocation.replace('%data%',
			bio.contacts.location);
		formattedLocation = formattedLocation.replace('%icon%',
			bio.contactsIcons.location);
		formattedLocation = formattedLocation.replace('#',
			bio.contactsURL.location);
		formattedContacts = formattedEmail + formattedTwitter +
			formattedGithub + formattedMobile + formattedLocation;
		$('.footer-entry:last').append(formattedContacts);
	}
};

var education = {
	schools: [{
		name: 'Colegio Brader',
		location: 'Panama City, Panama',
		degree: 'High School Diploma',
		major: 'Science and Letters',
		dates: '2000 - 2014',
		url: 'http://www.colegiobrader.edu.pa/'
	}, {
		name: 'University of Rochester',
		location: 'Rochester, New York',
		degree: 'BS, MsEd',
		major: 'Computer Science, Online Teaching',
		dates: '2019 - 2020',
		url: 'http://www.rochester.edu/'
	}],
	onlineCourses: [{
		title: 'Justice',
		school: 'Harvard edX',
		date: '2013',
		url: 'https://www.edx.org/course/justice-harvardx-er22-1x'
	}, {
		title: 'Intro to HTML and CSS',
		school: 'Udacity',
		date: '2015',
		url: 'https://www.udacity.com/course/intro-to-html-and-css--ud304'
	}, {
		title: 'Responsive Web Design Fundamentals',
		school: 'Udacity',
		date: '2015',
		url: 'https://www.udacity.com/course/responsive-web-design-fundament' +
			'als--ud893'
	}, {
		title: 'Responsive Images',
		school: 'Udacity',
		date: '2015',
		url: 'https://www.udacity.com/course/responsive-images--ud882'
	}, {
		title: 'How to Use Git and GitHub',
		school: 'Udacity',
		date: '2015',
		url: 'https://www.udacity.com/course/how-to-use-git-and-github--ud775'
	}, {
		title: 'JavaScript Basics',
		school: 'Udacity',
		date: '2015',
		url: 'https://www.udacity.com/course/javascript-basics--ud804'
	}],
	displaySchools: function() {
		$('#education').append(HTMLschoolStart);
		for (var i = 0; i < education.schools.length; i++) {
			var formattedSchoolName = HTMLschoolName.replace('%data%',
				education.schools[i].name);
			formattedSchoolName = formattedSchoolName.replace('#',
				education.schools[i].url);
			var formattedSchoolLocation = HTMLschoolLocation.replace('%data%',
				education.schools[i].location);
			var formattedSchoolDegree = HTMLschoolDegree.replace('%data%',
				education.schools[i].degree);
			var formattedSchoolMajor = HTMLschoolMajor.replace('%data%',
				education.schools[i].major);
			var formattedSchoolDates = HTMLschoolDates.replace('%data%',
				education.schools[i].dates);
			var formattedSchoolDetails = formattedSchoolName +
			formattedSchoolLocation + formattedSchoolDegree +
			formattedSchoolMajor + formattedSchoolDates;
			$('.education-entry:last').append(formattedSchoolDetails);
		};
	},
	displayOnlineCourses: function() {
		$('#education').append(HTMLonlineClasses);
		$('#education').append(HTMLonlineStart);
		for (var i = 0; i < education.onlineCourses.length; i++) {
			var formattedOnlineTitle = HTMLonlineTitle.replace('%data%',
				education.onlineCourses[i].title);
			formattedOnlineTitle = formattedOnlineTitle.replace('#',
				education.onlineCourses[i].url);
			var formattedOnlineSchool = HTMLonlineSchool.replace('%data%',
				education.onlineCourses[i].school);
			var formattedOnlineDate = HTMLonlineDate.replace('%data%',
				education.onlineCourses[i].date);
			var formattedOnlineDetails = formattedOnlineTitle +
			formattedOnlineSchool + formattedOnlineDate;
			$('.online-entry:last').append(formattedOnlineDetails);
		};
	}
};

var work = {
	jobs: [{
		title: 'Songwriter',
		employer: 'Various',
		dates: '1996-present',
		location: 'Panama City, Panama',
		description: 'Since the very beginning, my innate musical talent ' +
			'caught the attention of several people involved with the music ' +
			'industry who - after much begging - convinced me to sell a ' +
			'select few of my songs. Amongst these, some that come to mind at' +
			' the moment are "Hook" performed by the Blues Traveler, "Don\'t ' +
			'Stop Believing" performed by Journey, and "Backseat Freestyle" ' +
			'performed by Kendrick Lamar.'
	}, {
		title: 'Stand-up Comedian',
		employer: 'The Second City',
		dates: '2001-2004',
		location: 'Chicago, USA',
		description: 'Part of an improv comedy troupe called "Don\'t Worry, ' +
			'It\'s Not Loaded" which performed every other Thursday and ' +
			'Sunday nights in Chicago\'s The Second City.'
	}, {
		title: 'Head Writer of Saturday Night Live',
		employer: 'NBC',
		dates: '2005-2009',
		location: 'New York, USA',
		description: 'The boss of a bunch of monkeys the network likes to ' +
			'call "writers." Best job ever.'
	}, {
		title: 'Ghost Novel Writer',
		employer: 'Various',
		dates: '2006-present',
		location: 'New York, USA',
		description: 'I fill my spare time writing beautiful prose filled ' +
			'with metaphors, which then gets simplified for the general ' +
			'audience and sold for profit. Being a recognized author is a ' +
			'conflict of general interest for me because of a demand from ' +
			'another employer (see Secret Agent). Therefore, I write books ' +
			'"with" another author - it\'s called "Ghost Writing". Amongst ' +
			'these are "J.K. Rowling\'s" Harry Potter series, "Dr. Seuss\'" ' +
			'Green Eggs and Ham, and my current project, "Patrick Rothfuss' +
			'\'s" The Kingkiller Chronicles.'
	}, {
		title: 'Professional Poker Player',
		employer: 'Self-employed',
		dates: '2010-present',
		location: 'Nevada, USA',
		description: 'Winner of three consecutive World Series of Poker, ' +
			'Bluff Magazine named me "the greatest poker player of the ' +
			'century" and I am the face of PokerStars.com since 2011. ' +
			'However, for reasons I cannot disclose for national security ' +
			'reasons (see Secret Agent), I am not aloud to set foot in a Las ' +
			'Vegas casino since 2013, and have now relocated my playing ' +
			'mainly online - specifically, to PokerStars.com, simply the best' +
			' online poker service out there. (This message was sponsored by ' +
			'PokerStars.com - simply the best)'
	}, {
		title: 'Secret Agent',
		employer: 'Confidential',
		dates: 'confidential',
		location: 'confidential',
		description: '[Level 8 Clearance is needed to read this information.]'
	}, {
		title: 'Front-End Web Developer',
		employer: 'Various',
		dates: '2014-present',
		location: 'Panama City, Panama',
		description: 'My newest project, Front-End Web Development is coming ' +
			'along slowly but surely. Hopefully.'
	}],
	display: function() {
		$('#workExperience').append(HTMLworkStart);
		for (var i = 0; i < work.jobs.length; i++) {
			var formattedEmployer = HTMLworkEmployer.replace('%data%',
				work.jobs[i].employer);
			var formattedTitle = HTMLworkTitle.replace('%data%',
				work.jobs[i].title);
			var formattedDates = HTMLworkDates.replace('%data%',
				work.jobs[i].dates);
			var formattedLocation = HTMLworkLocation.replace('%data%',
				work.jobs[i].location);
			var formattedDescription = HTMLworkDescription.replace('%data%',
				work.jobs[i].description);

			var formattedWorkDetails = formattedEmployer + formattedTitle +
				formattedDates + formattedLocation + formattedDescription;
			$('.work-entry:last').append(formattedWorkDetails);
		}
	}
};

var projects = {
	projects: [{
		title: 'portfolio',
		dates: '2015',
		description: 'Muck-up portfolio designed in conjunction with Udacity' +
			'\'s \'Front-End Web Development Nanodegree\' in order to gain ' +
			'practice using HTML and CSS.',
		images: 'images/project1.jpg'
	}],
	display: function() {
		$('#projects').append(HTMLprojectStart);
		for (var i = 0; i < projects.projects.length; i++) {
			var formattedTitle = HTMLprojectTitle.replace('%data%',
				projects.projects[i].title);
			var formattedDates = HTMLprojectDates.replace('%data%',
				projects.projects[i].dates);
			var formattedDescription = HTMLprojectDescription.replace('%data%',
				projects.projects[i].description);
			var formattedImage = HTMLprojectImage.replace('%data%',
				projects.projects[i].images);
			var formattedProjectDetails = formattedTitle + formattedDates +
				formattedDescription + formattedImage;
			$('.project-entry:last').append(formattedProjectDetails);
		}
	}
};

bio.displayHeader();
bio.displaySkills();
bio.displayContacts();
work.display();
projects.display();
education.displaySchools();
education.displayOnlineCourses();