import React, { useState } from 'react';
import './ModeToggle.css';

function ModeToggle({ width = '80%', height = '50vh', title = "Theme Switcher" }) {

    const [mode, setMode] = useState('light');

    const handleModeChange = (selectedMode) => {
        setMode(selectedMode);
    };


    const getStyles = () => {
        switch (mode) {
            case 'dark':
                return {
                    backgroundColor: '#1a1a1a',
                    color: '#f0f0f0',
                    borderColor: '#444'
                };
            case 'night':
                return {
                    backgroundColor: '#0a192f',
                    color: '#64ffda',
                    borderColor: '#172a45'
                };
            case 'deepDark':
                return {
                    backgroundColor: '#000000',
                    color: '#ffffff',
                    borderColor: '#222'
                };
            case 'light':
            default:
                return {
                    backgroundColor: '#ffffff',
                    color: '#333333',
                    borderColor: '#dedbdb'
                };
        }
    };

    const currentStyles = getStyles();

    return (
        <div
            className="mode-container"
            style={{
                width: width,
                minHeight: height,
                backgroundColor: currentStyles.backgroundColor,
                color: currentStyles.color,
                borderColor: currentStyles.borderColor
            }}
        >
            <h2 className="mode-title">{title}</h2>
            <p className="mode-description">
                Currently displaying <strong>{mode}</strong> mode.
            </p>

            <div className="mode-buttons">
                <button
                    className={`mode-btn ${mode === 'light' ? 'active' : ''}`}
                    onClick={() => handleModeChange('light')}
                >
                    Day Time (Light)
                </button>
                <button
                    className={`mode-btn ${mode === 'dark' ? 'active dark-btn' : 'dark-btn'}`}
                    onClick={() => handleModeChange('dark')}
                >
                    Normal Dark
                </button>
                <button
                    className={`mode-btn ${mode === 'night' ? 'active night-btn' : 'night-btn'}`}
                    onClick={() => handleModeChange('night')}
                >
                    Night Time (Blue Dark)
                </button>
                <button
                    className={`mode-btn ${mode === 'deepDark' ? 'active deep-btn' : 'deep-btn'}`}
                    onClick={() => handleModeChange('deepDark')}
                >
                    Deep Dark
                </button>
            </div>
        </div>
    );
}

export default ModeToggle;
