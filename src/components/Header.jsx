import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';


//library.add(fas)


function Header() {
  return (
    <header>
      <h1>Keeper <FontAwesomeIcon icon={faCheckSquare} /></h1>
    </header>
  );
}

export default Header;
