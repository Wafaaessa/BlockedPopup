import React from "react";
import pop from "../assets/_1897f9a3-a067-4073-a790-a752e4723bd8 (3) 1 (1).png";

interface PopupProps {
  closePopup: () => void;
}
const Popup: React.FC<PopupProps> = ({ closePopup }) => {
  return (
    <div id="popup">
      <img
        src={pop}
        alt="Image Block"
        style={{
          maxWidth: "100%",
          borderRadius: "10px",
          marginTop: "10px",
          width: "120px",
          height: "120px",
        }}
      />
      <p className="wrong">Something Went Wrong</p>
      <p className="block">You are blocked, please contact us.</p>
      <button onClick={closePopup}>Cancel</button>
    </div>
  );
};
export default Popup;
