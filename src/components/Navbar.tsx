import React from "react";

interface NavbarProps {
  left?: React.ReactNode;
  middle?: React.ReactNode;
  right?: React.ReactNode;
  color?: string
}

const Navbar: React.FC<NavbarProps> = ({ left, middle, right, color }) => {
  return (
    <nav className={`w-full max-h-20 ${color ? color : 'bg-white'} shadow-md px-2 py-2`}>
      <div className="w-full mx-auto flex items-center justify-between">
        <div className="flex items-start space-x-2">
          {left}
        </div>

        <div className="flex items-center space-x-2">
          {middle}
        </div>

        <div className="flex items-end space-x-2">
          {right}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
