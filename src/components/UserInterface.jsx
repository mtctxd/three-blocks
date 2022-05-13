const UserInterface = ({ userInterfaceHandlers, fetchedData, error }) => {
  const { setQuery, setIsButtonClicked } = userInterfaceHandlers;

  console.log(`error in interface: ${JSON.stringify(fetchedData)}`);
  return (
    <div className="user-interface">
      <span>Project ID: </span>
      <input type="text" onChange={(event) => setQuery(event.target.value)}/>
      <button
        onClick={() => setIsButtonClicked(true)}
      >Fetch</button>
      <hr />
      <div>
          {`Project ID: ${fetchedData && !error ? fetchedData.id : 'null'}`}
      </div>
      <div>
          {`Project Name: ${fetchedData && !error ? fetchedData.project.name : 'null'}`}
      </div>
    </div>
  );
};

export default UserInterface;
