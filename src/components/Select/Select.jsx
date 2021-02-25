import React from 'react';
import {MODES} from "../../constants/text";
import styles from './Select.module.scss';

const Select = ({value, onChange, options}) => {
    const getOptions = () => {
        const selectOptions = options.map(item => <option value={item} selected={value === item}>{MODES[item]}</option>)
        selectOptions.unshift(<option value='pick' selected disabled>Pick mode</option>);
        return selectOptions;
    }

    return <select value={value}
                   onChange={onChange}
                   className={styles.select}>
        {getOptions()}
    </select>
}

export default Select;