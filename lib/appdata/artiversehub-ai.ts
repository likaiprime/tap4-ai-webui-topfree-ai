import { WebNavigationDetailData, WebNavigationListRow } from '@/lib/data';

export default function getAppData(): [WebNavigationListRow, WebNavigationDetailData] {
  const baseinfo: WebNavigationListRow = {
    id: '1792434701288771585',
    name: 'artiversehub-ai',
    title: 'Artiverse Hub AI',
    subtitle: 'Artiverse Hub AI',
    content: 'Artiverse Hub AI is a platform for AI-generated art and NFTs.',
    url: 'https://artiversehub.ai',
    imageUrl: 'https://img.artiversehub.ai/2024/05/20/6a3e3f7b3a4f4d7e8f6f7b9e3b7c4f7b.png',
    thumbnailUrl: 'https://img.artiversehub.ai/2024/05/20/7d246f5ac3d240a4bc03e6c01d68f845.png',
  };

  const detailinfo: WebNavigationDetailData = {
    name: 'artiversehub-ai',
    title: 'Artiverse Hub AI',
    subtitle: 'Artiverse Hub AI',
    detail: '# Artiverse Hub AI\nArtiverse Hub AI is a platform for AI-generated art and NFTs.',
    content: 'Artiverse Hub AI is a platform for AI-generated art and NFTs.',
    url: 'https://artiversehub.ai',
    imageUrl: 'https://img.artiversehub.ai/2024/05/20/6a3e3f7b3a4f4d7e8f6f7b9e3b7c4f7b.png',
    thumbnailUrl: 'https://img.artiversehub.ai/2024/05/20/7d246f5ac3d240a4bc03e6c01d68f845.png',
    collectionTime: '2024-05-20 00:00:00',
    tagName: 'Website',
    websiteData: '1000',
    starRating: 5,
    categoryName: 'Other',
  };

  return [baseinfo, detailinfo];
}
