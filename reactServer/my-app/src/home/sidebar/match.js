export default function Match(props) {
    const {team1, team2, time, link} = props;
    return (
        <div className="match">
            <div className="team">
                <p>{team1.shortName}</p>
                <img src={team1.image_url} alt={team1.name} />
            </div>
            <div className="time"><p>{time}</p></div>
            <div className="team">
                <img src={team2.image_url} alt={team2.name} />
                <p>{team2.shortName}</p>
            </div>
            {link && (<div className="match-link"><i className="fa-solid fa-arrow-right match-link"></i></div>)}
        </div>
    )
}