import React from "react";


const BandList = props => {
    return (
    <div className= "bandList"> 
    {props.bandList.map (item => {
        return (
            <div className= "submission" key={item.id}>
                <h2>{item.bandname}</h2>
                <p>{item.origin}</p>
                <p>{item.genre}</p>
                <p>{item.note}</p>
            </div>
        );
    })}
    </div>
    );
};
export default BandList;