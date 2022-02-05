import { ReactChild } from "react";

const Button = (props): JSX.Element | null => {
  const {  type, children, }: { type?: 'button' | 'submit' | 'reset', children: ReactChild} = props
  return (
    <>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type={type} {...props}>{children}</button>
    </>
  );
}

export default Button
