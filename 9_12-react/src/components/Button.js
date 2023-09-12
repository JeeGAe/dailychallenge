function Button({ children, handleClick }){
  return (
    <button className="Button" onClick={handleClick}>{children}</button>
  )
}

export default Button;