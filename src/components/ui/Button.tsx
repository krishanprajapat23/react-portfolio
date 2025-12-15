import type {
  ReactNode,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from "react";

// Shared props for styling & optional icon
interface CommonBtnProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

// Button variant
interface BtnProps
  extends CommonBtnProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  type?: "button" | "submit" | "reset"; // optional btn types, default type will be
  href?: never; // can't be used with button element
}

// Link variant (regular anchor)
interface AnchorProps
  extends CommonBtnProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
  href: string;
  type?: never;
}

// Union type of all variants
type LinkButtonProps = BtnProps | AnchorProps;

const Button = ({ children, icon, className, ...props }: LinkButtonProps) => {
  const baseClasses = `btn relative primary-btn ${
    className ?? ""
  }`;

  if ("href" in props && props.href) {
    const { href, ...restAttr } =
      props as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={baseClasses} {...restAttr}>
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </a>
    );
  }

  // if type is not passed then default type = button will take place.
  const { type = "button", ...restAttr } =
    props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={type} className={baseClasses} {...restAttr}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
