'use client'

import axios from "axios";

if (typeof window !== 'undefined') {
    axios.defaults.headers["Authorization"]='Bearer ' + localStorage.getItem('token')

}