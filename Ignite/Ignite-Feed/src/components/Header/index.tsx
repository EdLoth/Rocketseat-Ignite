import styles from './Header.module.css'

import igniteLogo from '../../assets/Ignite-logol.svg'

export function Header(){
    return(
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logo do icon ignite" />
            <strong>IGNITE FEED</strong>
        </header>
    )
}