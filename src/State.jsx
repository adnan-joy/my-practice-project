import React, { useState } from 'react';

function State(){
    const[count,setCount] = useState(0);
    const handleAdd=()=>{
        const newCount= count+1;
        setCount(newCount)
    }
    const counterStyle={
        border : '2px solid yellow'
    }

    const [runs, setRuns]=useState(0);
    const [fours,setFours]= useState(0);
    const [sixes, setSixes]= useState(0);

    const handleSingle=()=>{
        const updatedRuns= runs+1;
    setRuns(updatedRuns);
    }

    const handleFour=()=>{
        const updatedRuns= runs+4;
        const updatedFours=fours+1;
        setFours(updatedFours);
        setRuns(updatedRuns);
    }

    const handleSix =()=>{
        const updatedRuns6 = runs+6;
        const updatedSixes= sixes+1;
        setSixes(updatedSixes);
        setRuns(updatedRuns6);
    }

    return(
        <>
        <div className='student' style={counterStyle}>
            <h3> Count: {count}</h3>
            <button onClick={handleAdd}> Add </button>
        </div>

        <div>
            <h3>Player : Bangladehsi Batsman</h3>
            {
                runs>=50 && <p>CONGRATS!!!!You score: 50</p>
            }

            {
                runs>=100 && <p>CONGRATS!!! You have scored a Century...</p>
            }
            <h2>Score:{runs}</h2>
            <h4>FOURS:{fours}</h4>
            <h4>SIXES:{sixes}</h4>
            <button onClick={handleSingle}>Singles:</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
        </>
    )
}

export default State;