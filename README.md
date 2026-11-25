# Imagine City V16

เปิด `index.html` ในเบราว์เซอร์

ปรับปุ่ม “เริ่มการเดินทาง”, “เดินทางต่อ” และ “เลือกแล้วเดินทางต่อ” ให้ขยับขึ้นมาใกล้กรอบ/เนื้อหามากขึ้น โดยปรับระยะตามหน้าประเภทต่าง ๆ และหน้าจอมือถือ

คงหน้าเปิดแบบ Fade อัตโนมัติ ไม่มีปุ่มเข้าสู่เรื่องราว ไม่มีม่าน และคงระบบคำถาม/ผลลัพธ์/โมชั่นเดิม


V19: เปลี่ยนคำถาม “ของติดตัว” เป็นการ์ดภาพ 5 ใบ ตามลำดับภาพที่ผู้ใช้กำหนด พร้อมสถานะเลือกและการจัดวาง responsive.

V21: Removed visible captions below the five illustrated object choice cards; preserved accessible labels and selection logic.

V22: เพิ่มตัวละครภูตไว้บนสุดภายในกรอบผลลัพธ์ ตามสาขา IGD/DEN/AFX/DGA/DGD และรองรับผลลัพธ์ผสมโดยแสดงตัวละครสาขารองภายในส่วนเลื่อนอ่าน โดยไม่เปลี่ยนระบบคะแนน

V24: ขยายภาพตัวละครผลลัพธ์หลักและรองให้ใหญ่ขึ้น โดยยังเลื่อนอ่านข้อความในกรอบได้


V25: Added looping piano soundtrack in assets/background-music.mp3. Playback begins on the first user interaction due to browser autoplay policy. Toggle at bottom right; music fades in/out and is independent of motion.

## V26
Presentation and motion polish only. Reference website could not be retrieved. Story data unchanged.

## V27
Uses the supplied faded and colorful paper city backgrounds. Color opacity follows the existing answer progress from 0 to 100 percent. Story and scoring unchanged.

V28: แถบความคืบหน้าแสดงชื่อบท เปอร์เซ็นต์ ย่านที่สำรวจ และจบบริบูรณ์ 100% โดยไม่เปลี่ยนคะแนนหรือเนื้อเรื่อง

V30: ใช้ภาพเวทีเฉพาะบทชวนขึ้นเวทีทั้งหน้าเรื่องและคำถาม กลับสู่ฉากเมืองเดิมเมื่อเดินทางต่อ โดยคงระดับสีเมืองตามคำตอบ


V31: Replace all five result character PNGs with the supplied paper-texture characters; preserve existing score-to-color mapping and all code.

V32: Lumin appears after the first story, floats and cycles five colors on click; resets on restart.


V33: เมืองไร้สีจนจบบทชวนขึ้นเวที จากนั้นกลับสู่เมืองสีสันเต็มที่จนจบเรื่อง

V34: Updated Lumin artwork from five supplied PNGs; debut on first chapter question, persistent orbit and one color per click.

V35: Lumin opens at screen center, shrinks and flies around the perimeter; mobile uses the reserved top lane.

V36: Removed parchment artwork from story and result pages; retained content, scrolling and contrast.

V37: Lumin teleports between selected story scenes and cycles colors; larger companion and slow falling four-point stars.

V38: Lumin dialogue replaces the traveler form with nine optional individual questions. Answers remain in session memory and do not affect scores.

V39: ย้ายคำถามชื่อเล่นและบททักทาย Lumin ไปหลังเนื้อเรื่องประกายแรก ก่อนคำถามหลักข้อแรก ไม่ถามชื่อซ้ำตอนท้าย

V40: centered content; result PNG card 1080×1350, native file share where supported, download fallback.

V41: preview dialog for every displayed result, individual PNG downloads and all-card ZIP, multi-file native sharing where supported.

## V42
- Styled native scrollbars with slim rounded gold/cream thumbs and translucent tracks inspired by chapter progress, including preview and dialogue scroll areas. Firefox uses its native thin scrollbar styling.

V43: Centered result text, characters and actions on a shared axis; removed legacy asymmetric paragraph margins.

V44: brighter and larger falling stars, centered Lumin speaker, no skip-response filler or empty reply paragraph.

## V45
- Replace all five object-choice images with supplied paper cards, preserving branch codes and scoring.

V46: เล่นเสียง result-shine.mp3 หนึ่งครั้งเมื่อเข้าสู่ผลลัพธ์ ลดเพลงพื้นหลังชั่วคราว และเคารพปุ่มปิดเพลงเดิม

V47: Added user-provided answer interface sound for choices and answer submission, respecting the music toggle and restarting rather than overlapping.
