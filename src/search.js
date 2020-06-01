import React from "react";
import { getCalendar } from "./requests";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

const Search = ({ calendarStore }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [titles, setTitles] = React.useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  React.useEffect(() => {
    const request = async () => {
      let res = await getCalendar();
      let data = res.data;
      let titles = data.map((da) => da.title);
      setTitles(titles);
    };
    request();
    const results = titles.filter((title) =>
      title.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  if (searchTerm) {
    return (
      <div className="App">
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={searchTerm}
            onChange={handleChange}
          />
          <Button variant="outline-light">Search</Button>
        </Form>
        <ListGroup>
          {searchResults.map((item) => (
            <ListGroup.Item>{item}</ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }

  return (
    <div className="App">
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={searchTerm}
          onChange={handleChange}
        />
        <Button variant="outline-light">Search</Button>
      </Form>
    </div>
  );
};

export default Search;
