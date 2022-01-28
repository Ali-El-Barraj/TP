window.onload = function () {
  if (localStorage.getItem("data") === null) {
    localStorage.setItem("data", JSON.stringify([]));
  }
  /* else{
    localStorage.clear();
  } */
};

const nom = document.querySelector("#nom");
const prenom = document.querySelector("#prenom");
const email = document.querySelector("#email");
/* const action = document.querySelector("#action"); */
const btnSubmit = document.querySelector("#btnSubmit");
const etude = document.querySelector("#etude");
const bio = document.querySelector("#bio");

// table list
const listestagiaires = document.querySelector("#listestagiaires");

btnSubmit.addEventListener("click", submitForm);

function submitForm(event) {
  event.preventDefault();
  console.log("nom : ", nom.value);
  console.log("prenom : ", prenom.value);
  console.log("email : ", email.value);
  console.log("Études : ", etude.value);
  console.log("Bio : ", bio.value);

  /*  localStorage.setItem("data", JSON.stringify()); */

  if (nom.value !== "" && prenom.value !== "" && email.value !== "") {
    const dataRow = document.createElement("tr");

    const columnNom = document.createElement("td");
    columnNom.innerText = nom.value;

    const columnPrenom = document.createElement("td");
    columnPrenom.innerText = prenom.value;

    const columnEmail = document.createElement("td");
    columnEmail.innerText = email.value;

    const columnAction = document.createElement("td");

    const boutonSupprimer = document.createElement("button");

    boutonSupprimer.innerText = "Supprimer";
    boutonSupprimer.addEventListener("click", function () {
      // dataRow.remove();
      this.parentElement.parentElement.remove();
      /* window.localStorage.clear();  */ //This method is used to clear all values stored in local storage. It does not require any parameters.
    });

    /////////////////////////////////////////////
    //document.body.appendChild(boutonSupprimer);
    //////////////////////////////////////////////

    //Added by Ali : Introducing the "voir" button
    const boutonVoir = document.createElement("button");
    boutonVoir.innerText = "voir";
    boutonVoir.addEventListener("click", function () {});

    columnAction.appendChild(boutonSupprimer);
    //columnAction.appendChild(boutonVoir);

    // append : Ajouter plusieurs enfant
    dataRow.append(columnNom, columnPrenom, columnEmail, columnAction);
    listestagiaires.appendChild(dataRow);
    //vider tous les champs

    const formData = {
      nom: nom.value,
      prenom: prenom.value,
      email: email.value,
      bio: bio.value,
      etude: etude.value,
    };

    const data = JSON.parse(localStorage.getItem("data"));
    data.push(formData);
    localStorage.setItem("data", JSON.stringify(data));
    nom.value = "";
    prenom.value = "";
    email.value = "";
  }
}
