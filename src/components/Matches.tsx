import React from "react";
import {ProfileCard, TAROT_CARD} from "./Profile";

const Galaxy: React.FC = () => {
    return (
        <div>
            <h1>Your matches!</h1>
            <div className="profile-container">
                <div>
                    <ProfileCard person={{
                        name: "Mordecai Boon",
                        profile_picture: "n/a",
                        card_picture: TAROT_CARD.MAGICIAN,
                        zodiac: "Taurus",
                        age: 25,
                        gender: "man",
                        sexuality: "gay",
                        bio: "I love music. Ask me to play guitar.",
                    }}/>
                </div>
                <div>
                    <ProfileCard person={{
                        name: "Grace Holland",
                        profile_picture: "n/a",
                        card_picture: TAROT_CARD.CHARIOT,
                        zodiac: "Gemini",
                        age: 23,
                        gender: "woman",
                        sexuality: "straight",
                        bio: "I love photographing the night sky, will you be my star?",
                    }}/>
                </div>
                <div>
                    <ProfileCard person={{
                        name: "Tom Smith",
                        profile_picture: "n/a",
                        card_picture: TAROT_CARD.STRENGTH,
                        zodiac: "Virgo",
                        age: 27,
                        gender: "man",
                        sexuality: "GAY",
                        bio: "Tom is my name and working out is my game!",
                    }}/>
                </div>
                <div>
                    <ProfileCard person={{
                        name: "Patrica Barnes",
                        profile_picture: "n/a",
                        card_picture: TAROT_CARD.FOOL,
                        zodiac: "Pisces",
                        age: 21,
                        gender: "nah",
                        sexuality: "GAY!",
                        bio: "Let's all love each other a little more.",
                    }}/>
                </div>
            </div>
        </div>
    )
}

export default Galaxy
