import React, {useState} from 'react';
import {
    ToggleButtonGroup,
    ToggleButton
} from '@mui/material';

function LabelCode(props) {
    const [type, setType] = useState("json");
    const handleType = (event, newType) => {
        setType(newType);
    }
    return <div>
        <div>
            <ToggleButtonGroup
            value={type}
            exclusive
            onChange={handleType}
            >
                <ToggleButton value="json">json</ToggleButton>
                <ToggleButton value="yaml">yaml</ToggleButton>
            </ToggleButtonGroup>
        </div>
        <code>{props.code}</code>
    </div>
}

export default LabelCode;