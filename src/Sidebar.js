import React from 'react'
import SidebarRow from "./components/SidebarRow"
import Home from "@material-ui/icons/Home"
import ExploreIcon from "@material-ui/icons/Explore"
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon  from '@material-ui/icons/VideoLibrary';
import { History,OndemandVideo,WatchLater,ThumbUp,ExpandMoreOutlined,YouTube,Theaters,SportsEsports,Settings,Flag,Help,Feedback } from '@material-ui/icons';
import "./Sidebar.css"
import SubscriptionRow from "./components/SubscriptionRow"

function Sidebar() {
    return (
        <div className="sidebar">
         <SidebarRow icon={Home} title="Home"/>   
         <SidebarRow icon ={ExploreIcon} title="Explore"/>
         <SidebarRow icon={SubscriptionIcon} title="Subscriptions"/>
         <hr></hr>
         <SidebarRow icon={VideoLibraryIcon} title="Library"/>
         <SidebarRow icon={History} title="History"/>
         <SidebarRow icon={OndemandVideo} title="Your videos"/>
         <SidebarRow icon={WatchLater} title="Watch later"/>
         <SidebarRow icon={ThumbUp} title="Liked videos"/>
         <SidebarRow icon={ExpandMoreOutlined} title="Show more"/>
         
        <hr/>
        <h4 className="sidebar_heading">SUBSCRIPTIONS</h4>
        <SubscriptionRow img="https://yt3.ggpht.com/NpBI-AonCK4jgOnBE56r8QRsv8a3l3dSl7slpARb9EDUktQORWybFt7LzqxgLNsjtgNVQhv6TNg=s176-c-k-c0x00ffffff-no-rj" name="DevnTech"/>
        <SubscriptionRow img="https://yt3.ggpht.com/ytc/AKedOLTPYzMbMQSkvxTeWbcNj1JPVpQM97sSdVj6a3pLbA=s176-c-k-c0x00ffffff-no-rj" name="RakaZone Gaming"/>
        <SubscriptionRow img="https://yt3.ggpht.com/ytc/AKedOLRyyU9MiOq9MH0sopx1zpmcjdNBKDIripb6RAPw=s176-c-k-c0x00ffffff-no-rj-mo" name="S8ul"/>
        <SubscriptionRow img="https://yt3.ggpht.com/ytc/AKedOLRehlP8pcyXhsyIH9LYMbRd_WwiJBcHynYwYpuD6A=s176-c-k-c0x00ffffff-no-rj-mo" name="Fa2"/>
        <SubscriptionRow img="https://yt3.ggpht.com/ytc/AKedOLSiAN_qVf2tHZSo5h1yThgr-NP_xqGvGrmPM6UctA=s176-c-k-c0x00ffffff-no-rj-mo" name="Tbone"/>
        <SidebarRow icon={ExpandMoreOutlined} title="Show more"/>
        <hr/>
        <h4 className="sidebar_heading">MORE FROM YOUTUBE</h4>
        <SidebarRow icon={YouTube} title="Youtube premium"/>
        <SidebarRow icon={Theaters} title="Movies"/>
        <SidebarRow icon={SportsEsports} title="Gaming"/>
        <hr/>
        <SidebarRow icon={Settings} title="Settings"/>
        <SidebarRow icon={Flag} title="Report history"/>
        <SidebarRow icon={Help} title="Help"/>
        <SidebarRow icon={Feedback} title="Send feedback"/>
        <hr></hr>
        <div className="footer">
        <p>About &nbsp; Press &nbsp; Copyright</p>
        
        <p>Contact us &nbsp; Creators</p>
        
        <p>Advertise &nbsp;  Developers</p>
        <br/>
        <p>Terms &nbsp; Privacy &nbsp;Policy & Safety</p>
        <p>How youtube works</p>
        <p>Test new features</p>
        <br></br>
        <p style={{color:"rgb(142,142,142)"}}>&#169;2021 Google LLC</p>
        </div>
        </div>
    )
}


export default Sidebar;
