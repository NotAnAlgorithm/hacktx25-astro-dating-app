import React from "react";
import foolImage from "../assets/tarot_free/00.png"
import magicianImage from "../assets/tarot_free/01.png"
import highPriestessImage from "../assets/tarot_free/02.png"
import empressImage from "../assets/tarot_free/03.png"
import emperorImage from "../assets/tarot_free/04.png"
import hierophantImage from "../assets/tarot_free/05.png"
import loversImage from "../assets/tarot_free/06.png"
import chariotImage from "../assets/tarot_free/07.png"
import strengthImage from "../assets/tarot_free/08.png"
import hermitImage from "../assets/tarot_free/09.png"
import wheelOfFortuneImage from "../assets/tarot_free/10.png"
import justiceImage from "../assets/tarot_free/11.png"

const TAROT_CARD = {
    FOOL: foolImage,
    MAGICIAN: magicianImage,
    HIGH_PRIESTESS: highPriestessImage,
    EMPRESS: empressImage,
    EMPEROR: emperorImage,
    HIEROPHANT: hierophantImage,
    LOVERS: loversImage,
    CHARIOT: chariotImage,
    STRENGTH: strengthImage,
    HERMIT: hermitImage,
    WHEEL_OF_FORTUNE: wheelOfFortuneImage,
    JUSTICE: justiceImage,
} as const;

interface Person {
    name: string;
    profile_picture: string;
    card_picture: string;
    zodiac: string;
    age: number;
    gender: string;
    sexuality: string;
    bio: string;
}

interface Front {
    frontBackgroundImage: string;
}

interface ProfileCardProps {
    person: Person;
}

interface FlippableProfileCardProps {
    person: Person;
    card_front: Front;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ person }) => {
    return (
        <div
            style={{
                // background: `url(${person.card_picture}) no-repeat center center`,
                backgroundImage: `url(${person.card_picture})`,
                backgroundSize: "cover", // Ensure the background image covers the entire div
                padding: "20px", // Optional padding for better layout
                borderRadius: "8px", // Optional rounded corners
                width: "300px",
                height: "500px",
                textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                justifyContent: "center",
            }}
        >
            <img
                src={person.profile_picture}
                alt={`${person.name}'s profile`}
                style={{
                    width: "100px", // Adjust the size as necessary
                    height: "100px",
                    borderRadius: "50%", // Round the profile picture
                    objectFit: "cover", // Ensure the image fills the circle
                }}
            />
            <h3>{person.name}</h3>
            <h5>{person.zodiac}</h5>
            <h5>Age: {person.age}</h5>
            <h5>Gender: {person.gender}</h5>
            <h5>Attraction: {person.sexuality}</h5>
            <h5>Bio: {person.bio}</h5>
        </div>
    );
};

const FlippableProfileCard: React.FC<FlippableProfileCardProps> = ({person, card_front}) => {
    return (
        <div className="flip-card"
            style={{
                // backgroundImage: `url(${card_front.frontBackgroundImage})`,
                backgroundSize: "cover", // Ensure the background image covers the entire div
                padding: "2px", // Optional padding for better layout
                borderRadius: "8px", // Optional rounded corners
                width: "300px",
                height: "500px",
                textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
            }}
        >
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img
                        src={card_front.frontBackgroundImage}
                        alt={`${person.name}'s profile`}
                        style={{
                            width: "300px", // Adjust the size as necessary
                            height: "500px",
                            borderRadius: "8px", // Round the profile picture
                            objectFit: "cover", // Ensure the image fills the circle
                        }}
                    />
                </div>
                <div className="flip-card-back">
                    <h3>{person.name}</h3>
                    <h4>{person.zodiac}</h4>
                    <h4>Age: {person.age}</h4>
                    <h4>Gender: {person.gender}</h4>
                    <h4>Attraction: {person.sexuality}</h4>
                    <h4>Bio: {person.bio}</h4>
                </div>
            </div>
        </div>
    );
}

const MyProfile: React.FC = () => {
    fetch('http://127.0.0.1:8000/api/profiles/')
        .then(response => response.json())
        .then(data => console.log(data));
    const person: Person = {
        name: "Jane Doe",
        profile_picture: "n/a",
        card_picture: TAROT_CARD.LOVERS,
        zodiac: "cancerous",
        age: 20,
        gender: "don't have one",
        sexuality: "GAY!",
        bio: "blah blah yap yap performative smth yap blah blah haskyasnyars :3",
    }
    return (
        <div>
            <h1>Your Profile</h1>
            <ProfileCard person={person}/>
        </div>
    );
};

export default MyProfile;
export {ProfileCard, FlippableProfileCard, TAROT_CARD};
