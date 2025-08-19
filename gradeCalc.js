function gradeCalc(score){
    let grade
    switch(true){
        case score>=90: 
        console.log("Grade is A")
        break
        case score>=80:
        console.log("Grade is B")
        break
        case score>=70:
        console.log("Grade is c") 
        break   
        case score>=60:
        console.log("Grade is D")
        break
        case score>=50:
        console.log("Grade is E")
        break
        case score<=40:
        console.log(Fail)    

    }

}
gradeCalc(58)