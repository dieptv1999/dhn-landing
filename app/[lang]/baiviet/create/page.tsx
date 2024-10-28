'use client'
import '@mdxeditor/editor/style.css'
import dynamic from "next/dynamic";
import {z} from "zod";
import {useForm, UseFormReturn} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import React, {useState} from "react";
import {TagInput} from "emblor";
import {MDXRemoteSerializeResult} from "next-mdx-remote";
import {RepositoryFactory} from "@/api/repository-factory";
import {AxiosError, AxiosResponse, HttpStatusCode} from "axios";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useToast} from "@/hooks/use-toast";
import {CircleX} from "lucide-react";
import ImagesPicker from "@/components/images-picker";

const FileRepository = RepositoryFactory.get('file')
const ArticleRepository = RepositoryFactory.get('article')

const Editor = dynamic(() => import('@/components/mdx/mdx-mini-editor'), {
    ssr: false
})

const formSchema = z.object({
    key: z
        .string()
        .min(3, {message: 'Tối thiểu 3 ký tự'})
        .max(256, {message: 'Tối đa 99 ký tự'}),
    title: z
        .string()
        .min(30, {message: 'Tối thiểu 30 ký tự'})
        .max(256, {message: 'Tối đa 99 ký tự'}),
    subTitle: z
        .string()
        .min(30, {message: 'Tối thiểu 30 ký tự'})
        .max(256, {message: 'Tối đa 99 ký tự'}),
    banner: z.any(),
    tags: z.array(z.object({
        id: z.string(),
        text: z.string()
    })),
    content: z.string()
        .min(1000, {message: 'Tối thiểu 1000 ký tự'})
        .max(1000000, {message: 'Tối đa 1000000 ký tự'}),
    type: z.string().optional(),
    topic: z.string().optional(),
})

type CreateArticleSchemaType = z.infer<typeof formSchema>;

