"use strict";
/**
 * The `possibleStates` property define the states (in this case: colours)
 * in which the traffic light can be.
 * The `stateIndex` property indicates which of the possible states is current.
 */
const trafficLight = {
  possibleStates: ["green", "orange", "red"],
  stateIndex: 0,
};

let cycle = 0;

while (cycle < 2){
  const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
 
    console.log("The traffic light is on", currentState)

    if (currentState == "green"){
        trafficLight.stateIndex = trafficLight.possibleStates.indexOf("orange")

    } else if( currentState == "orange"){
        trafficLight.stateIndex = trafficLight.possibleStates.indexOf("red")

    }else if(currentState == "red"){
        trafficLight.stateIndex = trafficLight.possibleStates.indexOf("green")
            cycle += 1
    }
}

/**
 * The output should be:

The traffic light is on green
The traffic light is on orange
The traffic light is on red
The traffic light is on green
The traffic light is on orange
The traffic light is on red

*/
