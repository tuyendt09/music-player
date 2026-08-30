// ─────────────────────────────────────────────────────────────────────────
//  SONG DATA — the single source of truth for the showcase.
//
//  To go live with real tracks:
//   1. Drop the real MP3 at  public/audio/<slug>.mp3  (same filename).
//   2. If its length differs, update `durationSeconds` below.
//   3. Edit any copy (title, concept, lyrics, …) right here. No other file changes.
//
//  Placeholder audio today = silent MP3s whose length matches `durationSeconds`,
//  so play / pause / seek / progress all work in the demo. See scripts/gen-audio.sh.
// ─────────────────────────────────────────────────────────────────────────

export interface Song {
  /** Stable slug — also the audio filename: public/audio/<slug>.mp3 */
  slug: string;
  /** Song title (Vietnamese). */
  title: string;
  /** Literal English gloss of the title, shown small for non-Vietnamese stakeholders. */
  titleGloss: string;
  /** Music direction / genre label. */
  genre: string;
  /** Short mood / tempo chips for at-a-glance comparison. */
  moodTags: string[];
  /** Beats per minute. */
  bpm: number;
  /** Track length in seconds — must match the audio file. */
  durationSeconds: number;
  /** One line: the creative idea behind the direction. */
  concept: string;
  /** Short pitch description (1–2 sentences). */
  description: string;
  /** How this direction could serve the campaign. */
  campaignFit: string;
  /** Full lyrics (Vietnamese). Blank line = stanza break. */
  lyrics: string;
}

