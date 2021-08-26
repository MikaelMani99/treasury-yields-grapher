import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getYieldsDay } from '../../actions/yieldsDayAction'
import CalendarPicker from '../../components/CalendarPicker';
import Container from '../../components/Container';
import YieldDayGrapher from '../../components/YieldDayGrapher';

const Yieldsday = () => {
    const dispatch = useDispatch()
    const yieldsDay = useSelector(({ yieldsDay }) => yieldsDay)
    const [yieldsDayState, setYieldsDayState] = useState({})

    // initial load
    useEffect(() => {
        dispatch(getYieldsDay())
    }, [dispatch])
    // everytime yieldsDay changes
    useEffect(() => {
        setYieldsDayState(yieldsDay)
    }, [yieldsDay])

    return (
        <Container>
            <CalendarPicker />
            <YieldDayGrapher data={ yieldsDayState } />
        </Container>
    );
}

export default Yieldsday