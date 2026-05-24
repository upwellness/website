/**
 * UP Wellness · Site Content
 * ──────────────────────────
 * Single source of truth for all landing page copy + data.
 * Edit here · all sections will reflect changes.
 */

export const SITE = {
  brand: "UP Wellness",
  tagline: "Science-based Longevity & Wellness Community",
  promise: "ที่ปรึกษาสุขภาพมืออาชีพ · ดูแลแบบ personalized · evidence-based",
  lineOA: "@upwellness",
  email: "hello@upwellness.co.th",
  phone: "—",
};

/* ─── Sticky Metric (Whoop-inspired headline anchor) ─── */
export const STICKY_METRIC = {
  value: "−12.3 kg",
  label: "ค่าเฉลี่ยที่ลูกค้าลดได้ใน 60 วัน · Full Course",
  caveat: "*ผลขึ้นกับแต่ละบุคคล",
};

/* ─── Numeric Proof Bar ─────────────────────── */
export const PROOF_METRICS = [
  { value: "300+",    label: "คน",                  context: "ลูกค้าที่ดูแลตั้งแต่ปี 2562" },
  { value: "7 ปี",   label: "ประสบการณ์",          context: "Wellness Coaching ใน Bangkok" },
  { value: "12,000+", label: "BCA วัด",            context: "ติดตามผลกาย-ใจอย่างจริงจัง" },
  { value: "98%",     label: "ความพึงพอใจ",         context: "จาก survey ลูกค้า 3 รอบล่าสุด" },
];

/* ─── Manifesto · "Why we're different" ─────── */
export const MANIFESTO = {
  eyebrow: "Why UP Wellness",
  title: "ไม่ใช่ MLM · ไม่ใช่ Clinic · ไม่ใช่ Gym",
  subtitle: "เราอยู่ตรงกลางระหว่างทั้ง 3 อย่าง · เอาที่ดีที่สุดของแต่ละมารวมกัน",
  beliefs: [
    {
      hed: "Evidence ก่อน Anecdote",
      sub: "ทุก protocol อ้างอิงงานวิจัย peer-reviewed · ไม่ใช่กระแส · ไม่ใช่ testimonial เดี่ยวๆ",
    },
    {
      hed: "Personalize ทุกคน",
      sub: "ไม่มี ‘one-size-fits-all’ · เราอ่านผลเลือด · BCA · CGM ก่อนออกแบบโปรแกรม",
    },
    {
      hed: "Community ที่อยู่ได้นาน",
      sub: "Longevity เกิดจาก lifestyle ที่ยั่งยืน · ไม่ใช่ใจฮึดคนเดียว · เราจัดกิจกรรมหลากหลาย",
    },
    {
      hed: "ตัวเลขก่อนตัดสินใจ",
      sub: "ทุกคนได้ Body Composition Analysis ก่อนเริ่ม · เห็น progress จริงทุก 14 วัน",
    },
  ],
};

/* ─── How It Works · 3-step process ─────────── */
export const PROCESS = [
  {
    step: 1,
    title: "Assess",
    blurb: "ประเมินรายคน",
    detail: "เริ่มจากแบบประเมินฟรี · BCA วัดส่วนประกอบร่างกาย · อ่านผลเลือดถ้ามี · ฟังเป้าหมายของคุณ",
    duration: "30-60 นาที",
  },
  {
    step: 2,
    title: "Plan",
    blurb: "ออกแบบโปรแกรมเฉพาะคุณ",
    detail: "Stack วิตามิน + อาหารที่เหมาะ · ตั้ง milestones 14 วัน · เลือก community activity ที่ลงตัว",
    duration: "1 สัปดาห์",
  },
  {
    step: 3,
    title: "Live",
    blurb: "อยู่กับมันให้สนุก",
    detail: "Coach ตามทาง LINE · BCA ทุก 14 วัน · ปรับ stack ตามผล · มี community ให้ไปได้ทุกสัปดาห์",
    duration: "14 / 60 / 365 วัน",
  },
];

