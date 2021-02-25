import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import Table from "../../components/Table/Table";
import {getAllModes} from "../../store/actions";
import styles from './Home.module.scss'
import SelectMode from "../../components/SelectMode/SelectMode";
import HoverData from "../../components/HoverData/HoverData";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllModes());
    }, [])

    return <div className={styles.wrapper}>
        <div>
            <SelectMode/>
            <Table/>
        </div>
        <HoverData/>
    </div>
}

export default Home;