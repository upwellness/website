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

/* ─── Journeys · "Transformations" (never call them before/after) ─── */
export const JOURNEYS = [
  {
    metric: "−12 kg",
    period: "90 วัน",
    persona: "ผู้บริหาร · 45 ปี",
    headline: "จาก NAFLD กลับมาเป็นตัวเองอีกครั้ง",
    detail: "ไขมันพอกตับลด · pre-diabetes กลับมาปกติ · นอนหลับลึกขึ้น · ไม่ต้องอด ไม่ต้องหิว",
    tags: ["Full Course", "BCA", "CGM"],
    accent: "rose",
  },
  {
    metric: "Visceral 12 → 6",
    period: "2 รอบ · 60 วัน",
    persona: "นักธุรกิจ · 52 ปี",
    headline: "พลังงานกลับมา · เหมือนเด็กลง 10 ปี",
    detail: "ไขมันหุ้มอวัยวะภายในลดครึ่งหนึ่ง · ตื่นเช้าสดชื่น · ทำงานได้ทั้งวันไม่ล้า",
    tags: ["Longevity", "Sleep", "Energy"],
    accent: "green",
  },
  {
    metric: "+8 events/เดือน",
    period: "เริ่มที่ community",
    persona: "freelancer · 38 ปี",
    headline: "จากคนเหงา · เป็นคนที่มี community ที่ดี",
    detail: "เริ่มจาก UP Run Club · ต่อด้วย UP Labs · ตอนนี้ชีวิตอยู่กับคนที่อยากดูแลสุขภาพเหมือนกัน",
    tags: ["Run Club", "Community", "Lifestyle"],
    accent: "gold",
  },
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

/* ═══════════════════════════════════════════════════════════════ */
/* LANDING DESIGN v3 · data shapes that match UP Wellness.html      */
/* ═══════════════════════════════════════════════════════════════ */

/* Hero stats card (4 numbers, 2 cols × 2 rows) */
export const LANDING_STATS = [
  { value: "1,000+", label: "ลูกค้าดูแลโดยตรง" },
  { value: "11 ปี",   label: "ประสบการณ์ดูแลสุขภาพ" },
  { value: "12 ตัน",  label: "น้ำหนักลดรวม · 11 ปี" },
  { value: "15+",     label: "Community Events / เดือน" },
];

/* 3 Pillars · About section */
export const LANDING_PILLARS = [
  {
    n: "01",
    accent: "wellness" as const,
    title: "ลดน้ำหนัก ดูแลสุขภาพ",
    th: "Foundation",
    body: "เริ่มจากพื้นฐานที่ถูกต้อง · Metabolic Health · โภชนาการ · การเคลื่อนไหว · การนอน — ปรับเปลี่ยนวิถีชีวิตอย่างยั่งยืน ไม่ใช่แค่ลดเร็วแล้วกลับมา",
  },
  {
    n: "02",
    accent: "rose" as const,
    title: "คอร์สเฉพาะบุคคล",
    th: "Personalize",
    body: "ออกแบบโปรแกรมจากข้อมูลคุณเอง · BCA · CGM · Wearable · เลือดและ Lab — ทีมที่ปรึกษาและโค้ชวิเคราะห์ให้แบบ 1-on-1",
  },
  {
    n: "03",
    accent: "science" as const,
    title: "Longevity Protocol",
    th: "Live longer",
    body: "Science-backed protocol อิงงานวิจัย Longevity ระดับโลก · ติดตาม biomarkers ทุก 14 วัน · ปรับ supplement และ lifestyle อย่างต่อเนื่อง",
  },
];

/* Programs · 3 tiers (Foundation / Personalize · featured / Longevity) */
export const LANDING_PROGRAMS = [
  {
    tier: "Foundation",
    price: "ปรึกษา",
    cadence: "/ 8 สัปดาห์",
    tag: "เริ่มต้นที่นี่",
    accent: "wellness" as const,
    points: [
      "ประเมินสุขภาพเริ่มต้น · BCA + แบบสอบถาม",
      "คอร์ส online + พื้นฐานโภชนาการ + การเคลื่อนไหว",
      "Group coaching รายสัปดาห์",
      "ติดตาม BCA ทุก 14 วัน",
      "เข้า Community Events ทุก event",
    ],
  },
  {
    tier: "Personalize",
    price: "ปรึกษา",
    cadence: "/ 12 สัปดาห์",
    tag: "ยอดนิยม",
    accent: "rose" as const,
    featured: true,
    points: [
      "ทุกอย่างใน Foundation",
      "1-on-1 กับที่ปรึกษาสุขภาพ",
      "ตรวจเลือด + Lab พื้นฐาน",
      "CGM 14 วัน · วิเคราะห์ glucose response",
      "Personalized Nutrilite stack",
      "Wearable integration + biomarker tracking",
    ],
  },
  {
    tier: "Longevity Protocol",
    price: "ปรึกษา",
    cadence: "/ 6 เดือน",
    tag: "ยกระดับ",
    accent: "science" as const,
    points: [
      "ทุกอย่างใน Personalize",
      "Advanced Lab · Hormone · Inflammation · ApoB",
      "ตรวจ Biological Age (Epigenetic) เริ่มต้น + 6 เดือน",
      "1-on-1 กับที่ปรึกษา + โค้ชชีพ รายสัปดาห์",
      "Custom Longevity Protocol อิงงานวิจัย",
      "เข้าถึง Specialist Network",
    ],
  },
];

/* Community bento (8 items with design's tag/time/where/tone/emoji shape) */
export const LANDING_COMMUNITY = [
  { tag: "Movement",  title: "UP Run Club",        time: "ทุกวันเสาร์",        where: "สวนสาธารณะ กทม.",   blurb: "วิ่งกลุ่ม · ทุกระดับ · เน้นความสม่ำเสมอมากกว่าความเร็ว · มือใหม่เริ่มที่ 3 km ได้",                tone: "wellness" as const, emoji: "🏃", img: "/img/com-run.jpg" },
  { tag: "Movement",  title: "UP Bike",            time: "ทุกอาทิตย์",         where: "เส้นปั่นนอกเมือง",   blurb: "ปั่นเป็นกลุ่ม · zone 2 cardio · longevity-grade endurance · ขยับร่างกายไม่กระแทกเข่า",          tone: "science" as const,  emoji: "🚴" },
  { tag: "Recovery",  title: "Ice Bath",           time: "ทุก 2 สัปดาห์",       where: "Studio · กทม.",      blurb: "Cold exposure 3 นาที × 3 รอบ · ฝึก autonomic resilience · มีทีมโค้ชกำกับดูแล",                tone: "science" as const,  emoji: "🧊", img: "/img/com-ice.jpg" },
  { tag: "Recovery",  title: "Forest Bathing",     time: "เดือนละครั้ง",        where: "เขาใหญ่ / กาญฯ",     blurb: "Shinrin-yoku ปลีกเข้าป่า ปิดมือถือ ฟังธรรมชาติ — ลด cortisol คืน parasympathetic system",       tone: "wellness" as const, emoji: "🌲", img: "/img/com-forest.jpg" },
  { tag: "Mind",      title: "Board Game Night",   time: "ทุกสัปดาห์",         where: "UP Lounge",          blurb: "เกมกระดานเพื่อ cognitive longevity — Wingspan, Catan, Splendor · พบเพื่อนใหม่ในชุมชน",         tone: "amber" as const,    emoji: "🎲", img: "/img/com-board.jpg" },
  { tag: "Mind",      title: "การเงินและชีวิต",     time: "เดือนละครั้ง",        where: "Online + On-site",   blurb: "วงสนทนาการเงินส่วนบุคคล · วางแผนเกษียณ + life design — สุขภาพการเงินคือสุขภาพด้วย",            tone: "rose" as const,     emoji: "💰" },
  { tag: "Education", title: "Knowledge Series",   time: "ทุก 2 สัปดาห์",       where: "Online Webinar",     blurb: "อบรมโดยทีมผู้เชี่ยวชาญ — Metabolic · Hormone · Sleep · Nutrition · Longevity",                tone: "amber" as const,    emoji: "📚", img: "/img/com-knowledge.jpg" },
  { tag: "Education", title: "Cooking Class",      time: "เดือนละครั้ง",        where: "UP Kitchen",         blurb: "เรียนทำอาหาร low-glycemic + high-protein · ทำเองได้ที่บ้าน · นำกลับบ้านได้",                  tone: "rose" as const,     emoji: "🥗" },
];

/* Supplement categories (4 buckets, mapped to Nutrilite stack) */
export const LANDING_SUPPLEMENT_CATEGORIES = [
  { name: "Foundation",     items: "Double X · Triple Omega · Vitamin D · Cal Mag D · Bio C",         accent: "wellness" as const },
  { name: "Metabolic",      items: "Calow · CLA · Fiber Powder · Chewable Fiber",                       accent: "rose" as const },
  { name: "Longevity",      items: "CoQ10 Plus · Lingzhi · Cistanche · Ginkgo Plus · Siberian Ginseng", accent: "science" as const },
  { name: "Sleep & Stress", items: "Jujube Nite (GABA) · Lecithin E · Probiotic W",                    accent: "amber" as const },
];

/* Transformations · 3 case studies (story rows with start + end image slot + metrics) */
export const LANDING_TRANSFORMATIONS = [
  {
    name: "คุณ A", age: 45, role: "ผู้บริหาร",
    period: "90 วัน",
    program: "Full Course",
    startLabel: "Day 0",
    endLabel: "Day 90",
    quote: "ลดน้ำหนักไม่ใช่เป้าหมายหลัก — เป้าหมายคือกลับมามีพลังเหมือนตอนอายุ 30 และตับไม่มีไขมันพอกอีก",
    metrics: [
      { v: "−12 kg",  l: "น้ำหนัก" },
      { v: "NAFLD → ปกติ", l: "ตับ" },
      { v: "+22%",    l: "พลังงาน" },
    ],
    tone: "rose" as const,
  },
  {
    name: "คุณ B", age: 52, role: "นักธุรกิจ",
    period: "60 วัน · 2 รอบ",
    program: "Full Course",
    startLabel: "เริ่มต้น",
    endLabel: "60 วัน",
    quote: "ไขมันหุ้มอวัยวะภายใน (Visceral Fat) ลดครึ่งหนึ่ง · ตื่นเช้าสดชื่นเหมือนกลับเป็นวัยรุ่น · ทำงานได้ทั้งวันไม่ล้า",
    metrics: [
      { v: "12 → 6",   l: "Visceral Fat" },
      { v: "−9 kg",    l: "น้ำหนัก" },
      { v: "+1.8 kg",  l: "Muscle" },
    ],
    tone: "wellness" as const,
  },
  {
    name: "คุณ C", age: 38, role: "freelancer",
    period: "เริ่มที่ community",
    program: "Community → UP Labs",
    startLabel: "เริ่มต้น",
    endLabel: "ปัจจุบัน",
    quote: "เริ่มจาก UP Run Club ทุกเสาร์ · ต่อ UP Labs · ตอนนี้ชีวิตอยู่กับคนที่อยากดูแลสุขภาพเหมือนกัน · ไม่ได้เปลี่ยนแค่น้ำหนัก แต่เปลี่ยนทั้งวิถี",
    metrics: [
      { v: "8 events/mo", l: "Community" },
      { v: "−6 kg",       l: "น้ำหนัก" },
      { v: "+12 hr",      l: "Sleep/wk" },
    ],
    tone: "amber" as const,
  },
];

/* Testimonials · dark section (3 quotes) */
export const LANDING_TESTIMONIALS = [
  {
    name: "คุณ A", age: 45, role: "ผู้บริหาร",
    quote: "เริ่มจาก Foundation 8 สัปดาห์ ลด 6 kg และไขมันในตับลดจริง · ตอนนี้อยู่ Longevity Protocol รู้สึกแข็งแรงกว่า 10 ปีที่แล้ว",
    result: "−12 kg · NAFLD ปกติ",
  },
  {
    name: "คุณ B", age: 52, role: "นักธุรกิจ",
    quote: "ชอบที่นี่เพราะอ้างอิงงานวิจัย ไม่ขายฝัน · ทีมที่ปรึกษาอธิบายทุกขั้นตอน เห็นผลจาก BCA ทุก 14 วัน",
    result: "Visceral 12 → 6",
  },
  {
    name: "คุณ C", age: 38, role: "freelancer",
    quote: "Community ทำให้เปลี่ยนได้จริง · Run Club ทุกเสาร์ และ Board Game ทุกพฤหัส กลายเป็นวิถีชีวิตใหม่",
    result: "+8 events/เดือน",
  },
];

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
