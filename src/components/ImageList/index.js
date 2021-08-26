import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getImages } from '../../actions/imagesActions'
// import Image from 'react-bootstrap/Image';

const CalendarPicker = () => {
    const dispatch = useDispatch()
    const images = useSelector(({ images }) => images)
    const [imageState, setImageState] = useState([])

    // initial load
    useEffect(() => {
        dispatch(getImages())
    })
    // everytime images changes
    useEffect(() => {
        setImageState(images)
    }, [images])

    return (
        <h1>Halló</h1>
    );
}

export default CalendarPicker