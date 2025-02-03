import styles from './page.module.css';

const Tool = () => {
    return (
        <div className={styles.tool}>
            <br />
            <div className={styles.categoriesContainer}>

                {/* AI Tools Category */}
                <div className={styles.categoryBox}>
                    <h2>AI Tools</h2>
                    <ul>
                        <li><a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className={styles.geekbutton}>ChatGPT</a></li>
                        <li><a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className={styles.geekbutton}>Claude</a></li>
                        <li><a href="https://www.google.com/search?q=Gemini+AI+Tool" target="_blank" rel="noopener noreferrer" className={styles.geekbutton}>Gemini</a></li>
                        <li><a href="https://www.deepseek.ai" target="_blank" rel="noopener noreferrer" className={styles.geekbutton}>DeepSeek</a></li>
                    </ul>
                </div>

                {/* Design Tools Category */}
                <div className={styles.categoryBox}>
                    <h2>Design Tools</h2>
                    <ul>
                        <li><a href="https://www.canva.com" target="_blank" rel="noopener noreferrer" className={styles.geekbutton}>Canva</a></li>
                    </ul>
                </div>

                {/* Google Tools Category */}
                <div className={styles.categoryBox}>
                    <h2>Google Tools</h2>
                    <ul>
                        <li><a href="https://docs.google.com/spreadsheets/" target="_blank" rel="noopener noreferrer" className={styles.geekbutton}>Google Sheets</a></li>
                        <li><a href="https://docs.google.com/document/" target="_blank" rel="noopener noreferrer" className={styles.geekbutton}>Google Docs</a></li>
                        <li><a href="https://docs.google.com/presentation/" target="_blank" rel="noopener noreferrer" className={styles.geekbutton}>Google Slides</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Tool;
