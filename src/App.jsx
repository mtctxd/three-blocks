import Canva from './components/Canva';
import UserInterface from './components/UserInterface';

import useFetchData from './hooks/useFetchData';

const App = () => {
  const { fetchedData, error, setIsButtonClicked, setQuery } = useFetchData();

  console.log(error);

  console.log(fetchedData);
  return (
    <div className="App">
      <UserInterface
        userInterfaceHandlers={{ setQuery, setIsButtonClicked }}
        fetchedData={fetchedData}
      />
      {error && (
        <div className='error-message'>
          error
        </div>
      )}
      {fetchedData && <Canva fetchedData={fetchedData.project} />}
    </div>
  );
};

export default App;
