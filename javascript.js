function Item(typ, diameter, laenge, head, werkzeug, material, position) {
    this.typ = typ;
    this.diameter = diameter;
    this.laenge = laenge;
    this.head = head;
    this.werkzeug = werkzeug;
    this.material = material;
    this.position = position;
}

var itemList = [

    new Item("Schraube", "M3", "16", "Flachkopf", "Schlitz", "Stahl verzinkt", "Schraubenlager"),
    new Item("Schraube", "M3", "25", "Flachkopf", "Schlitz", "Stahl verzinkt"),
    new Item("Schraube", "M3", "25", "Linsenkopf", "Schlitz", "Stahl verzinkt"),
    new Item("Schraube", "M6", "35", "Zylinderkopf", "innensechskant", "Stahl verzinkt"),
    new Item("Schraube", "M8", "45", "Zylinderkopf", "innensechskant", "Stahl verzinkt"),
    new Item("Schraube", "M8", "25", "Zylinderkopf", "innensechskant", "Stahl verzinkt"),
    new Item("Schraube", "M8", "16", "Zylinderkopf", "innensechskant", "Stahl verzinkt"),
    new Item("Schraube", "M3", "10", "Zylinderkopf", "innensechskant", "Stahl verzinkt"),

    new Item("Schraube", "M6", "35", "Zylinderkopf", "Schlitz", "Stahl verzinkt"),
    new Item("Mutter", "M6", "35", "Zylinderkopf", "Schlitz", "Stahl verzinkt"),

    new Item("Gewindeschneidschrauben", "M5", "12", "", "", ""),
];

console.log(Item);

window.onload = function () {

    var typArray = [];
    var diameterArray = [];
    var laengeArray = [];


    /*
    let arrayOfArrays = {};

    for (var y = 0; y < 10; y++) {
        let newArray = []; // Create a new array
        //newArray.push(i); // Add some elements to the new array
        arrayOfArrays[`itemArray${y}`] = newArray; // Store the new array with a unique key
    }
    console.log(arrayOfArrays);

*/


    // CREATING THE ITEMS
    for (var i = 0; i < itemList.length; i++) {

        if (!typArray.includes(itemList[i].typ)) {
            typArray.push(itemList[i].typ);
            var newOption = document.createElement("option");
            var optionNode = document.createTextNode(itemList[i].typ);
            newOption.appendChild(optionNode);
            document.getElementById("dropdownTyp").appendChild(newOption);
        }

        if (!diameterArray.includes(itemList[i].diameter)) {
            diameterArray.push(itemList[i].diameter);
            var newOption = document.createElement("option");
            var optionNode = document.createTextNode(itemList[i].diameter);
            newOption.appendChild(optionNode);
            document.getElementById("dropdownDiameter").appendChild(newOption);
        }

        if (!laengeArray.includes(itemList[i].laenge)) {
            laengeArray.push(itemList[i].laenge);
            var newOption = document.createElement("option");
            var optionNode = document.createTextNode(itemList[i].laenge);
            newOption.appendChild(optionNode);
            document.getElementById("dropdownLaenge").appendChild(newOption);
        }

        var row = document.createElement("div");
        row.classList.add("row");

        var typ = document.createElement("div");
        typ.classList.add("typ");

        var diameter = document.createElement("div");
        diameter.classList.add("diameter");

        var laenge = document.createElement("div");
        laenge.classList.add("laenge");

        var head = document.createElement("div");
        head.classList.add("head");

        var werkzeug = document.createElement("div");
        werkzeug.classList.add("tool");

        var material = document.createElement("div");
        material.classList.add("material");

        var position = document.createElement("div");
        position.classList.add("location");

        document.getElementById("post").appendChild(row);

        row.appendChild(typ);
        row.appendChild(diameter);
        row.appendChild(laenge);

        row.appendChild(head);
        row.appendChild(werkzeug);
        row.appendChild(material);
        row.appendChild(position);



        typ.innerHTML = itemList[i].typ;
        diameter.innerHTML = itemList[i].diameter;
        laenge.innerHTML = itemList[i].laenge;
        head.innerHTML = itemList[i].head;
        werkzeug.innerHTML = itemList[i].werkzeug;
        material.innerHTML = itemList[i].material;

        if (itemList[i].position == undefined) {
            console.log("undefined");
            position.innerHTML = "";
        } else {
            position.innerHTML = itemList[i].position;
        }
    }
}

document.getElementById('dropdownTyp').addEventListener('change', filterIt);
document.getElementById('dropdownDiameter').addEventListener('change', filterIt);
document.getElementById('dropdownLaenge').addEventListener('change', filterIt);


function filterIt() {
    // Das ausgewählte Element auswählen
    const ausgewählteOption = dropdownTyp.options[dropdownTyp.selectedIndex].text;
    const diameterOption = dropdownDiameter.options[dropdownDiameter.selectedIndex].text;
    const laengeOption = dropdownLaenge.options[dropdownLaenge.selectedIndex].text;

    // Die ausgewählte Option anzeigen
    //document.getElementById("ausgewählteOption").innerHTML = "Ausgewählte Option: " + //alert(ausgewählteOption);
    //document.querySelectorAll(".row")[i + 1].style.border = "solid 1px red";
    for (var i = 0; i < itemList.length; i++) {
        /****** SHOWS ALL ITEMS AFTER CHANGING dropdownTyp ********/

        /*if (ausgewählteOption != itemList[i].typ || diameterOption != itemList[i].diameter) {
            document.querySelectorAll(".row")[i + 1].style.display = "none";
        }*/

        document.querySelectorAll(".row")[i + 1].style.display = "flex";

        if (ausgewählteOption == "Alle") {} else if (ausgewählteOption != itemList[i].typ) {
            document.querySelectorAll(".row")[i + 1].style.display = "none";
        }

        if (diameterOption == "Alle") {} else if (diameterOption != itemList[i].diameter) {
            document.querySelectorAll(".row")[i + 1].style.display = "none";
        }

        if (laengeOption == "Alle") {} else if (laengeOption != itemList[i].laenge) {
            document.querySelectorAll(".row")[i + 1].style.display = "none";
        }
    }
}

/************** SETS ALL SELECTIONS TO 0 ****************/

function changeSelection() {
    for (var x = 0; x < document.querySelectorAll("select").length; x++) {
        document.querySelectorAll("select")[x].selectedIndex = 0;
    }

    for (var i = 0; i < itemList.length; i++) {
        document.querySelectorAll(".row")[i + 1].style.display = "flex";
    }
}

function createWordArray() {
    var inputText = document.getElementById("textField").value;
    var wordsArray = inputText.split(" ");
    console.log("Array of words:", wordsArray);
}

function textChangeFunc() {
    /** for (var i = 0; i < itemList.length; i++) {
        document.querySelectorAll(".row")[i + 1].style.backgroundColor = "white";
        if (textField.value != itemList[i].diameter) {
            document.querySelectorAll(".row")[i + 1].style.backgroundColor = "red";
        }
    } **/

    createWordArray();
    for (var i = 0; i < itemList.length; i++) {
        if (itemList[i].typ.toUpperCase().includes(textField.value.toUpperCase()) || itemList[i].diameter.toUpperCase().includes(textField.value.toUpperCase())) {
            document.querySelectorAll(".row")[i + 1].style.display = "flex";
        } else {
            document.querySelectorAll(".row")[i + 1].style.display = "none";
        }
    }
}