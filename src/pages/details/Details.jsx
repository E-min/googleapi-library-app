import { useParams } from "react-router-dom";
import { useBooksContext } from "../../context/BooksContext";
import { DetailsContainer, Page } from "./Details.style";

const Details = () => {
  const { data } = useBooksContext();
  const { id } = useParams();

  const bookInfo = data[id]?.volumeInfo;
  const header = bookInfo?.title;
  const description = bookInfo?.description || "This book has no description";
  const authors = bookInfo.authors ? bookInfo.authors.join(", ") : 'No Data';
  const publisher = bookInfo?.publisher || 'No Data';

  return (
    <DetailsContainer data-flex={"center  column"}>
      <Page>
        <h2>{header}</h2>
        <br />
        <br />
        <p>{description}</p>
        <br />
        <h4>Authors</h4>
        <p>{authors}</p>
        <br />
        <h4>Publisher</h4>
        <p>{publisher}</p>
      </Page>
    </DetailsContainer>
  );
};

export default Details;
