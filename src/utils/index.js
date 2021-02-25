import axios from 'axios';
import {getModesApi} from "../constants/api";

export const getModes = () => axios.get(getModesApi);