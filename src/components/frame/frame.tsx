import { Navbar } from '../navbar/Navbar'
import styles from './frame.module.scss'
export default function Frame() {
    return ( 
    <div className={styles.frameContainer}>
        <Navbar></Navbar>
        <div className={styles.frameContent}>

            <h1>Coming soon!</h1>
        </div>

    </div>
    )
}