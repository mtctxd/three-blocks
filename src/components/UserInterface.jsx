const UserInterface = ({ userInterfaceHandlers, fetchedData }) => {
  const { query, setQuery, setIsButtonClicked } = userInterfaceHandlers;
  return (
    <div>
      <span>Project ID: </span>
      <input type="text" onChange={(event) => setQuery(event.target.value)}/>
      <button
        onClick={() => setIsButtonClicked(true)}
      >Fetch</button>
      <hr />
      <div>
          {`Project ID: ${fetchedData ? fetchedData.id : 'null'}`}
      </div>
      <div>
          {`Project Name: ${fetchedData ? fetchedData.project.name : 'null'}`}
      </div>
    </div>
  );
};

export default UserInterface;
