exports.donasi = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagram, telegram, youtube, kapanbotaktif, grupch1, grupch2) => {
	return `{ *MENU DONASI ${BotName}* }
  
  
TERIMA KASIH
*${id.split("@s.whatsapp.net")[0]}*
TELAH MEMBUKA MENU DONASI



🗓*${tampilTanggal}*
⏰*${tampilWaktu}*
(Waktu Server)

KALIAN BISA DONASI MENGGUNAKAN

🛡 *PULSA*: 085878573894
🛡 *OVO*: 081297285516
🛡 *DANA* : 081297285516


⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇
FOLLOW INSTAGRAM SAYA
${instagram}

TELEGRAM : ${telegram}

`
}
