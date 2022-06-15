import { components } from './components';

export const menus = {
  '/': [
    {
      title: 'Home',
      path: 'index',
    },
  ],
  '/zh': [
    {
      title: '首页',
      path: 'index',
    },
  ],

  '/components': [
    {
      title: 'Common',
      children: components.common,
    },
    {
      title: 'Layout',
      children: components.layout,
    },
    {
      title: 'Data Display',
      children: components.dataDisplay,
    },
    {
      title: 'Data Entry',
      children: components.dataEntry,
    },
    {
      title: 'Feedback',
      children: components.feedback,
    },
  ],
  '/zh/components': [
    {
      title: '通用',
      children: components.common,
    },
    {
      title: '布局',
      children: components.layout,
    },
    {
      title: '信息展示',
      children: components.dataDisplay,
    },
    {
      title: '信息录入',
      children: components.dataEntry,
    },
    {
      title: '反馈',
      children: components.feedback,
    },
  ],
};
