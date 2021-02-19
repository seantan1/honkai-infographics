import './css/Header.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

function Header() {
    return (
        <div className="Header">
            <h1 className="Title">Honkai Infographics</h1>
            <input placeholder="Search"></input>
        </div>
    );
}

export default Header;
