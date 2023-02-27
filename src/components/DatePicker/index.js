import React, {useState} from "react";
import "./date.css";
import Datepicker from "react-tailwindcss-datepicker";

const DatePicker = () => {
    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    });
    
    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    }
    
    return (
        <div>
            <Datepicker
                classNames="pick"
                toggleClassName="bg-white rounded-sm"
                containerClassName="pick bg-transparent rounded-xl"
                primaryColor={"white"}
                inputClassName="pick text-black focus:text-black font-roboto font-bold tracking-wide bg-white rounded-sm"
                placeholder={"Choose your Date!"}
                asSingle={true}
                value={value}
                onChange={handleValueChange}
                readOnly={true}
                
            />
            <input
                className="invisible"
                name="date"
                value={value.startDate}/>
        </div>
    );
};

export default DatePicker;