import { useNavigate } from "react-router-dom";
import noCover from "../../assets/common-book-cover.jpg";
import { BookCover, StyledCard, StyledCardHeader } from "./Card.style";
import { StyledButton } from "../header/Header.style";

const Card = ({ cardData, cardNum }) => {
  const navigate = useNavigate();
  return (
    <StyledCard data-flex={'space-between  column 0.5rem'}>
      <StyledCardHeader>{cardData.volumeInfo?.title}</StyledCardHeader>
      <BookCover
        src={
          cardData.volumeInfo.imageLinks
            ? cardData.volumeInfo.imageLinks.thumbnail
            : noCover
        }
        alt="a book's cover"
      />
      <StyledButton
        $btnType={"details"}
        value="details"
        onClick={() => navigate(`/details/${cardNum}`)}
      >
        Details
      </StyledButton>
    </StyledCard>
  );
};

export default Card;
