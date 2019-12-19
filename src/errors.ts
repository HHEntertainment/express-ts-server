interface ErrorMap {
  [key: string]: ErrorDetail;
};

interface ErrorDetail {
  code: string;
  message: string;
}

export enum DefinedErrors {
  ERROR_404_NOT_FOUND = "ERROR_404_NOT_FOUND",
}

const errorMap: ErrorMap = {
  [DefinedErrors.ERROR_404_NOT_FOUND]: { code: "ERROR_404_NOT_FOUND", message: "Resource not found" },
};

export default errorMap;