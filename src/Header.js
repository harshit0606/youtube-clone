import React from 'react'
//lets import the icons which we will be using in our project from material-ui
import MenuIcon from "@material-ui/icons/Menu";
import YtLogo from "./svg/ytLogo.png";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import Microphone from "@material-ui/icons/Mic";
import"./Header.css";

//We'll be creating three different section of the Header left middle and right
//in the left will be the menu button and the youtube logo
//In the middle would be search bar and the microphone icon
//In the right part will be the 3 icons along with the avatar icon

//Now lets write some css to make it look like the original one

function Header() {
    return (
        <div className="header">
        <div className="header__left">
        <MenuIcon/>
        <img className="header__logo" src={YtLogo}/>
        </div>
        <div className="header_input">
            <div className="header__middle">
            <input className="SearchInput" placeholder="Search" type="text"/>
        <SearchIcon className="header_searchBtn"/>
            
            </div>
            <Microphone className="header__icons"/>
        </div>
        <div className="header__right">
        <VideoCallIcon className="header__icons"/>
        <AppsIcon className="header__icons"/>
        <NotificationIcon className="header__icons"/>
        <Avatar
        src="https://yt3.ggpht.com/NpBI-AonCK4jgOnBE56r8QRsv8a3l3dSl7slpARb9EDUktQORWybFt7LzqxgLNsjtgNVQhv6TNg=s176-c-k-c0x00ffffff-no-rj"/>

        </div>
        
        </div>
    )
}

export default Header
//For the icons like the menu button the upload button search button we'll be using material ui icons so lets see how wto use those
//We have pretty much made the exact same copy of the header in next video we'll make the sidebar
//See you in the next video