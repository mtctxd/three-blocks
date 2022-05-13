import { BASE_URL } from '../constants';

const fetchData = async (errorSetter, dataSetter, projectId) => {
  try {
      console.log(`projectId: ${projectId}`);
    if (projectId) {
      const data = await fetch(`${BASE_URL}/project/${projectId}`);
      if (!data.ok) {
        errorSetter(`Something went wrong. Status coed: ${data.status}`);
      } else {
        const json = await data.json();
        errorSetter(false);
        dataSetter(json);
      }

      return;
    }

    console.log(`!projectId ${projectId}`);
      const initialData = await fetch(`${BASE_URL}/init`);

      if (!initialData.ok) {
        errorSetter(initialData.message);
      } else {
        const json = await initialData.json();

        const data = await fetch(`${BASE_URL}/project/${json.id}`);

        if (!data.ok) {
          errorSetter(`Something went wrong. Status coed: ${data.status}`);
        } else {
          const json = await data.json();
          errorSetter(false);
          dataSetter(json);
        }
      }

      return;
    console.log('asdasd');
  } catch (error) {
    errorSetter(error.message);
  }
};

export default fetchData;
