import axios from 'axios';

export default (props) => axios.get(props)
  .then((res) => {
    console.log(res.data);
    return res.data;
  })
  .catch((e) => console.log(e));
