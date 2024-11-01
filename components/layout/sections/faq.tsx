import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Có bán camera và máy quét không?",
    answer: "DHN cung cấp cả thiết bị cho các shop bao gồm Camera Full HD, chân camera, máy quét QR loại có dây hoặc không dây, chi phí hợp lý",
    value: "item-1",
  },
  {
    question: "Cần máy tính như thế nào thì dùng được phần mềm?",
    answer:
      "Với giải pháp này, các shop cần có 1 máy tính cấu hình văn phòng bình thường sử dụng hệ điều hành win 7 đổ lên, hoặc máy tính Macbook đều được",
    value: "item-2",
  },
  {
    question:
      "10GB tôi sẽ lưu được bao nhiêu video 1 tháng?",
    answer:
      "Với gói 10Gb Miễn Phí, phù hợp cho shop lưu được khoảng từ 150 lên đến 250 video đóng hàng, tùy thuộc vào thời gian đóng hàng mà các shop tối ưu được. Phù hợp với các shop mới mở, hoặc các shop muốn trải nghiệm thử ",
    value: "item-3",
  },
  {
    question: "Dùng phần mềm trên điện thoại được không?",
    answer: "Phần mềm DHN dùng được cả trên điện thoại mà không tốn dung lượng máy, anh/chị có thể tận dụng luôn camera của điện thoại cùng với đó là dùng máy quét QR kết nối bluetooth có giá chưa tới 600k",
    value: "item-4",
  },
  {
    question:
      "Lấy video khiếu nại ở đâu?",
    answer: "Sau khi đóng hàng xong, video sẽ được lưu theo mã vận đơn trong \"Danh sách video\", tại đây anh chị có thể tạo link tracking để gửi cho sàn TMĐT hoặc tải video về máy và gửi trực tiếp",
    value: "item-5",
  },
  {
    question:
        "Tôi có thể sử dụng phần mềm với camera và máy quét tự mua không?",
    answer: "Phần mềm DHN sẽ tương thích với tất cả thiết bị là webcam và máy quét QR trên thị trường, Tuy nhiên khi sử dụng Camera của DHN cung cấp sẽ tối ưu về dung lượng lưu trữ và chất lượng video hơn là anh chị tự chọn.",
    value: "item-6",
  },
  {
    question:
        "Thời gian lưu video là bao lâu?",
    answer: "Video sẽ được lưu tối đa 25 ngày kể từ ngày đóng hàng, để đảm bảo gói dung lượng của shop không bị tràn",
    value: "item-7",
  },
];

interface Props {
  title: string
}

export const FAQSection = ({title}: Props) => {
  return (
    <section id="faq" className="container md:w-[700px] py-12">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          {title}
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
