const logowanie = document.getElementById("logowanie");
const zalogowano = document.getElementById("zalogowany");
const niezalogowano = document.getElementById("niezalogowany");


function logowanieFun() {
    let haslo = document.getElementById("passwordID").value;
    let login = document.getElementById("loginID").value;
    console.log("Button clicked");
    console.log("wpisany login " + login);
    console.log("wpisane hasło " + haslo);
    switch(login) {
        case `Kajpro1315` : //login
                if (haslo == "Kajpro12315") { //hasło
                    console.log("Prawidłowa zalogowano");
                    location.href="1285694.html";
                }
                else if (haslo == "") {
                    break;
                }
                else {
                    console.log("Niezalogowano");
                    location.href = "niezalogowano.html";
                  
                  document.title = "Nie zalogowano";
                }
            break;
        
        case `` :
            break;

        default:
            if (haslo == "Kajpro12315") { //hasło
                console.log("Niezalogowano, login error");
               
                console.log("Niezalogowano");
                location.href = "niezalogowano.html";
                  
                  document.title = "Nie zalogowano";
            }
            else {
                console.log("Niezalogowano, login error");
               
                console.log("Niezalogowano");
                location.href = "niezalogowano.html";

                  
                  document.title = "Nie zalogowano";
            };
            break;
   };
};

// refresh

function refresh() {
    location.href="index.html";
    console.log("Odświeżono");

    document.title = "Logowanie";

    document.getElementById("passwordID").value = "";
    document.getElementById("loginID").value = "";

};


// Logowanie enter

// document.querySelector('#txtSearch').addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//       // code for enter
//     }
// });



document.getElementById("bodyLog").addEventListener("keydown", (e) => {
     if (`${e.code}` === "Enter") {
        logowanieFun();
    } else {
        return;
    };
});

// document.getElementById("bodyLog").addEventListener("keydown", function test(e) {
//         if (`${e.code}` === "Enter") {
//             logowanieFun();
//         } else {
//             return;
//         };
//         console.log("klick1");
// });

// nielogowanie enter

document.getElementById("bodyNie").addEventListener("keydown", (e) => {
    if (`${e.code}` === "Enter") {
        refresh();
        console.log("klick");
    };
});

// document.getElementById("bodyNie").addEventListener("keydown", function(e) {
//         if (`${e.code}` === "Enter") {
//             refresh();
//         };
//         console.log("klick");
// });







// hide/show password

function showPassword() {
    const PasswordInput = document.getElementById("passwordID");
    if (PasswordInput.type === "password") {
        PasswordInput.type = "text";
    }
    else {
        PasswordInput.type = "password";
    };
};

//Notatnik

function zapisFun() {
    const text1 = document.getElementById('textarea1').value;
    const text2 = document.getElementById('textarea2').value;
    localStorage.setItem('text1', text1);
    localStorage.setItem('text2', text2);
};

function wczytyFun() {
    const Localtext1 = localStorage.getItem('text1');
    const Localtext2 = localStorage.getItem('text2');
    if (Localtext1) {
        document.getElementById('textarea1').value = Localtext1;
    }
    if (Localtext2) {
        document.getElementById('textarea2').value = Localtext2;
    }
    console.log("wczytano");
};



//Color - picker
  


function colorPick1() {
  const Label1 = document.getElementById('Color1Label');
  let Color1 = document.getElementById('colorPickerID1').value;
  
  Label1.textContent = Color1;
};

function colorPick2() {
  const Label2 = document.getElementById('Color2Label');
  let Color2 = document.getElementById('colorPickerID2').value;
  
 Label2.textContent = Color2;
};

const copy0 = document.getElementById("copy1");
const copy1 = document.getElementById("copy2");


function color1() {
  let Color0 = document.getElementById('colorPickerID1').value;  
  navigator.clipboard.writeText(Color0);
};


function color2() {
  let Color1 = document.getElementById('colorPickerID2').value;  
  navigator.clipboard.writeText(Color1);
};