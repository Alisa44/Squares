import React from 'react';
import {useSelector} from 'react-redux';
import CellData from '../CellData/CellData';
import styles from './HoverData.module.scss';

const HoverData = () => {
    const { visitedCells } = useSelector(state => state.state);

    return <div className={styles.wrapper}>
        <h1>Hover Squares</h1>
        {visitedCells.map(cell => <CellData key={cell.id} data={cell}/>)}
    </div>;
};

export default HoverData;