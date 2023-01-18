import LocationOnIcon from "@material-ui/icons/LocationOn";

import { Pagination } from "@material-ui/lab";
import { useState } from "react";

const options = {
  year: "numeric",
  month: "short",
  day: "numeric",
  weekday: "short",
};

export const AllPrograms = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const numPages = Math.ceil(data.length / itemsPerPage);

  const formattedData = data.map((i) => {
    const startDate = new Date(i.date_begin);
    const endDate = new Date(i.date_end);
    const formattedStartDate = startDate.toLocaleDateString("en-US", options);
    const formattedEndDate = endDate.toLocaleDateString("en-US", options);

    return {
      name: i.name,
      grade: i.grade,
      date_begin: formattedStartDate,
      date_end: formattedEndDate,
      location: i.location,
    };
  });

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = formattedData.slice(startIndex, endIndex);

  return (
    <main>
      <div className="allProgramsSearchBar">
        <input
          type="text"
          className="allProgramsInput"
          placeholder="Search..."
        />
      </div>
      <div className="eventCardContainer">
        {currentPageData.map((evt) => (
          <div className="eventCard" key={evt.name}>
            <div className="eventCard-content" >
              <h3>{evt.name}</h3>
              <p>Grades {evt.grade}</p>
              <p>
                {evt.date_begin}-{evt.date_end}
              </p>
              <p>
                <LocationOnIcon fontSize="small" />
                {evt.location}
              </p>
            </div>
            <div className="eventCard-buttons">
              <button className="registerButton">Register</button>
              <a className="learnMoreButton" href="/">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="paginationButtons">
        <Pagination
          count={numPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      </div>
    </main>
  );
};
