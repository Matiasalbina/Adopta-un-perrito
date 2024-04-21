import { Tags } from "./Tags"

export const MyCard = ({id, name, tags, description, age, image}) => {

    return (
        <>
        <div>
            <div className="galeria">
                <img src={image}
            alt="" />
            <h4>{name}</h4>
            <p>{description}</p>
             <div className="button">
                {tags && tags.length > 0 &&
                    tags.map((tag, index) => (
                        <Tags key={index} text={tag} color="primary" />
                    ))
                }
            </div>
            </div>
        </div>
        </>
    )
} 