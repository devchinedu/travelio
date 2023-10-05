import React, { useState } from 'react';
import { Button } from '@material-tailwind/react';
import ChatBox from './ChatBox.js';

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatBox = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseChat = () => { // Step 3: Implement the onClose function
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5">
      {isOpen ? (
        // Chat box is open
        <div className="bg-white p-4 rounded-lg shadow-md">
          {/* Chat content goes here */}
          <ChatBox onClose={handleCloseChat} /> {/* Pass onClose function */}
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

export default ChatWidget;
