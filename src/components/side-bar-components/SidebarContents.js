import React, { useState } from 'react';
import './css/SidebarContents.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

function SidebarContents() {

    const [sidebarDropdown1, setSidebarDropdown1] = useState("none");
    const [sidebarDropdown2, setSidebarDropdown2] = useState("none");
    const [sidebarDropdown3, setSidebarDropdown3] = useState("none");
    const [sidebarDropdown4, setSidebarDropdown4] = useState("none");

    const [sidebarDropdownCaretDown1, setSidebarDropdownCaretDown1] = useState("inline");
    const [sidebarDropdownCaretDown2, setSidebarDropdownCaretDown2] = useState("inline");
    const [sidebarDropdownCaretDown3, setSidebarDropdownCaretDown3] = useState("inline");
    const [sidebarDropdownCaretDown4, setSidebarDropdownCaretDown4] = useState("inline");

    const [sidebarDropdownCaretUp1, setSidebarDropdownCaretUp1] = useState("none");
    const [sidebarDropdownCaretUp2, setSidebarDropdownCaretUp2] = useState("none");
    const [sidebarDropdownCaretUp3, setSidebarDropdownCaretUp3] = useState("none");
    const [sidebarDropdownCaretUp4, setSidebarDropdownCaretUp4] = useState("none");

    const sidebarBtnClicked = (sidebarNum) => {
        console.log("hey" + sidebarNum);
        if (sidebarNum == 1) {
            console.log("boop" + sidebarNum);
            if (sidebarDropdown1 == "none") {
                console.log("none" + sidebarNum);
                setSidebarDropdown1((prevState) => prevState = "block");
                setSidebarDropdownCaretDown1((prevState) => prevState = "none");
                setSidebarDropdownCaretUp1((prevState) => prevState = "inline");
            }
            else {
                console.log("block" + sidebarNum);
                setSidebarDropdown1((prevState) => prevState = "none");
                setSidebarDropdownCaretDown1((prevState) => prevState = "inline");
                setSidebarDropdownCaretUp1((prevState) => prevState = "none");
            }
        }
        else if (sidebarNum == 2) {
            if (sidebarDropdown2 == "none") {
                setSidebarDropdown2((prevState) => prevState = "block");
                setSidebarDropdownCaretDown2((prevState) => prevState = "none");
                setSidebarDropdownCaretUp2((prevState) => prevState = "inline");
            }
            else {
                setSidebarDropdown2((prevState) => prevState = "none");
                setSidebarDropdownCaretDown2((prevState) => prevState = "inline");
                setSidebarDropdownCaretUp2((prevState) => prevState = "none");
            }
        }
        else if (sidebarNum == 3) {
            if (sidebarDropdown3 == "none") {
                setSidebarDropdown3((prevState) => prevState = "block");
                setSidebarDropdownCaretDown3((prevState) => prevState = "none");
                setSidebarDropdownCaretUp3((prevState) => prevState = "inline");
            }
            else {
                setSidebarDropdown3((prevState) => prevState = "none");
                setSidebarDropdownCaretDown3((prevState) => prevState = "inline");
                setSidebarDropdownCaretUp3((prevState) => prevState = "none");
            }
        }
        else if (sidebarNum == 4) {
            if (sidebarDropdown4 == "none") {
                setSidebarDropdown4((prevState) => prevState = "block");
                setSidebarDropdownCaretDown4((prevState) => prevState = "none");
                setSidebarDropdownCaretUp4((prevState) => prevState = "inline");
            }
            else {
                setSidebarDropdown4((prevState) => prevState = "none");
                setSidebarDropdownCaretDown4((prevState) => prevState = "inline");
                setSidebarDropdownCaretUp4((prevState) => prevState = "none");
            }
        }
    }

    return (
        <div className="sidebar-contents-container">
            <div>
                <button onClick={() => sidebarBtnClicked(1)} className="sidebar-dropdown-btn">Valkyries <i style={{display:sidebarDropdownCaretDown1}} className="fa fa-caret-down"></i><i style={{display:sidebarDropdownCaretUp1}} className="fa fa-caret-up"></i></button>
                <div style={{display:sidebarDropdown1}} className="sidebar-dropdown-container">
                    <a href="#">Link 1</a><br></br>
                    <a href="#">Link 2</a><br></br>
                    <a href="#">Link 3</a><br></br>
                </div>
            </div>

            <div>
                <button onClick={() => sidebarBtnClicked(2)}  className="sidebar-dropdown-btn">Bosses <i style={{display:sidebarDropdownCaretDown2}} className="fa fa-caret-down"></i><i style={{display:sidebarDropdownCaretUp2}} className="fa fa-caret-up"></i></button>
                <div style={{display:sidebarDropdown2}} className="sidebar-dropdown-container">
                    <a href="#">Link 1</a><br></br>
                    <a href="#">Link 2</a><br></br>
                    <a href="#">Link 3</a><br></br>
                </div>
            </div>

            <div>
                <button onClick={() => sidebarBtnClicked(3)} className="sidebar-dropdown-btn">Gears <i style={{display:sidebarDropdownCaretDown3}} className="fa fa-caret-down"></i><i style={{display:sidebarDropdownCaretUp3}} className="fa fa-caret-up"></i></button>
                <div style={{display:sidebarDropdown3}} className="sidebar-dropdown-container">
                    <a href="#">Link 1</a><br></br>
                    <a href="#">Link 2</a><br></br>
                    <a href="#">Link 3</a><br></br>
                </div>
            </div>

            <div>
                <button onClick={() => sidebarBtnClicked(4)} className="sidebar-dropdown-btn">References <i style={{display:sidebarDropdownCaretDown4}} className="fa fa-caret-down"></i><i style={{display:sidebarDropdownCaretUp4}} className="fa fa-caret-up"></i></button>
                <div style={{display:sidebarDropdown4}} className="sidebar-dropdown-container">
                    <a href="#">Link 1</a><br></br>
                    <a href="#">Link 2</a><br></br>
                    <a href="#">Link 3</a><br></br>
                </div>
            </div>
        </div>
    )
}


export default SidebarContents
