
import { Typography } from 'antd';
import { observer } from "mobx-react-lite";
import { gstate } from "@/global";
import styles from './index.module.scss';

const { Title, Paragraph } = Typography;

// Define the FAQ content
const faqContent = [
  {
    question: "What is Pic Smaller?",
    answer: "Pic Smaller is a tool that helps you reduce the file size of your images without significantly compromising their quality. It's perfect for optimizing images for websites or sharing online."
  },
  {
    question: "How do I use Pic Smaller?",
    answer: "Simply upload your image using the upload card on the main page. Once uploaded, you can adjust the compression settings on the right side of the screen. The tool will automatically process your image based on these settings."
  },
  {
    question: "What file formats are supported?",
    answer: "Pic Smaller supports common image formats including JPEG, PNG, and WebP. The exact list of supported formats may be expanded in future updates."
  },
  {
    question: "Is there a file size limit?",
    answer: "Yes, there is a file size limit to ensure optimal performance. The current maximum file size is 10MB per image. If you need to process larger files, please contact our support team."
  },
  {
    question: "Is my data safe?",
    answer: "We take data privacy seriously. Your images are processed locally in your browser and are not stored on our servers. They are automatically deleted after processing."
  },
  {
    question: "Is Pic Smaller a free image compressor?",
    answer: "Yes, Pic Smaller is a completely free image compression tool. You can use it to reduce the file size of your images without any cost. There are no hidden fees, subscriptions, or limitations on the number of images you can compress. We believe in providing a valuable service to help users optimize their images for web use without any financial barriers."
  },
  {
    question: "How do I use Pic Smaller?",
    answer: "Simply visit our website and upload your image using the upload card on the main page. Once uploaded, you can adjust the compression settings on the right side of the screen. The tool will automatically process your image based on these settings, all within your browser. You can then download the compressed image directly to your device."
  },
];

const FAQ = observer(() => {
  return (
    <div className={styles.faqContainer}>
      <Title level={2} className={styles.faqTitle}>
        {gstate.locale?.faqTitle || 'Frequently Asked Questions'}
      </Title>
      {faqContent.map((item, index) => (
        <div key={index} className={styles.faqItem}>
          <Title level={4} className={styles.question}>{item.question}</Title>
          <Paragraph className={styles.answer}>{item.answer}</Paragraph>
        </div>
      ))}
    </div>
  );
});

export default FAQ;