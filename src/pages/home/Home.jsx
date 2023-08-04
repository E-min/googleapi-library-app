import { useEffect, useRef, useState } from "react";
import { useBooksContext } from "../../context/BooksContext";
import { CardsContainer, HomeContainer } from "./Home.style";
import loadingGif from "../../assets/loading.gif";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";

const Home = () => {
  const { data } = useBooksContext();
  const [loading, setLoading] = useState(false);
  const preloadedGifRef = useRef(null);

  useEffect(() => {
    const preloadGif = new Image();
    preloadGif.src = loadingGif;
    preloadGif.onload = () => {
      console.log("GIF preloaded.");
      preloadedGifRef.current = preloadGif;
    };

    return () => {
      if (preloadedGifRef.current) {
        console.log("Cleaning up preloaded GIF.");
        preloadedGifRef.current.onload = null;
      }
    };
  }, []);

  return (
    <HomeContainer data-flex={'center center column 1rem'}>
      <Header setLoading={setLoading} />
      <CardsContainer>
        {loading ? (
          <img src={preloadedGifRef.current.src} alt="loading gif" />
        ) : (
          data?.map((item, index) => (
            <Card key={item.etag} cardData={item} cardNum={index} />
          ))
        )}
      </CardsContainer>
    </HomeContainer>
  );
};

export default Home;
