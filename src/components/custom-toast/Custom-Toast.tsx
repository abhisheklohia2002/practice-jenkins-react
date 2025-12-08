import React from "react";
import { Alert, Stack } from "@chakra-ui/react";

export type ToastType = "success" | "error" | "info" | "warning";

interface CustomToastProps {
  message: string;
  type?: ToastType;
  duration?: number;          // ms
  onClose?: () => void;       // optional callback
}

export const CustomToast: React.FC<CustomToastProps> = ({
  message,
  type = "success",
  duration = 3000,
  onClose,
}) => {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(t);
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <Stack gap="4" width="full">
      <Alert.Root status={type}>
        <Alert.Indicator />
        <Alert.Title>{message}</Alert.Title>
      </Alert.Root>
    </Stack>
  );
};
