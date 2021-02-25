import React, {useCallback, useRef} from 'react';
import styles from './TCell.module.scss';
import {useSelector} from "react-redux";

const TCell = ({id}) => {
    const ref = useRef(null);
    const {visitedCells} = useSelector(state => state.state);

    const getClassName = useCallback(() => {
        if (ref?.current) {
            const cellIsVisited = visitedCells.find(item => item.row === ref.current.parentNode.id && +item.col === id);
            return cellIsVisited ? styles.blueCell : styles.cell
        }
    }, [ref.current, visitedCells])

    return <td className={getClassName()} ref={ref} id={id}/>
}
export default TCell;