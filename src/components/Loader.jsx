import { Puff } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Puff
      height="80"
      width="80"
      radius={1}
      color="#DD8511"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  )
}

export default Loader;