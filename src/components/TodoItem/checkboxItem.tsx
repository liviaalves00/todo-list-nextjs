import React from 'react';

interface CheckboxProps {
    done: boolean;
    setDone: (checked: boolean) => void;
}

function CheckboxItem({ done, setDone }: CheckboxProps) {

    const handleCheckboxChange = () => {
        setDone(!done);
    };

    return (
        <div>
            <input
                type="checkbox"
                checked={done}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-500"
            />
        </div>
    );
};

export default CheckboxItem;