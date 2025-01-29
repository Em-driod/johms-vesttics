import React from 'react';  

const Navbar = () => {  
  return (  
    <nav className="bg-black text-white flex items-center justify-between px-[40px] py-[10px] fixed  z-50 top-0 w-full">  
      <div><img className="w-[70px]" src="jb.jpg" alt="Logo" /></div>  
      <div className="flex capitalize gap-8">  
        <p className="hover:text-gray-400">Home</p>  
        <p className="hover:text-gray-400">Shop</p>  
        <p className="hover:text-gray-400">Products</p>  
        <p className="hover:text-gray-400">Blog</p>  
        <p className="hover:text-gray-400">Page</p>  
      </div>  
      <div className="flex items-center gap-4">  
        <span className="hover:text-gray-400">🔍</span>  
        <span className="hover:text-gray-400">👤</span>  
        <span className="hover:text-gray-400">❤️</span>  
        <span className="hover:text-gray-400">🛒</span>  
      </div>  
    </nav>  
  );  
};  

export default Navbar;