
$(function(){
        $(window).on("scroll",function(){
        var sc = $(window).scrollTop();
        if(sc > 500){
            $("#myButton").fadeIn(1000)
        }else{
            $("#myButton").fadeOut(1000)
        }
    })
    $("#myButton").click(function(){
        $("html,body").animate({scrollTop:0},1000,function(){
            $("#myButton").fadeOut(1000)
        })
    })
})

var myEmail = document.getElementById("email"),
    myfName = document.getElementById("fName"),
    myLName = document.getElementById("lName"),
    myAddress1 = document.getElementById("address"),
    myCity = document.getElementById("city"),
    mySelect = document.getElementById("select"),
    myZip = document.getElementById("zip"),
    myPhone = document.getElementById("phone"),
    myCheck1 = document.getElementById("check1"),
    myCheck2 = document.getElementById("check2"),
    myButton = document.getElementById("submit"),
    mycheckmark = document.getElementById("checkmark"),

    Emailerror = document.getElementById("Emailerror"),
    Fnameerror = document.getElementById("Fnameerror"),
    Lnameerror = document.getElementById("Lnameerror"),
    Addresserror = document.getElementById("Addresserror"),
    Cityerror = document.getElementById("Cityerror"),
    Ziperror = document.getElementById("Ziperror"),
    Phoneerror = document.getElementById("Phoneerror"),
    Checkerror = document.getElementById("Checkerror"),

    empt1 = document.forms["form1"]["email"].value,
    empt2 = document.forms["form1"]["fName"].value,
    empt3 = document.forms["form1"]["lName"].value,
    empt4 = document.forms["form1"]["address"].value,
    empt5 = document.forms["form1"]["city"].value,
    empt6 = document.forms["form1"]["select"].value,
    empt7 = document.forms["form1"]["zip"].value,
    empt8 = document.forms["form1"]["phone"].value;

myButton.onclick = function () {
    if (empt1 == "") {
        document.forms["form1"]["email"].style.backgroundColor = "#b4161636";
        mycheckmark.style.backgroundColor="#b4161636";
        Emailerror.style.display="block"

    }
    if (empt2 == "") {
        document.forms["form1"]["fName"].style.backgroundColor = "#b4161636";
        Fnameerror.style.display="inline"

    }
    if (empt3 == "") {
        document.forms["form1"]["lName"].style.backgroundColor = "#b4161636";
        Lnameerror.style.display="inline"

    }
    if (empt4 == "") {
        document.forms["form1"]["address"].style.backgroundColor = "#b4161636";
        Addresserror.style.display="block"

    }
    if (empt5 == "") {
        document.forms["form1"]["city"].style.backgroundColor = "#b4161636";
        Cityerror.style.display="block"

    }
    if (empt6 == "") {
        document.forms["form1"]["select"].style.backgroundColor = "#b4161636";
        myError.style.display="block"

    }
    if (empt7 == "") {
        document.forms["form1"]["zip"].style.backgroundColor = "#b4161636";
        Ziperror.style.display="block"

    }
    if (empt8 == "") {
        document.forms["form1"]["phone"].style.backgroundColor = "#b4161636";
        Phoneerror.style.display="block"

    }
}



