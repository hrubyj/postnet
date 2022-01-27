import React from 'react';
import zxcvbn from 'zxcvbn';
import {Typography} from "antd";

const PasswordStrengthBar = ({ password }) => {
    const pswStrength = zxcvbn(password);
    const num = pswStrength.score * 100/4;

    const createPassLabel = () => {
        switch(pswStrength.score) {
            case 0:
                return 'Velmi slabé';
            case 1:
                return 'Slabé';
            case 2:
                return 'Dobré';
            case 3:
                return 'Silné';
            case 4:
                return 'Velmi silné';
            default:
                return '';
        }
    }

    const funcProgressColor = () => {
        switch(pswStrength.score) {
            case 0:
                return '#828282';
            case 1:
                return '#EA1111';
            case 2:
                return '#FFAD00';
            case 3:
                return '#9bc158';
            case 4:
                return '#00b500';
            default:
                return 'none';
        }
    }

    const changeBarStyle = () => ({
        width: `${num}%`,
        background: funcProgressColor(),
        height: '5px',
        marginTop: 5,
        marginBottom: 0,
        borderRadius: 10
    })

    return (
        <>
            <div className="progress" style={{ height: '5px', backgroundColor: 'rgb(255, 255, 255)', borderRadius: 10, marginBottom: 0}}>
                <div className="progress-bar" style={changeBarStyle()}/>
            </div>
            <p style={{ textAlign: "right", margin: 2}}>
                <Typography.Text strong style={{color: funcProgressColor()}}>{createPassLabel()}</Typography.Text>
            </p>
        </>
    )
}

export default PasswordStrengthBar