/* ─── Coach Team (placeholder · update with real) ─── */
export const COACHES = [
  {
    name: "ก. ขจิต",
    role: "Founder · Wellness Coach",
    credentials: "7+ ปี · Certified Nutrition Specialist",
    focus: "Anti-aging · Longevity Protocol",
    initials: "KJ",
  },
  {
    name: "พี่จิ้น",
    role: "Co-founder · Program Director",
    credentials: "Operations + Brand · 5+ ปี",
    focus: "Customer journey · Community",
    initials: "JN",
  },
  {
    name: "ทีมโภชนาการ",
    role: "Nutrition Specialists",
    credentials: "ป.ตรี-โท นักโภชนาการ + Nutrilite cert",
    focus: "Personalized stack · meal design",
    initials: "RD",
  },
  {
    name: "ทีม Community",
    role: "Event Leaders",
    credentials: "Certified Run Coach · Yoga RYT-200 · ICF Coach",
    focus: "Run · Bike · Ice Bath · Forest Bathing",
    initials: "CC",
  },
];

/* ─── FAQ · Trust through candor ────────────── */
export const FAQ = [
  {
    q: "UP Wellness คือ Amway / Nutrilite ใช่ไหม?",
    a: "ใช่ส่วนหนึ่ง · เราเป็น Amway Business Owner ที่ทำธุรกิจอย่างมืออาชีพ และใช้ Nutrilite (global #1 vitamin brand) เป็น tool · แต่งานของเราคือ wellness coaching ไม่ใช่ขายของ · เราแนะนำสินค้าตามที่เหมาะกับลูกค้าจริงๆ ไม่ใช่ตามโควตาขาย",
  },
  {
    q: "ต่างจาก clinic / gym ทั่วไปยังไง?",
    a: "Clinic เน้นรักษาโรค · gym เน้นออกกำลังกาย · เราเน้น lifestyle ทั้งระบบ · กิน + นอน + ขยับ + ใจ · มี Community พาไปทุกสัปดาห์ · ใช้ Nutrilite supplement เป็น tool เสริม ไม่ใช่ตัวเอก",
  },
  {
    q: "ราคาเริ่มที่เท่าไหร่?",
    a: "Health Check ทำได้ฟรี · UP Labs 14 วันเริ่ม 4,999 บาท · Full Course 60 วัน 38,000-50,000 บาท · ไม่มี hidden fee · ดูในตาราง Service Ladder",
  },
  {
    q: "ต้องเป็นสมาชิก Amway ก่อนไหม?",
    a: "ไม่จำเป็น · ลูกค้าซื้อ Nutrilite ผ่านเราในฐานะลูกค้าทั่วไปได้ · ถ้าสนใจสมัครสมาชิกก็ได้ราคาดีกว่า · แต่ไม่บังคับ",
  },
  {
    q: "ผลรับประกันไหม?",
    a: "ไม่รับประกัน · ผลขึ้นกับการลงมือทำของแต่ละคน · แต่เรามี BCA วัดทุก 14 วัน · ถ้าไม่เห็น progress เราปรับแผนทันที · ค่าเฉลี่ย Full Course ลดได้ 8-20 kg ใน 60 วัน",
  },
  {
    q: "Coach ดูแลใกล้ชิดแค่ไหน?",
    a: "Full Course · LINE 1:1 ทุกวัน + นัดติดตามรายสัปดาห์ · UP Labs · ตอบ LINE ใน 24 ชม. · community events 4-6 ครั้ง/เดือน · ไม่ใช่ chatbot · เราคุยกันจริง",
  },
  {
    q: "ถ้ามีโรคประจำตัวต้องทำยังไง?",
    a: "ต้องแจ้งก่อนเริ่มโปรแกรม · เราจะปรับ stack + protocol ให้เหมาะ · บางกรณีจะแนะนำให้พบแพทย์ก่อน · ไม่ใช่ทุกเคสที่เราจะรับ · health safety มาก่อนรายได้",
  },
  {
    q: "Community ต้องเป็นลูกค้าก่อนไหม?",
    a: "ไม่ต้อง · ลอง Run Club / Forest Bathing ครั้งแรกฟรี · ถ้าชอบค่อยตัดสินใจต่อ · เป็น community ที่เปิดสำหรับคนสนใจ wellness ทุกคน",
  },
];

