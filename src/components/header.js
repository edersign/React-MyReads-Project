import React from 'react';
import { Link } from "react-scroll";
import SearchButton from '../components/search';

const Header = ({title}) => (
    <header className="list-books-title">
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <h1 className="navbar-item">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAK9SURBVGhD7ZbLa1NBFMbHGm1U8A2KVQRBfHRRFRQtBRdSRNuCdFP8C9y4EkRwoVVciAtxIxaqprZNk4IxFtMm5m00jW1tWnuT1ERrzLoLXShUEI/3Tk6iCbkEc+eYCPcH3yZz5jvnCzPcYTo6Ojq1T+uePlB0rtlZIFxmR2+3gKJ2+5kC4XL10QNUmytdIVB09+J0gXCZ5Qa+FrlRIFyuPv99ANIj5I3tl3WVeaQYc83txV/FUmkAqamJ6+uJIwViVm8H6x8NsOdvE/Lw8IcuoaVYhAfotX1n9yzA7OH88Mt9cdgaSs6jpViEBxgcjSgB6swu2BJ6B4cmFuDUzCdon8nAvnD6INqKo9IA0NmZ1a3uAhmfBi9s8szCKn8C2mYz0IFqmUpDw6vkdbQVh+gAO01pY70/e3QORFKwe/w9rA4kcsfJhbbiqDSA6hGS2eiYWFxjlj2G3Pl7kJW0xDxv1nFjUVAEYBb3ZX6Rex8XBZDlkbp4jShIAgy8Xst6hn/yEI7J4hBWXiMKkgAKpmcZHmDYWxzgCxtL1WOVdsgCDLnu8AAPnhQHAOaWTmKVdsgCWFw7WI8VeAin/LaSBzf647ArnILGyIdxrNIOWQAF08jiyod22OaJQvPUR/4xU74JrdH0j+MBMGCVNip9jap9B3AbZ7NrWlrmjcOG4DwfvE0OcHhyARpeJsEQTBzDMm2QBnBGz9b5YrDeJ8H2FwlYIb+J8vfAI93EMm2QHiEZw6ORb/we2EK/h89KzOOOOgAbcI7xAP2O3D8fl9XNfPFGrNAGeQCz+zS7b1tig06vkKGhj0EtCscrT6nNtSAcrzylNteCcLzylNpcC8LxylNqcy0Ix/t7Pp9nkBP+RAZJLxJTFUh6kZiqQNKLxFQFkl4kpiqQ9CIxVYGkF4mpCiS9SExV+Je9dHR0dLTC2C9o4RVndxXsngAAAABJRU5ErkJggg==" alt={title} />
                    <span>{title}</span>
                </h1>
            </div>

            <div className="navbar-menu">
                <div className="navbar-start">
                    <Link 
                    className="navbar-item nav-link" 
                    activeClass="active" 
                    to="currentlyReading"
                    spy={true}
                    smooth={true} 
                    duration={500}
                    >Currently Reading</Link>
                    <Link 
                    className="navbar-item nav-link" 
                    activeClass="active" 
                    to="wantToRead" 
                    spy={true} 
                    smooth={true} 
                    duration={500}
                    >Want to Read</Link>
                    <Link 
                    className="navbar-item nav-link" 
                    activeClass="active"
                    to="read"
                    spy={true} 
                    smooth={true}
                    duration={500}
                    >Read</Link>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <SearchButton />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
)
export default Header;