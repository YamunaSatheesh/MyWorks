function launchBrowser(browserName){
    if (browserName==="Chrome"){
    console.log("The given browser is Chrome")
    }
    else{
        console.log("the given browser is not chrome")
    }
}
    launchBrowser("Chrome")
    //launchBrowser("Safari")


function runTests(testType){
  switch(testType)  {
    case "Smoke":
        console.log("Performing Smoke Testing")
        break
    case "Sanity":
        console.log("Performing Sanity Testing") 
        break  
    case "Regression":
        console.log("Performing Regression Testing") 
        break  
    default:
        console.log("performing default Smoke testing")      
  }
}
  runTests("Regression")
  runTests("default")


