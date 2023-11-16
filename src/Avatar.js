import { getImageUrl } from "./utils.js";

export default function Avatar({ person, size })
{
    return(
        <div className="borda">
            <img
                className="avatar"
                src={getImageUrl(person)}
                alt={person.name}
                whidth={size}
                heigth={size}
            />
        </div>
    );
}
