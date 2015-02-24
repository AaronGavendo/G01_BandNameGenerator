$(document).ready(function () //Function to run when website is loaded
{
    var word1 = "Your";
    var word2 = "New";
    var word3 = "Band Name";
    
    
    
    
    
    $("#Generate").click(function () //For testing
    {
        document.getElementById("outputText").innerHTML = word1 + " " + word2 + " " + word3;
    });


});