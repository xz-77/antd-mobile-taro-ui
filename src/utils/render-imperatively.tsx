import React, { ReactElement, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { renderToBody } from './render-to-body';

type ImperativeProps = {
  visible?: boolean;
  onClose?: () => void;
  afterClose?: () => void;
};

type TargetElement = ReactElement<ImperativeProps>;

export type ImperativeHandler = {
  close: () => void;
  replace: (element: TargetElement) => void;
};

export function renderImperatively(element: TargetElement) {
  const Wrapper = React.forwardRef<ImperativeHandler>((_, ref) => {
    const [visible, setVisible] = useState(false);
    const closedRef = useRef(false);
    const [elementToRender, setElementToRender] = useState(element);
    const keyRef = useRef(0);
    useEffect(() => {
      if (!closedRef.current) {
        setVisible(true);
      } else {
        afterClose();
      }
    }, []);
    function onClose() {
      closedRef.current = true;
      setVisible(false);
      elementToRender.props.onClose?.();
      elementToRender.props.afterClose?.();
    }
    function afterClose() {
      unmount();
      elementToRender.props.afterClose?.();
    }
    useImperativeHandle(ref, () => {
      return {
        close: onClose,
        replace: element => {
          keyRef.current++;
          elementToRender.props.afterClose?.();
          setElementToRender(element);
        },
      };
    });
    return React.cloneElement(elementToRender, {
      ...elementToRender.props,
      key: keyRef.current,
      visible,
      onClose,
      afterClose,
    });
  });
  const wrapperRef = React.createRef<ImperativeHandler>();

  const unmount = renderToBody(<Wrapper ref={wrapperRef} />);

  return {
    close: () => {
      wrapperRef.current?.close();
    },
    replace: element => {
      wrapperRef.current?.replace(element);
    },
  } as ImperativeHandler;
}
