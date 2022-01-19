import React from 'react';
import PropTypes from "prop-types";
//==============================================
import HeadStyle from "./SectionStyle";
const Section = ({title, children}) => {
    return (
        <div>
            <HeadStyle>{title}</HeadStyle>
            {children}
        </div>
    );
};

Section.propTypes={
    title:PropTypes.string,
    children:PropTypes.node
}



export default Section;