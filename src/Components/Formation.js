const Formation = ({ecole, annee, specialite}) => {
    return ( 
        <div>
            <h3>Ecole: {ecole}</h3>
            <p>Année: {annee}</p>
           <p>Spécialité: {specialite}</p>
        </div>
     );
}

export default Formation;