import React from 'react';
import { Link, Button } from "./styles";

const ButtonComponent = ({ children, href, to, ...props }) => {
  if (href || to) {
    return (
      <Link href={href} to={to} {...props}>
        { children }
      </Link>
    )
  }

  return (
    <Button {...props}>
      { children }
    </Button>
  )
}

export default ButtonComponent;
