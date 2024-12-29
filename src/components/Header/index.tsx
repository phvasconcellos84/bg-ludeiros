import styles from './styles.module.css';
import Logo from '../../assets/Ludeiros.png';
import LoginButton from '../LoginButton';

const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.content}>
        <nav>
          <a href="/">
            <img src={Logo} alt="Logo" width={180} />
          </a>
        </nav>

        <LoginButton>Acessar</LoginButton>
      </section>
    </header>
  );
};

export default Header;
