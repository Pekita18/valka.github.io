import React from "react";

const CartWidget = () => {
    return(
        <i className="fa-solid fa-cart-shopping" style={style.icons}></i>
    );
};

const style = {

    icons: {
        margin: '0px 20px',
        color: 'rgb(141, 141, 141)',
        cursor: 'pointer'
    }

};


export { CartWidget };