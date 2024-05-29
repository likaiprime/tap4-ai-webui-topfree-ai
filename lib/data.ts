import * as fs from 'fs';
import path from 'path';

export type WebNavigationListRow = {
  content: string;
  id: string;
  imageUrl: string | null;
  name: string;
  thumbnailUrl: string | null;
  title: string;
  subtitle: string; // 新增的 subtitle 字段
  url: string;
};

export type WebNavigationDetailData = {
  categoryName: string;
  collectionTime: string;
  content: string;
  detail: string;
  imageUrl: string;
  name: string;
  starRating: number;
  tagName: string;
  thumbnailUrl: string;
  title: string;
  subtitle: string; // 新增的 subtitle 字段
  url: string;
  websiteData: string;
};

const dataList: WebNavigationListRow[] = [];
const detailList: WebNavigationDetailData[] = [];
const files = fs.readdirSync(path.join(path.resolve(), 'lib/appdata'));
files.forEach((file) => {
  const mod = file.replace('.ts', '');
  // 导入文件
  // eslint-disable-next-line global-require,import/extensions,import/no-dynamic-require
  const appdata = require(`@/lib/appdata/${mod}`).default();
  dataList.push(appdata[0]);
  detailList.push(appdata[1]);
});
export { dataList, detailList };
