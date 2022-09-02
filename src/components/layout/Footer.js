import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import SayMyName from '../SayMyName'
import styles from './Footer.module.css'

function Footer(){
    return(
        <footer>
            <ul className={styles.socialList}>
                <li className={styles.socialList}>
                    <FaFacebook />
                </li>
                <li className={styles.socialList}>
                    <FaInstagram />
                </li>
                <li className={styles.socialList}>
                    <FaLinkedin />
                </li>
            </ul>
            <p>Feito por <SayMyName nome="Luis Phillipe" /></p>
        </footer>

    )
}

export default Footer