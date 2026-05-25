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
  email: "ckawin@hotmail.com",
  phone: "TODO",              // ⚠️ ใส่เบอร์จริง
  facebook: "upwellness",      // facebook.com/upwellness · ⚠️ TODO confirm
  instagram: "upwellness",     // instagram.com/upwellness · ⚠️ TODO confirm
  foundedYear: 2558,           // พ.ศ. · CE 2015
  foundedYearCE: 2015,
  yearsExperience: 11,         // 2569 − 2558
};

/* ─── Sticky Metric (Whoop-inspired headline anchor) ─── */
export const STICKY_METRIC = {
  value: "1,000+",
  label: "คนที่เปลี่ยนชีวิตได้แล้ว · ด้วย UP Wellness",
  caveat: "*ลูกค้าสะสมตั้งแต่ปี 2558 · ผลขึ้นกับแต่ละบุคคล",
};

/* ─── Numeric Proof Bar ─────────────────────── */
export const PROOF_METRICS = [
  { value: "1,000+",  label: "ลูกค้า",              context: "เปลี่ยนชีวิตได้แล้วตั้งแต่ปี 2558" },
  { value: "11 ปี",   label: "ประสบการณ์",          context: "Wellness Coaching ใน Bangkok" },
  { value: "12 ตัน",  label: "น้ำหนักลดรวม",        context: "สะสมจากลูกค้าทุกคนตลอด 11 ปี" },
  { value: "15+",     label: "Events/เดือน",        context: "Run · Bike · Ice Bath · Forest · Board · Finance · Education" },
];

/* ─── Manifesto · "Why we're different" ─────── */
export const MANIFESTO = {
  eyebrow: "Why UP Wellness",
  title: "หมอ · โค้ช · เพื่อน · ในที่เดียว",
  subtitle: "เราเอาความรู้ทางการแพทย์ · ความใส่ใจของโค้ช · และความอบอุ่นของเพื่อน มารวมไว้ในระบบเดียวที่ดูแลคุณได้ตลอดทาง",
  beliefs: [
    {
      hed: "งานวิจัยนำทาง · ไม่ใช่กระแส",
      sub: "ทุก protocol อ้างอิงงานวิจัย peer-reviewed · ไม่ใช้คำว่า ‘หายจริง’ โดยไม่มีหลักฐาน · เราพูดในสิ่งที่พิสูจน์ได้",
    },
    {
      hed: "คนละแบบกัน · คนละโปรแกรม",
      sub: "ผลเลือดของคุณ · BCA ของคุณ · CGM ของคุณ — คือสิ่งที่บอกว่าโปรแกรมต้องเป็นยังไง · ไม่มีสูตรสำเร็จเดียวกัน",
    },
    {
      hed: "เราไม่ปล่อยให้คุณเดินคนเดียว",
      sub: "Run Club · Bike · Ice Bath · Forest Bathing · มีกิจกรรมทุกสัปดาห์ · ในที่ที่มีคนเดินด้วย · เปลี่ยน lifestyle ทีละนิด · ไม่ต้องใช้ใจฮึด",
    },
    {
      hed: "ตัวเลขเล่าความจริง · ทุก 14 วัน",
      sub: "ทุกคนชั่ง BCA ก่อนเริ่ม · ทุก 14 วันได้รู้ว่าน้ำหนัก ไขมัน กล้ามเนื้อ Visceral เปลี่ยนยังไง · ไม่ใช่แค่ ‘รู้สึกดีขึ้น’",
    },
  ],
};

/* ─── How It Works · 3-step process ─────────── */
export const PROCESS = [
  {
    step: 1,
    title: "Assess",
    blurb: "เริ่มจากรู้จักตัวเองก่อน",
    detail: "ทำแบบประเมินฟรี · ชั่ง BCA ดูว่าตอนนี้กล้ามเนื้อกับไขมันเป็นยังไง · ถ้ามีผลเลือดล่าสุดก็อ่านให้ฟัง · เล่าให้เราฟังว่าอยากเปลี่ยนอะไร",
    duration: "30-60 นาที · ไม่ต้องจ่ายอะไร",
  },
  {
    step: 2,
    title: "Plan",
    blurb: "ออกแบบให้เหมาะกับคุณคนเดียว",
    detail: "เราจัด stack วิตามินกับอาหารที่ตรงกับร่างกายคุณ · ตั้งเป้า 14 วันแรกแบบไม่กดดัน · เลือก community activity ที่คุณชอบ — ไม่ใช่ที่เรายัด",
    duration: "1 สัปดาห์ · เตรียมตัว",
  },
  {
    step: 3,
    title: "Live",
    blurb: "อยู่กับมันให้สบาย · ไม่ต้องฝืน",
    detail: "Coach ตอบ LINE ทุกวัน · ชั่ง BCA ทุก 14 วันให้รู้ว่าเดินถูกทางไหม · ปรับแผนเรื่อยๆ ตามที่ร่างกายตอบ · มี community ให้เจอเพื่อนได้ทุกสัปดาห์",
    duration: "14 / 60 / 365 วัน · เลือกจังหวะเอง",
  },
];

