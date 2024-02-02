// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
const headquarters = 42;
if (headquarters < blocks){
    return blocks - headquarters
}
else (blocks < headquarters);{
    return headquarters - blocks
}
}

function distanceFromHqInFeet(pickup){
const feet = 264;
const block = distanceFromHqInBlocks(pickup)

return block * feet
}

function distanceTravelledInFeet(start, destination){
    if (start > destination){
        return(start - destination) * 264
    }
    else (start < destination);{
        return(destination - start) * 264
    }
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination)
    if ( distance <= 400){
    return 0;
    }
     else if (distance > 400 && distance <= 2000){
        return (distance - 400)*0.02
    }
     else if (distance > 2000 && distance <= 2500){
        return 25;
    }
     else if( distance > 2500){
        return ('cannot travel that far')
    }
}