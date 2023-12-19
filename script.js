function addCadeau() {
    document.getElementById('myModal').style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }
  
  window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target === modal) {
      closeModal();
    }
  };