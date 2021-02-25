import React from 'react';
import {useSelector} from "react-redux";
import CellData from "../CellData/CellData";

const HoverData = () => {
    const { visitedCells } = useSelector(state => state.state);

    return <div>
        <h1>Hover Squares</h1>
        {visitedCells.map(cell => <CellData data={cell}/>)}
    </div>
}

export default HoverData;