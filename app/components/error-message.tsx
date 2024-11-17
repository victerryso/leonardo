import { HiExclamationTriangle } from "react-icons/hi2";
import { EmptyState } from "./chakra/empty-state";

const ErrorMessage = () => (
  <EmptyState icon={<HiExclamationTriangle />} title="Something went wrong" />
);

export default ErrorMessage;
