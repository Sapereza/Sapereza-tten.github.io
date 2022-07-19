function bold(){
    document.getElementById("textarea").style.fontWeight = "bold";
}

function italic(){
    document.getElementById("textarea").style.fontStyle = "italic";
}

function left(){
    document.getElementById("textarea").style.textAlign = "left";

}

function aright(){
    document.getElementById("textarea").style.textAlign = "right";

}

function center(){
    document.getElementById("textarea").style.textAlign = "center";

}

function uppercase(){
    document.getElementById("textarea").style.textTransform = "uppercase";


}
function lowercase(){
    document.getElementById("textarea").style.textTransform = "lowercase";

}
function capitalize(){
    document.getElementById("textarea").style.textTransform = "capitalize";


}
function cleanScreen(){
    document.getElementById("textarea").value="";
    document.getElementById("textarea").style.fontWeight = "normal";
    document.getElementById("textarea").style.textAlign = "left";
    document.getElementById("textarea").style.fontStyle = "normal";
    document.getElementById("textarea").style.textTransform = "none"

}