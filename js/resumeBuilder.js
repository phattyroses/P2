
var bio = {
	"name": "Richard Hanks",
	"role": "Web Developer",
	"contacts":{
		 "mobile": "413-658-7041",
		 "email": "richardhanksjr@gmail.com",
		 "github": "phattyroses",
		 "location": "Jacksonville, FL"
		},
	"picture_URL" : "images/IMG_1653.jpg",
	"welcome_message": "Welcome To My Resume!",
	"skills": ["Python", " Front-end Development", " Musician", " Educator", " CDL Driver"]

}


bio.display = function(){


		var contactKeys = Object.keys(bio.contacts);
		var contactsCounter = 0;

	for (var i in bio.contacts){

		var key = contactKeys[i];

		var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[i]).replace("%contact%", contactKeys[contactsCounter]);
		contactsCounter += 1;

		$("#topContacts").append(formattedContact);

	}
	//$("#header").append(HTMLpicStart);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture_URL);
	$("#header").append(formattedBioPic);
	var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcome_message);
	$("#header").append(formattedWelcome);
	if (bio.skills){
	$("#header").append(HTMLskillsStart);
	for (i in bio.skills){
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skillsH3").append(formattedSkill);
	}
	if (bio.name && bio.role){
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName)




	}
}

}


bio.display();






var work = {

	"jobs":[
		{
			"employer": "United States Navy",
			"title": "Musician",
			"location": "Seattle, WA",
			"dates": "2010-Present",
			"description": "Perform music in a large variety of styles"
		},

		{
			"employer": "University of Massachusetts",
			"title": "Graduate Teaching Assistant",
			"location": "Amherst, MA",
			"dates": "August, 2008-May, 2009",
			"description": "Teach trombone techiniques to music eduators.  Orchestra manager."
		},

		{
			"employer": "Umass Transit Services",
			"title": "Service Department Manager/Bus Driver",
			"location": "Amherst, MA",
			"dates": "February, 2001-August, 2008",
			"description": "Mangage Service Department, drive buses, dispatch drivers, teach CDL driving."

		}

	]
}

work.display= function() {
for (jobs in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobs].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[jobs].title);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[jobs].location);
	var formatedDates = HTMLworkDates.replace("%data%", work.jobs[jobs].dates);
	var formatedDescription = HTMLworkDescription.replace("%data%", work.jobs[jobs].description);
	var formatedEmployerTitle = formattedEmployer + formattedTitle + formattedLocation + formatedDates +
									formatedDescription;
	$(".work-entry:last").append(formatedEmployerTitle);

}
}
work.display();

/*$("#main").append(internationalizeButton);

function inName(){


	var nameString = bio.name.split(" ");
	var newLast = nameString[1].toUpperCase();
	var newFirst = nameString[0];
	var newName = newFirst + " " + newLast;
	return newName;
}

inName();*/

var projects = {

	"projects": [
		{
			"title": "Metronome/Drone",
			"dates": "2015",
			"description": "A program for practicing muscians based on research.",
			"images": ["images/met_2.png"]

		},
		{
			"title": "Navy MU Rating Exam Practice",
			"dates": "2005",
			"description": "A program for randomly generating study questions for the Navy Musicians' rating exam.",
			"images": ["images/MU_Badge.png"]
		},
		{
			"title": "Planetary Ring Tone",
			"dates": "2005",
			"description": "A program that uses the orbital speeds of planets to algorhithmically create an interesting musical composition.",
			"images": ["images/phone_music.png"]
		}
	]
}


projects.display = function(){

	for (i in projects.projects){

		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		$(".project-entry:last").append(formattedDescription);
		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images);
		$(".project-entry:last").append(formattedImage);


	}
}

projects.display();
var education = {
    "schools": [
        {
            "name": "Umass",
            "location": "Amherst, MA",
            "degree": ["Master of Music"],
            "date": "2009",
            "major": "Music"
        },
        {
            "name": "Umass",
            "location": "Amherst, MA",
            "degree": ["BA Music"],
            "date": "2007",
            "url": "www.umass.edu",
            "major": "Music"
        }
    ],
    "onlineCourses": [
        {
        	"title": "Intro to HTML and CSS",
        	"school": "Udacity",
        	"date": "2015",
        	"url": "www.udacity.com"
        },
        {
        	"title": "Responsive Web Design Fundamentals",
        	"school": "Udacity",
        	"date": "2015",
        	"url": "www.udacity.com"

        },
        {
        	"title": "Responsive Images",
        	"school": "Udacity",
        	"date": "2015",
        	"url": "www.udacity.com"
        },
        {
        	"title": "JavaScript Basics",
        	"school": "Udacity",
        	"date": "2015",
        	"url": "www.udacity.com"
        }
    ]
}

education.display = function(){

	for (i in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
		var formattredSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		var formattedSchoolAndDegree = formattedSchoolName + formattredSchoolDegree;
		$(".education-entry:last").append(formattedSchoolAndDegree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].date);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
		$(".education-entry:last").append(formattedSchoolLocation);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
		$(".education-entry:last").append(formattedSchoolMajor);

	}
	$(".education-entry:last").append(HTMLonlineClasses);
	for (i in education.onlineCourses){

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		$(".education-entry:last").append(formattedTitleSchool);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
		$(".education-entry:last").append(formattedDates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
		$(".education-entry:last").append(formattedURL);



	}
}

education.display();

$("#mapDiv").append(googleMap);


var contactKeys_bottom = Object.keys(bio.contacts);
var contactsCounter_bottom = 0;

	for (var i in bio.contacts){

		var key = contactKeys_bottom[i];

		var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[i]).replace("%contact%", contactKeys_bottom[contactsCounter_bottom]);
		contactsCounter_bottom += 1;

		$("#footerContacts").append(formattedContact);

	}