/* ─── Our Philosophy (replaces Coaches) ──────── */
export const PHILOSOPHY = {
  eyebrow: "Our Philosophy",
  title: "เราเชื่อว่า สุขภาพดี ไม่ได้ซับซ้อน",
  subtitle: "แต่ต้องรู้จักร่างกายตัวเองก่อน · แล้วทำให้ถูกที่ · ในจังหวะที่พอดี",
  principles: [
    {
      hed: "ดูแลตัวเองก่อน · ค่อยพึ่งยา",
      sub: "นอน · อาหาร · การขยับ คือยาที่ดีที่สุด · supplement และยา เป็นแค่ตัวเสริมเมื่อพื้นฐานพร้อม",
    },
    {
      hed: "เปลี่ยนทีละนิด ดีกว่าหักโหม",
      sub: "เปลี่ยน 1% ทุกวัน สะสมเป็น 365% ใน 1 ปี · พลังของ compound interest ใช้ได้กับสุขภาพเหมือนการเงิน",
    },
    {
      hed: "Healthspan ไม่ใช่แค่ Lifespan",
      sub: "เราไม่ได้อยากให้คุณ ‘อยู่นาน’ อย่างเดียว · เราอยากให้คุณ ‘อยู่นานอย่างมีคุณภาพ’ · เดินได้ คิดได้ ใช้ชีวิตได้จนวันสุดท้าย",
    },
    {
      hed: "ถามให้ถูก ก่อนทำให้ตรง",
      sub: "ตรวจร่างกาย · BCA · CGM · ผลเลือด · มาก่อนการตัดสินใจว่าจะกินอะไร เลิกอะไร เพิ่มอะไร · ‘เดา’ ไม่ใช่วิธีของเรา",
    },
  ],
};

/* ─── FAQ · Trust through candor ────────────── */
export const FAQ = [
  {
    q: "ต่างจาก clinic หรือ gym ทั่วไปยังไง?",
    a: "Clinic เน้นรักษาโรคที่เป็นแล้ว · gym เน้นออกกำลังกายอย่างเดียว · ส่วนเราดูแลทั้งวิถีชีวิต — กิน · นอน · ขยับ · ใจ — พร้อม Community ที่ไปทำกิจกรรมร่วมกันทุกสัปดาห์ · เราอยู่ตรงกลางระหว่างแพทย์ · โค้ช · และเพื่อน",
  },
  {
    q: "ราคาเริ่มที่เท่าไหร่?",
    a: "Health Check ทำได้ฟรีบนเว็บนี้เลย · ส่วนโปรแกรมที่เหลือ — เพราะเราออกแบบเฉพาะแต่ละคน ราคาเลยขึ้นกับความซับซ้อนของเป้าหมาย · ทักทาง LINE มาก่อน เราจะคำนวณให้แบบไม่กดดัน · ไม่มี hidden fee · ไม่ขายของที่ไม่จำเป็น",
  },
  {
    q: "Coach ดูแลใกล้ชิดแค่ไหน?",
    a: "Full Course · LINE 1:1 ทุกวัน + นัดติดตามรายสัปดาห์ · UP Labs · ตอบ LINE ใน 24 ชั่วโมง · Community events มีให้ไปทุกสัปดาห์ · ไม่ใช่ chatbot · ไม่ใช่ outsource · เป็นทีมของเราคุยกันจริง",
  },
  {
    q: "ถ้ามีโรคประจำตัว ต้องทำยังไง?",
    a: "บอกเราก่อนเริ่มโปรแกรม · เราจะปรับ stack และ protocol ให้เหมาะกับสถานะของคุณ · ในบางกรณีเราจะแนะนำให้พบแพทย์ยืนยันก่อน · ถ้ามีบางเคสที่เกินขอบเขตของ wellness coaching เราจะบอกตรงๆ · ความปลอดภัยมาก่อนรายได้เสมอ",
  },
  {
    q: "Community ต้องเป็นลูกค้าก่อนไหม?",
    a: "ไม่ต้อง · ลองเข้า Run Club หรือ Forest Bathing ครั้งแรกได้ฟรี · ถ้ารู้สึกใช่ค่อยตัดสินใจสมัครโปรแกรม · Community เปิดสำหรับทุกคนที่สนใจดูแลสุขภาพระยะยาว",
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
    blurb: "วิ่งกลุ่ม · ทุกระดับ · เน้นความสม่ำเสมอมากกว่าความเร็ว · มือใหม่เริ่มที่ 3 km ได้",
    schedule: "ติดตามใน LINE OA",
    location: "สวนสาธารณะ · ทางวิ่งในกรุงเทพฯ",
  },
  {
    key: "bike",
    title: "UP Bike",
    blurb: "ปั่นจักรยาน · zone 2 cardio · longevity-grade endurance · ขยับร่างกายแบบไม่กระแทกเข่า",
    schedule: "ติดตามใน LINE OA",
    location: "เส้นปั่นนอกเมือง 30-50 km",
  },
  {
    key: "icebath",
    title: "Ice Bath",
    blurb: "Cold exposure · กระตุ้น brown fat · สร้างความอดทนของระบบประสาท",
    schedule: "ติดตามใน LINE OA",
    location: "Studio · นัดล่วงหน้า",
  },
  {
    key: "forest",
    title: "Forest Bathing",
    blurb: "Shinrin-yoku · เดินในป่าช้าๆ · ลด cortisol · เพิ่ม NK cells · ได้รับ phytoncides",
    schedule: "ติดตามใน LINE OA",
    location: "ป่า / สวนใกล้กรุงเทพฯ",
  },
  {
    key: "board",
    title: "Board Game Night",
    blurb: "เล่นบอร์ดเกมกับเพื่อนใหม่ · ฝึกคิดแบบ strategy · cognitive longevity training",
    schedule: "ติดตามใน LINE OA",
    location: "Café · Studio",
  },
  {
    key: "finance",
    title: "การเงินและชีวิต",
    blurb: "Workshop วางแผนการเงินที่ใช้ได้จริง · เพราะ wellness ไม่ใช่แค่ร่างกาย",
    schedule: "ติดตามใน LINE OA",
    location: "On-site + Online",
  },
  {
    key: "education",
    title: "Health Education",
    blurb: "อบรมความรู้สุขภาพ · longevity science · เรื่องที่ไม่มีในตำราเรียน · evidence-based",
    schedule: "ติดตามใน LINE OA",
    location: "Hybrid",
  },
];

