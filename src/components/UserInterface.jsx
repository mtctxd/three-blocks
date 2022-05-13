const UserInterface = ({ userInterfaceHandlers, fetchedData }) => {
  const { setQuery, setIsButtonClicked } = userInterfaceHandlers;
  return (
    <div className="user-interface">
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
