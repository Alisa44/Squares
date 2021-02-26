import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import Table from '../../components/Table/Table';
import SelectMode from '../../components/SelectMode/SelectMode';
import HoverData from '../../components/HoverData/HoverData';
import {getAllModes} from '../../store/actions';
import styles from './Home.module.scss';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllModes());
    }, [dispatch]);

    return <div className={styles.wrapper}>
        <div className={styles.tableWrapper}>
            <SelectMode/>
            <Table/>
        </div>
        <HoverData/>
    </div>;
};

export default Home;