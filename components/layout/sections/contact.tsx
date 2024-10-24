"use client";
import {Card, CardContent, CardFooter, CardHeader,} from "@/components/ui/card";
import {Building2, Clock, Mail, Phone} from "lucide-react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";

const formSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  subject: z.string().min(2).max(255),
  message: z.string(),
});

interface Props {
  keyLabel: string;
  title: string;
  description: string;
  formMessagePlaceholder: string
  formMessage: string
  firstNameLabel: string
  lastNameLabel: string
  emailPlaceholder: string
  subjectLabel: string
}

export const ContactSection = ({
                                 title,
                                 keyLabel,
                                 description,
                                 lastNameLabel,
                                 firstNameLabel,
                                 subjectLabel,
                                 formMessagePlaceholder,
                                 formMessage,
                                 emailPlaceholder
                               }: Props) => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "Liên hệ dùng thử",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const {firstName, lastName, email, subject, message} = values;
    console.log(values);

    const mailToLink = `mailto:dhn@gmail.com?subject=${subject}&body=Hello I am ${firstName} ${lastName}, my Email is ${email}. %0D%0A${message}`;

    window.location.href = mailToLink;
  }

  return (
    <section id="contact" className="container py-24 sm:py-32">
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

              <div>742 Evergreen Terrace, Springfield, IL 62704</div>
            </div>

            <div>
              <div className="flex gap-2 mb-1">
                <Phone/>
                <div className="font-bold">Số điện thoại</div>
              </div>

              <div>+1 (619) 123-4567</div>
            </div>

            <div>
              <div className="flex gap-2 mb-1">
                <Mail/>
                <div className="font-bold">Email</div>
              </div>

              <div>leomirandadev@gmail.com</div>
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

        <Card className="bg-muted/60 dark:bg-card">
          <CardHeader className="text-primary text-2xl"> </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid w-full gap-4"
              >
                <div className="flex flex-col md:!flex-row gap-8">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({field}) => (
                      <FormItem className="w-full">
                        <FormLabel>{firstNameLabel}</FormLabel>
                        <FormControl>
                          <Input placeholder="Nguyễn Văn" {...field} />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({field}) => (
                      <FormItem className="w-full">
                        <FormLabel>{lastNameLabel}</FormLabel>
                        <FormControl>
                          <Input placeholder="A" {...field} />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder={emailPlaceholder}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({field}) => (
                      <FormItem>
                        <FormLabel>{subjectLabel}</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Chọn chủ đề"/>
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Web Development">
                              Web Development
                            </SelectItem>
                            <SelectItem value="Mobile Development">
                              Mobile Development
                            </SelectItem>
                            <SelectItem value="Figma Design">
                              Figma Design
                            </SelectItem>
                            <SelectItem value="REST API">REST API</SelectItem>
                            <SelectItem value="FullStack Project">
                              FullStack Project
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
                            placeholder={formMessagePlaceholder}
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                </div>

                <Button className="mt-4">Gửi yêu cầu đến chúng tôi</Button>
              </form>
            </Form>
          </CardContent>

          <CardFooter></CardFooter>
        </Card>
      </section>
    </section>
  );
};
