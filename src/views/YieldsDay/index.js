import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getYieldsDay } from '../../actions/yieldsDayAction'
import CalendarPicker from '../../components/CalendarPicker';
import Container from '../../components/Container';
import YieldDayGrapher from '../../components/YieldDayGrapher';

const Yieldsday = () => {
    const dispatch = useDispatch()
    const yieldsDay = useSelector(({ yieldsDay }) => yieldsDay)
    const [yieldsDayState, setYieldsDayState] = useState([])

    // initial load
    useEffect(() => {
        dispatch(getYieldsDay("2021-06-01"))
    }, [dispatch])
    // everytime yieldsDay changes
    useEffect(() => {
        setYieldsDayState([...yieldsDayState, yieldsDay])
    }, [yieldsDay])

    return (
        <Container className="flex flex-col items-center">
            <CalendarPicker />
            { yieldsDayState.length && <YieldDayGrapher days={ yieldsDayState } /> }
        </Container>
    );
}

export default Yieldsday