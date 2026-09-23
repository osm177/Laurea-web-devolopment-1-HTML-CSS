console.log("JavaScript toimii!");

function showTable() {
   let animal = "Tiikeri";
   let habitat = "Metsä";
   let diet = "Liha";


let table = `
    <table>
        <tr>
                <th>Eläin</th>
                <th>Elinympäristö</th>
                <th>Ruokavalio</th>
            </tr>
            <tr>
                <td>${animal}</td>
                <td>${habitat}</td>
                <td>${diet}</td>
        </tr>
    
    </table>
`;
document.querySelector("#tableContainer").innerHTML = table;

}

const exercise2 = document.querySelector("#exercise2");

exercise2.addEventListener("mouseover", function() {
    console.log("Stepped over me with a mouse!");

});

const exercise1 = document.querySelector("#exercise1");

exercise1.addEventListener("click", function() {
    exercise1.style.color = "red";
    exercise1.innerHTML = "Bye bye mouse!";
});

const feedback = document.querySelector("#feedback");
const status = document.querySelector("#status");
const charcount = document.querySelector("#charcount");
const preview = document.querySelector("#preview");
const feedbackForm = document.querySelector("#feedbackForm");


feedback.addEventListener("focus", function() {
    status.innerHTML = "Kirjoita palautteesi";
});

feedback.addEventListener("blur", function (){
    status.innerHTML = "";
});

feedback.addEventListener("input", function() {
    charcount.innerHTML = feedback.value.length + "/200";
    preview.innerHTML = feedback.value
});

feedbackForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const length = feedback.value.length;
    if (length < 10 || length > 200) {
        status.innerHTML = "Paluatteen pitää olla 10-200 merkkiä.";
    } else { 
        feedback.value = " ";
        status.innerHTML = "Thank you for your feedback!";
    }
});

