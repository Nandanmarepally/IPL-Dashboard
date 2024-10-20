import './index.css'
import {Component} from 'react'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      secondInnings,
      umpires,
      venue,
      result,
    } = latestMatch

    return (
      <div className="latest-match-card-container">
        <h1 className="latest-match-heading">Latest Match</h1>
        <div className="latest-match-card">
          <div className="latest-match-logo-container">
            <div className="latest-match-details-main">
              <p>{competingTeam}</p>
              <p>{date}</p>
              <p>{venue}</p>
              <p>{result}</p>
            </div>
            <img
              className="latest-match-logo"
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
            />
          </div>
          <div className="latest-match-details-info">
            <div className="match-info-item">
              <p>First Innings</p>
              <p>{firstInnings}</p>
            </div>
            <div className="match-info-item">
              <p>Second Innings</p>
              <p>{secondInnings}</p>
            </div>
            <div className="match-info-item">
              <p>Man Of The Match</p>
              <p>{manOfTheMatch}</p>
            </div>
            <div className="match-info-item">
              <p>Umpires</p>
              <p>{umpires}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
