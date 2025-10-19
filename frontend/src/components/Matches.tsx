import React from "react";
import {FlippableProfileCard, ProfileCard, TAROT_CARD} from "./Profile";

const Galaxy: React.FC = () => {
    return (
        <div>
            <h1>Your Matches</h1>
            <div className="profile-container">
                <div>
                    <FlippableProfileCard person={{
                        name: "Mordecai Boon",
                        profile_picture: "n/a",
                        card_picture: TAROT_CARD.MAGICIAN,
                        zodiac: "Taurus",
                        age: 25,
                        gender: "man",
                        sexuality: "gay",
                        bio: "I love music. Ask me to play guitar.",
                    }} card_front={{
                        frontBackgroundImage: TAROT_CARD.MAGICIAN
                    }} />
                    <button className="chat-btn">
                        <a href="/chat">Chat</a>
                    </button>
                </div>
                <div>
                    <FlippableProfileCard person={{
                        name: "Grace Holland",
                        profile_picture: "n/a",
                        card_picture: TAROT_CARD.CHARIOT,
                        zodiac: "Gemini",
                        age: 23,
                        gender: "woman",
                        sexuality: "straight",
                        bio: "I love photographing the night sky, will you be my star?",
                    }} card_front={{
                        frontBackgroundImage: TAROT_CARD.CHARIOT
                    }}
                    />
                    <button className="chat-btn">
                        <a href="/chat">Chat</a>
                    </button>
                </div>
                <div>
                    <FlippableProfileCard person={{
                        name: "Tom Smith",
                        profile_picture: "n/a",
                        card_picture: TAROT_CARD.STRENGTH,
                        zodiac: "Virgo",
                        age: 27,
                        gender: "man",
                        sexuality: "GAY",
                        bio: "Tom is my name and working out is my game!",
                    }} card_front={{
                        frontBackgroundImage: TAROT_CARD.STRENGTH
                    }}/>
                    <button className="chat-btn">
                        <a href="/chat">Chat</a>
                    </button>
                </div>
                <div>
                    <FlippableProfileCard person={{
                        name: "Patrica Barnes",
                        profile_picture: "n/a",
                        card_picture: TAROT_CARD.FOOL,
                        zodiac: "Pisces",
                        age: 21,
                        gender: "nah",
                        sexuality: "GAY!",
                        bio: "Let's all love each other a little more.",
                    }} card_front={{
                        frontBackgroundImage: TAROT_CARD.FOOL
                    }}/>
                    <button className="chat-btn">
                        <a href="/chat">Chat</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Galaxy
