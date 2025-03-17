import styles from './styles.module.css'

export const Search = ({keywords, setKeywords}) => {
    return (
        <div className={styles.search}>
            <input type='text' onChange={(e) => {
                setKeywords(e.target.value)
            }} value={keywords} className={styles.input}/>
        </div>
    )
}


