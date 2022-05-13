import { BASE_URL } from '../constants';

const fetchData = async (errorSetter, dataSetter, projectId) => {
  try {
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
  } catch (error) {
    errorSetter(error.message);
  }
};

export default fetchData;
