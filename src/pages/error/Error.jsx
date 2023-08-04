import { useNavigate } from "react-router-dom";
import {ErrorPageContiner, ToHomeButton} from './Error.style';

const Error = () => {
  const navigate = useNavigate()
 return (
   <ErrorPageContiner data-flex={'center center column 1rem'}>
     <h1>Oops! There is no page</h1>
     <ToHomeButton onClick={() => navigate('/')}>Go to Home Page</ToHomeButton>
   </ErrorPageContiner>
 );
};

export default Error;