import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import Table from "../../components/Table/Table";
import {getAllModes} from "../../store/actions";
import styles from './Home.module.scss'

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllModes());
    }, [])

    return <div className={styles.wrapper}>
        <Table/>
    </div>
}

export default Home;