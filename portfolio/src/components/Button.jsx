const Button = ({children, onClick, variant, className}) => {
    const variantClasses = {
        primary: `bg-blueSecondary text-white px-[49px] py-[7px] rounded-full dm-sans-text-bold hover:bg-[#425A62] border border-white transition-all ${className}`,
        secondary: `bg-transparent border border-blueSecondary text-blueSecondary px-[49px] py-[7px] rounded-full dm-sans-text-bold hover:bg-[#71A4B64D] hover:opacity-80 transition-all ${className}`,
    }

  return (
    <button className={variantClasses[variant]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;