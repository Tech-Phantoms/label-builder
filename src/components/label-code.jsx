import React, { useState } from 'react';
import {
    ToggleButtonGroup,
    ToggleButton
} from '@mui/material';
import yaml from 'js-yaml';
import AceEditor from 'react-ace';

function LabelCode(props) {
    const [type, setType] = useState("json");
    const handleType = (event, newType) => {
        setType(newType);
    }

    const jsonString = JSON.stringify(props.code, null, '\t');
    const yamlString = yaml.dump(props.code);

    return <div>
        <div style={{ marginBottom: '4px' }}>
            <ToggleButtonGroup
                value={type}
                exclusive
                onChange={handleType}
            >
                <ToggleButton value="json">json</ToggleButton>
                <ToggleButton value="yaml">yaml</ToggleButton>
            </ToggleButtonGroup>
        </div>

        {props.code.length === 0 ? null : <AceEditor
            mode={type}
            value={(type === 'json' ? jsonString : yamlString)}
            fontSize={16}
            readOnly
        />}
    </div>
}

export default LabelCode;