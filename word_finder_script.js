var body_text = document.getElementById("body_text");
var form_input = document.getElementById("form_input");
var button = document.getElementById("btn");
var finder = document.getElementById("finder");
var result_text = document.getElementById("result_text");
var spit = [];
var spit_search = [];
var contains_words;
var search_words;
var replaced_words;
var join_search_words;
var error_msg;
var results_search;
button.addEventListener("click",function(){
    //this two variable are gonna pass on in the function
    search_words = finder.value;
    spit_search = search_words.split(" ");
    // console.log(spit_search);
    contains_words = body_text.value.trim().toLowerCase();
    var passed_on_value = operaton_fun(contains_words);
    result_text.innerHTML= passed_on_value;

   
});
function operaton_fun(contains_words){
    spit = contains_words.split(" ");
    spit_search.forEach(function(value){
        /*write a code to solve the problem about the first results is found but overide
         the varible with no found query id the word is not found use array and if conditions */
         
        results_search = spit.includes(value);
        if(results_search){
            var index_search = spit.indexOf(value);
            // var index_search2 = spit.lastIndexOf(search_words);
            //replace the search text with bold tags
            replaced_words = "<b>"+ value + "</b>"; 
            // console.log(index_search);
            spit[index_search] = replaced_words;
            // spit[index_search2] = replaced_words;
            join_search_words = spit.join(" ");
            // console.log(join_search_words);
         
        }else{
            error_msg = "the search word is not found "
    
        }
    
    });
    if(results_search){
        
        result_text.removeAttribute("class","colorErr");
        result_text.style.border="2px solid black";
        return join_search_words;
    }else{
        
        result_text.setAttribute("class","colorErr");
        result_text.style.border="2px solid red";
        return error_msg;

    }
   

}

