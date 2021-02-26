import React, {useState, useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import TCell from '../TCell/TCell';
import {setVisitedCells} from '../../store/actions';
import styles from './Table.module.scss';

const Table = () => {
    const {visitedCells, start, fieldsAmount} = useSelector(state => state.state);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        if (fieldsAmount) setAmount(fieldsAmount);
    }, [fieldsAmount]);

    const onMouseOver = useCallback(e => {
        if (start) {
            const row = e.nativeEvent.path[1].id;
            const col = e.nativeEvent.path[0].id;
            if (row && col) {
                const newCell = {row, col, id: `${row}-${col}`};
                const newCellWasVisited = visitedCells.find(item => item.id === newCell.id);

                const updatedCells = newCellWasVisited
                    ? visitedCells.filter(item => item.id !== newCell.id)
                    : [...visitedCells, newCell];
                dispatch(setVisitedCells(updatedCells));
            }
        }
    }, [start, visitedCells, dispatch]);

    const getTable = (amount) => {
        const cells = [];
        const rows = [];

        for (let i = 1; i <= amount; i++) {
            cells.push(<TCell id={i} key={i}/>);
        }
        for (let i = 1; i <= amount; i++) {
            rows.push(<tr key={i} id={i}>{cells}</tr>);
        }
        return <table className={styles.table} onMouseOver={onMouseOver}>
            <tbody>{rows}</tbody>
        </table>;
    };

    return <div className={styles.wrapper}>
        {getTable(fieldsAmount || amount)}
    </div>;
};

export default Table;