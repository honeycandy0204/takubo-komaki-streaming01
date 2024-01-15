import { createClient } from "microcms-js-sdk";
const client = createClient({
    serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: import.meta.env.MICROCMS_API_KEY,
});
//型定義
export type Blog = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    content: string;
};
export type BlogResponse = {
    totalCount: number;
    offset: number;
    limit: number;
    contents: Blog[];
};

//API呼び出し
export const getBlogs = async (queries?: any) => {
    return await client.get<BlogResponse>({ endpoint: "blogs", queries });
};
export const getBlogDetail = async (contentId: string, queries?: any) => {
    return await client.getListDetail<Blog>({
        endpoint: "blogs",
        contentId,
        queries,
    });
};