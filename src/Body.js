import React, {useState} from "react";

function Body(){

  const[program, setPrg] = useState("");


  function handleClickMuscle(){

    alert("Back on Monday and Thursday, Chest on Tuesday and Friday, Legs on Wednesday and Saturday, rest Sunday.");
    alert("Do you have access to equipment?");
    var equipment = window.prompt("Enter yes or no: ").toLowerCase();
    var prg = "";
  
    if(equipment == "yes"){
      alert("What muscle groups do you want to grow? Your options are back and bicep, chest and tricep, legs, and abs.");
      var muscle = window.prompt("Enter your muscle group: ").toLowerCase();
  
      if(muscle == "back and bicep"){
          prg = "Lat pull down 3x12,\nChest supported row 3x12,\nLat pullovers 3x12,\nBicep curls 4x10,\nSingle arm bicep curls 4x10";
      }
      else if(muscle == "chest and tricep"){
        prg = "Bench press 3x12,\nIncline dumbell press 3x12,\nPec flys 3x12,\nDumbell tricep press up 4x10,\nRope tricep press downs 4x10";
      }
      else if(muscle == "legs"){
        prg = "Squat 3x12,\nDeadlift 3x12,\nLeg extensions 3x12,\nHamstring curls 4x10,\nCalf raises 4x10";
      }
      else if(muscle == "abs"){
        prg = "Situps 3x12,\nLeg raises 3x12,\nPlank 30s,\nAb roller 4x10";
      }
    }
    else if(equipment == "no"){
      alert("What muscle groups do you want to grow? Your options are back and bicep, chest and tricep, legs, and abs.");
      var muscle = window.prompt("Enter your muscle group: ");
  
      if(muscle == "back and bicep"){
        prg = "Pull ups 3x12,\nSupermans 3x12,\nPlank 3x12,\nDolphin Kicks 4x10,\nReverse snow angel 4x10";
      }
      else if(muscle == "chest and tricep"){
        prg = "Regular pushups 3x12,\nIncline pushups 3x12,\nWide grip pushups 3x12,\Close grip pushups 4x10,\nDips 4x10";
      }
      else if(muscle == "legs"){
        prg = "Bodyweight squat 3x12,\nBulgarian split squat 3x12,\nGlute bridges 3x12,\nHamstring curls 4x10,\nCalf raises 4x10";
      }
      else if(muscle == "abs"){
        prg = "Situps 3x12,\nLeg raises 3x12,\nPlank 30s,\nV-ups 4x10";
      }
    }
  
    // document.getElementById("program").innerHTML=prg;
    setPrg(prg); 
    console.log(prg);
    return prg;
  
  }

  function handleClickFat(){
    var inOrOut = window.prompt("Indoors or outdoors: ").toLowerCase();
    var prg = "";
    if(inOrOut == "indoors"){
        prg = "Daily: Burpees 3x12,\nFrog jumps 3x12,\nHigh knees 3x12,\nMountain climbers 3x12,\nJumping lunges 3x12";
    }
    else if(inOrOut == "outdoors"){
        prg = "Daily: Run 1 mile, or jump rope for 15 min, or bike for 5 miles";
    }

    // document.getElementById("program").innerHTML=prg;
    setPrg(prg);
    console.log(prg);
    return prg;

}

function handleClickRecomp(){
  alert("Back on Monday and Thursday, Chest on Tuesday and Friday, Legs on Wednesday and Saturday, rest Sunday.");
  alert("Do you have access to equipment?");
  var equipment = window.prompt("Enter yes or no: ").toLowerCase();
  var prg = "";

  if(equipment == "yes"){
    alert("What muscle groups do you want to grow? Your options are back and bicep, chest and tricep, legs, and abs.");
    var muscle = window.prompt("Enter your muscle group: ").toLowerCase();

    if(muscle == "back and bicep"){
        prg = "Lat pull down 3x12,\nChest supported row 3x12,\nLat pullovers 3x12,\nBicep curls 4x10,\nSingle arm bicep curls 4x10,\nTreadmill for 20 min";
    }
    else if(muscle == "chest and tricep"){
      prg = "Bench press 3x12,\nIncline dumbell press 3x12,\nPec flys 3x12,\nDumbell tricep press up 4x10,\nRope tricep press downs 4x10,\nTreadmill for 20 min";
    }
    else if(muscle == "legs"){
      prg = "Squat 3x12,\nDeadlift 3x12,\nLeg extensions 3x12,\nHamstring curls 4x10,\nCalf raises 4x10,\nTreadmill for 20 min";
    }
    else if(muscle == "abs"){
      prg = "Situps 3x12,\nLeg raises 3x12,\nPlank 30s,\nAb roller 4x10,\nTreadmill for 20 min";
    }
  }
  else if(equipment == "no"){
    alert("What muscle groups do you want to grow? Your options are back and bicep, chest and tricep, legs, and abs.");
    var muscle = window.prompt("Enter your muscle group: ");

    if(muscle == "back and bicep"){
      prg = "Pull ups 3x12,\nSupermans 3x12,\nPlank 3x12,\nDolphin Kicks 4x10,\nReverse snow angel 4x10,\nJump rope for 20 min";
    }
    else if(muscle == "chest and tricep"){
      prg = "Regular pushups 3x12,\nIncline pushups 3x12,\nWide grip pushups 3x12,\Close grip pushups 4x10,\nDips 4x10,\nJump rope for 20 min";
    }
    else if(muscle == "legs"){
      prg = "Bodyweight squat 3x12,\Bulgarian split squat 3x12,\nGlute bridges 3x12,\nHamstring curls 4x10,\nCalf raises 4x10,\nJump rope for 20 min";
    }
    else if(muscle == "abs"){
      prg = "Situps 3x12,\nLeg raises 3x12,\nPlank 30s,\nV-ups 4x10,\nJump rope for 20 min";
    }

    //document.getElementById("program").innerHTML=prg;  
    setPrg(prg);
    console.log(prg);
    return prg;
  }
}

    return(
        <div className='p-5' style={{backgroundColor:'#406882'}}>
        <h3>This is a website where you can input your goals and we will generate a workout program for you.</h3>
        <p>Fitness is essential for a healthy lifestyle, and whether your goal is to put on muscle, lose fat, or body recomposition, we've got a program for you!</p>
        
        <div className='p-5' style={{backgroundColor:'#6998AB'}}>

        <table cellspacing="10">
          <thead>
            <tr>
              <th><button type="button" class="btn btn-primary" onClick={handleClickMuscle}>Muscle Gain</button></th>
              <th><button type="button" class="btn btn-warning" onClick={handleClickFat}>Fat Loss</button></th>
              <th><button type="button" class="btn btn-success" onClick={handleClickRecomp}>Recomposition</button></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Best for individuals with low muscle mass</td>
              <td>Best for individuals with high bmi</td>
              <td>Best for individuals who are skinny fat</td>
            </tr>
            <tr>
              <td>Focus more on consistently lifting heavy, and increasing reps and weight over time</td>
              <td>Focus more on cardio but still include some strength training</td>
              <td>Do both cardio as well as weight training so that you build muscle as you lose fat</td>
            </tr>
            <tr>
              <td> </td>
              <td>Click here for a BMI calculator</td>
              <td> </td>
            </tr>
          </tbody>
        </table>
        Your program:
        <br/>
        {program}

        </div>
        
        
      </div>
    );

}

export default Body;