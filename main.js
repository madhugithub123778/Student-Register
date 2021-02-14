student_array=[];

function submit(){
var display= [];
for (var j=1;j<=4;j++){
var names= document.getElementById("name_of_the_student_"+j).value;
console.log(names);
student_array.push(names);}

console.log(names);
var lan= student_array.length;
console.log(lan);
for (var k=0;k<lan;k++){
display.push("<h4>Name: "+student_array[k]+"</h4>");
console.log(display)};

document.getElementById("display_name_with_commas").innerHTML=display;

var remove= display.join(" ");
console.log(remove);

document.getElementById("display_name_without_commas").innerHTML=remove;

document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
};

function sorting(){
student_array.sort();
console.log(student_array);

var display_sorting=[];

var lan= student_array.length;
console.log(lan);
for (var k=0;k<lan;k++){
    display_sorting.push("<h4>Name: "+student_array[k]+"</h4>");
    console.log(display_sorting)};
var remove= display_sorting.join(" ");
    console.log(remove);
    
    document.getElementById("display_name_without_commas").innerHTML=remove;};

    function update(){
document.getElementById("display_name_without_commas").innerHTML="<h1>"+student_array+"</h1>";



    };