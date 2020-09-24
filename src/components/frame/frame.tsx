import { Navbar } from '../navbar/Navbar'
import styles from './frame.module.scss'
export default function Frame() {
    return ( 
    <div className={styles.frameContainer}>
        <Navbar></Navbar>
    </div>
    )
}