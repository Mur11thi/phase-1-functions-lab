// Code your solution in this file
function distanceFromHqInBlocks(pickupLocation){
if (pickupLocation > 42 )    {
    return( pickupLocation-42)
}

else if (pickupLocation < 42 ) {
    return( 42 - pickupLocation)
}


}
distanceFromHqInBlocks(43,50,34)

function distanceFromHqInFeet(distanceFromHqInBlocks){
    if( distanceFromHqInBlocks > 42){
    return (distanceFromHqInBlocks-42)*264
    }
    else if(distanceFromHqInBlocks < 42){
        return(42 - distanceFromHqInBlocks)*264
    }
    

}
distanceFromHqInFeet(43,50,34)

function distanceTravelledInFeet(start,destination){
    if( destination > start){
        return(destination*264 - start*264)
    }
    else if( destination < start){
        return(start*264 - destination*264)
    }
}
function calculatesFarePrice(start,destination){
    let distance = distanceTravelledInFeet(start,destination)
    if(distance < 400){
        return (0)
    }
    else if(distance > 400 && distance <= 2000){
        return (distance-400)*0.02
    }
    else if(distance > 2000 && distance <= 2500){
        return (25)
    }else {
        return ('cannot travel that far')
    }
}
