import React, { useState }from 'react'


const [openMe, setOpenMe] = useState(true);
const openHandler = () => {
    setOpenMe(true);
}
const closeHandler = () => {

}


const Header = () => {
  return (
    <div>Header</div>
  )
}

export default Header