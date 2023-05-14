
import React, { useState } from 'react';

const Upload = ({ onChange }) => {
    const [file, setFile] = useState(null);

    const handleChange = event => {
        setFile(URL.createObjectURL(event.target.files[0]));
        onChange(event); // Call the parent's onChange handler
    };

    return (
        <div>
            <input type="file" onChange={handleChange} />
            <img src={file} alt="preview" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
        </div>
    );
};

export default Upload;
