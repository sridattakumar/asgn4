// Write your code here
import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      secondInnings,
      manOfTheMatch,
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
              <p className="latest-match-team-name">{competingTeam}</p>
              <p className="latest-match-date">{date}</p>
              <p className="latest-match-venue">{venue}</p>
              <p className="latest-match-result">{result}</p>
            </div>
            <img
              className="latest-match-logo"
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
            />
          </div>
          <div className="latest-match-details-info">
            <p className="latest-match-details-label">First Innings</p>
            <p className="latest-match-details-value">{firstInnings}</p>
          </div>
          <div className="latest-match-details-info">
            <p className="latest-match-details-label">Second Innings</p>
            <p className="latest-match-details-value">{secondInnings}</p>
          </div>
          <div className="latest-match-details-info">
            <p className="latest-match-details-label">Man Of The Match</p>
            <p className="latest-match-details-value">{manOfTheMatch}</p>
          </div>
          <div className="latest-match-details-info">
            <p className="latest-match-details-label">Umpires</p>
            <p className="latest-match-details-value">{umpires}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default LatestMatch