import React, {useState} from "react";

function Calculator(){
    const[Name, setName] = useState("");
    function HandleChange(event){
        setName(event.target.value);
    }
    function HandleSubmit(event){
        event.preventDefault();
    }
    return(
        <div>
            BMI calculator.
            <form onSubmit= {HandleSubmit}>
                <label>
                Name:
                <input type="text" value={this.state.value} onChange={HandleChange} />
                    </label>
                <input type="submit" value="Submit" />
            </form>
            {Name}
        </div>

    );
    
}

export default Calculator;