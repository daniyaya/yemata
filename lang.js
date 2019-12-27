document.getElementById("hdr").innerHTML = "የማታ";

var amhJSON = '{"opt1": "አማርኛ", "reg":"ተመዝገብ", "sem": "ሙሉ ሰም", "phn": "ስልክ", "conf": "የይለፍ ቁጥሩን አስገባ", "cls": "ክፍል", "stng": "መቸት", "nxt": "ቀጣይ", "update": "አዘምን", 
"tq": "ተፈተን", "exam": "ፈተና", "save": "አስቀምጥ", "math": "ሂሳብ", "bio": "ባዮሎጂይ", "phy": "ፊዚክስ", "chm": "ኬምስትርይ", "geo": "ጂዮግራፊ", "eng": "እንግሊሽ", "his": "ታሪክ", "civic": "ስነ ዜጋ አና ስነምግባር", "sci": "አካባቢ ሳይንስ"}';
var oroJSON = '{"opt2": "Afaan Oromoo", "reg": "Galmaa\'i", "sem": "Maqaa guutuu", "phn": "Lakkoofsa bilbilaa", "conf": "Jecha darbii galchaa", "cls": "Kutaa", "stng": "Setting", "nxt": "Fuula Ittaanu", "update": "Update", "tq": "Qorami", "exam": "Qormaata", "save": "Kaayi", "math": "Herrega", "bio": "Baayoloojii", "phy": "Fiiziksii", "chm": "Keemistirii", "geo": "Ji\'ograafii", "eng": "Afaan Engilizii", "his": "Seenaa", "civic": "Barnoota Lammummaafi Amala Gaarii", "sci": "Saayinsii Naannoo"}';

var amhObj = JSON.parse(amhJSON);
var oroObj = JSON.parse(oroJSON);

let opt1 = document.getElementById("opt1");
let opt2 = document.getElementById("opt2");

let conf = document.getElementById("conf");
let sem = document.getElementById("sem");
let phn = document.getElementById("phn");
let reg = document.getElementById("reg");
let cls = document.getElementById("cls");
let stng = document.getElementById("stng");
let nxt = document.getElementById("nxt");
let update = document.getElementById("update");
let tq = document.getElementById("tq");
let exam = document.getElementById("exam");
let math = document.getElementById("math");
let bio = document.getElementById("bio");
let phy = document.getElementById("phy");
let chm = document.getElementById("chm");
let geo = document.getElementById("geo");
let eng = document.getElementById("eng");
let his = document.getElementById("his");
let civic = document.getElementById("civic");
let sci = document.getElementById("sci");
let save = document.getElementById("save");


if (opt1 !== null) {
    opt1.innerHTML = amhObj.opt1;
}
if (opt2 !== null) {
    opt2.innerHTML = oroObj.opt1;
}

var btn_name = event.target.name;


if (btn_name == "amh") {
    if (conf != null) {
        conf.placeholder = amhObj.conf;
    }
    if (sem !== null) {
        sem.placeholder = amhObj.sem;
    }
    if (phn !== null) {
        phn.placeholder = amhObj.phn;
    }
    // continue here with each UI component
}


if (btn_name == "oro") {
    if (conf != null) {
        conf.placeholder = amhObj.conf;
    }
    if (sem !== null) {
        sem.placeholder = amhObj.sem;
    }
    if (phn !== null) {
        phn.placeholder = amhObj.phn;
    }
    // continue here with each UI component
}