import React from 'react';
import { HashLink } from 'react-router-hash-link';

const BoutonTop = (props) => {
    return (
        <div className="sec-footer">
            <div>
                <p>&copy; 2023 KME. Tout droit réservé.</p>
            </div>
            <div className="btn-top">
                {props.page && (
                    <HashLink to={props.page}><i class="fa-solid fa-arrow-up"></i></HashLink>
                )}
            </div>
        </div>
    );
};

export default BoutonTop;