export const songs: Song[] = [
  {
    slug: 'dau-trong-huyet-quan',
    title: 'Dầu Trong Huyết Quản',
    titleGloss: 'Oil in the Veins',
    genre: 'Rap / Hip-hop',
    moodTags: ['Đường phố', 'Tự tin', 'Gai góc'],
    bpm: 92,
    durationSeconds: 178,
    concept:
      'Nhịp rap kể chuyện một ngày của thợ trẻ trong xưởng — mồ hôi, cờ-lê và niềm tự hào nghề.',
    description:
      'Beat boom-bap hiện đại, lời rap sắc và đời. Tôn vinh thế hệ thợ trẻ coi garage là sân khấu của mình.',
    campaignFit:
      'Hợp với các KOL rap/underground và nội dung short-video đường phố. Là chất liệu mạnh cho vòng thử thách của thợ trẻ đô thị.',
    lyrics: `Sáng chưa tỏ, cửa cuốn đã kêu vang
Mùi dầu quen, tay lấm, chẳng vội vàng
Cờ-lê xoay, từng vòng như nhịp tim
Nghề chọn tao, tao chẳng đi tìm

Người ta gõ bàn phím, tao gõ vào đời
Từng con ốc siết chặt một lời thề thôi
Xe nằm đây bệnh, tao là người bắt mạch
Nổ máy giòn tan — đó là tiếng vỗ tay

[Điệp khúc]
Dầu trong huyết quản, lửa trong tim
Garage là nhà, chẳng phải đi tìm
Bàn tay lấm lem viết nên tên mình
Castrol chảy trong từng nhịp bình minh`,
  },
  {
    slug: 'lua-trong-xuong',
    title: 'Lửa Trong Xưởng',
    titleGloss: 'Fire in the Workshop',
    genre: 'Rock anthem',
    moodTags: ['Bùng nổ', 'Nổi loạn', 'Cao trào'],
    bpm: 138,
    durationSeconds: 204,
    concept:
      'Anthem rock guitar nặng — tinh thần không khuất phục của người thợ, mỗi động cơ là một trận chiến.',
    description:
      'Riff guitar dày, trống dồn và điệp khúc hát theo được. Bản nhạc dựng khí thế, dành cho những khoảnh khắc cao trào.',
    campaignFit:
      'Nhạc nền lý tưởng cho trailer chiến dịch và cảnh “hé lộ người hùng”. Tạo cảm giác epic khi lên hình.',
    lyrics: `Đèn xưởng bật, đêm chưa chịu ngủ
Tiếng máy mài xé toạc màn đêm
Tay chai sạn nhưng tim chưa cũ
Càng khó khăn ta càng đứng lên

Không ai cho ta con đường bằng phẳng
Ta tự mài, tự siết, tự đi
Khói bay lên như lời ta khẳng định
Gục ngã ư? Chưa từng nghĩ tới khi

[Điệp khúc]
Lửa trong xưởng không bao giờ tắt
Cháy trong tay, cháy giữa lồng ngực này
Dù đêm dài, dù đời có gắt
Ta vẫn đứng đây — vặn ga hết cỡ, bay!`,
  },
  {
    slug: 'vong-tua-may',
    title: 'Vòng Tua Máy',
    titleGloss: 'Engine Revs (RPM)',
    genre: 'EDM / Electro',
    moodTags: ['Năng lượng cao', 'Kịch tính', 'Bắt tai'],
    bpm: 128,
    durationSeconds: 161,
    concept:
      'Bản EDM lấy tiếng nẹt pô và vòng tua máy làm nhạc cụ — drop đúng lúc động cơ gầm lên.',
    description:
      'Build-up căng, drop mạnh, sound design từ âm thanh động cơ thật. Sinh ra để làm nền cho reels và clip tăng tốc.',
    campaignFit:
      'Chuẩn “viral” cho short-video và vòng thử thách cộng đồng. Dễ cắt ghép theo nhịp, hợp trend mạng xã hội.',
    lyrics: `(Hô) Sẵn sàng chưa? — Nổ máy!
Đếm ngược ba, hai, một... vào ga

Tim đập theo vòng tua
Càng lên cao, càng bốc lửa
Thả phanh ra, đường mở ra
Cả thành phố hoá đường đua

[Drop]
Rev — rev — nẹt pô lên trời
Rev — rev — cả garage bốc hơi
Vòng tua máy, chạm vạch đỏ rồi
Castrol đổ đầy — bay đi thôi!`,
  },
  {
    slug: 'ban-tay-lam-dau',
    title: 'Bàn Tay Lấm Dầu',
    titleGloss: 'Oil-Stained Hands',
    genre: 'Acoustic ballad',
    moodTags: ['Sâu lắng', 'Tự hào', 'Chậm rãi'],
    bpm: 72,
    durationSeconds: 227,
    concept:
      'Ballad mộc kể về người cha thợ máy và đôi bàn tay lấm dầu đã nuôi cả gia đình.',
    description:
      'Guitar thùng và giọng hát mộc mạc, chạm cảm xúc. Câu chuyện về sự tận tuỵ đằng sau mỗi chiếc xe lăn bánh.',
    campaignFit:
      'Dành cho phần kể chuyện “người hùng đời thường” và video tôn vinh thợ lâu năm. Tạo chiều sâu cảm xúc cho chiến dịch.',
    lyrics: `Bàn tay cha lấm dầu bao năm tháng
Chai sạn rồi vẫn dịu dàng như xưa
Từng chiếc xe cha đưa về lành lặn
Là bữa cơm, là sách vở con thơ

Con từng ngại đôi tay cha vết bẩn
Lớn lên rồi con mới hiểu ra
Vết dầu kia là huân chương thầm lặng
Của một đời cha lặng lẽ đi qua

[Điệp khúc]
Cảm ơn bàn tay lấm dầu
Đã giữ cho bánh xe đời con quay đều
Dẫu chẳng nói một lời thương yêu
Con hiểu hết — trong từng vòng quay chiều`,
  },
  {
    slug: 'no-may-len',
    title: 'Nổ Máy Lên',
    titleGloss: 'Start the Engine',
    genre: 'V-pop / Funk',
    moodTags: ['Vui tươi', 'Bắt tai', 'Nhảy được'],
    bpm: 108,
    durationSeconds: 192,
    concept:
      'Ca khúc V-pop funk tươi sáng, dễ hát theo — bài “anthem” chính thức, ai nghe cũng muốn nhún nhảy.',
    description:
      'Groove funk, bass nảy và điệp khúc gây nghiện. Bản đại chúng nhất, gắn kết cả cộng đồng thợ và người yêu xe.',
    campaignFit:
      'Bài hát chủ đề để phủ rộng: quảng bá chiến dịch, nhạc hiệu và hook chung cho mọi video dự thi.',
    lyrics: `Này bạn ơi, sáng nay trời đẹp ghê
Dắt xe ra, ghé qua chỗ tôi nè
Kêu lạch cạch? Để tôi nghe thử xem
Vài phút thôi là êm ru như mèo kêu

Cuộc sống mà, đôi khi hơi trục trặc
Như cái xe, siết lại là chạy ngon
Đừng lo âu, cười lên cho bớt nặng
Nổ máy lên, mình đi tiếp nghe con!

[Điệp khúc]
Nổ máy lên, lên, lên nào
Cả con đường vẫy chào
Castrol đổ vào, tim mình rộn ràng
Nổ máy lên — mình đi khắp thế gian!`,
  },
];

export function formatDuration(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = Math.round(totalSeconds % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}
