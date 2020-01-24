import axios from 'axios';

export default async (props) => axios.get(props)
  .then((res) => {
    console.log(res.data);
    return res.data;
  })
  .catch((e) => console.log(e));