export default function CreateArticlePage() {
    const {toast} = useToast()
    const router = useRouter()
    const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);
    const [loading, setLoading] = useState(false)
    const form: UseFormReturn<CreateArticleSchemaType> = useForm<CreateArticleSchemaType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            key: '',
            title: '',
            subTitle: '',
            content: '',
            banner: undefined,
            tags: [],
            type: 'tintuc',
            topic: 'Bán hàng'
        },
    })

    async function onSubmit(data: z.infer<typeof formSchema>) {
        if (loading) return;
        let fileReq = new FormData();
        fileReq.set('file', data.banner[0])
        FileRepository.localUpload(fileReq).then((resp: AxiosResponse) => {
            if (resp.status === HttpStatusCode.Created) {
                setLoading(true)
                ArticleRepository.createArticle({
                    ...data,
                    tags: data.tags?.map(e => e.text),
                    banner: resp.data
                }).then((cResp: AxiosResponse) => {
                    if (cResp.status === HttpStatusCode.Created) {
                        toast({
                            title: 'Tạo bài viết thành công',
                            variant: 'default',
                        })
                        router.push('/baiviet/')
                    } else {
                        toast({
                            title: 'Có lỗi xảy ra khi tạo bài viết',
                            variant: 'destructive',
                        })
                    }
                })
                    .catch((e: any) => {
                        toast({
                            title: e.response?.data?.message,
                            variant: 'destructive',
                        })
                    })
                    .finally(() => {
                        setLoading(false)
                    })
            }
        }).catch((err: AxiosError) => {
            toast({
                title: 'Có lỗi xảy ra khi upload file',
                variant: 'default',
            })
        })
    }

    return (
        <div className={'w-full flex justify-center'}>
            <div className={'max-w-screen-md w-full py-16'}>
                <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className={'flex flex-col gap-3'}>
                            <FormField
                                control={form.control}
                                name="key"
                                render={({field}) => (
                                    <FormItem className="space-y-1">
                                        <FormLabel>Key <span className={'text-red-500'}>*</span></FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="VD: dhn-,..."
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="type"
                                render={({field}) => (
                                    <FormItem className="space-y-1">
                                        <FormLabel>Loại bài viết <span
                                            className={'text-red-500'}>*</span></FormLabel>
                                        <FormControl>
                                            <Select
                                                disabled={true}
                                                defaultValue={field.value}
                                                onValueChange={field.onChange}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Chọn loại bài viết"/>
                                                </SelectTrigger>
                                                <SelectContent position="popper">
                                                    <SelectItem value={'tintuc'}>Tin tức </SelectItem>
                                                    <SelectItem value={'wiki'}>Wiki Bất động sản</SelectItem>
                                                    <SelectItem value={'phantich'}>Phân tích đánh
                                                        giá</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="topic"
                                render={({field}) => (
                                    <FormItem className="space-y-1">
                                        <FormLabel>Chủ đề <span className={'text-red-500'}>*</span></FormLabel>
                                        <FormControl>
                                            <Select
                                                defaultValue={field.value}
                                                onValueChange={field.onChange}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Chọn chủ đề"/>
                                                </SelectTrigger>
                                                <SelectContent position="popper">
                                                    <SelectItem value={'Bán hàng'}>Bán hàng</SelectItem>
                                                    <SelectItem value={'Đóng hàng'}>Đóng hàng</SelectItem>
                                                    <SelectItem value={'Hậu cần'}>Hậu cần</SelectItem>
                                                    <SelectItem value={'Tư vấn'}>Tư vấn</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="title"
                                render={({field}) => (
                                    <FormItem className="space-y-1">
                                        <FormLabel>Tiêu đề <span className={'text-red-500'}>*</span></FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="VD: Hướng dẫn Sử Dụng Chi Tiết Phần Mềm,..."
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="subTitle"
                                render={({field}) => (
                                    <FormItem className="space-y-1">
                                        <FormLabel>Mô tả ngắn <span
                                            className={'text-red-500'}>*</span></FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="VD: Hướng dẫn Sử Dụng Chi Tiết Phần Mềm,..."
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="banner"
                                render={({field}) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>Ảnh nền <span className={'text-red-500'}>*</span></FormLabel>
                                        <div className={'text-xs text-gray-600'}>
                                            <div className={'mb-1.5'}>Quy định đăng hình & video</div>
                                            <ul className={'list-disc'}>
                                                <li>Đăng tối thiểu 3 ảnh, tối đa 24 ảnh với tất cả các loại
                                                    tin
                                                </li>
                                                <li>Hãy dùng ảnh thật, không trùng, không chèn SDT. Chúng tôi sẽ
                                                    phạt và gỡ bài nếu vi phạm
                                                </li>
                                                <li>Kích thước ảnh tối thiểu 100x100px, tối đa 10MB</li>
                                                <li>Mô tả ảnh tối đa 45 ký tự</li>
                                            </ul>
                                        </div>
                                        <FormControl>
                                            <ImagesPicker multiple={false} value={field.value}
                                                          onChange={field.onChange}/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="tags"
                                render={({field}) => (
                                    <FormItem className="space-y-1">
                                        <FormLabel>Gắn thẻ bài viết của bạn</FormLabel>
                                        <FormControl>
                                            <TagInput
                                                className={'border-none w-full'}
                                                tags={field.value}
                                                setTags={
                                                    (newTags) => {
                                                        field.onChange(newTags);
                                                    }
                                                }
                                                maxTags={5}
                                                truncate={16}
                                                placeholder="Chọn tối đa 3 keyword"
                                                styleClasses={
                                                    {
                                                        input: 'w-full',
                                                    }
                                                }
                                                activeTagIndex={activeTagIndex}
                                                setActiveTagIndex={setActiveTagIndex}
                                                inputMode={'search'}
                                                inputProps={{
                                                    onClick: (e) => {
                                                        e.stopPropagation()
                                                    },
                                                }}
                                                onChange={e => e.stopPropagation()}
                                                customTagRenderer={
                                                    (tag, isActiveTag) => (
                                                        <div
                                                            key={tag.id}
                                                            onClick={(e) => e.stopPropagation()}
                                                            className={`pl-2 pr-1 py-0.5 bg-primary rounded-lg text-xs ${isActiveTag ? "ring-ring ring-offset-2 ring-2 ring-offset-background" : ""}`}
                                                        >
                                            <span className="text-white text-sm mr-1 inline-flex items-center gap-1">
                                                <span>{tag.text}</span>
                                                <CircleX size={12} onClick={() => {
                                                    field.onChange(field.value?.filter(e => e.id !== tag.id) ?? [])
                                                }}/>
                                            </span>
                                                        </div>
                                                    )
                                                }
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="content"
                                render={({field}) => (
                                    <FormItem className="">
                                        <FormLabel>Mô tả <span className={'text-red-500'}>*</span></FormLabel>
                                        <FormControl>
                                            <Editor
                                                contentClassName={'h-[600px] max-w-full'}
                                                value={field.value ?? ''}
                                                onChange={(v) => {
                                                    console.log(v)
                                                    field.onChange(v)
                                                }}
                                                placeholder={'Nhập mô tả chung về bất động sản của bạn. Ví dụ: Khu nhà có vị trí thuận lợi, gần công viên, gần trường học,... Cú pháp Markdown được hỗ trợ'}
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            <Button disabled={loading}>Tạo bài viết</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}