import Taro from '@tarojs/taro';

const BODY_LOCK_STYLE = {
  overflow: 'hidden',
  height: '100vh',
};

const BODY_UNLOCK_STYLE = {
  overflow: 'visible',
  height: 'auto',
};

export function useLockScroll(shouldLock: boolean) {
  if (process.env.TARO_ENV === 'h5') return;

  if (!shouldLock) {
    // Taro对外没抛出这个方法，但是能用，否则没办法在page上添加style
    // h5不生效会报错
    // @ts-ignore
    Taro?.setPageStyle({
      style: BODY_UNLOCK_STYLE,
      fail(e: any) {
        // eslint-disable-next-line no-console
        console.log(e);
      },
    });
    return;
  }

  // @ts-ignore
  Taro?.setPageStyle({
    style: BODY_LOCK_STYLE,
    fail(e: any) {
      // eslint-disable-next-line no-console
      console.log(e);
    },
  });
}
