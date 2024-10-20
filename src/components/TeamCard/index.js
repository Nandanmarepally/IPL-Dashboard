// Write your code here
import './index.css'
import {Link} from 'react-router-dom'
import {Component} from 'react'

class TeamCard extends Component {
  render() {
    const {teamDate} = this.props
    const {name, imageUrl, id} = teamDate
    return (
      <Link to={`/team-matches/${id}`} className="link-item">
        <li className="team-card">
          <img src={imageUrl} alt={`${name}`} />
          <p>{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
