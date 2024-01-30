document.addEventListener("DOMContentLoaded", function() {
    const aanmeldButtons = document.querySelectorAll(".aanmeldbutton");

    aanmeldButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const modal = document.querySelector(".modal");
            modal.style.display = "block";

            const modalButtons = modal.querySelectorAll("button");
            modalButtons.forEach(function(modalButton) {
                modalButton.addEventListener("click", function() {

                    modal.style.display = "none";
                });
            });
        });
    });
});

// Dit is de javascript code voor aanmelden.html

  document.addEventListener('DOMContentLoaded', function () {
    let onderlichfilter = document.getElementById("filter-onderlichaam");
    let bovenlichfilter = document.getElementById("filter-bovenlichaam");
    let allesfilter = document.getElementById("filter-alles");
    let activityContainers = document.getElementsByClassName("activitycontainer");

    onderlichfilter.addEventListener("click", function() {
        filterActivities("onderlichaam");
        updateButtonStyle(onderlichfilter);
    });

    bovenlichfilter.addEventListener("click", function() {
        filterActivities("bovenlichaam");
        updateButtonStyle(bovenlichfilter);
    });

    allesfilter.addEventListener("click", function() {
        showAllActivities();
        updateButtonStyle(allesfilter);
    });

    function filterActivities(category) {
        for (let i = 0; i < activityContainers.length; i++) {
            let activityContainer = activityContainers[i];
            if (activityContainer.id === category) {
                activityContainer.style.display = "block";
            } else {
                activityContainer.style.display = "none";
            }
        }
    }

    function showAllActivities() {
        for (let i = 0; i < activityContainers.length; i++) {
            activityContainers[i].style.display = "block";
        }
    }

    function updateButtonStyle(selectedButton) {
        let buttons = document.getElementsByClassName("filterbutton");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("selected");
        }
        selectedButton.classList.add("selected");
    }
});

// Code voor aanmelden.html
document.addEventListener('DOMContentLoaded', function () {
  var aanmeldenButton1 = document.getElementById('aanmelden-button-1');
  var aanmeldenButton2 = document.getElementById('aanmelden-button-2');
  var aanmeldenButton3 = document.getElementById('aanmelden-button-3');

  function saveToLocalStorage(activityDetails) {
      localStorage.setItem('selectedActivity', JSON.stringify(activityDetails));
      console.log('Aanmelding opgeslagen:', activityDetails);
  }

  if (aanmeldenButton1) {
      aanmeldenButton1.addEventListener('click', function () {
          var activityDetails = {
              name: 'De Ballenvanger',
              participants: '3/10',
              picture: 'images/ballenvanger.png',
              dateAndTime: '07-12-23 / 13:00',
              description: 'Met een bak aan je voet vast, moet je in deze activiteit alle ballen vangen door je been op de grond te zetten.'
          };
          saveToLocalStorage(activityDetails);
      });
  }

});


// Code voor index.html
document.addEventListener('DOMContentLoaded', function () {
  var aanmeldenButton = document.getElementById('add_activity_button-1');
  var activitiesContainer = document.getElementById('activities-container');
  
  if (aanmeldenButton) {
      aanmeldenButton.addEventListener('click', function () {
          var selectedActivity = localStorage.getItem('selectedActivity');
          if (selectedActivity) {
              selectedActivity = JSON.parse(selectedActivity);
              console.log('Aanmelding opgehaald van localStorage:', selectedActivity);

              displayActivity(selectedActivity);
          } else {
              console.log('Geen aanmelding gevonden in localStorage.');
          }
      });
  }

  function displayActivity(activityDetails) {

      var activityDiv = document.createElement('div');
      activityDiv.className = 'activitycontainer';

      var upperDiv = document.createElement('div');
      upperDiv.className = 'activity-info upper';

      var h3 = document.createElement('h3');
      h3.className = 'activity-name';
      h3.textContent = activityDetails.name;

      var participantCounter = document.createElement('div');
      participantCounter.className = 'participant-counter';
      participantCounter.innerHTML = '<i class="fa-solid fa-user"></i><p>&nbsp;' + activityDetails.participants + '</p>';

      upperDiv.appendChild(h3);
      upperDiv.appendChild(participantCounter);

      var lowerDiv = document.createElement('div');
      lowerDiv.className = 'activity-info lower';

      activityDiv.appendChild(upperDiv);
      activityDiv.appendChild(lowerDiv);

      activitiesContainer.appendChild(activityDiv);
  }
});



