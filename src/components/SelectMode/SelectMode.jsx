import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Select from '../Select/Select';
import Button from '../Button/Button';
import {setCurrentMode, setFieldsAmount, setStart, setVisitedCells} from '../../store/actions';
import styles from './SelectMode.module.scss';

const SelectMode = () => {
    const {modes, currentMode} = useSelector(state => state.state);
    const dispatch = useDispatch();
    const options = Object.keys(modes);

    const onSelectChange = useCallback(e => {
        if (e.target.value === 'default') return false;
        const mode = modes[e.target.value];
        if (mode?.field) dispatch(setFieldsAmount(mode.field));
        dispatch(setCurrentMode(e.target.value));
    }, [dispatch, modes]);

    const onStart = () => {
        dispatch(setVisitedCells([]));
        dispatch(setStart(true));
    };

    return <div className={styles.wrapper}>
        <Select value={currentMode} onChange={onSelectChange} options={options}/>
        <Button text={'start'} onClick={onStart}/>
    </div>;
};

export default SelectMode;