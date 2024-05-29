import { WebNavigationDetailData, WebNavigationListRow } from '@/lib/data';

export default function getAppData(): [WebNavigationListRow, WebNavigationDetailData] {
  const baseinfo: WebNavigationListRow = {
    id: '1792434701288771585',
    name: 'woy-ai',
    title: 'Woy AI Tools Directory',
    subtitle: 'Woy AI Tools Directory',
    content: 'Discover the top AI tools of 2024 with the Woy.ai AI Directory!',
    url: 'https://woy.ai',
    imageUrl: 'https://img.artiversehub.ai/2024/05/20/c5a29d0bd95f4788a592d363b3ee4117.png',
    thumbnailUrl: 'https://img.artiversehub.ai/2024/05/20/7d246f5ac3d240a4bc03e6c01d68f845.png',
  };

  const detailinfo: WebNavigationDetailData = {
    name: 'woy-ai',
    title: 'Woy AI',
    subtitle: 'AI Tools Directory',
    detail: '# Woy AI Tools Directory\nDiscover the top AI tools of 2024 with the Woy.ai AI Directory!',
    content: 'Discover the top AI tools of 2024 with the Woy.ai AI Directory!',
    url: 'https://woy.ai',
    imageUrl: 'https://img.artiversehub.ai/2024/05/20/c5a29d0bd95f4788a592d363b3ee4117.png',
    thumbnailUrl: 'https://img.artiversehub.ai/2024/05/20/7d246f5ac3d240a4bc03e6c01d68f845.png',
    collectionTime: '2024-05-20 00:00:00',
    tagName: 'Website',
    websiteData: '1000',
    starRating: 5,
    categoryName: 'Other',
  };

  return [baseinfo, detailinfo];
}
