import styles from './LinkBoard.module.css';
const LinkBoard = () => {
    return (
        <div>      <a href="https://www.canva.com/design/DAGd-rERVtc/Hl7R-_F_qGLZ6KeDHYyBYQ/edit" target="_blank" rel="noopener noreferrer" className={styles.geekbutton} >
            Vision Board
        </a>
            <a href="https://www.blogger.com/blog/posts/7835376191365107012" target="_blank" rel="noopener noreferrer" className={styles.geekbutton}>
                Book Review
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.gistda.gflood_warning_beta&hl=th" target="_blank" rel="noopener noreferrer" className={styles.geekbutton}>
                Work
            </a>
            <a href="https://www.canva.com/design/DAGeAmRqYfc/U4vnm3iVcUsgSuCC2sASCw/edit" target="_blank" rel="noopener noreferrer" className={styles.geekbutton}>
                Resume
            </a>
            <br />



        </div>
    )
}
export default LinkBoard