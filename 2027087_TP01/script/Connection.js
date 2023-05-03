alert("Intégration de javascript")
function validerFormulaire(){
var u = document.getElementById("Username")
var p = document.getElementById("Password")
var p2 = document.getElementById("Password2")
var A = document.getElementById("Adresse")
var AE = document.getElementById("AdresseE")
var TEL = document.getElementById("Telephone")
var DA = document.getElementById("Date")



//Nom d'utilisateur JS
if(u.value==""){
    alert("Vous n'avez pas rentrez votre nom d'utilisateur!!!")
    u.focus();
    return false;
}

//MDP JS
if(p.value==""){
    alert("Vous n'avez pas rentrez de mot de passe!!!")
    p.focus();
    return false;
}
//MDP2 JS
if(p2.value!=p.value){
    alert("Vous n'avez pas rentrez le même mdp!!!")
    p2.focus();
    return false;
}
//Adresse JS
if(A.value==""){
    alert("Vous n'avez pas rentrez Votre Adresse!!!")
    A.focus();
    return false;
}
if(A.value.indexOf("0") >= 0){
    alert("Adresse invalide!!!")
    A.focus();
    return false;
}
//AdresseE JS
if(AE.value==""){
    alert("Vous n'avez pas rentrez Votre Adresse Electronique!!!")
    AE.focus();
    return false;
}

if(AE.value.indexOf(".") < 0){
    alert("Mettez une adresse email valide.")
    AE.focus();
    return false;
}

if(AE.value.indexOf("@") < 0){
    alert("Mettez une adresse email valide.")
    AE.focus();
    return false;
}
//Telephone JS
if(TEL.value==""){
    alert("Vous n'avez pas rentrez Votre Telephone!!!")
    TEL.focus();
    return false;
}
if(TEL.value.indexOf("+1")<0){
    alert("Vous n'avez pas rentrez Votre Telephone!!!")
    TEL.focus();
    return false;
}
if((TEL.value.indexOf("514")<0)&&(TEL.value.indexOf("450")<0)&&(TEL.value.indexOf("438")<0)){
    alert("Vous n'avez pas rentrez un numéro d'Amérique du Nord!!!")
    TEL.focus();
    return false;
}
//DA JS
if(DA.value==""){
    alert("Vous n'avez pas rentrez la date!!!")
    DA.focus();
    return false;
}
//.selectedIndex

//Connexion JS
alert("Saved in server!!")
return true;
}
//Erreur en rouge = changement de css
function ErrorTextColor(){
    var a=document.getElementById("h2");
    a.className="styleError";
    a.style.backgroundColor="rgb(238, 91, 91)";
    a.style.color="white";

    var UE=document.getElementById("UError");
    UE.className="styleError";
    UE.style.color="red";

    var AE=document.getElementById("AError");
    AE.className="styleError";
    AE.style.color="red";

    var AEE=document.getElementById("AEError");
    AEE.className="styleError";
    AEE.style.color="red";

    var ME=document.getElementById("MError");
    ME.className="styleError";
    ME.style.color="red";

    var ME=document.getElementById("MError2");
    ME.className="styleError";
    ME.style.color="red";

    var TE=document.getElementById("TError");
    TE.className="styleError";
    TE.style.color="red";

    var TE=document.getElementById("DError");
    TE.className="styleError";
    TE.style.color="red";
}
var x=document.getElementById("BTNN");
x.addEventListener("MouseOver", MouseOver);
x.addEventListener("MouseOut", MouseOut);

function MouseOver(){
    BTNN.style.backgroundColor="hwb(197 15% 59%)"
}
function MouseOut(){
    BTNN.style.backgroundColor="hwb(95 15% 59%)";
}

//Password confirm message on click
var z = document.getElementById("Password2");
z.addEventListener("click", Click);

function Click(){
    alert("Il faut que vous soyez sure de rentrez le même mot de passe!!!")
}
//Password Double clic message
var y = document.getElementById("Password");
y.addEventListener("dblclick", DBClick);

function DBClick(){
    alert("Vous appuyez trop!!!")
}
//Password mouse down message
var y = document.getElementById("Date");
y.addEventListener("mousedown", MDown);

function MDown(){
    alert("La sourie en bas!!!")
}
//Password mouse down message
var y = document.getElementById("Telephone");
y.addEventListener("mouseup", MUp);

function MUp(){
    alert("La sourie en haut!!!")
}