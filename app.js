let count = 0;

function ajouterTache() {
  const input = document.getElementById("tacheInput");
  const liste = document.getElementById("liste");

  if (input.value.trim() === "") {
    alert("Écrire une tâche d'abord !");
    return;
  }

  const li = document.createElement("li");
  li.textContent = input.value;
  liste.appendChild(li);
  incrementer();
  input.value = "";
}

function incrementer() {
  count++;
  document.getElementById("compteur").textContent = count;
}

function resetCompteur() {
  count = 0;
  document.getElementById("compteur").textContent = count;
}