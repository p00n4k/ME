import styles from './page.module.css';
const Hobby = () => {
    return (
        <div className={styles.hobby}>
            <img src="/images/Bg.jpg" alt="Hobby" style={{ width: '500px', height: 'auto', borderRadius: '10px', marginTop: '-150px' }} />
            <br />
            <div>
                <div>
                    <a href="https://www.netflix.com/browse" target="_blank" rel="noopener noreferrer" className={styles.geekbutton} >
                        Netflix
                    </a>
                    <a href="https://liquipedia.net/" target="_blank" rel="noopener noreferrer" className={styles.geekbutton}>
                        Liquidpedia
                    </a>
                    <a href="https://www.chess.com/" target="_blank" rel="noopener noreferrer" className={styles.geekbutton}>
                        Chess
                    </a>
                    <a href="https://dooball66z.com/" target="_blank" rel="noopener noreferrer" className={styles.geekbutton}>
                        Football
                    </a>
                    <a href="https://www.twitch.tv/" target="_blank" rel="noopener noreferrer" className={styles.geekbutton}>
                        Twitch
                    </a>
                    <a href="https://www.bilibili.com/" target="_blank" rel="noopener noreferrer" className={styles.geekbutton} >
                        Bilibili
                    </a>


                </div>
            </div>
        </div>
    )
}
export default Hobby