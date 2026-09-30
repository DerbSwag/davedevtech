export const caseStudies = [
  {
    id: 'network-troubleshooting',
    serviceDetailHeading: 'ตัวอย่างแนวทางการตรวจสอบ',
    kicker: '01 / NETWORK TROUBLESHOOTING',
    title: 'เมื่อ Wi-Fi หรือ LAN ทำให้งานสะดุด',
    description: 'ลำดับการตรวจปัญหาเครือข่าย โดยไม่เปิดเผยรายละเอียดระบบภายใน',
    steps: [
      { label: 'อาการ', description: 'Wi-Fi หรือ LAN ไม่เสถียร' },
      { label: 'การตรวจสอบ', description: 'ตรวจอุปกรณ์ จุดเชื่อมต่อ และการตั้งค่า' },
      { label: 'การแก้ไข', description: 'แก้ตามสาเหตุที่พบ' },
      { label: 'การตรวจยืนยัน', description: 'ทดสอบการเชื่อมต่อและใช้งานซ้ำ' },
    ],
  },
  {
    id: 'attendance-workflow',
    serviceDetailHeading: 'ตัวอย่าง Workflow ที่เกี่ยวข้อง',
    kicker: '02 / ATTENDANCE WORKFLOW',
    title: 'ตัวอย่าง Workflow สำหรับรายงานเวลาทำงาน',
    description: 'ตัวอย่างเครื่องมือ Python สำหรับกรองข้อมูลเวลาทำงานตามแผนกและส่งออก Excel ช่วยให้เห็นแนวทางเปลี่ยนงานจัดรายงานเป็น Workflow ที่ทำซ้ำได้',
    steps: [
      { label: 'ข้อมูลเข้า', description: 'ข้อมูลเวลาทำงาน' },
      { label: 'ขั้นตอน', description: 'กรองและตรวจข้อมูล' },
      { label: 'ผลลัพธ์', description: 'รายงาน Excel' },
    ],
    source: {
      href: 'https://github.com/DerbSwag/factory_demo',
      label: 'ดูตัวอย่างเครื่องมือบน GitHub',
    },
  },
] as const;

export type CaseStudyId = (typeof caseStudies)[number]['id'];
export type CaseStudy = (typeof caseStudies)[number];

export function getCaseStudyById(id: CaseStudyId): CaseStudy {
  const caseStudy = caseStudies.find((entry) => entry.id === id);
  if (!caseStudy) throw new Error(`Unknown case study id: ${id}`);
  return caseStudy;
}
