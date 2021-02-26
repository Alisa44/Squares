import React, {useCallback, useRef} from 'react';
import {useSelector} from 'react-redux';
import styles from './TCell.module.scss';

const TCell = ({id}) => {
    const {visitedCells} = useSelector(state => state.state);
    const ref = useRef(null);

    const getClassName = useCallback(() => {
        if (ref?.current) {
            const cellIsVisited = visitedCells.find(item => item.row === ref.current.parentNode.id && +item.col === id);
            return cellIsVisited ? styles.blueCell : styles.cell;
        }
    }, [visitedCells, id]);

    return <td className={getClassName()} ref={ref} id={id}/>;
};
export default TCell;