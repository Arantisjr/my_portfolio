import { educationData } from "../data/education";
import '../styles/Education.css'
const Education = ({year, title, description}) => {
  return (
    <section>
        <div className="education_main_container">
            <p className="education_year">{year}</p>
            <p className="education_title">{title}</p>
            <p className="education_description">{description}</p>

        </div>
    </section>
  )
}

export default Education
