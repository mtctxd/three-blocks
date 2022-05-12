import { useEffect, useState } from 'react';
import Canva from './components/Canva';
import fetchData from './features/fetchData';

const App = () => {
  const [fetchedData, setfetchedData] = useState(null);

  useEffect(() => {
    fetchData('cl335ru56000x09mnejyk9tu2-3616228575681977').then(setfetchedData);
  }, []);

  console.log(fetchedData);
  return (
    <div className="App" style={{ width: '100vw', height: '100vh' }}>
      {fetchedData && <Canva fetchedData={fetchedData.project}/>}
    </div>
  );
};

export default App;
