import React, { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';

const socket = io('http://localhost:3001'); // adjust if your server runs elsewhere

interface Message {
    sender: string;
    message: string;
}

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [username] = useState("Jane Doe");

    const sendMessage = () => {
        if (!input.trim()) return;

        const newMessage: Message = { sender: username, message: input };
        socket.emit('send_message', newMessage);
        setMessages((prev) => [...prev, newMessage]);
        setInput('');
    };

    useEffect(() => {
        socket.on('receive_message', (data: Message) => {
            setMessages((prev) => [...prev, data]);
        });

        return () => {
            socket.off('receive_message');
        };
    }, []);

    return (
        <div style={styles.container}>
            <h3>Chat as <strong>{username}</strong></h3>
            <div style={styles.chatBox}>
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        style={msg.sender === username ? styles.myMessage : styles.otherMessage}
                    >
                        <strong>{msg.sender}: </strong>{msg.message}
                    </div>
                ))}
            </div>
            <div style={styles.inputRow}>
                <input
                    style={styles.input}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type a message..."
                />
                <button style={styles.button} onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: { width: '400px', margin: '50px auto', fontFamily: 'Calibre' },
    chatBox: {
        border: '1px solid #ccc',
        padding: '10px',
        height: '400px',
        overflowY: 'scroll',
        marginBottom: '10px',
        background: 'lavenderblush',
        borderRadius: "8px",
    },
    inputRow: { display: 'flex' },
    input: { flex: 1, padding: '10px' },
    button: { padding: '10px' },
    myMessage: { textAlign: 'right', color: 'blue', margin: '5px 0' },
    otherMessage: { textAlign: 'left', color: 'green', margin: '5px 0' },
};

export default Chat;
