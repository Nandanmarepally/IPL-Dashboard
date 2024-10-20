// Write your code here

import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {matchData} = this.props
    const {result, competingTeam, competingTeamLogo, matchStatus} = matchData

    return (
      <li className={`match-card ${matchStatus}`}>
        <img
          className="match-card-logo"
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
        />
        <p>{competingTeam}</p>
        <p>{result}</p>
        <P>{matchStatus}</P>
      </li>
    )
  }
}

export default MatchCard
