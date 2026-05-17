interface Props {
  message: string;
}

const ErrorState = ({ message }: Props) => {
  return <p>{message}</p>;
};

export default ErrorState;