/* ─── Pillars (What We Do) ───────────────────── */
export const PILLARS = [
  {
    key: "weight",
    title: "ลดน้ำหนัก",
    eyebrow: "Weight Management",
    blurb: "ลดได้ ไม่ Yo-Yo · เน้นกลไกฮอร์โมน · ไม่อดอาหาร · ไม่เน้นใจฮึด",
    points: [
      "วิเคราะห์ Metabolic profile รายคน",
      "Stack Nutrilite + อาหารที่เหมาะ",
      "Body Composition Analysis ทุก 14 วัน",
      "Coach ตามใกล้ชิด LINE 1:1",
    ],
  },
  {
    key: "wellness",
    title: "ดูแลสุขภาพ",
    eyebrow: "Wellness",
    blurb: "ครบ 4 ระบบ — กิน · นอน · ขยับ · ใจ · ใช้ Lab จริงเป็นเครื่องชี้วัด",
    points: [
      "ตรวจสุขภาพประจำปี อ่านผลให้ฟัง",
      "ปรับ Lifestyle ทีละขั้น · ไม่กดดัน",
      "CGM 14-day option · เห็น metabolic real-time",
      "ติดตามผลผ่าน UPLABS platform",
    ],
  },
  {
    key: "longevity",
    title: "Longevity",
    eyebrow: "ชะลอวัย · คุณภาพชีวิตระยะยาว",
    blurb: "Science-based · Hallmark of Aging · mTOR · Autophagy · NAD+",
    points: [
      "Longevity assessment 90 มิติ",
      "Phytonutrient saturation protocol",
      "Sleep + Stress + Movement integration",
      "Community ที่ยั่งยืน · ไม่ใช่ trend ระยะสั้น",
    ],
  },
];

/* ─── Community Activities ───────────────────── */
export const COMMUNITY = [
  {
    key: "run",
    title: "UP Run Club",
    blurb: "วิ่งกลุ่ม · ทุกระดับ · เน้นความสม่ำเสมอมากกว่าเร็ว",
    schedule: "อาทิตย์ 6:00",
    location: "สวนสาธารณะ / ทางวิ่ง",
  },
  {
    key: "bike",
    title: "UP Bike",
    blurb: "ปั่นจักรยาน · zone 2 cardio · longevity-grade endurance",
    schedule: "เสาร์ 5:30",
    location: "เส้นปั่น 30-50 km",
  },
  {
    key: "icebath",
    title: "Ice Bath",
    blurb: "Cold exposure · BAT activation · resilience training",
    schedule: "เดือนละ 2 ครั้ง",
    location: "Studio · นัดล่วงหน้า",
  },
  {
    key: "forest",
    title: "Forest Bathing",
    blurb: "Shinrin-yoku · ลด cortisol · เพิ่ม NK cells · phytoncides",
    schedule: "เดือนละ 1 ครั้ง",
    location: "ป่า/สวนใกล้เมือง",
  },
  {
    key: "board",
    title: "Board Game Night",
    blurb: "Strategy + social bonding · cognitive longevity",
    schedule: "ทุก 2 สัปดาห์",
    location: "Cafe/Studio",
  },
  {
    key: "finance",
    title: "การเงินและชีวิต",
    blurb: "Financial wellness workshop · บริหารเงิน · บริหารพลังงานชีวิต",
    schedule: "เดือนละ 1 ครั้ง",
    location: "On-site + Online",
  },
  {
    key: "education",
    title: "Health Education",
    blurb: "การอบรมความรู้สุขภาพ · longevity science · evidence-based",
    schedule: "ทุกเดือน · 2 หัวข้อ",
    location: "Hybrid",
  },
];

