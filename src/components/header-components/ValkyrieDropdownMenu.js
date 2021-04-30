import React, { useState } from 'react';
import { Link } from "react-router-dom";
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
                <div className="nav-bar-dropdown-button-text">Valkyries</div>

                {isShown && (
                <ul>
                    <li><Link to="/valkyries/kiana"><DropdownItem valkName="Kiana" chibiIcon={Kiana}/></Link></li>
                    <li><Link to="/valkyries/mei"><DropdownItem valkName="Mei" chibiIcon={Mei}/></Link></li>
                    <li><Link to="/valkyries/bronya"><DropdownItem valkName="Bronya" chibiIcon={Bronya}/></Link></li>
                    <li><Link to="/valkyries/himeko"><DropdownItem valkName="Himeko" chibiIcon={Himeko}/></Link></li>
                    <li><Link to="/valkyries/theresa"><DropdownItem valkName="Theresa" chibiIcon={Theresa}/></Link></li>
                    <li><Link to="/valkyries/fuhua"><DropdownItem valkName="Fu Hua" chibiIcon={Fuhua}/></Link></li>
                    <li><Link to="/valkyries/kallen"><DropdownItem valkName="Kallen" chibiIcon={Kallen}/></Link></li>
                    <li><Link to="/valkyries/sakura"><DropdownItem valkName="Sakura" chibiIcon={Sakura}/></Link></li>
                    <li><Link to="/valkyries/rita"><DropdownItem valkName="Rita" chibiIcon={Rita}/></Link></li>
                    <li><Link to="/valkyries/durandal"><DropdownItem valkName="Durandal" chibiIcon={Durandal}/></Link></li>
                    <li><Link to="/valkyries/seele"><DropdownItem valkName="Seele" chibiIcon={Seele}/></Link></li>
                    <li><Link to="/valkyries/rozaliya"><DropdownItem valkName="Rozaliya" chibiIcon={Rozaliya}/></Link></li>
                    <li><Link to="/valkyries/liliya"><DropdownItem valkName="Liliya" chibiIcon={Liliya}/></Link></li>
                    <li><Link to="/valkyries/asuka"><DropdownItem valkName="Asuka" chibiIcon={Asuka}/></Link></li>
                </ul>
                )}
            </div>
        </div>
    );
}

export default ValkryieDropdownMenu;