let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `╠═〘 PEMBAYARAN 〙 ═
╠═ Untuk Pembayaran Via Pulsa +5k
╠➥ Cht Owner:wa.me/6285759662798
║
╠═〘 Fitur 〙 ═
║
╠➥ *FITUR WELCOME*
║    *FITUR STIKER*
╠➥ *FITUR ADMIN*
║    *KICK ORANG*
║    *JADIIN ADMIN*
╠➥ *FITUR ISLAM*
║   *QURAN*
║   *CEK JADWAL SHALAT*
╠➥ *INTERNET*
║   *BRAINLY*
║   *GOOGLE*
╠➥ *DAN 200 LEBIH*
║   *FITUR LAINNYA*
║ 
╠═ ©2021 Rpg wabot-aq
╠═ Scrip original by Nurutomo
╠═〘 α r α Ᏼo͢Ꭲ✿ 〙 ═
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Sewa Bot*', 'status@broadcast') 
}
handler.help = ['viapulsa']
handler.tags = ['info']
handler.command = /^viapulsa$/i

module.exports = handler
