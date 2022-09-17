export type Articles = {
    id: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
    title: string
    content: string
    eyecatch: {
        url: string
    }
    category: {
        name: string | null
    }
}
