import React from 'react';
import './OnlineSpendingConfirmationButton.css';

const OnlineSpendingConfirmationButton = ({ onClick }) => {
    const handleConfirmClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <div className="confirmation-button-wrapper">
            <button className="confirmation-button" onClick={handleConfirmClick}>
                <span>Trimite Date</span>
            </button>
        </div>
    );
};

export default OnlineSpendingConfirmationButton;
