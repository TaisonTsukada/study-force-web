import { OptionsObject, useSnackbar } from 'notistack'
import { useCallback, useMemo } from 'react'

const useToast = () => {
  const { enqueueSnackbar } = useSnackbar()

  const successToast = useCallback(
    (message?: string, toastOptions?: OptionsObject) =>
      enqueueSnackbar(message || '変更済み', {
        variant: 'success',
        ...toastOptions,
      }),
    [enqueueSnackbar],
  )

  const errorToast = useCallback(
    (message: string, toastOptions?: OptionsObject) =>
      enqueueSnackbar(message, {
        variant: 'error',
        ...toastOptions,
      }),
    [enqueueSnackbar],
  )

  return useMemo(() => ({ successToast, errorToast }), [errorToast, successToast])
}

export { useToast }
