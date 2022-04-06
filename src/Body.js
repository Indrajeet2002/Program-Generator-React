function Body(){

    return(
        <div className='Body'>
        <h3>This is a website where you can input your goals and we will generate a workout program for you.</h3>
        <p>Fitness is essential for a healthy lifestyle, and whether your goal is to put on muscle, lose fat, or body recomposition, we've got a program for you!</p>
        <table cellspacing="10">
          <thead>
            <tr>
              <th><button>Muscle Gain</button></th>
              <th><button>Fat Loss</button></th>
              <th><button>Recomposition</button></th>
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
      </div>
    );

}

export default Body;