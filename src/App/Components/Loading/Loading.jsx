import React from "react";
import "./Loading.scss";
import PropTypes from "prop-types";

const Loading = (props) => {

    return props.loading && <div className="loading-wrapper">
        <p>Die Bücher-Liste lädt gerade...</p>
    </div>

};

Loading.propTypes = {
    loading: PropTypes.bool
};

export default Loading;

