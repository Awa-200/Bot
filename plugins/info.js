let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠══〘 jani 〙BOT  ═
╠➥  Made in javascript via NodeJs
║
╠➥ wa.me/+94762941448
║
╠═〘 Thanks To 〙 ═
╠➥ jani
╠➥ ™ jani
╠➥ ❤️𝕵𝖚𝖘𝖙 𝕰𝖓𝖏𝖔𝔜 ℑ𝔱❤️
║
╠══〘 jani 〙BOT═says
╠➥   MAKE GROUP ADMIN 
╠➥   TURN ON YOUR DATA
╠➥   CONTACT : wa.me//+94762941448
║
║>Request? wa.me//+942941448
║
╠══〘 jani 〙BOT  ═
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
