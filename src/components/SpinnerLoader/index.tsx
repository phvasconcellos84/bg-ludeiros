import Spinner from "../../assets/gif-dice.gif";

interface SpinnerLoaderProps {
  width?: number;
}

const SpinnerLoader = (props: SpinnerLoaderProps) => (
  <img src={Spinner} alt="Loading..." width={props?.width || 90} />
);

export default SpinnerLoader;
