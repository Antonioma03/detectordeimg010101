
  Webcam.attach('#camara');
  camara=document.getElementById("camara");
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
function tomarfoto(){

    Webcam.snap(function(data_uri){ 
        document.getElementById("resultado").innerHTML='<img id="selfie" src=" '+data_uri+' "/>';
    });
}
modelocreado=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/s1cJTRIqn/model.json',cargarmodelo);
function cargarmodelo(){
console.log('modelo cargado');
}
function identificar(){
    fototomada=document.getElementById('selfie');
    modelocreado.classify(fototomada,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results); 
        document.getElementById('objeto').innerHTML=results[0].label;
        document.getElementById('presision').innerHTML=results[0].confidence.toFixed(3);
    }
}