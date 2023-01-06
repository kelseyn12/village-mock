export const AllPrograms = ({ data }) => {
  return (
    <main>
      <div>
        {data.map((evt) => (
          <div key={evt.name}>
            <h1>{evt.name}</h1> <p>Grades {evt.grade}</p>{" "}
            <p>
              {evt.date_begin}-{evt.date_end}
            </p>{" "}
            <p>{evt.location}</p> <button>Register</button>{" "}
            <a href="/">Learn More</a>
          </div>
        ))}
      </div>
    </main>
  );
};
