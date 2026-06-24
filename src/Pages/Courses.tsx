import { courses } from "../data/courses"
import Coursecard from "../Components/Coursecard"

const Courses = () => {
  return (
    <div className="grid grid-cols-3  p-4">
      {courses.map((course) => (
        <Coursecard key={course.id} {...course} />
      ))}
    </div>
  )
}

export default Courses;