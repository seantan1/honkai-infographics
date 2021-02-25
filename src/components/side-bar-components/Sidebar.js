import './css/Sidebar.css';

import SearchBar from './SearchBar';
import SidebarContents from './SidebarContents';

function Sidebar() {
    return (
        <div >
            <SearchBar />
            <SidebarContents />
        </div>
    )
}

export default Sidebar
