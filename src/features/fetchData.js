import { BASE_URL } from '../constants';

const fetchData = async (projectId) => {
  try {
    let projectData = null;

    if (!projectId) {
      const initData = await fetch(`${BASE_URL}/init`);
      const initJson = await initData.json();

      projectData = await fetchData(initJson.id);

      return projectData;
    } else {
      projectData = await fetch(`${BASE_URL}/project/${projectId}`);
      return projectData.json();
    }
  } catch (error) {
      console.log(error);
  }
};

export default fetchData;
