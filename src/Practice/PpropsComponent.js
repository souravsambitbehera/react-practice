import { getImageUrl } from "./Utils";
const Avatar=({ person, size=70 })=> {
  return (
    <>
    <section className="profile">
    <h2>{person.name}</h2>
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
    <ul>
        <li>
            <b>Profession :</b>
            {person.profession}
        </li>
        <li>
            <b>Awards: {person.awards}</b>
            {person.awardsName}
        </li>
        <li>
            <b>Discovered: </b>
            {person.discovered}
        </li>
    </ul>
    </section>
    
    </>
  );
}

export default function Profile() {
  return (
    <div> 
      <Avatar
        person={{ 
          name: 'Maria Skłodowska-Curie', 
          imageId: 'szV5sdG',
          profession:"physicist and chemist",
          awards:"4",
          awardsName :"(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
          discovered : "polonium (element)"
        }}
      />
      <Avatar
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2',
          profession:"geochemist",
          awards:"2",
          awardsName :"(Miyake Prize for geochemistry, Tanaka Prize)",
          discovered : "a method for measuring carbon dioxide in seawater"
        }}
      />
      
    </div>
  );
}
