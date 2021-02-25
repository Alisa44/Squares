import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from './SelectMode.module.scss';
import Select from "../Select/Select";
import Button from "../Button/Button";
import {setCurrentMode, setStart, setVisitedCells} from "../../store/actions";

const SelectMode = () => {
    const { modes, currentMode } = useSelector(state => state.state);
    const dispatch = useDispatch();
    const options = Object.keys(modes);

    const onSelectChange = e => {
        dispatch(setCurrentMode(e.target.value));
    }

    const onStart = () => {
        dispatch(setVisitedCells([]));
        dispatch(setStart(true))
    }

    return <div className={styles.wrapper}>
        <Select value={currentMode} onChange={onSelectChange} options={options}/>
        <Button text={'start'} onClick={onStart}/>
    </div>
}

export default SelectMode;