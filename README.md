# 🎌 Plae-Cartoon AI — AI-แปลการ์ตูน

> แปลมังงะ มันฮวา มันฮวา ด้วย AI ผ่าน OpenRouter | PWA รองรับมือถือ Android & iOS

---

## 📂 ไฟล์ทั้งหมด

```
plae-cartoon-ai/
├── index.html      ← แอปหลัก (ไฟล์เดียวจบ)
├── manifest.json   ← ข้อมูล PWA
├── sw.js           ← Service Worker (offline)
├── icon-192.svg    ← ไอคอน 192×192
├── icon-512.svg    ← ไอคอน 512×512
└── README.md       ← ไฟล์นี้
```

---

## 🚀 วิธี Deploy บน GitHub Pages (ละเอียดทีละขั้น)

### ขั้นที่ 1 — สมัคร GitHub (ถ้ายังไม่มีบัญชี)
1. ไปที่ https://github.com/signup
2. กรอก Username, Email, Password
3. ยืนยัน Email

---

### ขั้นที่ 2 — สร้าง Repository ใหม่
1. กดปุ่ม **"+"** มุมขวาบน → **"New repository"**
2. ตั้งค่าดังนี้:
   - **Repository name:** `plae-cartoon-ai`
   - **Description:** `AI-แปลการ์ตูน ด้วย OpenRouter`
   - **Public** ✅ (ต้องเป็น Public ถึงใช้ Pages ฟรีได้)
   - **Add a README file** ❌ (อย่าติ๊ก — เราจะอัปโหลดเองทีหลัง)
3. กด **"Create repository"** สีเขียว

---

### ขั้นที่ 3 — อัปโหลดไฟล์ (วิธีไม่ต้องใช้ Terminal)
1. ในหน้า repo ที่เพิ่งสร้าง จะเห็นข้อความ **"uploading an existing file"**
2. กดที่ **"uploading an existing file"**
3. ลาก **ไฟล์ทั้ง 5** มาวางในกรอบ:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.svg`
   - `icon-512.svg`
4. รอจนทุกไฟล์ขึ้นชื่อครบ
5. ที่ **"Commit changes"** ด้านล่าง:
   - ช่องแรก: `Add Plae-Cartoon AI app files`
   - กด **"Commit changes"** สีเขียว

---

### ขั้นที่ 4 — เปิดใช้ GitHub Pages
1. ใน repo กดแถบ **"Settings"** (เฟือง ⚙️)
2. เมนูซ้าย เลื่อนหา **"Pages"**
3. ตรง **"Source"** เลือก **"Deploy from a branch"**
4. ตรง **"Branch"** เลือก **`main`** และโฟลเดอร์ **`/ (root)`**
5. กด **"Save"**
6. รอ **1-3 นาที** แล้ว Refresh หน้า
7. จะเห็นแบนเนอร์เขียว: **"Your site is live at https://USERNAME.github.io/plae-cartoon-ai/"**

---

### ขั้นที่ 5 — ทดสอบบนมือถือ
1. เปิด URL ที่ได้ในโทรศัพท์
2. **Android Chrome:** แตะเมนู ⋮ → "เพิ่มไปหน้าจอหลัก"
3. **iPhone Safari:** แตะปุ่ม Share 📤 → "Add to Home Screen"
4. แอปจะติดตั้งและเปิดเหมือน Native App!

---

## 🔑 วิธีใช้งาน

1. เปิดแอป → ใส่ **OpenRouter API Key** (สมัครฟรีที่ openrouter.ai)
2. เลือก **โมเดล AI** (แนะนำ Gemini 2.0 Flash สำหรับเริ่มต้น)
3. เลือกวิธีใส่รูป:
   - **🔗 URL** — วาง URL รูปตรง
   - **🌐 เว็บ** — วาง URL หน้า kingofshojo.com หรือเว็บอื่น
   - **📖 MDex** — วาง URL บท MangaDex
   - **📁 ไฟล์** — อัปโหลดจากเครื่อง
4. กด **TRANSLATE ALL** — รอผลการแปล

---

## 🤖 โมเดลที่รองรับ (2025-2026)

| โมเดล | Provider | ปี | จุดเด่น |
|-------|----------|-----|---------|
| Gemini 3.1 Pro | Google | 2026 | ดีที่สุด |
| Gemini 3 Flash | Google | 2026 | เร็วมาก |
| Gemini 2.5 Pro | Google | 2025 | สมดุล |
| Qwen3.5 VL 397B | Alibaba | 2026 | OCR แม่น |
| Claude Sonnet 4.6 | Anthropic | 2026 | ภาษาธรรมชาติ |
| GPT-4.1 | OpenAI | 2025 | ครบ |
| Mistral Small 3.1 | Mistral | - | **ฟรี** |
| Qwen3 VL 235B | Alibaba | 2026 | **ฟรี** |

---

## ❓ แก้ปัญหา

**รูปไม่โหลด / CORS Error:**
→ ไปที่ ⚙️ ตั้งค่า → CORS Proxy → ใส่ `https://corsproxy.io/?`

**API Error 401:**
→ ตรวจสอบ API Key ที่ openrouter.ai/keys

**ติดตั้งบน iPhone ไม่ได้:**
→ ต้องใช้ Safari เท่านั้น (ไม่ใช่ Chrome)

---

*Plae-Cartoon AI © 2026 — Powered by OpenRouter*
