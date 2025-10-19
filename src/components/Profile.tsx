import React from "react";
import card from "../assets/tarot-card-temp.jpg"

const enum TAROT_CARD {
    FOOL = "../assets/tarot_free/00.png",
    MAGICIAN = "../assets/tarot_free/01.png",
    HIGH_PRIESTESS = "../assets/tarot_free/02.png",
    EMPRESS = "../assets/tarot_free/03.png",
    EMPEROR = "../assets/tarot_free/04.png",
    HIEROPHANT = "../assets/tarot_free/05.png",
    LOVERS = "../assets/tarot_free/06.png",
    CHARIOT = "../assets/tarot_free/07.png",
    STRENGTH = "../assets/tarot_free/08.png",
    HERMIT = "../assets/tarot_free/09.png",
    WHEEL_OF_FORTUNE = "../assets/tarot_free/10.png",
    JUSTICE = "../assets/tarot_free/11.png",
}

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

interface ProfileCardProps {
    person: Person;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ person }) => {
    return (
        <div
            style={{
                background: `url(${person.card_picture}) no-repeat center center`,
                backgroundSize: "cover", // Ensure the background image covers the entire div
                padding: "20px", // Optional padding for better layout
                borderRadius: "8px", // Optional rounded corners
                width: "300px",
                textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
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
            <li>
                <ol>Age: {person.age}</ol>
                <ol>Gender: {person.gender}</ol>
                <ol>Attraction: {person.sexuality}</ol>
                <ol>Bio: {person.bio}</ol>
            </li>
        </div>
    );
};

const MyProfile: React.FC = () => {
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
export {ProfileCard, TAROT_CARD};
