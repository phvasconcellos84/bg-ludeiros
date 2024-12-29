import { useEffect } from 'react';
import SpinnerLoader from '../../components/SpinnerLoader';
import { Container } from './style';
import { useSearchParams } from 'react-router-dom';

const Auth = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    searchParams.get('code');
  }, [searchParams]);

  return (
    <Container>
      <SpinnerLoader />
      <span>Estamos efetuando seu login. Por favor, aguarde.</span>
      <span>{searchParams.get('code')}</span>
    </Container>
  );
};

export default Auth;
