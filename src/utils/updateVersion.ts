import Taro, { canIUse, getUpdateManager } from '@tarojs/taro';

/**
 * 检测当前的小程序
 * 是否是最新版本，是否需要下载、更新
 */
export const updateVersion = () => {
  if (canIUse('getUpdateManager')) {
    const updateManager = getUpdateManager();
    updateManager.onCheckForUpdate(res => {
      if (res.hasUpdate) {
        updateManager.onUpdateReady(() => {
          Taro.showToast({ title: '即将更新版本', icon: 'loading' });
          setTimeout(updateManager.applyUpdate, 1500);
        });
        updateManager.onUpdateFailed(() => {
          // 新版本下载失败
          Taro.showModal({
            title: '新版本下载失败',
            content: '下载失败，请到微信 “发现-小程序” 页，重新搜索打开',
          });
        });
      }
    });
  } else {
    Taro.showModal({
      title: '溫馨提示',
      content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。',
    });
  }
};
