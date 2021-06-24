// intermediate1
    (function(argument) {  
    var first_letter = argument.charAt(0);
    first_letter = first_letter.toUpperCase();
    argument = argument.substring(1);
    var output = first_letter + argument;
    return  document.write(output);
   })('i am a web developer' );


