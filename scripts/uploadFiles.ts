import { Project, upload as ciUpload } from 'miniprogram-ci';
import path from 'path';
import config from '../project.config.json';
import pack from '../package.json';

const upload = async () => {
  // 注意： new ci.Project 调用时，请确保项目代码已经是完整的，避免编译过程出现找不到文件的报错。
  const project = new Project({
    appid: config.appid,
    type: 'miniProgram',
    projectPath: path.resolve(__dirname, '../'),
    privateKey: '',
    ignores: ['node_modules/**/*'],
  });
  const uploadResult = await ciUpload({
    project,
    version: pack.version,
    desc: pack.version,
    setting: {
      es6: true,
    },
    onProgressUpdate: console.log,
  });
  console.log(uploadResult);
};

upload();

// export { upload };
