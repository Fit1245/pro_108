function start_classification()
{
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/VKPW4Po6N/model.json',model_loaded);
}
function model_loaded()
{
    classifier.classify(gotResults);
}
function gotResults(error,results)
{
if (error){
console.error(error);
}
else
{
  console.log(results);
  random_r = Math.floor(Math.random()*255)+1;
  random_b = Math.floor(Math.random()*255)+1;
  random_g = Math.floor(Math.random()*255)+1;

document.getElementById("result_label").innerHTML = 'I can hear - '+results[0].label;


document.getElementById("result_label").style.color = "rgb("+random_r+","+random_g+","+random_b+")";

img = document.getElementById("hear");


if(results[0].label == "Cat")
{
    img.src = "cat.jpg";
  
}
else if(results[0].label == "Dog")
{
    img.src = "download.png";
 
}
else if(results[0].label == "Sheep")
{
    img.src = "sheep.png";
    
}
else 
{
    img.src = "lion.jpg";
    
}
}}
