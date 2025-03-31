import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export function useFormatMessages<K extends string>(
  messages: Record<K, { defaultMessage: string }>, // Adjusted type to match i18next usage
): Record<K, string> {
  const { t } = useTranslation();

  return useMemo(
    () =>
      Object.fromEntries(
        Object.entries(messages).map(([id, message]) => [
          id,
          t(id, { defaultValue: message }), // Use `t` with a fallback
        ]),
      ),
    [t, messages],
  ) as Record<K, string>;
}
