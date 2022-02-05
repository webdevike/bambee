const Input = (props): JSX.Element | null => {
  return (
    <>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" id="title" {...props} />
    </>
  );
}

export default Input