/* ─── Service Ladder (Courses) ───────────────── */
/* Prices intentionally hidden on landing · driven to LINE consult */
export const SERVICES = [
  {
    key: "free",
    name: "Health Check",
    eyebrow: "เริ่มที่นี่ · ฟรี",
    price: "ฟรี",
    duration: "5-15 นาที · ทำได้บนหน้าเว็บ",
    tagline: "เริ่มจากรู้จักตัวเองก่อนตัดสินใจอะไร",
    features: [
      "Health Check 14 ข้อ",
      "MetaFlex Quiz — Fat Adaptation score",
      "BCA Tracker · Body Composition",
      "ระบบแนะนำเส้นทางถัดไปให้คุณ",
    ],
    cta: "ทำแบบประเมิน",
    href: "#assessment",
  },
  {
    key: "uplabs",
    name: "UP Labs 14-day",
    eyebrow: "Longevity Tier · เริ่มลอง",
    price: "ปรึกษาราคา",
    duration: "14 วัน · self-care + support",
    tagline: "เริ่มเปลี่ยนวิถีชีวิต · เห็นผลใน 2 สัปดาห์",
    features: [
      "Whole Food Diet + IF + Fat Adaptation",
      "เรียนรู้ Sirtuins · mTOR · AMPK · Autophagy",
      "ลด Ultra-processed · Low Carb High Protein",
      "ผลพลอยได้ น้ำหนัก −3 ถึง −5 kg",
      "ทำซ้ำได้ปีละ 2-3 รอบ",
    ],
    cta: "สอบถามทาง LINE",
    href: "#contact",
  },
  {
    key: "cgm",
    name: "CGM 14-day Reset",
    eyebrow: "Diagnostic · Add-on",
    price: "ปรึกษาราคา",
    duration: "14 วัน · sensor + coaching",
    tagline: "ดู metabolic ของคุณ real-time",
    features: [
      "FreeStyle Libre (Abbott · อย. ไทย)",
      "บันทึกอาหาร · นอน · stress",
      "วิเคราะห์ pattern น้ำตาลขึ้น",
      "Roadmap 14 วัน → ต่อ 90 วัน",
      "ทีมโภชนาการดูแล · ไม่ใช่นักขาย",
    ],
    cta: "สอบถามทาง LINE",
    href: "#contact",
  },
  {
    key: "full",
    name: "Full Course 60-day",
    eyebrow: "Premium · 1:1 Personalized",
    price: "ปรึกษาราคา",
    duration: "60 วัน · 4 phases × 14 วัน",
    tagline: "ยกเครื่องสุขภาพทั้งระบบ · 1:1",
    features: [
      "ปรับ BodyKey 4 phases ตามร่างกายคุณ",
      "Premium stack · DoubleX + Triple Omega + B+ + Bio C + Probiotic",
      "นัดติดตามรายสัปดาห์ · LINE 1:1 ทุกวัน",
      "ตั้งใจ −8 ถึง −20 kg+ · anti-aging investment",
      "ค่าโปรแกรม = 100% supplement · ไม่มี coaching fee แยก",
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
  // Urgency · always route to LINE consultation first · don't auto-prescribe
  if (a.urgency === "urgent") {
    return {
      recommend: "ปรึกษาทีมก่อน · ทาง LINE",
      reason: "เคสที่ผลตรวจไม่ดีและต้องการเปลี่ยนเร็ว · ต้องการการประเมินเฉพาะตัวก่อน · ไม่ใช่โปรแกรมสำเร็จรูป · ทักทาง LINE เรามาดูข้อมูลของคุณก่อนแนะนำเส้นทาง",
      next: { label: "ทักทาง LINE OA", href: "#contact" },
      alt:  { label: "ดูบริการทั้งหมดก่อน", href: "#services" },
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
