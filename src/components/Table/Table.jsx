import React, {useState, useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from './Table.module.scss';
import {setVisitedCells} from "../../store/actions";
import TCell from "../TCell/TCell";

const Table = () => {
    const {modes, currentMode, visitedCells, start} = useSelector(state => state.state);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(5);

    useEffect(() => {
        if (currentMode) {
            const field = modes[currentMode].field;
            setAmount(field);
        }
    }, [modes, currentMode]);

    const onMouseOver = e => {
        if (start) {
            const row = e.nativeEvent.path[1].id;
            const col = e.nativeEvent.path[0].id;
            const newCell = {row, col, id: `${row}-${col}`};
            const newCellWasVisited = visitedCells.find(item => item.id === newCell.id);

            const updatedCells = newCellWasVisited
                ? visitedCells.filter(item => item.id !== newCell.id)
                : [...visitedCells, newCell]
            dispatch(setVisitedCells(updatedCells));
        }
    }

    const getTable = useCallback((amount) => {
        const cells = [];
        const rows = [];

        for (let i = 1; i <= amount; i++) {
            cells.push(<TCell id={i} key={i}/>)
        }
        for (let i = 1; i <= amount; i++) {
            rows.push(<tr key={i} id={i}>{cells}</tr>)
        }
        return <tbody>{rows}</tbody>;
    }, []);

    return <div className={styles.wrapper}>
        <table className={styles.table} onMouseOver={onMouseOver}>
            {getTable(amount)}
        </table>
    </div>
}

export default Table;