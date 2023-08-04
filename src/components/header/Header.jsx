import { useState } from "react";
import {
  FormElementContainer,
  StyledButton,
  StyledForm,
  StyledHeader,
  StyledSelection,
  StyledTextInput,
} from "./Header.style";
import { useBooksContext } from "../../context/BooksContext";

const Header = ({ setLoading }) => {
  const { requestData } = useBooksContext();
  const [submitValues, setSubmitValues] = useState({
    query: "",
    type: "all",
  });

  const handleSubmitValues = (e) => {
    if (e.target.id === "search") {
      setSubmitValues({ ...submitValues, query: e.target.value });
    } else {
      setSubmitValues({ ...submitValues, type: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    setLoading(true);
    setSubmitValues({
      query: "",
      type: "all",
    });
    try {
      await requestData(submitValues.query, submitValues.type);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <StyledHeader>Books or Magazines</StyledHeader>
      <StyledForm onSubmit={handleSubmit} data-flex={'center center column 1rem'}>
        <FormElementContainer>
          <StyledTextInput
            onChange={handleSubmitValues}
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            value={submitValues.query}
            required
          />
          <StyledSelection
            onChange={handleSubmitValues}
            name="type"
            id="type"
            placeholder="types "
            value={submitValues.type}
          >
            <option disabled>Types</option>
            <option value="all">All</option>
            <option value="books">Books</option>
            <option value="magazines">Magazines</option>
          </StyledSelection>
        </FormElementContainer>
        <StyledButton $btnType={"search"} type="submit">
          Search
        </StyledButton>
      </StyledForm>
    </>
  );
};

export default Header;
