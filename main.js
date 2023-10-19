Webcam.set({
    width:350,
    height:350,
    image_format:"png",
    png_quality:10
})

camera = document.getElementById("camera")

Webcam.attach('#camera')

function takesnapshot(){

    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= "<img id='kidnaptheimage' src='"+ data_uri +"'/>"
    })

}



console.log(ml5.version)


classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/UCuZQPr5J/model.json",modelLoaded)

function modelLoaded(){

    console.log("model Loaded")

}

function identifyimage(){
    
    img=document.getElementById("kidnaptheimage")
    classifier.classify(img, gotResult)

}

function gotResult(error,results){
    
    if (error){
        console.error(error)
    }

    else{
        console.log(results)
        document.getElementById("resultobjectname").innerHTML = results[0].label
        document.getElementById("resultobjectaccuracy").innerHTML = results[0].confidence.toFixed(3)*100 + '%'
    }


 

}