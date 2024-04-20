import { Tags } from "./Tags"

export const MyCard = ({id, name, tags, description, age, image}) => {

    return (
        <>
        <div>
            <div className="galeria">
                <img src={image}
            alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            </div>
            
            <div>
                {tags && tags.length > 0 &&
                    tags.map((tag, index) => (
                        <Tags key={index} text={tag} color="bg-success" />
                    ))
                }
            </div>
        </div>
        </>
    )
} 