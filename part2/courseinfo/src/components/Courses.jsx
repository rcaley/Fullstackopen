const Header = ({ course }) => <h2>{course}</h2>;

const Content = ({ parts }) => (
  <div>
    {parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </div>
);

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Total = ({ total }) => (
  <p>
    <strong>total of {total} exercises</strong>
  </p>
);

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total
        total={course.parts.reduce((sum, part) => sum + part.exercises, 0)}
      />
    </div>
  );
};

const Courses = ({ courses }) => {
  const getCourse = (course) => {
    return <Course key={course.id} course={course} />;
  };

  return <div>{courses.map(getCourse)}</div>;
};

export default Courses