import axios from 'axios';
import { API_KEY } from 'utils';

export const fetchData = async (
  url,
  setState,
  setLoadingState,
  returnValue
) => {
  // Set isLoading to true
  setLoadingState(true);

  try {
    // Fetch data
    const res = await axios.get(url, {
      params: {
        api_key: API_KEY,
      },
    });
    const { data } = res;

    // Assign data to state
    if (returnValue) setState(data[returnValue]);
    else setState(data);
  } catch (error) {
    console.log(error);
  } finally {
    // Set isLoading to false no matter if error or not
    setLoadingState(false);
  }
};
