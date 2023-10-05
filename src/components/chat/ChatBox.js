import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@material-tailwind/react';
import userAvatar from '../../assets/img/user.jpg'; // Replace with user avatar image
import botAvatar from '../../assets/img/assistant.jpg'; // Replace with bot avatar image

export default function ChatBox({ onClose }) {
  const chatContent = [
    {
      id: 1,
      message: "Hello, I'm your virtual travel assistant. How can I help you today?",
      sender: "bot",
    },
    {
      id: 2,
      message: "I would like to book a flight to New York",
      sender: "user",
    },
    {
      id: 3,
      message: "Sure, when would you like to travel?",
      sender: "bot",
    },
    // Add more chat messages as needed
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [chat, setChat] = useState(chatContent);
  const [message, setMessage] = useState("");

  const chatContentRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the chat content when new messages are added
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, [chat]);

  const toggleChatBox = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!message) return;
    setChat([...chat, { id: chat.length + 1, message, sender: "user" }]);
    setMessage("");
  };

  return (
    <div className="fixed bottom-5 right-5">
      {isOpen ? (
        // Chat box is open
        <div className="bg-white p-4 rounded-lg shadow-xl border w-80">
          {/* Close button */}
          <Button
            color="red" // Customize the button color as needed
            onClick={onClose} // Call the onClose function to close the chat box
            className="absolute top-2 right-2 rounded-full h-6 w-6 flex items-center justify-center cursor-pointer"
          >
            <i className="fas fa-times text-white"></i>
          </Button>
          {/* Chat content goes here */}
          <div
            ref={chatContentRef}
            className="chat-content max-h-80 overflow-y-auto"
          >
            {chat.map((item) => (
              <div
                key={item.id}
                className={`flex mb-4 ${
                  item.sender === "bot" ? "items-start" : "items-end"
                }`}
              >
                {item.sender === "bot" && (
                  <img
                    src={botAvatar}
                    alt="Bot"
                    className="w-8 h-8 mr-2 rounded-full object-cover"
                  />
                )}
                <div
                  className={`chat-bubble ${
                    item.sender === "bot" ? "bg-blue-100" : "bg-gray-100"
                  } rounded-lg p-3 max-w-xs`}
                >
                  {item.message}
                </div>
                {item.sender === "user" && (
                  <img
                    src={userAvatar}
                    alt="User"
                    className="w-8 h-8 ml-2 rounded-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>
          {/* Chat form goes here */}
          <form onSubmit={handleFormSubmit} className="flex mt-4">
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={handleInputChange}
              className="flex-1 border border-gray-300 rounded-md px-4 py-2 mr-4 focus:outline-none focus:border-blue-500"
            />
            <Button
              color="blue"
              type="submit"
              className="px-4 py-2 rounded-md"
            >
              Send
            </Button>
          </form>
        </div>
      ) : (
        // Chat bubble
        <Button
          color="blue"
          onClick={toggleChatBox}
          className="rounded-full h-12 w-12 flex items-center justify-center cursor-pointer"
        >
          <i className="fas fa-comment text-white"></i>
        </Button>
      )}
    </div>
  );
}
