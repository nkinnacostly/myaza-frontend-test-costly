"use client";

import React, { useCallback, useState } from "react";

type InputFocusEvent = React.FocusEvent<unknown>;
type InputMouseEvent = React.MouseEvent<unknown, MouseEvent>;

type InteractiveEventTypes = {
  readOnly?: boolean;
  onFocus?: (e: InputFocusEvent) => void;
  onBlur?: (e: InputFocusEvent) => void;
  onMouseEnter?: (e: InputMouseEvent) => void;
  onMouseLeave?: (e: InputMouseEvent) => void;
};

export function useInteractiveEvent({
  readOnly,
  onFocus,
  onBlur,
  onMouseEnter,
  onMouseLeave,
}: InteractiveEventTypes) {
  const [isFocus, setIsFocus] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const handleOnFocus = useCallback(
    (e: InputFocusEvent) => {
      if (readOnly === true) return false;
      setIsFocus((prevState) => !prevState);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      onFocus && onFocus(e);
      return;
    },
    [readOnly, onFocus]
  );

  const handleOnBlur = useCallback(
    (e: InputFocusEvent) => {
      if (readOnly === true) return false;
      setIsFocus(() => false);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      onBlur && onBlur(e);
      return;
    },
    [readOnly, onBlur]
  );

  const handleOnMouseEnter = useCallback(
    (e: InputMouseEvent) => {
      if (readOnly === true) return false;
      setIsHover(() => true);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      onMouseEnter && onMouseEnter(e);
      return;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [readOnly]
  );

  const handleOnMouseLeave = useCallback(
    (e: InputMouseEvent) => {
      if (readOnly === true) return false;
      setIsHover(() => false);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      onMouseLeave && onMouseLeave(e);
      return;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [readOnly]
  );

  return {
    isFocus,
    isHover,
    handleOnFocus,
    handleOnBlur,
    handleOnMouseEnter,
    handleOnMouseLeave,
  };
}
