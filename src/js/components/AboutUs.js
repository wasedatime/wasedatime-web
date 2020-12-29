import React from "react";
import { Tab } from 'semantic-ui-react'


import OurMission from './OurMission.js'
import MeetOurTeam from './MeetOurTeam.js'
import JoinUs from './JoinUs.js'




const panes = [
    { menuItem: 'Our Mission', render: () => <OurMission />, size:"massive"},
    { menuItem: 'Meet Our Team', render: () => <MeetOurTeam /> },
    { menuItem: 'Join Us', render: () => <JoinUs /> },
  
]
const TabExampleSecondary = () => (
    <Tab menu={{ secondary: true }} panes={panes} />
)

export default TabExampleSecondary