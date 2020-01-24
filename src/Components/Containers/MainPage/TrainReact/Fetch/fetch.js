import axios from 'axios';

export default async function fetchInfo(props) {
  return await axios.get(props)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((e) => console.log(e));
}