/* ─── Service Ladder (Courses) ───────────────── */
export const SERVICES = [
  {
    key: "free",
    name: "Health Check (Free)",
    eyebrow: "Lead Capture · ฟรี",
    price: "ฟรี",
    duration: "5-15 นาที",
    tagline: "เริ่มจากประเมินตัวเองก่อน",
    features: [
      "Health Check 14 ข้อ",
      "MetaFlex Quiz — Fat Adaptation score",
      "BCA Tracker · Body Composition",
      "Auto-recommend tier ถัดไป",
    ],
    cta: "ทำแบบประเมิน",
    href: "#assessment",
  },
  {
    key: "uplabs",
    name: "UP Labs 14-day",
    eyebrow: "Longevity Tier · Try",
    price: "4,999 – 10,000",
    duration: "14 วัน",
    tagline: "แก่ช้า ไม่ป่วย ตายเลย",
    features: [
      "Whole Food Diet + IF + Fat Adaptation",
      "Sirtuins · mTOR · AMPK · Autophagy",
      "ลด UPF · Low Carb High Protein",
      "ผลพลอยได้ น้ำหนัก −3 ถึง −5 kg",
    ],
    cta: "สมัคร UP Labs",
    href: "#contact",
  },
  {
    key: "cgm",
    name: "CGM 14-day Reset",
    eyebrow: "Diagnostic Add-on",
    price: "+2,500 – 3,500",
    duration: "14 วัน",
    tagline: "window สู่ metabolic health ของตัวเอง",
    features: [
      "FreeStyle Libre (Abbott · อย. ไทย)",
      "Food + sleep + stress mapping",
      "Personalized spike pattern",
      "Coaching ทีมโภชนาการ",
    ],
    cta: "เริ่ม CGM",
    href: "#contact",
  },
  {
    key: "full",
    name: "Full Course 60-day",
    eyebrow: "Anti-Aging Tier · Commit",
    price: "38,000 – 50,000",
    duration: "60 วัน · 4 phases × 14d",
    tagline: "ย้อนวัย ย้อนอายุเซลล์ ยกเครื่องใหม่",
    features: [
      "Customized 1:1 · นัดติดตามรายสัปดาห์",
      "Premium supplement stack · DoubleX + Triple Omega",
      "Personalize Protocol ตามผลเลือด",
      "ตั้งใจลด −8 ถึง −20 kg+",
    ],
    cta: "นัดปรึกษา Full Course",
    href: "#contact",
  },
];

/* ─── Trust signals ─────────────────────────── */
export const STATS = [
  { value: "300+", label: "ลูกค้าที่ดูแล" },
  { value: "7 ปี",  label: "ประสบการณ์" },
  { value: "20+",   label: "Community Events/เดือน" },
  { value: "98%",   label: "ความพึงพอใจ" },
];

/* ─── Testimonials ─────────────────────────── */
export const TESTIMONIALS = [
  {
    quote: "ลดได้ 12 kg ใน 3 เดือน · ไม่หิว ไม่เครียด · ทีมตามใกล้ชิดทุกสัปดาห์",
    name: "คุณ A",
    detail: "45 ปี · NAFLD + pre-diabetes",
  },
  {
    quote: "Visceral Fat จาก 12 → 6 ใน 2 รอบ · ตื่นเช้าสดชื่นเหมือนกลับมาเป็นวัยรุ่น",
    name: "คุณ B",
    detail: "52 ปี · Full Course 60-day",
  },
  {
    quote: "เริ่มจาก UP Run Club แล้วต่อ UP Labs · ตอนนี้ชีวิตอยู่ใน community ที่ดี",
    name: "คุณ C",
    detail: "38 ปี · Community first",
  },
];

