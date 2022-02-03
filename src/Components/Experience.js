const Experience = ({poste, entreprise, mission, duree}) => {
    return ( 
        <div>
            <h3>Poste: {poste}</h3>
            <p>Entreprise: {entreprise}</p>
           <p>Mission: {mission}</p>
           <p>Durée: {duree}</p>
        </div>
     );
}

export default Experience;