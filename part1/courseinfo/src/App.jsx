const App = () => {
  const course = { 
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const Header = ({course}) => {
  return (
    <>
      <h1>{course.name}</h1>
    </>
  )
}

const Content = ({course}) => {
  let part1 = course.parts[0]
  let part2 = course.parts[1]
  let part3 = course.parts[2]
  return (
    <div>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </div>
  )
}

const Part = ({part}) => {
  let name = part.name
  let exercises = part.exercises
  return (
    <>
      <p>{name} {exercises}</p>
    </>
  )
}

const Total = ({course}) => {
  let exercises1 = course.parts[0].exercises
  let exercises2 = course.parts[1].exercises
  let exercises3 = course.parts[2].exercises
  return (
    <>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </>
  )
}

export default App