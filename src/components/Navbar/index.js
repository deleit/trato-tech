import styles from './Navbar.module.scss';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import classNames from 'classnames';
import {
    RiShoppingCart2Line,
    RiShoppingCartFill
} from 'react-icons/ri';
import Busca from '../Busca';
import { Link } from 'react-router-dom';

const iconeProps = {
    color: 'white',
    size: 24
}

export default function Navbar() {
    return(
        <nav className={styles.nav}>
            <Logo className={styles.logo} />
            
            <div className={styles.links}>
                <div>
                    <Link to='/' className={classNames(styles.link, {
                        [styles.selected]: window.location.pathname === '/'
                    })}>
                        Página inicial
                    </Link>
                </div>
            </div>

            <div className={styles.busca}>
                <Busca />
            </div>

            <div className={styles.icones}>
                <a href='/carrinho'>
                    {window.location.pathname === '/carrinho'
                        ? <RiShoppingCartFill {...iconeProps} />
                        : <RiShoppingCart2Line {...iconeProps} />
                    }
                </a>
            </div>
        </nav>
    )
}