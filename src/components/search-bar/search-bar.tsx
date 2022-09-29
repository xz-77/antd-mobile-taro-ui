import React, { useState, useRef, forwardRef, useImperativeHandle, ReactNode } from 'react';
import classNames from 'classnames';
import { SearchIcon } from 'antd-mobile-taro-icons';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import { usePropsValue } from 'antd-mobile/es/utils/use-props-value';
import { View } from '@tarojs/components';
import Button from '../button';
import Input, { InputRef, InputProps } from '../input';
import { useConfig } from '../config-provider';

const classPrefix = `adm-search-bar`;

export type SearchBarRef = InputRef;

export type SearchBarProps = Pick<InputProps, 'onFocus' | 'onBlur' | 'onClear'> & {
  value?: string;
  defaultValue?: string;
  maxLength?: number;
  placeholder?: string;
  clearable?: boolean;
  // onlyShowClearWhenFocus?: boolean;
  showCancelButton?: boolean | ((focus: boolean, value: string) => boolean);
  cancelText?: string;
  icon?: ReactNode;
  clearOnCancel?: boolean;
  onSearch?: (val: string) => void;
  onChange?: (val: string) => void;
  onCancel?: () => void;
} & NativeProps<'--background' | '--border-radius' | '--placeholder-color' | '--height' | '--padding-left'>;

const defaultProps = {
  clearable: true,
  // onlyShowClearWhenFocus: false,
  showCancelButton: false as NonNullable<SearchBarProps['showCancelButton']>,
  defaultValue: '',
  clearOnCancel: true,
  icon: <SearchIcon />,
};

type MergeProps = Omit<SearchBarProps, 'clearable' | 'showCancelButton' | 'defaultValue' | 'clearOnCancel' | 'icon'> &
  Required<Pick<SearchBarProps, 'clearable' | 'showCancelButton' | 'defaultValue' | 'clearOnCancel' | 'icon'>>;

export const SearchBar = forwardRef<SearchBarRef, SearchBarProps>((p, ref) => {
  const { locale } = useConfig();
  const props: MergeProps = mergeProps(
    defaultProps,
    {
      cancelText: locale.common.cancel,
    },
    p
  );
  const [value, setValue] = usePropsValue(props);
  const [hasFocus, setHasFocus] = useState(false);
  const inputRef = useRef<InputRef>(null);
  const composingRef = useRef(false);

  useImperativeHandle(ref, () => ({
    clear: () => inputRef.current?.clear(),
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    get nativeElement() {
      return inputRef.current?.nativeElement ?? null;
    },
  }));

  const renderCancelButton = () => {
    let isShowCancel: boolean;

    if (typeof props.showCancelButton === 'function') {
      isShowCancel = props.showCancelButton(hasFocus, value);
    } else {
      isShowCancel = props.showCancelButton && hasFocus;
    }

    return (
      isShowCancel && (
        <View className={`${classPrefix}-suffix`}>
          <Button
            fill='none'
            className={`${classPrefix}-cancel-button`}
            onClick={() => {
              if (props.clearOnCancel) {
                inputRef.current?.clear();
              }
              inputRef.current?.blur();
              props.onCancel?.();
            }}
            // onMouseDown={e => {
            //   e.preventDefault();
            // }}
          >
            {props.cancelText}
          </Button>
        </View>
      )
    );
  };

  return withNativeProps(
    props,
    <View
      className={classNames(classPrefix, {
        [`${classPrefix}-active`]: hasFocus,
      })}
    >
      <View className={`${classPrefix}-input-box`}>
        {props.icon && <View className={`${classPrefix}-input-box-icon`}>{props.icon}</View>}
        <Input
          ref={inputRef}
          className={classNames(`${classPrefix}-input`, {
            [`${classPrefix}-input-without-icon`]: !props.icon,
          })}
          value={value}
          onChange={setValue}
          maxlength={props.maxLength}
          placeholder={props.placeholder}
          clearable={props.clearable}
          // onlyShowClearWhenFocus={props.onlyShowClearWhenFocus}
          onFocus={e => {
            setHasFocus(true);
            props.onFocus?.(e);
          }}
          onBlur={e => {
            setHasFocus(false);
            props.onBlur?.(e);
          }}
          onClear={props.onClear}
          // type='search'
          // enterKeyHint='search'
          onEnterPress={() => {
            if (!composingRef.current) {
              inputRef.current?.blur();
              props.onSearch?.(value);
            }
          }}
          // aria-label={locale.SearchBar.name}
          // onCompositionStart={() => {
          //   composingRef.current = true;
          // }}
          // onCompositionEnd={() => {
          //   composingRef.current = false;
          // }}
        />
      </View>
      {renderCancelButton()}
    </View>
  );
});
