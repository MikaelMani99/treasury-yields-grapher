import React, { useState, useEffect} from "react";
import { useDispatch } from 'react-redux';
import DatePicker from "react-datepicker";
import { getYieldsDay } from '../../actions/yieldsDayAction';
import "react-datepicker/dist/react-datepicker.css";

const CalendarPicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    const dispatch = useDispatch()
    useEffect(() => { 
        const today = (startDate).toISOString().split('T')[0];
        dispatch(getYieldsDay(today))
    }, [startDate]);

    return (
        <form className="flex">
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="text-center text-2xl selected:bg-green-700"/>
        </form>
    );
}

export default CalendarPicker