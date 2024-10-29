"use client";
import {Card, CardContent, CardFooter, CardHeader,} from "@/components/ui/card";
import {Building2, Clock, Loader2, Mail, Phone} from "lucide-react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import axios from "axios";
import {useState} from "react";

const formSchema = z.object({
    name: z.string().min(2, {message: 'Tối thiểu 2 ký tự'}).max(50, {message: 'Tối đa 50 ký tự'}),
    phone: z.string().length(10, {message: 'Số điện thoại không hợp lệ'}),
    plan: z.string().min(2, {message: 'Tối thiểu 2 ký tự'}).max(100, {message: 'Tối đa 100 ký tự'}),
    message: z.string(),
});

interface Props {
    keyLabel: string;
    title: string;
    description: string;
    formMessagePlaceholder: string
    formMessage: string
    nameLabel: string
    phoneLabel: string
    emailPlaceholder: string
    subjectLabel: string
}

export const ContactSection = ({
                                   title,
                                   keyLabel,
                                   description,
                                   phoneLabel,
                                   nameLabel,
                                   subjectLabel,
                                   formMessagePlaceholder,
                                   formMessage,
                                   emailPlaceholder
                               }: Props) => {
    const [loading, setLoading] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            plan: "Gói miễn phí",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        setLoading(true)
        let data = new FormData();
        for (let entry of Object.entries(values)) {
            data.append(entry[0], entry[1])
        }

        axios.post('https://script.google.com/macros/s/AKfycbwRNKaGv0X286giOeJ6RAD66j4crWIYCbT-n60zrd9WA0hpl_VkuuMitLWbf-O13gzikA/exec', data)
            .then(res => {
                alert('Bạn đã đăng ký thông tin thành công. Chúng tôi sẽ liên hệ trong vòng 1 giờ tới')
                form.reset()
            })
            .catch(err => {
                console.log(err)
                alert('Đăng ký không thành công. Vui lòng thử lại hoặc liên hệ 0788624968')
            })
            .finally(() => setLoading(false))
    }

    return (
        <section className="container py-12 sm:py-24">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <div className="mb-4">
                        <h2 className="text-lg text-primary mb-2 tracking-wider">
                            {keyLabel}
                        </h2>

                        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
                    </div>
                    <p className="mb-8 text-muted-foreground lg:w-5/6">
                        {description}
                    </p>

                    <div className="flex flex-col gap-4">
                        <div>
                            <div className="flex gap-2 mb-1">
                                <Building2/>
                                <div className="font-bold">Địa chỉ</div>
                            </div>

                            <div>Số 71, ngõ 487 Cổ Nhuế, Cổ Nhuế 2, Bắc Từ Liêm, Hà Nội</div>
                        </div>

                        <div>
                            <div className="flex gap-2 mb-1">
                                <Phone/>
                                <div className="font-bold">Số điện thoại</div>
                            </div>

                            <div>0788624968</div>
                        </div>

                        <div>
                            <div className="flex gap-2 mb-1">
                                <Mail/>
                                <div className="font-bold">Email</div>
                            </div>

                            <div>donghangnhanh@gmail.com</div>
                        </div>

                        <div>
                            <div className="flex gap-2">
                                <Clock/>
                                <div className="font-bold">Thời gian hoạt động</div>
                            </div>

                            <div>
                                <div>Thứ 2 - Thứ 6</div>
                                <div>9AM - 6PM</div>
                            </div>
                        </div>
                    </div>
                </div>

                <Card className="bg-muted/60 dark:bg-card" id="contact">
                    <CardHeader className="text-primary text-2xl p-3 md:p-6">Đăng ký ngay</CardHeader>
                    <CardContent className={'p-3 md:p-6'}>
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="grid w-full gap-4"
                            >
                                <div className="flex flex-col md:!flex-row gap-8">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({field}) => (
                                            <FormItem className="w-full">
                                                <FormLabel>{nameLabel}</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Nguyễn Văn A" {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({field}) => (
                                            <FormItem className="w-full">
                                                <FormLabel>{phoneLabel}</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="0339210xxx" {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <FormField
                                        control={form.control}
                                        name="plan"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>{subjectLabel}</FormLabel>
                                                <Select
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                >
                                                    <FormControl>
                                                        <SelectTrigger aria-label={'select subject'}>
                                                            <SelectValue placeholder="Chọn chủ đề"/>
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="Gói miễn phí">
                                                            Gói miễn phí
                                                        </SelectItem>
                                                        <SelectItem value="Gói cơ bản">
                                                            Gói cơ bản
                                                        </SelectItem>
                                                        <SelectItem value="Gói tiết kiệm">
                                                            Gói tiết kiệm
                                                        </SelectItem>
                                                        <SelectItem value="Gói cao cấp">
                                                            Gói cao cấp
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>Nội dung</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        rows={5}
                                                        placeholder={'tôi có của hàng gồm 3000 đơn hàng / tháng cần dịch vụ quay video đóng hàng'}
                                                        className="resize-none"
                                                        {...field}
                                                    />
                                                </FormControl>

                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <Button className="mt-4" disabled={loading || !form.formState.isValid}>
                                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    Gửi yêu cầu đến chúng tôi
                                </Button>
                            </form>
                        </Form>
                    </CardContent>

                    <CardFooter></CardFooter>
                </Card>
            </section>
        </section>
    );
};
