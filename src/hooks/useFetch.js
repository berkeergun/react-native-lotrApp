import {useEffect, useState} from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = async () => {
    try {
      setLoading(true)
      const {data: responseData} = await axios.get(url,{
        headers:{
          'Authorization':'Bearer JewTx4dP2ltPh93C5SrR'
        }
      });
      setData(responseData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
      // console.log(err.message)
    }
  };

  return {error, loading, data};
};

export default useFetch;