// Modal.js

import React from "react";


const Modal1 = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div
			onClick={onClose}
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				background: "rgba(0, 0, 0, 0.5)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div
				style={{
					background: "red",
					height: 300,
					width: 300,
					margin: "auto",
					padding: "2%",
					border: "2px solid #000",
					borderRadius: "10px",
					boxShadow: "2px solid black",
                    textAlign: "center",
                    color: "white",
                    marginTop: "7rem"
				}}
			>
				{children}
			</div>
		</div>
	);
};

export default Modal1;
