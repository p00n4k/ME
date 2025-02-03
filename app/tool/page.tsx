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
                        <div>
                            <a
                                href="https://chat.openai.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.geekbutton} ${styles.chatgpt}`}
                            >
                                <img src="/images/chatgpt-icon.jpg" alt="ChatGPT" className={styles.icon} />
                                ChatGPT
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://claude.ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.geekbutton} ${styles.claude}`}
                            >
                                <img src="/images/claude-icon.png" alt="Claude" className={styles.icon} />
                                Claude
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://www.google.com/search?q=Gemini+AI+Tool"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.geekbutton} ${styles.gemini}`}
                            >
                                <img src="/images/gemini-icon.png" alt="Gemini" className={styles.icon} />
                                Gemini
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://www.deepseek.ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.geekbutton} ${styles.deepseek}`}
                            >
                                <img src="/images/deepseek-icon.png" alt="DeepSeek" className={styles.icon} />
                                DeepSeek
                            </a>
                        </div>
                    </ul>
                </div>

                {/* Design Tools Category */}
                <div className={styles.categoryBox}>
                    <h2>Design Tools</h2>
                    <ul>
                        <div>
                            <a
                                href="https://www.canva.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.geekbutton} ${styles.canva}`}
                            >
                                <img src="/images/canva-icon.jpg" alt="Canva" className={styles.icon} />
                                Canva
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://www.figma.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.geekbutton} ${styles.figma}`}
                            >
                                <img src="/images/figma-icon.png" alt="Figma" className={styles.icon} />
                                Figma
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://www.sketch.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.geekbutton} ${styles.sketch}`}
                            >
                                <img src="/images/sketch-icon.png" alt="Sketch" className={styles.icon} />
                                Sketch
                            </a>
                        </div>
                    </ul>
                </div>

                {/* Google Tools Category */}
                <div className={styles.categoryBox}>
                    <h2>Google Tools</h2>
                    <ul>
                        <div>
                            <a
                                href="https://docs.google.com/spreadsheets/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.geekbutton} ${styles.googleSheets}`}
                            >
                                <img src="/images/google-sheets-icon.png" alt="Google Sheets" className={styles.icon} />
                                Google Sheets
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://docs.google.com/document/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.geekbutton} ${styles.googleDocs}`}
                            >
                                <img src="/images/google-docs-icon.png" alt="Google Docs" className={styles.icon} />
                                Google Docs
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://docs.google.com/presentation/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.geekbutton} ${styles.googleSlides}`}
                            >
                                <img src="/images/google-slides-icon.png" alt="Google Slides" className={styles.icon} />
                                Google Slides
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://drive.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.geekbutton} ${styles.googleDrive}`}
                            >
                                <img src="/images/google-drive-icon.png" alt="Google Drive" className={styles.icon} />
                                Google Drive
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://calendar.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.geekbutton} ${styles.googleCalendar}`}
                            >
                                <img src="/images/google-calendar-icon.png" alt="Google Calendar" className={styles.icon} />
                                Google Calendar
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://mail.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.geekbutton} ${styles.googleMail}`}
                            >
                                <img src="/images/google-mail-icon.png" alt="Gmail" className={styles.icon} />
                                Gmail
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://photos.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.geekbutton} ${styles.googlePhotos}`}
                            >
                                <img src="/images/google-photos-icon.png" alt="Google Photos" className={styles.icon} />
                                Google Photos
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://translate.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.geekbutton} ${styles.googleTranslate}`}
                            >
                                <img src="/images/google-translate-icon.png" alt="Google Translate" className={styles.icon} />
                                Google Translate
                            </a>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Tool;
