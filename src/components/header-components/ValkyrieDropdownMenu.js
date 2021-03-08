import React, { useState } from 'react';
import './css/DropdownMenu.css';

import DropdownItem from './ValkDropdownItem';

// important chibi icons
import Kiana from '../../assets/chibi-icons/resized/kiana_wc_chibi_edit.png';
import Mei from '../../assets/chibi-icons//resized/mei_ci_chibi_edit.png';
import Bronya from '../../assets/chibi-icons/resized/bronya_vc_chibi_edit.png';
import Himeko from '../../assets/chibi-icons/resized/himeko_bs_chibi_edit.png';
import Theresa from '../../assets/chibi-icons/resized/teri_vp_chibi_edit.png';
import Fuhua from '../../assets/chibi-icons/resized/fuka_ns_chibi_edit.png';
import Kallen from '../../assets/chibi-icons/resized/kallen_ir_chibi_edit.png';
import Sakura from '../../assets/chibi-icons/resized/yae_miko_chibi_edit.png';
import Rita from '../../assets/chibi-icons/resized/rita_ur_chibi_edit.png';
import Durandal from '../../assets/chibi-icons/resized/dudu_vg_chibi_edit.png';
import Seele from '../../assets/chibi-icons/resized/seele_sp_chibi_edit.png';
import Rozaliya from '../../assets/chibi-icons/resized/roza_mc_chibi_edit.png';
import Liliya from '../../assets/chibi-icons/resized/lili_bb_chibi_edit.png';
import Asuka from '../../assets/chibi-icons/resized/asuka_bh_chibi_edit.png';


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