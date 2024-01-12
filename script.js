/*function addConfirm() {
    document.getElementById('myModal').style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }
  

  // vanaf hier voor aanmeld pagina

  let onderlichfilter = document.getElementById("filter-onderlichaam")
  let bovenlichfilter = document.getElementById("filter-bovenlichaam")
  let allesfilter = document.getElementById("filter-alles")

  onderlichfilter.addEventListener("click", function() {
    onderlichfilter.classList.add("selected");
    bovenlichfilter.classList.remove("selected");
    allesfilter.classList.remove("selected");
})

bovenlichfilter.addEventListener("click", function() {
    bovenlichfilter.classList.add("selected");
    onderlichfilter.classList.remove("selected");
    allesfilter.classList.remove("selected");
})

allesfilter.addEventListener("click", function() {
    allesfilter.classList.add("selected");
    onderlichfilter.classList.remove("selected");
    bovenlichfilter.classList.remove("selected");
}) */

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
              picture: 'images/laws.jpg',
              dateAndTime: '07-12-23 / 13:00',
              description: 'Met een bak aan je voet vast, moet je in deze activiteit alle ballen vangen door je been op de grond te zetten.'
          };
          saveToLocalStorage(activityDetails);
      });
  }

  // Repeat similar code for aanmeldenButton2 and aanmeldenButton3
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

              // Voeg hier de logica toe om de activiteit weer te geven
              displayActivity(selectedActivity);
          } else {
              console.log('Geen aanmelding gevonden in localStorage.');
          }
      });
  }

  function displayActivity(activityDetails) {
      // Maak elementen om activiteit weer te geven
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

      // Voeg hier de logica toe om de rest van de activiteit weer te geven

      activityDiv.appendChild(upperDiv);
      activityDiv.appendChild(lowerDiv);

      // Voeg het gemaakte activiteit-element toe aan het activitiesContainer
      activitiesContainer.appendChild(activityDiv);
  }
});



