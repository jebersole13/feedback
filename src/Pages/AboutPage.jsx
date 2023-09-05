import {Link} from 'react-router-dom'
import Card from "../Components/Shared/Card"
function AboutPage() {
  return (
    <Card>
      <div className="About">This fucking project</div>
      <p>Buy Meta!</p>
      <p>Version 1</p>
      <p>
        <Link to="/">Back to the home!</Link>
      </p>
    </Card>
  )
}

export default AboutPage
