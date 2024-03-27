import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center"style={{ display: 'flex' , }}>
      <div className="flex items-center">
        <img src={"logo"} alt="Logo" className="h-10 mr-2" />
        <span className="text-white text-lg font-bold">Ritika Garg </span>
      </div>

      <nav className="navmenu flex items-center space-x-4 font-poppins" style={{ marginLeft:"600px" }}>
        <div className="text-white hover:text-gray-300" style={{ fontWeight: 700, height: '120px', fontSize: '20px' ,display: 'flex', marginLeft:"100px", marginTop:"10px" }}>Blog</div>
        <div className="text-white hover:text-gray-300" style={{ fontWeight: 700, height: '120px', fontSize: '20px', display: 'flex', marginLeft:"100px", marginTop:"10px" }}>Case study</div>
        <div className="text-white hover:text-gray-300" style={{ fontWeight: 700, height: '120px', fontSize: '20px' ,display: 'flex', marginLeft:"100px" , marginTop:"10px"}}>About me</div>
        <div className="text-white hover:text-gray-300" style={{ fontWeight: 700, height: '120px', fontSize: '20px' ,display: 'flex', marginLeft:"100px" , marginTop:"10px"}}>Contact</div>
      </nav>
    </header>
  );
}

export default Header;
