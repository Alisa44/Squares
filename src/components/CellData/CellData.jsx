import React from 'react';
import styles from './CellData.module.scss';

const CellData = ({ data }) => {
    return <div className={styles.dataWrapper}>
        <span>row: {data.row}  col: {data.col}</span>
    </div>;
};

export default CellData;