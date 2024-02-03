import React from "react";

const Navbar = () => {
  return (
    <div className="bg-silver_lake_blue-300 flex flex-row justify-end space-x-8 p-6">
      <a href="https://debis.deu.edu.tr/debis.php" target="_blank" className="text-white">
        Debis Giriş
      </a>
      <a href="https://online.deu.edu.tr/" target="_blank" className="text-white">
        Sakai Giriş
      </a>
      <a href="https://webmail7.deu.edu.tr/" target="_blank" className="text-white">
        Mail Giriş
      </a>
    </div>
  );
};
export default Navbar;