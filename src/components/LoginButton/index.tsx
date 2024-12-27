import { ReactNode } from 'react';
import styles from './styles.module.css';

type LoginButtonProps = {
  children: ReactNode;
};

const LoginButton = ({ children }: LoginButtonProps) => {
  const app_id = process.env.REACT_APP_LUDOPEDIA_APP_ID as string;
  const redirect_uri = process.env.REACT_APP_LUDOPEDIA_RETURN_URL as string;
  const uri = `https://ludopedia.com.br/oauth?app_id=${app_id}&redirect_uri=${redirect_uri}`;

  return (
    <nav>
      <a href={uri}>
        <button className={styles.loginButton}>{children}</button>
      </a>
    </nav>
  );
};

export default LoginButton;
