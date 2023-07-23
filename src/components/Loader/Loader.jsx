import { TailSpin } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <TailSpin
      height="70"
      width="70"
      color="blue"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};
