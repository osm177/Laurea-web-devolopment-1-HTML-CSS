// MOKATAAN OTSIKKOA KUN NAPPIA PAINETAAN
// MOKATAAN OTSIKKOA KUN NAPPIA PAINETAAN
const changeHeadingButton = document.querySelector("#changeHeadingButton");
const taskOneHeading = document.querySelector("#taskOneHeading");

changeHeadingButton.addEventListener("click", function () {
    taskOneHeading.textContent = "Muokattu otsikko!";
});
// Muuta tyyliä
const changeStyleButton = document.querySelector("#changeStyleButton");
changeStyleButton.addEventListener("click", function () {
        taskOneHeading.classList.toggle("highlight");

    });

    // Muuta eläinteksti
    const changeTextButton = document.querySelector("#changeTextButton");
    const animalText = document.querySelector("#animalText");

    changeTextButton.addEventListener("click", function () {
        animalText.textContent = "Elefantit ovat erittäin älykkäitä eläimiä.";
    });



    // Tehtävä 2

const animalContent = document.querySelector("#animalContent");
const animalHeading = document.createElement("h3");
animalHeading.textContent = "Päivän eläin";
animalHeading.classList.add("animal-heading");

animalContent.append(animalHeading);

const animalDescription = document.createElement("p");
animalDescription.textContent = ("Elefantit ovat maailman suurimpia maaeläimiä.");
animalContent.append(animalDescription);

const animalImage = document.createElement("img");
animalImage.src = "images/elephant.png";
animalImage.alt = "Elefantti";
animalContent.append(animalImage);


const hideAnimalButton = document.querySelector("#hideAnimalButton");
hideAnimalButton.addEventListener("click", function () {
animalContent.style.display = "none";
});

const showAnimalButton = document.querySelector("#showAnimalButton");
showAnimalButton.addEventListener("click", function (){
    animalContent.style.display = "block";

});





// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE
// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE



// -------------------------------------------------- EXAMPLE 3 LISTEN DROPDOWN SELECT
// -------------------------------------------------- EXAMPLE 3 LISTEN DROPDOWN SELECT



// listener for the select element from the drop down list.

const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const selectedAnimalImage = document.querySelector("#animalImage");
const selectedAnimalDescription = document.querySelector("#animalDescription");

animalSelect.addEventListener("change", function () {
    const selectedAnimal = animalSelect.value;

    if (selectedAnimal === "elephant") {
        animalName.textContent = "Elefantti";
        selectedAnimalImage.src = "images/elephant.png"
        selectedAnimalImage.alt = "Elefantti";
        selectedAnimalDescription.textContent = "Elefantit ovat maailman suurimpia maaeläimiä";
    } else if (selectedAnimal === "tiger"){
        animalName.textContent = "Tiikeri";
        selectedAnimalImage.src = "images/tiger.png"
        selectedAnimalImage.alt = "Tiikeri";
        selectedAnimalDescription.textContent = "Tiikerit ovat suuria kissaeläimiä."
    } else if (selectedAnimal === "penguin"){
        animalName.textContent = "Pingviini";
        selectedAnimalImage.src = "images/penguin.png"
        selectedAnimalImage.alt = "Pingviini";
        selectedAnimalDescription.textContent = "Pingviinit ovat lintuja, jotka eivät osaa lentää.";
    } else if (selectedAnimal === "panda"){
        animalName.textContent = "Panda";
        selectedAnimalImage.src = "images/panda.png"
        selectedAnimalImage.alt = "Panda";
        selectedAnimalDescription.textContent = "Pandat syövät pääasiassa bambua.";
    }

     });

     selectedAnimalImage.addEventListener("mouseenter", function (){
        selectedAnimalImage.classList.add("image-highlight");
     });

     selectedAnimalImage.addEventListener("mouseleave", function (){
        selectedAnimalImage.classList.remove("image-highlight");
     });

    // function to update the DOM based on the selected animal

    const animalForm = document.querySelector("#animalForm");
    const observationTableBody = document.querySelector("#observationTableBody");

    animalForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const observationAnimal = document.querySelector("#observationAnimal").value;
        const observationLocation = document.querySelector("#observationLocation").value;
        const observationDate = document.querySelector("#observationDate").value;

        console.log(observationAnimal, observationLocation, observationDate);

        if (observationAnimal === "" || observationLocation === "" || observationDate === "") {
            alert("Täytä kaikki kentät!");
            return;
        }

        const newRow = document.createElement("tr");
        const animalCell = document.createElement("td");
        animalCell.textContent = observationAnimal;

        const locationCell = document.createElement("td");
        locationCell.textContent = observationLocation;

        const dateCell = document.createElement("td");
        dateCell.textContent = observationDate;
        newRow.append(animalCell, locationCell, dateCell);
        observationTableBody.append(newRow);

        animalForm.reset();


    });
