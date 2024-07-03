import React, { useState, useEffect } from "react";
import Popup from "./components/Popup";
import "./App.css";
import "./Popup.css";

const App: React.FC = () => {
  const [isBlocked, setIsBlocked] = useState<boolean>(true);
  const closePopup = () => {
    setIsBlocked(false);
  };

  useEffect(() => {
    if (isBlocked) {
      const popupElement = document.getElementById("popup");
      if (popupElement) {
        popupElement.style.display = "block";
      }
    }
  }, [isBlocked]);

  return (
    <div className="App">{isBlocked && <Popup closePopup={closePopup} />}</div>
  );
};

export default App;
