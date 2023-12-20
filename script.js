function addConfirm() {
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
})
