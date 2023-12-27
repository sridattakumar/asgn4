// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {teamData} = this.props
    const {teamImageUrl, name, id} = teamData
    return (
      <Link to={`/team-matches/${id}`} className="item-link">
        <li className="each-list">
          <img src={teamImageUrl} alt={`${name}`} className="team-logo" />
          <p className="team">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
