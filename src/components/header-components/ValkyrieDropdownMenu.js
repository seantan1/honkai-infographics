import React, { useState } from 'react';
import './css/DropdownMenu.css';

import DropdownItem from './ValkDropdownItem';

// important chibi icons
import Kiana from '../../assets/chibi-icons/kiana_wc_chibi.png';
import Mei from '../../assets/chibi-icons/mei_ci_chibi.png';
import Bronya from '../../assets/chibi-icons/bronya_vc_chibi.png';
import Himeko from '../../assets/chibi-icons/himeko_bs_chibi.png';
import Theresa from '../../assets/chibi-icons/teri_vp_chibi.png';
import Fuhua from '../../assets/chibi-icons/fuka_va_chibi.png';
import Kallen from '../../assets/chibi-icons/kallen_ir_chibi.png';
import Sakura from '../../assets/chibi-icons/yae_miko_chibi.png';
import Rita from '../../assets/chibi-icons/rita_ur_chibi.png';
import Durandal from '../../assets/chibi-icons/dudu_vg_chibi.png';
import Seele from '../../assets/chibi-icons/seele_sp_chibi.png';
import Rozaliya from '../../assets/chibi-icons/roza_mc_chibi.png';
import Liliya from '../../assets/chibi-icons/lili_bb_chibi.png';
import Asuka from '../../assets/chibi-icons/asuka_bh_chibi.png';


function ValkryieDropdownMenu() {

    const [isShown, setIsShown] = useState(false);

    return (
        <div 
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
        >
            <div className="nav-bar-dropdown-button">
                <div 
                    
                className="nav-bar-dropdown-button-text"> Valkyries </div>

                {isShown && (
                <ul>
                    <li><DropdownItem valkName="Kiana" chibiIcon={Kiana}/></li>
                    <li><DropdownItem valkName="Mei" chibiIcon={Mei}/></li>
                    <li><DropdownItem valkName="Bronya" chibiIcon={Bronya}/></li>
                    <li><DropdownItem valkName="Himeko" chibiIcon={Himeko}/></li>
                    <li><DropdownItem valkName="Theresa" chibiIcon={Theresa}/></li>
                    <li><DropdownItem valkName="Fu Hua" chibiIcon={Fuhua}/></li>
                    <li><DropdownItem valkName="Kallen" chibiIcon={Kallen}/></li>
                    <li><DropdownItem valkName="Sakura" chibiIcon={Sakura}/></li>
                    <li><DropdownItem valkName="Rita" chibiIcon={Rita}/></li>
                    <li><DropdownItem valkName="Durandal" chibiIcon={Durandal}/></li>
                    <li><DropdownItem valkName="Seele" chibiIcon={Seele}/></li>
                    <li><DropdownItem valkName="Rozaliya" chibiIcon={Rozaliya}/></li>
                    <li><DropdownItem valkName="Liliya" chibiIcon={Liliya}/></li>
                    <li><DropdownItem valkName="Asuka" chibiIcon={Asuka}/></li>
                </ul>
                )}
            </div>
        </div>
    );
}

export default ValkryieDropdownMenu;