import Link from "next/link";
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.link}>ME</Link>
            <Link href="https://calendar.google.com/calendar/u/0/r" className={styles.link}>Calendar</Link>
            <Link href="https://calendar.google.com/calendar/u/0/r/tasks" className={styles.link}>Tasks</Link>
            <Link href="https://docs.google.com/spreadsheets/d/1XZiSrATWSK1LEom-j97oJ91jenVYjpJaujmgWC6ugV8/edit?gid=34336380#gid=34336380" className={styles.link}>Money</Link>
        </nav>
    );
}

export default Navbar;
