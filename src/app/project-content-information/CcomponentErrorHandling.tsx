import { BadInputError } from '@/common/bad-input-error';
import { ConflictError } from '@/common/conflict-error';
import { ForbiddenError } from '@/common/forbidden-error';
import { NotFoundError } from '@/common/not-found-error';
import { UnauthorizedError } from '@/common/unauthorized-error';
import { CustomHttpError } from '@/helpers/customHttpError';
import type { FormError } from '@/models/types/form-error.type';
import type { responseErrorDataType } from '@/models/types/response-error-data.type';
import type { StateError } from '@/models/types/state-error.type';
import { CustomUserResponseMessage } from '@/shared/constants/custom-response-messages';
import { initialFormError } from '@/shared/data/initial-form-error';
import { serverMockErrorResponse } from '@/shared/data/server-mock-error-response';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
export default function ComponentErrorHandling() {

  /**Constants */
  const customUserResponseMsg = useRef(new CustomUserResponseMessage());
  /** */

  /**Local states */
  const [formError, setFormError] = useState<FormError>(initialFormError);
  const [isOTPSent, setIsOTPSent] = useState(false);

  const handleAPICall = () => {

    try {
      throw new CustomHttpError(`You must provide a value fro this transaction`, 499);
    } catch (error: unknown) {

      /**NOTE::: */
      /**first error response at first attempt:
       * {
            "status": "failed",
            "error_description": "please provide OTP",
            "error": "bad_request",
            "error_details": {
                "isClientError": true,
                "otpRequested": true
            }
        }
   
        **subsequent error response before OTP expires
        {
            "status": "failed",
            "error_description": "invalid request",
            "error": "bad_request",
            "error_details": {
                "isClientError": true,
                "otpRequested": true
            }
        }
       */


      /**error prep */
      const initialMessage = "Authentication failed!";
      const response = (error as responseErrorDataType)?.originalError.response || (error as responseErrorDataType);
      const data = response?.data || serverMockErrorResponse;
      const { error_description, error_details } = data;

      const stateError: StateError = {
        message: error_details.isClientError
          ? error_description
          : initialMessage,
        originalError: JSON.stringify(error),
      };
      /** */
      if (error instanceof NotFoundError) {
        stateError.message = error_details.isClientError
          ? error_description
          : customUserResponseMsg.current.notFoundErrorResponseMessage();
      }
      if (error instanceof BadInputError) {
        if (error_details.otpRequested) {
          setIsOTPSent(true);
          stateError.message = error_details.isClientError
            ? error_description
            : customUserResponseMsg.current.badInputErrorResponseMessage("OTP has been sent to your email address");

          setFormError({
            message: stateError.message,
            isFormDataError: true,
          });
          toast.success(stateError.message);
          return;
        }
        stateError.message = error_details.isClientError
          ? error_description
          : customUserResponseMsg.current.badInputErrorResponseMessage();
        setFormError({
          message: stateError.message,
          isFormDataError: true,
        });
      }
      if (error instanceof UnauthorizedError) {
        stateError.message = error_details.isClientError
          ? error_description
          : customUserResponseMsg.current.unauthorizedErrorResponseMessage();
      }
      if (error instanceof ForbiddenError) {
        stateError.message = error_details.isClientError
          ? error_description
          : customUserResponseMsg.current.forbiddenErrorResponseMessage();
      }
      if (error instanceof ConflictError) {
        stateError.message = error_details.isClientError
          ? error_description
          : customUserResponseMsg.current.conflictErrorResponseMessage();
      }

      toast.error(
        error_details.isClientError ? error_description : stateError.message,
      );

    }
  }



  handleAPICall();
  return (
    <>
      {
        isOTPSent ?? <p>OTP sent!</p>
      }
      {
        formError.isFormDataError ? (
          <p>{formError.message}</p>
        ) : (
          <p>No form data error</p>
        )
      }
    </>
  )
}
