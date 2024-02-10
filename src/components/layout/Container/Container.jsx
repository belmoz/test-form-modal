import React from "react";
import "./Container.styles.scss";

const Container = ({ classname, children }) => {
	return <div className={`container${classname ? " " + "container-" + classname : ""}`}>{children}</div>;
};

export default Container;
