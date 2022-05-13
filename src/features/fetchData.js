import { BASE_URL } from '../constants';

const fetchData = async (errorSetter, projectId) => {
  try {
    let projectData = null;

    if (!projectId) {
      const initData = await fetch(`${BASE_URL}/init`);
      const initJson = await initData.json();

      projectData = await fetchData(errorSetter, initJson.id);
    } else {
      projectData = await fetch(`${BASE_URL}/project/${projectId}`);
    }

    if (!projectData.ok) {
      errorSetter(`Something went wrong: ${projectData.status}`);

      console.log(projectData);
      return projectData;
    }
    errorSetter(false);
    return projectData.json();
  } catch (error) {
    errorSetter(`Something went wrong: ${error.status}`);
  }
};

export default fetchData;
