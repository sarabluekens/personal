import React from 'react';
import PropTypes from "prop-types";
import styles from "./MoodButton.module.css";
import Image from 'next/image';

const MoodButtonOption = ({description, onRadioChange, index}) => {
    return (  
        <>
            <input type="radio" id={index} name="mood" value={index} onChange={(e) => onRadioChange(e.target.value) }/>
            <label className ={styles.formLabel} htmlFor={index}>
            <Image src="/img/logo.png" width="100" height="100"/>
            </label><br/>
        </>
    );
}
 
MoodButtonOption.propTypes = {
    description : PropTypes.string.isRequired,
    onRadioChange : PropTypes.func.isRequired,
    index : PropTypes.string.isRequired
}
export default MoodButtonOption;