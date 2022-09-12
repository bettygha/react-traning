import './card-styles.css';

const Card = (props) => {
    const { name, email, id } = props.monster;
    return (
        <div className='card-container' key={id}>
            {/* // <h1  key = {monster.id}>{monster.name}</h1> */}
            <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2`}></img>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;