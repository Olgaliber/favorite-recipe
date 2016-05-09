$(document).ready(function() {
  console.log("Script included!");
  
//ingredients

    $('#checkbox_btn1').click(function() {
        console.log("checkbox_1")   
        var label = $('#li1');

        if ($('#checkbox_btn1').is(':checked')){
        	console.log("checked1")
        	label.css("text-decoration", "line-through");

        } else {
        	console.log("unchecked1")
        	label.css("text-decoration", "none");
        }
        });

    $('#checkbox_btn2').click(function() {
        console.log("checkbox_2")   
        var label = $('#li2');

        if ($('#checkbox_btn2').is(':checked')){
        	console.log("checked2")
        	label.css("text-decoration", "line-through");

        } else {
        	console.log("unchecked1")
        	label.css("text-decoration", "none");
        }
        });

    $('#checkbox_btn3').click(function() {
        console.log("checkbox_3")   
        var label = $('#li3');

        if ($('#checkbox_btn3').is(':checked')){
        	console.log("checked3")
        	label.css("text-decoration", "line-through");

        } else {
        	console.log("unchecked1")
        	label.css("text-decoration", "none");
        }
        });

    $('#checkbox_btn4').click(function() {
        console.log("checkbox_4")   
        var label = $('#li4');

        if ($('#checkbox_btn4').is(':checked')){
        	console.log("checked4")
        	label.css("text-decoration", "line-through");

        } else {
        	console.log("unchecked4")
        	label.css("text-decoration", "none");
        }
        });

    $('#checkbox_btn5').click(function() {
        console.log("checkbox_5")   
        var label = $('#li5');

        if ($('#checkbox_btn5').is(':checked')){
        	console.log("checked5")
        	label.css("text-decoration", "line-through");

        } else {
        	console.log("unchecked5")
        	label.css("text-decoration", "none");
        }
        });

    $('#checkbox_btn6').click(function() {
        console.log("checkbox_6")   
        var label = $('#li6');

        if ($('#checkbox_btn6').is(':checked')){
        	console.log("checked6")
        	label.css("text-decoration", "line-through");

        } else {
        	console.log("unchecked6")
        	label.css("text-decoration", "none");
        }
        });

    $('#checkbox_btn7').click(function() {
        console.log("checkbox_7")   
        var label = $('#li7');

        if ($('#checkbox_btn7').is(':checked')){
        	console.log("checked7")
        	label.css("text-decoration", "line-through");

        } else {
        	console.log("unchecked7")
        	label.css("text-decoration", "none");
        }
        });

    $('#checkbox_btn8').click(function() {
        console.log("checkbox_8")   
        var label = $('#li8');

        if ($('#checkbox_btn8').is(':checked')){
        	console.log("checked8")
        	label.css("text-decoration", "line-through");

        } else {
        	console.log("unchecked8")
        	label.css("text-decoration", "none");
        }
        });

    $('#checkbox_btn9').click(function() {
        console.log("checkbox_9")   
        var label = $('#li9');

        if ($('#checkbox_btn9').is(':checked')){
        	console.log("checked9")
        	label.css("text-decoration", "line-through");

        } else {
        	console.log("unchecked9")
        	label.css("text-decoration", "none");
        }
        });

    $('#checkbox_btn10').click(function() {
        console.log("checkbox_10")   
        var label = $('#li10');

        if ($('#checkbox_btn10').is(':checked')){
        	console.log("checked10")
        	label.css("text-decoration", "line-through");

        } else {
        	console.log("unchecked10")
        	label.css("text-decoration", "none");
        }
        });


//instructions 

  $('#checkbox_btn_ing1').click(function() {
        console.log("checkbox_1")   
        var label = $('#li_ing1');

        if ($('#checkbox_btn_ing1').is(':checked')){
            console.log("checked1")
            label.css("color", "#D0D0D0");

        } else {
            console.log("unchecked1")
            label.css("color","#AD6528");
        }
        });

$('#checkbox_btn_ing2').click(function() {
        console.log("checkbox_2")   
        var label = $('#li_ing2');

        if ($('#checkbox_btn_ing2').is(':checked')){
            console.log("checked2")
            label.css("color", "#D0D0D0");

        } else {
            console.log("unchecked2")
            label.css("color","#AD6528");
        }
        });

$('#checkbox_btn_ing3').click(function() {
        console.log("checkbox_3")   
        var label = $('#li_ing3');

        if ($('#checkbox_btn_ing3').is(':checked')){
            console.log("checked3")
            label.css("color", "#D0D0D0");

        } else {
            console.log("unchecked3")
            label.css("color","#AD6528");
        }
        });

});

// button 

var buttonState = true
function button() {
    console.log("button pressed")
    var picture1 = document.getElementById('picture1');
    var picture2 = document.getElementById('picture2');

    if (buttonState) { // when true
        document.getElementById("button").innerHTML = "Show all pics";
        picture1.style.opacity = "0";
        picture2.style.opacity = "0";
        buttonState = false
    } else { // when false
        picture1.style.opacity = "1";
        picture2.style.opacity = "1";
        buttonState = true
        document.getElementById("button").innerHTML = "Hide all pics";
    }
}



