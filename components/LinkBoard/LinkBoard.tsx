import styles from './LinkBoard.module.css';
const LinkBoard = () => {
    return (
        <div>      <a href="https://www.canva.com/design/DAGd-rERVtc/Hl7R-_F_qGLZ6KeDHYyBYQ/edit" target="_blank" rel="noopener noreferrer" className={styles.geekbutton} >
            Vision Board
        </a>
            <a href="https://www.notion.so/0bcc938f9dbe4063adf599ec7e921e17?v=4518033290974e54b0addf41caa77c4a" target="_blank" rel="noopener noreferrer" className={styles.geekbutton}>
                Book Review
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className={styles.geekbutton}>
                Work
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className={styles.geekbutton}>
                Resume
            </a>

        </div>
    )
}
export default LinkBoard