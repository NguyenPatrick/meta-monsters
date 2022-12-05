import { useEffect, useRef, useState } from "react";

const PokeBallDialog = ({ show, metamons, changeVisibility }) => {

    return (
        show ?
            (
                <div className="popup-wrapper">
                    <div className="catch-popup-overline">
                        <span className="cross" onClick={changeVisibility}>
                            x
                        </span>
                        <div className="popup-info-container">
                            <span className="metamon-name">
                                Pokemon Collection
                            </span>
                            <div className="metamon-container">
                                {
                                    metamons.map((item, index) => (
                                        <>
                                            <img src={item.image} height={100} width={100} />
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            ) :
            (
                <></>
            )
    );
}


export default PokeBallDialog;