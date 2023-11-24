import { isAxiosError } from "axios";

export const ErrorHelpers = {
  getMessage: (error: unknown) => {
    if (isAxiosError<{ message: string | string[] }>(error)) {
      if (error.response?.data?.message) {
        const { message } = error.response.data;
        return Array.isArray(message) ? message.join(", ") : message;
      }
      return undefined;
    }
    if (error instanceof Error) {
      return error.message;
    }
    return undefined;
  },
};
