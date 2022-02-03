const Skill = ({nom, niveau}) => {
    return ( 
        <div>
            <h3>{nom}</h3>
            <p>Niveau: {niveau}</p>
        </div>
     );
}

export default Skill;