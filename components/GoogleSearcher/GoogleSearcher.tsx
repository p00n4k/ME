const GoogleSearcher = () => {
    return (
        <div><div style={{ marginTop: '20px' }}>
            <form action="https://www.google.com/search" method="get" target="_blank">
                <input
                    type="text"
                    name="q"
                    placeholder="Search Google"
                    style={{
                        padding: '10px',
                        width: '80%',
                        maxWidth: '400px',
                        borderRadius: '5px',
                        border: '1px solid #ccc'
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: '10px 20px',
                        marginLeft: '10px',
                        borderRadius: '5px',
                        border: 'none',
                        backgroundColor: '#4285F4',
                        color: 'white',
                        cursor: 'pointer'
                    }}
                >
                    Search
                </button>
            </form>
        </div></div>
    )
}
export default GoogleSearcher