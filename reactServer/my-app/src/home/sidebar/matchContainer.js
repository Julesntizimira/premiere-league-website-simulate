import Match from "./match";

export default function MatchContainer (props) {
    const {container} = props;
    const {time, team1, team2, link, tv} = container;
    return (
        <div className="match-container">
            <Match 
                team1={team1}
                time={time}
                team2={team2}
                link={link ? link : null }
            />
            {tv && ( 
            <div className="tv-logo">
                <img src="images/supersport-logo.png" alt="" />
            </div>
            )}
        </div>
    )
}