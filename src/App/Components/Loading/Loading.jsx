import React from "react";
import "./Loading.scss";
import PropTypes from "prop-types";

const Loading = (props) => {
    let defaultText = "Die Bücher-Liste lädt gerade...";
    if (props.alternativeText) {
        defaultText = props.alternativeText;
    }
    return (
        props.loading && (
            <div className='loading-wrapper'>
                <p>{defaultText}</p>
            </div>
        )
    );
};

Loading.propTypes = {
    loading: PropTypes.bool.isRequired,
    alternativeText: PropTypes.string,
};

export default Loading;
