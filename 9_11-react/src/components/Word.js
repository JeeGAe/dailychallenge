import './css/Word.css'

function Word({ r_link, r_word, r_hanja, r_des}){
    return (
        <div className="item">
            <div className="word">
                <a href={r_link}>{r_word} {r_hanja}
                </a>
            </div>
            <p className="description">{r_des}</p>
        </div>
    )
}
export default Word;