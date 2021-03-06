import React from 'react';
import './TeamContainer.css'

import team from '../assets/team'
import TeamMember from './TeamMember'


const TeamContainer = (props) => {
  return (
    <div className="team-container">
      <h2>Who We Are</h2>
      <p>We are a team of individuals with a deep understanding of the Ethereum protocol.</p>
      <p>Armed with diverse backgrounds ranging from distributed systems to cloud computing, we 
      emphasize a test driven approach to implementing the system's first sharding client.</p>
      <div className="team-card-container">
        {team.map(member => <TeamMember key={member.name} member={member}/>)}
      </div>
    </div>
  )
}

export default TeamContainer;