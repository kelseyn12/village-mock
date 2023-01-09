const options = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  weekday: 'short'
};

export const AllPrograms = ({ data }) => {
  const formattedData = data.map(i => {
    const startDate = new Date(i.date_begin);
    const endDate = new Date(i.date_end);
    const formattedStartDate = startDate.toLocaleDateString('en-US', options);
    const formattedEndDate = endDate.toLocaleDateString('en-US', options);

    return {
      name: i.name,
      grade: i.grade,
      date_begin: formattedStartDate,
      date_end: formattedEndDate,
      location: i.location
    };
  });

  return (
    <main>
      {formattedData.map((evt) => (
        <div key={evt.name}>
          <h1>{evt.name}</h1>
          <p>Grades {evt.grade}</p>
          <p>
            {evt.date_begin}-{evt.date_end}
          </p>
          <p>{evt.location}</p>
          <button>Register</button>
          <a href="/">Learn More</a>
        </div>
      ))}
    </main>
  );
};

