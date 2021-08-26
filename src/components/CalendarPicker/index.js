import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "react-datepicker/dist/react-datepicker.css";

const CalendarPicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <Form>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            <Button>Get</Button>
        </Form>
    );
}

export default CalendarPicker