   //feetToMile

function feetToMile(feet) {
   var mile = feet / 5280;
     return mile;
 }

//    //woodCalculator

 function woodCalculator (chair , table , bad){
     var chairCount = chair * 1;
     var tableCount = table * 3;
     var badCount = bad * 5;
     var totalCount = chairCount + tableCount + badCount;
     return totalCount;
 }


//brickeCalculator

function brickeCalculator(floor){
    var farFloorBrick  =  15000;
    var afterTenFarFloorBrick =  12000;
    var afterTwentyFarFloorBrick = 10000;
    
   if(floor<= 10){
       var fristTenFloorBicks = floor * farFloorBrick ;
       return(fristTenFloorBicks);
   }    
   else if(11<= floor && floor <= 20 ){
       var extraFloor = floor - 10;
       var afterTenFloorCount = extraFloor * afterTenFarFloorBrick;
       return(afterTenFloorCount + 150000);
   }
   else if(floor>20){
       var secondExtraFloor = floor - 20;
       var afterTwentyFloorCount = secondExtraFloor * afterTwentyFarFloorBrick;
       return(afterTwentyFloorCount+ 270000);
   }
   else{
    return ("Your Calculator is not working")
   }
}

//tinyFriend

function tinyFriend(names){
    var smallName = names[0];
    for(var i = 0 ; i < names.length; i++){
        var currentName = names[i];
        if(currentName.length < smallName.length){
            smallName = currentName;
        }
    }
    return smallName;
}