/* ─── Lead Assessment (Quick Quiz) ─────────── */
export const QUIZ = {
  intro: "ตอบ 5 คำถาม · 1 นาที · เราจะแนะนำว่าควรเริ่มที่ไหน",
  questions: [
    {
      id: "goal",
      q: "เป้าหมายหลักของคุณคืออะไร?",
      options: [
        { value: "weight", label: "ลดน้ำหนัก / รูปร่าง" },
        { value: "health", label: "ดูแลสุขภาพให้ดีขึ้น" },
        { value: "longevity", label: "Longevity · ชะลอวัย" },
        { value: "community", label: "หา community ที่ดี" },
      ],
    },
    {
      id: "weight",
      q: "อยากลดน้ำหนักประมาณกี่ kg? (เลือก 'ไม่ลด' ถ้าไม่ใช่เป้าหมาย)",
      options: [
        { value: "0",     label: "ไม่ลด" },
        { value: "3-5",   label: "3-5 kg" },
        { value: "5-10",  label: "5-10 kg" },
        { value: "10+",   label: "10 kg+" },
      ],
    },
    {
      id: "age",
      q: "ช่วงอายุของคุณ?",
      options: [
        { value: "20-34", label: "20-34 ปี" },
        { value: "35-49", label: "35-49 ปี" },
        { value: "50-64", label: "50-64 ปี" },
        { value: "65+",   label: "65+ ปี" },
      ],
    },
    {
      id: "budget",
      q: "งบที่พร้อมลงทุนต่อโปรแกรม?",
      options: [
        { value: "low",  label: "ต่ำกว่า 5,000 · เริ่มเรียนรู้" },
        { value: "mid",  label: "5,000-15,000 · ลองจริง" },
        { value: "high", label: "20,000-50,000 · ครบสูตร" },
        { value: "ask",  label: "ปรึกษาก่อน" },
      ],
    },
    {
      id: "urgency",
      q: "ตอนนี้อยู่ในสถานะไหน?",
      options: [
        { value: "explore", label: "อยากรู้ก่อน · ยังไม่เริ่ม" },
        { value: "decide",  label: "พร้อม · กำลังเลือก option" },
        { value: "urgent",  label: "ผลตรวจไม่ดี · ต้องเริ่มเร็ว" },
      ],
    },
  ],
};

/* ─── Quiz suggestion engine ───────────────── */
export type QuizAnswers = Record<string, string>;

export function suggestPath(a: QuizAnswers): {
  recommend: string;
  reason: string;
  next: { label: string; href: string };
  alt?: { label: string; href: string };
} {
  // Urgency · health-first logic
  if (a.urgency === "urgent") {
    return {
      recommend: "Full Course 60-day",
      reason: "ผลตรวจไม่ดี + ต้องการเปลี่ยนเร็ว → ต้องการ structured program ที่มี coach ดูแลใกล้ชิดและ stack ครบ",
      next: { label: "นัดปรึกษา Full Course", href: "#contact" },
      alt:  { label: "เริ่มที่ UP Labs ก่อนก็ได้", href: "#contact" },
    };
  }

  // High weight loss goal
  if (a.weight === "10+" || a.budget === "high") {
    return {
      recommend: "Full Course 60-day",
      reason: "เป้าหมายลดน้ำหนัก 10kg+ หรือพร้อมลงทุนเต็มที่ → Full Course เหมาะที่สุด · 4 phases × 14d + 1:1",
      next: { label: "นัดปรึกษา Full Course", href: "#contact" },
    };
  }

  // Longevity focus or 50+ age
  if (a.goal === "longevity" || a.age === "50-64" || a.age === "65+") {
    return {
      recommend: "UP Labs 14-day + CGM Add-on",
      reason: "Longevity-first mindset → เริ่มที่ UP Labs และเพิ่ม CGM 14 วัน ดู metabolic real-time",
      next: { label: "เริ่ม UP Labs + CGM", href: "#contact" },
      alt:  { label: "ลอง Community ก่อน", href: "#community" },
    };
  }

  // Community-first
  if (a.goal === "community") {
    return {
      recommend: "Community Activities",
      reason: "เริ่มจาก Run Club / Bike / Forest Bathing · สร้างนิสัยจาก social bonding ก่อน scale ไป program",
      next: { label: "เข้าร่วม Community", href: "#community" },
      alt:  { label: "ลอง Health Check ฟรี", href: "#assessment" },
    };
  }

  // Medium weight goal
  if (a.weight === "5-10" || a.budget === "mid") {
    return {
      recommend: "UP Labs 14-day",
      reason: "เป้าหมาย 5-10 kg + budget กลาง → UP Labs 14d เห็นผล + เรียนรู้ pattern ของตัวเอง",
      next: { label: "เริ่ม UP Labs", href: "#contact" },
    };
  }

  // Light/explore
  return {
    recommend: "Health Check (Free)",
    reason: "เริ่มจากประเมินตัวเองก่อน · ไม่มีต้นทุน · เห็นภาพรวมแล้วค่อยตัดสินใจ",
    next: { label: "ทำ Health Check ฟรี", href: "#contact" },
    alt:  { label: "ดู Community ที่มี", href: "#community" },
  };
}
