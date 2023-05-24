import React from 'react';

const CenteredButton = ({children}) => {
    return (
        <div style={{border:'1px solid black'}}>
            <button>{children}</button>
        </div>
    );
};

export default CenteredButton;