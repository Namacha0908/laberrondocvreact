const Project = ({nom, description, url, image}) => {
    return ( 
        <div>
            <h3>{nom}</h3>
            <p>{description}</p>
           <a href={url} title={nom}>{nom}</a>
           <img src={image} alt={nom}/>
        </div>
     );
}

export default Project;