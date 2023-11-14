import React from "react";
import "./Link.css";

type LinkProps = {
  name: string;
  logo: string;
  isSelected: boolean;
  onClick: () => void;
  isOpen: boolean;
};

const Link: React.FC<LinkProps> = (props) => {
  const { name, logo, isSelected, onClick, isOpen } = props;

  return (
    <div
      className={`link ${isSelected && isOpen ? "link-selected-open" : ""}`}
      onClick={onClick}
    >
      <span className={`${isSelected && !isOpen ? "link-iconSelected" : ""}`}>
        <img className="link-icon" src={logo} alt={name} />
      </span>
      <div className={`link-text ${isSelected ? "link-text-selected" : ""}`}>
        {name}
      </div>
    </div>
  );
};

export default Link;
